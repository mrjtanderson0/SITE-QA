const C="siteqa-v3";
const SHELL=["./","./index.html","./manifest.webmanifest"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const req=e.request; if(req.method!=="GET")return;
  e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{
    const copy=res.clone(); caches.open(C).then(c=>c.put(req,copy)).catch(()=>{}); return res;
  }).catch(()=>caches.match("./index.html"))));
});