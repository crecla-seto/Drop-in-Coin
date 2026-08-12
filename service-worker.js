
Service worker · JS
// 最小限のService Worker
// 今は特にオフラインキャッシュはせず、PWAとしての「インストール可能」条件を満たすためだけに用意しています。
 
self.addEventListener('install', function (event) {
  // ここでは自動的に skipWaiting() を呼ばない。
  // 新しいバージョンは一旦「待機中(waiting)」の状態のままにしておき、
  // index.html側の更新通知モーダルで「今すぐ更新する」ボタンが押されたときだけ
  // 有効化されるようにする（下のmessageイベントを参照）。
});
 
self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});
 
self.addEventListener('fetch', function (event) {
  // 何もせず、通常通りネットワークから取得する
});
 
// index.html側から送られてくる「SKIP_WAITING」メッセージを受け取ったら、
// 待機中の新しいバージョンをすぐに有効化する
self.addEventListener('message', function (event) {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
 
