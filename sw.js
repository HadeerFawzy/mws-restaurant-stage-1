// resource help : https://developers.google.com/web/fundamentals/codelabs/offline/
// resource help : https://jakearchibald.com/2014/offline-cookbook/


// Static cache name 
var staticCacheName = 'hh-cache-v1';

// Cache static assets on install 
self.addEventListener('install', e => {
  const timeStamp = Date.now();
  e.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll([
        '/',
        `/index.html?timestamp=${timeStamp}`,
        `/restaurant.html?timestamp=${timeStamp}`,
        `/js/dbhelper.js?timestamp=${timeStamp}`,
        `/js/main.js?timestamp=${timeStamp}`,
        `/js/restaurant_info.js?timestamp=${timeStamp}`,
        `/css/styles.css?timestamp=${timeStamp}`,
        `/css/index-custom-styles.css?timestamp=${timeStamp}`,
        `/css/restaurant-custom-styles.css?timestamp=${timeStamp}`,
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg'
      ]);
    }).catch(err => console.log('failed to cache', err))
  );
});
