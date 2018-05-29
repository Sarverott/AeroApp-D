const {app} = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs')
const sfPack = require("./core/standard-functions.js")
const windowMgr = require("./core/window-mgr.js")

app.on('ready', function(){
		windowMgr.mainWindow.init();
		sfPack.setMyICP();
})
app.on('window-all-closed', function(){
	if (process.platform !== 'darwin') {
		app.quit()
	}
})
app.on('activate', function(){
	if (win === null) {
		createWindow();
	}
})
