const staticAssets = [
    './',
    './dist/style.css',
    './app.js',
    'https://fonts.googleapis.com/css?family=Overpass:400,700'
];

self.addEventListener('install', async event => {
    console.log('installed');
    const cache = await caches.open('app-static');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
   const req = event.request;
   event.respondWith(cacheFirst(req))
});


async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}