'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8ed561297254cacdc0d7ea4077899247",
".git/config": "c9319a79a1789f7d773ba12e3738e0bd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d2b447ece10a9340dc809ea9be88a13a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b191b3cfc0f86dd4dd9e24082c894458",
".git/logs/refs/heads/main": "4dd8a97f112b1eb42e35ecf35cee1e04",
".git/logs/refs/remotes/origin/main": "64e8d8cf6f17b6eb6b956dab937ee2ce",
".git/objects/0a/76d618224cda2f1a26de495c321350ab3f8be5": "d8b99a3d391faef631b72a2a3979bf8c",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/18/842e0786cfc9ee9da50a275077f43a0488854a": "19d204e629afdfbb8cdfe733ee8510a8",
".git/objects/1e/4bbdbf04cc93f483c8e38293f3840c5c696345": "dce2a05054f27b7fa61cf8ad3ecd46e2",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/01c8772e4f3a19733bbf72bc372f1019b28d7e": "52cd4cd5c4d17e7618498af520b0730b",
".git/objects/32/4e1ab358a6cef5ce6cd4bcbacf85fed08dd4c0": "f7cde96743d06f0f5c67f6ccfb0dc48f",
".git/objects/38/5b3c6daa33cbb607b67758966074124fa58a1e": "16b06fe31e68835fc5bf8989b9c6cd4d",
".git/objects/39/c1fe119e636f864b333b82138d425d4a3f691f": "1712c229ad77913c474dc0b0df2bbaec",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/3c/774cff99da2e749e42e9fc0977ca8f8f6c27b5": "64d94457c80a5d7be1370c758c3dbf7b",
".git/objects/3f/be1eb37172aa60023120a085243662b4cfe18c": "ead5b611da1f36e89eee7a3dc1925fc7",
".git/objects/43/da14d84ecb949ca5f5e8ecca3a514aa7fe1c7d": "d970b955bbe605c4f81533fde279992d",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5a/e277c68f5b24486cb7699ab61a9732a41a4275": "58f4d0ae2ae4aa0d2cf07531041d19d2",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/65/308b88c5da182e68af416e485069b1d24af867": "06f7bef0a33f1a36dde705ed71f01d72",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6d/15206fbcc2be814281ced5faa3f946ffd0b6a0": "db1c9f5d7789133bd93656e7204b1a78",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/71/59b50169cb95efd7eea37b61cce4cbe368c227": "177cd4792cc27450288383040fbb1967",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/74/65f2e463a5ada40aa57f84b801853ae8ce5f9c": "f518de85f9026609bde02e3d0c8a9131",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/0bc34274228382ab121bf686addb4228731b50": "750118f76d2b6f43099ce5e055a2b247",
".git/objects/8c/c32611d117fe1d6d5451043febdf5813adfd78": "359aabc9375d0f630a1bee35f4bc31a1",
".git/objects/96/20431e32e01cddecf4450f6bf14e12fc62a123": "d2bab67b3563a91a89278088cf845279",
".git/objects/9a/685d45fe89a451c759cfaac7cf71cabc18fd11": "350c90fa57b1f679336ebb9ae8f72a58",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/501817c25c3147cefffc2798faca4935881066": "43c2309d658bc7ae3c054066caeb8ce5",
".git/objects/b0/0d425db37da98ed008a558a76d9ba36bf9c76f": "6db041ed9d84f0e894056e208047145b",
".git/objects/b3/1f85c5319a2afa9ad7c411cc463da45eb4068c": "512474829c0c3e786e6f71d42f2ac1ef",
".git/objects/b3/595098e2fc94ec0e686ba5b1d0d8356b114cab": "519ba1410108f30670b533bb5e51f29d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d3/74cc1f26468e870059417b85f0f581749ffd68": "dd2cbfecf65991160b51db5c039efd85",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/79c4a0451b34516ff8dd0c69fecb2dcb1f00cd": "629ad3bc037da0935ededfe72d35ed59",
".git/objects/da/b3576740f1fe09fdc135bf8643df09bd5b964a": "fcb15e6d07a101b779c4820b3eb3eacf",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/307e72c5e7bced5d36c776d0986bf71b605f15": "e493f8bfd12abe75c70dc4782e5beae0",
".git/objects/e8/06e54c0bcfee6797bbab3cb7072bfe2a59347c": "c9282914472e73b265553e48c7f411ab",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/83216e8a6525020a35c1a01fec57bae9fb74bb": "b39a26f46c1e9c7b4d4008a4fa84c505",
".git/objects/f6/322722b80fe1083f415dbdeb83cb8f71aab8b9": "d44fa95fb9f271d962f4cea8b54b1560",
".git/objects/f7/fccb9b4bad18dd4368ca6192cf6b64f6450bc3": "95850b1c0161471625efc277b52bef4e",
".git/objects/f8/e61893da0f95bb3df1990fd123af5202b322ee": "2c73b1a8ccb344b95912a64df27c13d6",
".git/objects/fd/b22f98024a3c7eb674389ed104a5eafad61b6f": "1f494b08ee088e1c04415e471c2f7279",
".git/objects/fe/2ee0d51fc042197f3cbfad640a3e32eaf8ae81": "668b28d8314375d374749757a47b332e",
".git/refs/heads/main": "76917466e214c015b4ab8185270f8b1e",
".git/refs/remotes/origin/main": "76917466e214c015b4ab8185270f8b1e",
"assets/AssetManifest.json": "30f3f9f9112b5383531b00996722a373",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/images/logo.jpg": "d3c6f64fb9e9ec2a573f4deb9f4e5fa1",
"assets/assets/images/logo2.png": "1eff8d913cd7aa7ae9e59de795e50b37",
"assets/assets/images/youtube-logo.png": "66aaae995ac994fd930ea881a8d5f6fd",
"assets/FontManifest.json": "7a07aeda990194df7439939298f5c212",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "95f795b5f6eeff19bf1751e318fe0e1c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f067930a6308509521a31b56e1beacbe",
"/": "f067930a6308509521a31b56e1beacbe",
"main.dart.js": "2a02b9a558d70a01e06bca732e8664ac",
"manifest.json": "c5719a52d4e39aaf725b75f7b4e86a12",
"version.json": "ba4b5df43d19d68ecd00d6c51d64c1e5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
