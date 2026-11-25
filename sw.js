// Service worker minimal : il permet à Chrome et Edge de proposer l'installation de l'appli.
// Aucune mise en cache : l'appli demande toujours la dernière version et exige une connexion (pas de mode hors connexion).
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate')e.respondWith(fetch(e.request))});
