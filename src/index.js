console.log(async () => {
  const module = await import("electron-updater");
  const autoUpdater =
    module.autoUpdater ||
    // @ts-expect-error Hotfix for https://github.com/electron-userland/electron-builder/issues/7338
    module.default.autoUpdater;
  return autoUpdater.checkForUpdatesAndNotify();
});
