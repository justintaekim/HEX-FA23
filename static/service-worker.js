self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for (let registration of registrations) {
      registration.unregister();
    } 
  });
  
  self.clients.matchAll({type: 'window'}).then(windowClients => {
    windowClients.forEach(windowClient => {
      windowClient.navigate(windowClient.url);
    });
  });
});

