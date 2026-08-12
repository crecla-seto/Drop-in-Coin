// 最小限のService Worker
// 今は特にオフラインキャッシュはせず、PWAとしての「インストール可能」条件を満たすためだけに用意しています。

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  // 何もせず、通常通りネットワークから取得する
});
