const C="siteqa-v4";
const SHELL=["./","./index.html","./manifest.webmanifest"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const req=e.request; if(req.method!=="GET") return;
  const url=new URL(req.url);
  const shell = req.mode==="navigate" || url.pathname.endsWith("/") || url.pathname.endsWith("/index.html");
  if(shell){
    e.respondWith(fetch(req).then(res=>{const c=res.clone();caches.open(C).then(ca=>ca.put(req,c)).catch(()=>{});return res;}).catch(()=>caches.match(req).then(m=>m||caches.match("./index.html"))));
  } else {
    e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{const c=res.clone();caches.open(C).then(ca=>ca.put(req,c)).catch(()=>{});return res;})));
  }
});