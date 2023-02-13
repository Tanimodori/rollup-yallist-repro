console.log(async () => {
  const module = await import("electron-updater");
  return module;
});
