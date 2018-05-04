const cacheVersionName = 'staticAssets';

const cacheFiles = [
  '/',
  '/index.html',
  '/dist/style.css',
  '/dist/images/notif.svg',
  '/app.js',
  'https://fonts.googleapis.com/css?family=Karla:400,700'
];


self.addEventListener('install', function(event) {

  event.waitUntil(
    caches.open(cacheVersionName)
      .then(function(cache) {
        return cache.addAll(cacheFiles)
      })
  )
  
});

self.addEventListener('activate', function() {
  console.log('SW Activated!')
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) return res;

        return fetch(event.request);
      })
  );
});