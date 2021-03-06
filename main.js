const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');

let win;
function createWindow() {
    win = new BrowserWindow({
    });

    win.setMenu(null);

    win.loadURL(path.join(__dirname, 'public/index.html'));

    // win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
