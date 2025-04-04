const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 1280,
    minHeight: 720,
    maxWidth: 1280,
    maxHeight: 720,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: '1.png',
    autoHideMenuBar: true, // Auto-hide the menu bar
    menu: false,
  });

  win.loadFile('index.html');

  // Handle fullscreen event
  win.on('enter-full-screen', () => {
    win.setSize(1280, 720);
  });

  // Handle exit fullscreen event
  win.on('leave-full-screen', () => {
    win.setSize(1280, 720);
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
