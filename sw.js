// Service worker minimal : il permet à Chrome et Edge de proposer l'installation de l'appli.
// Aucune mise en cache : l'appli demande toujours la dernière version et exige une connexion (pas de mode hors connexion).
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
// À chaque ouverture, on revalide la page auprès du serveur (sans passer par le cache du navigateur) pour que l'appli installée soit à jour.
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate')e.respondWith(fetch(e.request.url,{cache:'no-cache'}).catch(()=>fetch(e.request)))});
