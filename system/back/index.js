const {app, BrowserWindow, dialog, ipcMain, shell, Menu, Tray} = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs')
const sfPack = require("./standardFunctions.js")

let win
function saveProgress(content){
	try { fs.writeFileSync('cache.json', content, 'utf-8'); }
	catch(e) { dialog.showErrorBox('blad zapisu', 'wystapil problem z zapisem: '+e.message); }
}
function createWindow () {
	win = new BrowserWindow({
		width: 800,
		height: 600,
		frame: false,
		icon: path.join(__dirname, 'resources/icons/32x32.png')
	})
	// ############## debug ##############
	win.webContents.openDevTools();
	// ############## debug ##############
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}))
	win.on('closed', () => {
		win = null
	})
}
app.on('ready', function(){
		createWindow();

})
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})
app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
})
