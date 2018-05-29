const path = require('path')
const url = require('url')

const {app, BrowserWindow, dialog, ipcMain, shell, Menu, Tray} = require('electron')

var windowMgrObject={
  mainWindow:{
    reference:null,
    init:function(){
    	this.reference=new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(path.dirname(path.dirname(path.dirname(__dirname))), 'resources/icons/main_32x32.png')
      });
    	// ############## debug ##############
    	this.reference.webContents.openDevTools();
    	// ############## debug ##############
    	this.reference.loadURL(url.format({
    		pathname: (path.join(path.dirname(path.dirname(__dirname)), 'front/html/index.html')).replace(/\\/gi, "/"),
    		protocol: 'file:',
    		slashes: true
    	}))
    	this.reference.on('closed', function(){
    		this.reference = null
    	})
    }
  }
};

module.exports=windowMgrObject;
