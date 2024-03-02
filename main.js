const {app, BrowserWindow} = require('electron')
const { url } = require('node:url')
const path = require('path')


function createMainWin(){
    const mainWin = new BrowserWindow({
        title: 'sample app',
        width: 800,
        height: 800,

    })

    // const startUrl = url.format(
    //     {
    //         pathname: path.join(__dirname, 'index.html'),
    //         protocol: 'file'
    //     }
    // )

    // ** RESOLVE WHY THIS ISNT WORKING 
    mainWin.loadURL('C:/Users/nadua/OneDrive/Desktop/webdev/test-el/index.html')
}


app.whenReady().then(createMainWin)