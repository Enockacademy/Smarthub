const CACHE_NAME = "smart-hub-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth-compat.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
