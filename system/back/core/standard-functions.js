const {app, BrowserWindow, dialog, ipcMain, shell, Menu, Tray} = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs')
const ERROR_CODES = {
	loadFile:3,
	loadJson:4
}
var gui;

function loadFile(filePath){
	try{
		return fs.readFileSync(path.join(__dirname, filePath), 'utf-8');
	}
	catch(err){
		sendErrorPrompt(ERROR_CODES.loadFile, {comment:"file_not_exist",path:fs.readFileSync(path.join(__dirname, filePath), 'utf-8'),details:err});
		return '<!-- error -->';
	}
}
function sendErrorPrompt(errorCode, detailsObject){
	switch(errorCode){
    case ERROR_CODES.loadFile:
			raportToGui("console-error", {title:"load-file", data:detailsObject});
    break;
    case ERROR_CODES.loadJson:
			raportToGui("console-error", {title:"load-json", data:detailsObject});
    break;
  }
}
function loadJson(jsonFilePath){
	var text=loadFile(jsonFilePath);
	try{
		if(text=='<!-- error -->'){
			sendErrorPrompt(ERROR_CODES.loadJson, {comment:"bypassing_nonexistion", content:"", details:err});
			return null;
		}else{
			var data=JSON.parse(text);
			return data;
		}
	}catch(err){
		sendErrorPrompt(ERROR_CODES.loadJson, {comment:"non_json_file", content:text, details:err});
		return null;
	}
}
function useSheme(shemePath, fillObject){
	var sheme=loadFile(shemePath);
	for(i in fillObject){
		var res = sheme.match(new RegExp("<!-- "+i+" -->","g"));
    for(var j in res){
			sheme=sheme.replace("<!-- "+i+" -->", fillObject[i]);
		}
	}
	return sheme;
}
function raportToGui(type, err){
	switch(type){
		case "console-error":
			gui.sender.send("throw-error", err);
		break;
		case "console-log":
			gui.sender.send("", err)
		break;
	}
}
function standardIPCListenersSet(){
  ipcMain.on('portfolio', function(event){
  	shell.openExternal("http://sarverott.tumblr.com/rodedown");
  });
	ipcMain.on('use-sheme', function(event, shemePath, fillObject){
		try{
			event.returnValue=useSheme(shemePath, fillObject);
		}catch(e){
			event.returnValue="";
			raportToGui(e);
		}
	});
  ipcMain.on('load-json', function(event, requestedPeth){
		event.returnValue=loadJson(requestedPeth);
	});
  ipcMain.on('load-file', function(event, requestedPeth){
		event.returnValue=loadFile(requestedPeth);
	});
  ipcMain.on('send-error-prompt', function(event, errorCode, detailsObject){
		event.returnValue=sendErrorPrompt(errorCode, detailsObject);
	});
  ipcMain.on('set-gui', function(event){
    gui=event;
  });

}
exports.sendToFrontend=function(listenerAlias, data){
  gui.sender.send(listenerAlias, data);
}
exports.setMyICP=function(){
  standardIPCListenersSet();
}
exports.loadFile=function(requestedPeth){
  loadFile(requestedPeth);
};
exports.loadJson=function(requestedPeth){
  loadJson(requestedPeth);
};
exports.sendErrorPrompt=function(errorCode, detailsObject){
  sendErrorPrompt(errorCode, detailsObject);
}
