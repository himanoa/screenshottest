const electron = require('electron')
const app = electron.app

let mainWindow = null

app.on('window-all-closed', function () {
  app.quit()
})

app.on('ready', function () {
  const size = electron.screen.getPrimaryDisplay().size
  const displayInfo = (electron.screen.getPrimaryDisplay())

  mainWindow = new electron.BrowserWindow({
    x: 0,
    y: 0,
    width: size.width * displayInfo.scaleFactor,
    height: size.height * displayInfo.scaleFactor,
    frame: false,
    show: true,
    transparent: true,
    resizable: true,
    alwaysOnTop: true,
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.on('closed', function () {
    mainWindow = null
  })
})
