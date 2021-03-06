import {app, BrowserWindow, Menu, globalShortcut} from 'electron'
import '../renderer/store'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

function createWindow() {
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        height: 800,
        useContentSize: true,
        width: 1420,
        webPreferences: {
            nodeIntegration: true
        }
    })
    const template = [
        {
            label: 'Edit',
            submenu: [
                {role: 'editMenu'},
                {role: 'windowMenu'},
                {role: 'togglefullscreen'},
                {role: 'quit'},
                {
                    label: 'find',
                    accelerator: process.platform === 'darwin' ? 'Cmd+F' : 'Alt+F',
                    click: () => {
                        console.log('Electron rocks!')
                    }
                }
            ]
        },
        {
            label: 'Feature',
            submenu: [
                {
                    label: 'json print',
                    click: () => {
                        mainWindow.webContents.send('href', 'json-print');
                    }
                },
                {
                    label: 'c operator and priority print',
                    click: () => {
                        mainWindow.webContents.send('href', 'operate-priority-print');
                    }
                },
                {
                    label: 'ascii code print',
                    click: () => {
                        mainWindow.webContents.send('href', 'code-ascii');
                    }
                },
                {
                    label: 'url decode | encode',
                    click: () => {
                        mainWindow.webContents.send('href', 'url-print');
                    }
                }

            ]
        },
    ]

    const menu = Menu.buildFromTemplate(template)
    // menu.append(new MenuItem({
    //     label: 'find u',
    //     submenu: []
    // }))

    Menu.setApplicationMenu(menu)

    mainWindow.loadURL(winURL)

    mainWindow.on('closed', () => {
        mainWindow = null
    })

    mainWindow.on('focus', () => {
        globalShortcut.register('CommandOrControl+F', function () {
            if (mainWindow && mainWindow.webContents) {
                mainWindow.webContents.send('on-find', '')
            }
        })
    })
    mainWindow.on('blur', () => {
        globalShortcut.unregister('CommandOrControl+F')
    })


}


app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
    globalShortcut.unregister('CommandOrControl+F')
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
