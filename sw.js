// Guarda o app no celular pra funcionar sem internet.
const VERSAO = 'miaula-v7';
const ARQUIVOS = [
  './', 'index.html', 'estilo.css', 'arte.js', 'nucleo.js', 'telas.js', 'manifest.json',
  'conteudo/materias.js', 'conteudo/extras.js',
  'conteudo/aulas-mat.js', 'conteudo/aulas-por.js', 'conteudo/aulas-lit.js', 'conteudo/aulas-fis.js', 'conteudo/aulas-qui.js',
  'conteudo/aulas-bio.js', 'conteudo/aulas-his.js', 'conteudo/aulas-geo.js', 'conteudo/aulas-fil-soc.js', 'conteudo/aulas-ing.js', 'conteudo/jogo.js',
  'fontes/dmsans.woff2', 'fontes/playfair.woff2', 'fontes/playfair-italico.woff2',
  'icones/icone-192.png', 'icones/icone-512.png', 'icones/icone-mascara-512.png', 'icones/icone-180.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSAO).then(function (c) { return c.addAll(ARQUIVOS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== VERSAO; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  // Com internet: pega a versão nova (e guarda). Sem internet ou demorando: usa a guardada.
  const guardada = function () { return caches.match(req, { ignoreSearch: true }); };
  const rede = (req.mode === 'navigate' ? fetch(req) : fetch(req, { cache: 'no-cache' })).then(function (resp) {
    if (resp && resp.ok) { const copia = resp.clone(); caches.open(VERSAO).then(function (c) { c.put(req, copia); }); }
    return resp;
  });
  const limite = new Promise(function (ok) { setTimeout(ok, 4000); }).then(guardada);
  e.respondWith(Promise.race([rede, limite]).then(function (r) { return r || rede; }).catch(function () {
    return guardada().then(function (r) { return r || rede; });
  }));
});
