self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.registration.unregister();

  self.clients.matchAll({type: 'window'}).then(windowClients => {
    windowClients.forEach(windowClient => {
      windowClient.navigate(windowClient.url);
    });
  });
});

