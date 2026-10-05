'use strict';
// Núcleo do Miaula: dados, navegação, sons, Poponi, Pãozinho, calculadora e tour.

const PARAMS = new URLSearchParams(location.search);
const DEMO = PARAMS.has('demo');
const CHAVE = DEMO ? 'miaula:demo' : 'miaula:v1';
const VERSAO_APP = '1.3';
const LIM = [1, 3, 7, 15, 30];
const NOMES_FASE = ['Nenenzinha', 'Filhotinha', 'Gatinha', 'Gata', 'Gatona'];
const INTERVALOS = [0, 1, 3, 7, 14, 30];
const DIAS_SEM = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const DIAS_CURTO = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const ico = ARTE.icone;
const INICIO_SESSAO = Date.now();

function $(s) { return document.querySelector(s); }
function pad(n) { return (n < 10 ? '0' : '') + n; }
function hojeStr(d) { d = d || new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
function dataDe(s) { const a = s.split('-').map(Number); return new Date(a[0], a[1] - 1, a[2]); }
function somaDias(s, n) { const d = dataDe(s); d.setDate(d.getDate() + n); return hojeStr(d); }
function diasEntre(a, b) { return Math.round((dataDe(b) - dataDe(a)) / 86400000); }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
function rico(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); }
function sorteia(a) { return a[Math.floor(Math.random() * a.length)]; }
function embaralha(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function dataLonga(d) { return DIAS_SEM[d.getDay()] + ', ' + d.getDate() + ' de ' + MESES[d.getMonth()]; }
function dataCurta(s) { const d = dataDe(s); return d.getDate() + '/' + pad(d.getMonth() + 1); }
function plural(n, um, varios) { return n + ' ' + (n === 1 ? um : varios); }

// ---------- Conteúdo ----------
const MAT_POR_ID = {};
const TOP_POR_ID = {};
const AULAS_EXTRA = window.AULAS || {};
MATERIAS.forEach(function (m) {
  MAT_POR_ID[m.id] = m;
  [1, 2, 3].forEach(function (a) {
    (m.anos[a] || []).forEach(function (t) {
      if (AULAS_EXTRA[t.id]) Object.assign(t, AULAS_EXTRA[t.id]);
      TOP_POR_ID[t.id] = { t: t, m: m, ano: a };
    });
  });
});
function temAula(t) { return !!(t && t.resumo); }
function aulasDe(m, ano) { return (m.anos[ano] || []).filter(temAula); }
function todasAulasDe(m) { return [1, 2, 3].reduce(function (l, a) { return l.concat(aulasDe(m, a)); }, []); }

// ---------- Dados ----------
function dbPadrao() {
  return {
    v: 1, nome: 'Julia', tourVisto: false,
    ajustes: { sons: true, animacoes: true, pao: true, tema: 'auto' },
    ano: 1, velFala: 1,
    prog: {}, cartoes: {}, resp: [], seg: {}, dias: [],
    poponi: { dias: 0, ultimo: null, aviso: null, roupa: null, recorde: 0 },
    conquistas: {}, erros: {}, errosLimpos: 0, cartoesVistos: 0, simulados: [],
    plano: { 0: ['rev'], 1: ['mat', 'por'], 2: ['bio', 'his'], 3: ['fis', 'geo'], 4: ['qui', 'lit'], 5: ['ing', 'fil', 'soc'], 6: ['red', 'rev'] },
    hoje: { data: null, tarefas: [] },
    redacoes: [], pensamentos: [],
    pao: { lado: 'dir', y: 0.62, ultima: 0, usadas: {}, saudou: null },
    fraseDia: { chave: null, txt: '' },
    respiracoes: 0, arquivos: [], recado: null
  };
}
function carregar() {
  try {
    const t = localStorage.getItem(CHAVE);
    if (t) {
      const o = JSON.parse(t), p = dbPadrao();
      const r = Object.assign(p, o, {
        ajustes: Object.assign(p.ajustes, o.ajustes || {}),
        pao: Object.assign(p.pao, o.pao || {}),
        poponi: Object.assign(p.poponi, o.poponi || {}),
        hoje: o.hoje || p.hoje
      });
      r.poponi.recorde = Math.max(r.poponi.recorde || 0, r.poponi.dias || 0);
      return r;
    }
  } catch (e) { /* começa do zero */ }
  return dbPadrao();
}
let db = carregar();
function salvar() {
  try { localStorage.setItem(CHAVE, JSON.stringify(db)); }
  catch (e) { toast('Não consegui salvar. O celular está sem espaço?'); }
}
try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { }

// ---------- Avisos rápidos ----------
function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast'; t.setAttribute('role', 'status'); t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(function () { t.remove(); }, 2600);
}

// ---------- Sons ----------
let audioCtx = null;
const SONS = {
  pop: [{ de: 420, ate: 1100, em: 0, dur: 0.12, vol: 0.26 }, { de: 1600, ate: 2400, em: 0.02, dur: 0.08, vol: 0.07, tipo: 'triangle' }],
  acerto: [{ de: 660, ate: 880, em: 0, dur: 0.12, vol: 0.14 }, { de: 880, ate: 1320, em: 0.1, dur: 0.18, vol: 0.14 }],
  erro: [{ de: 320, ate: 230, em: 0, dur: 0.24, vol: 0.1, tipo: 'triangle' }],
  virar: [{ de: 500, ate: 950, em: 0, dur: 0.09, vol: 0.05, tipo: 'triangle' }],
  ok: [{ de: 700, ate: 1000, em: 0, dur: 0.1, vol: 0.09 }],
  feito: [{ de: 523, ate: 523, em: 0, dur: 0.14, vol: 0.12 }, { de: 659, ate: 659, em: 0.12, dur: 0.14, vol: 0.12 }, { de: 784, ate: 1046, em: 0.24, dur: 0.24, vol: 0.13 }],
  cresce: [{ de: 520, ate: 780, em: 0, dur: 0.14, vol: 0.18 }, { de: 780, ate: 1180, em: 0.12, dur: 0.2, vol: 0.18 }, { de: 1600, ate: 2400, em: 0.16, dur: 0.1, vol: 0.06, tipo: 'triangle' }],
  encolhe: [{ de: 700, ate: 420, em: 0, dur: 0.22, vol: 0.12 }, { de: 520, ate: 330, em: 0.16, dur: 0.24, vol: 0.09 }],
  sino: [{ de: 880, ate: 880, em: 0, dur: 0.6, vol: 0.07 }]
};
function som(nome) {
  if (!db.ajustes.sons) return;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    audioCtx = audioCtx || new AC();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const ac = audioCtx, t0 = ac.currentTime;
    (SONS[nome] || []).forEach(function (n) {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = n.tipo || 'sine';
      o.frequency.setValueAtTime(n.de, t0 + n.em);
      o.frequency.exponentialRampToValueAtTime(n.ate, t0 + n.em + n.dur * 0.7);
      g.gain.setValueAtTime(0.0001, t0 + n.em);
      g.gain.exponentialRampToValueAtTime(n.vol, t0 + n.em + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + n.em + n.dur);
      o.connect(g).connect(ac.destination);
      o.start(t0 + n.em); o.stop(t0 + n.em + n.dur + 0.03);
    });
  } catch (e) { }
}

// ---------- Leitura em voz alta ----------
function textoFalavel(s) {
  return String(s).replace(/\*\*/g, '')
    .replace(/(\d)\/(\d)/g, '$1 sobre $2')
    .replace(/²/g, ' ao quadrado').replace(/³/g, ' ao cubo')
    .replace(/·/g, ' vezes ').replace(/÷/g, ' dividido por ').replace(/−/g, ' menos ')
    .replace(/≠/g, ' diferente de ').replace(/≈/g, ' aproximadamente ').replace(/√/g, ' raiz de ')
    .replace(/Δ/g, ' delta ').replace(/π/g, ' pi ').replace(/ℕ/g, '').replace(/ℤ/g, '').replace(/ℚ/g, '').replace(/ℝ/g, '')
    .replace(/⊂/g, ' está dentro de ').replace(/∪/g, ' união ').replace(/∩/g, ' interseção ')
    .replace(/ˣ/g, ' elevado a x').replace(/ⁿ/g, ' elevado a n').replace(/ᵐ/g, ' elevado a m').replace(/ᵗ/g, ' elevado a t')
    .replace(/₀/g, ' zero').replace(/₁/g, ' um').replace(/₂/g, ' dois').replace(/ₙ/g, ' n').replace(/ₐ/g, ' a');
}
let falando = false;
// Prefere vozes brasileiras mais naturais (Google no celular, "Natural" no Windows).
function melhorVoz(vozes) {
  const br = vozes.filter(function (x) { return /^pt[-_]BR/i.test(x.lang); });
  const lista = br.length ? br : vozes.filter(function (x) { return /^pt/i.test(x.lang); });
  const nota = function (x) { return (/google/i.test(x.name) ? 4 : 0) + (/natural/i.test(x.name) ? 3 : 0) + (/francisca|thalita|maria|luciana/i.test(x.name) ? 1 : 0) + (x.localService ? 0.5 : 0); };
  return lista.sort(function (a, b) { return nota(b) - nota(a); })[0] || null;
}
function falar(txt, aoFim) {
  const s = window.speechSynthesis;
  if (!s || typeof SpeechSynthesisUtterance === 'undefined') { toast('Este celular não consegue ler em voz alta.'); return false; }
  s.cancel();
  const u = new SpeechSynthesisUtterance(textoFalavel(txt));
  u.lang = 'pt-BR'; u.rate = db.velFala || 1;
  const v = melhorVoz(s.getVoices());
  if (v) u.voice = v;
  u.onend = u.onerror = function () { falando = false; if (aoFim) aoFim(); };
  s.speak(u); falando = true;
  return true;
}
function pararFala() { try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) { } falando = false; }

// ---------- Progresso ----------
function progDe(id) { return db.prog[id] || {}; }
function progEditar(id) { return db.prog[id] || (db.prog[id] = {}); }
function pctTopico(id) { const p = progDe(id); return Math.round(((p.resumo ? 1 : 0) + (p.quiz != null ? 1 : 0) + (p.cartoes ? 1 : 0)) / 3 * 100); }
function pctLista(lista) { if (!lista.length) return null; return Math.round(lista.reduce(function (s, t) { return s + pctTopico(t.id); }, 0) / lista.length); }
// n = número da pergunta na aula: as erradas vão pra lista "Meus erros" e saem quando acerta.
function registrarResposta(tid, mid, ok, n) {
  db.resp.push({ d: hojeStr(), t: tid, m: mid, ok: ok ? 1 : 0 });
  if (db.resp.length > 4000) {
    const velhas = db.resp.splice(0, db.resp.length - 4000);
    db.acertosAntigos = (db.acertosAntigos || 0) + velhas.reduce(function (s, x) { return s + x.ok; }, 0);
  }
  if (n == null) return;
  const k = tid + ':' + n;
  if (!ok) db.erros[k] = { n: ((db.erros[k] || {}).n || 0) + 1, d: hojeStr() };
  else if (db.erros[k]) { delete db.erros[k]; db.errosLimpos = (db.errosLimpos || 0) + 1; }
}
function erroInfo(k) {
  const i = k.lastIndexOf(':');
  const T = TOP_POR_ID[k.slice(0, i)], n = +k.slice(i + 1);
  if (!T || !T.t.perguntas || !T.t.perguntas[n]) return null;
  return { P: T.t.perguntas[n], t: T.t, m: T.m, n: n };
}
function listaErros() { return Object.keys(db.erros).filter(erroInfo); }

// ---------- Poponi ----------
function fasePoponi(d) { let f = 0; for (let i = 0; i < LIM.length; i++) if (d >= LIM[i]) f = i; return f; }
function checarPoponi() {
  const p = db.poponi;
  if (!p.ultimo) return;
  const gap = diasEntre(p.ultimo, hojeStr());
  if (gap >= 2) {
    const fa = fasePoponi(p.dias), diasAntes = p.dias;
    for (let k = 0; k < gap - 1 && p.dias > 0; k++) {
      const f = fasePoponi(p.dias);
      p.dias = f > 0 ? LIM[f - 1] : 0;
    }
    p.ultimo = somaDias(hojeStr(), -1);
    if (fasePoponi(p.dias) < fa || (diasAntes > 0 && p.dias === 0)) p.aviso = 'encolheu';
    salvar();
  }
}
// Marca o dia como estudado. Devolve true se foi o primeiro estudo do dia
// (aí quem fala é a Poponi, e a tela não precisa chamar o Pãozinho).
function marcarEstudo() {
  const h = hojeStr();
  if (db.dias.indexOf(h) < 0) db.dias.push(h);
  const p = db.poponi;
  if (p.ultimo !== h) {
    const fa = fasePoponi(p.dias);
    p.dias += 1; p.ultimo = h; p.aviso = null;
    p.recorde = Math.max(p.recorde || 0, p.dias);
    const fd = fasePoponi(p.dias);
    salvar();
    if (fd > fa) setTimeout(function () { festa(fd); }, 800);
    else setTimeout(function () { paoFalar('poponi'); }, 900);
    atualizarMiniPoponi();
    checarConquistas();
    return true;
  }
  salvar();
  checarConquistas();
  return false;
}
function atualizarMiniPoponi() {
  const b = document.querySelector('.poponi-mini');
  if (b) b.innerHTML = miniPoponiHTML();
}
function roupaAtual() { const r = db.poponi.roupa; return r && roupaLiberada(r) ? r : null; }
function miniPoponiHTML() {
  const d = db.poponi.dias;
  return ARTE.poponi(fasePoponi(d), 46, d === 0, roupaAtual()) + '<span>' + (d === 0 ? 'zzz' : plural(d, 'dia', 'dias')) + '</span>';
}
function festa(fase) {
  som('cresce');
  const el = document.createElement('div');
  el.className = 'festa';
  el.innerHTML = '<div class="festa-caixa" role="dialog" aria-label="A Poponi cresceu">' +
    '<div class="cresce">' + ARTE.poponi(fase, 190, false, roupaAtual()) + '</div>' +
    '<h2>A Poponi cresceu!</h2><p>Agora ela é a <b>' + NOMES_FASE[fase] + '</b>. Tudo porque você estudou ' + plural(db.poponi.dias, 'dia', 'dias') + '.</p>' +
    '<button class="btn largo" type="button">Que lindo!</button></div>';
  document.body.appendChild(el);
  el.querySelector('button').addEventListener('click', function () { el.remove(); });
}

// ---------- Conquistas e roupinhas ----------
function contaProg(f) { return Object.keys(db.prog).filter(function (id) { return TOP_POR_ID[id] && f(db.prog[id]); }).length; }
function totalAcertos() { return db.resp.reduce(function (s, x) { return s + x.ok; }, 0) + (db.acertosAntigos || 0); }
function fechouMateria() {
  return MATERIAS.some(function (m) {
    return [1, 2, 3].some(function (a) { const l = aulasDe(m, a); return l.length > 0 && l.every(function (t) { return pctTopico(t.id) === 100; }); });
  });
}
const CONQUISTAS = [
  { id: 'resumo1', nome: 'Primeira leitura', como: 'Terminar um resumo', ico: 'materias', ok: function () { return contaProg(function (p) { return p.resumo; }) >= 1; } },
  { id: 'quiz1', nome: 'Primeiro treino', como: 'Terminar as perguntas de uma aula', ico: 'alvo', ok: function () { return contaProg(function (p) { return p.quiz != null; }) >= 1; } },
  { id: 'perfeito', nome: 'Gabaritou!', como: 'Acertar todas as perguntas de uma aula', ico: 'estrela', ok: function () { return contaProg(function (p) { return p.quiz === 100; }) >= 1; } },
  { id: 'dias3', nome: '3 dias', como: 'A Poponi chegar em 3 dias de estudo', ico: 'coracao', roupa: 'lacinho', ok: function () { return (db.poponi.recorde || 0) >= 3; } },
  { id: 'dias7', nome: '7 dias', como: 'A Poponi chegar em 7 dias de estudo', ico: 'coracao', roupa: 'oculos', ok: function () { return (db.poponi.recorde || 0) >= 7; } },
  { id: 'dias15', nome: '15 dias', como: 'A Poponi chegar em 15 dias de estudo', ico: 'coracao', roupa: 'flores', ok: function () { return (db.poponi.recorde || 0) >= 15; } },
  { id: 'dias30', nome: '30 dias', como: 'A Poponi chegar em 30 dias de estudo', ico: 'coracao', roupa: 'capelo', ok: function () { return (db.poponi.recorde || 0) >= 30; } },
  { id: 'certas50', nome: '50 acertos', como: 'Acertar 50 perguntas', ico: 'check', ok: function () { return totalAcertos() >= 50; } },
  { id: 'certas100', nome: '100 acertos', como: 'Acertar 100 perguntas', ico: 'check', roupa: 'cachecol', ok: function () { return totalAcertos() >= 100; } },
  { id: 'certas500', nome: '500 acertos', como: 'Acertar 500 perguntas', ico: 'check', ok: function () { return totalAcertos() >= 500; } },
  { id: 'aulas10', nome: '10 aulas completas', como: 'Fazer resumo, perguntas e cartões de 10 aulas', ico: 'medalha', ok: function () { return contaProg(function (p) { return p.resumo && p.quiz != null && p.cartoes; }) >= 10; } },
  { id: 'materia', nome: 'Matéria fechada', como: 'Completar todas as aulas de uma matéria num ano', ico: 'estrela', ok: fechouMateria },
  { id: 'cartoes100', nome: '100 cartões', como: 'Passar 100 cartões', ico: 'cartoes', ok: function () { return (db.cartoesVistos || 0) >= 100; } },
  { id: 'redacao', nome: 'Escritora', como: 'Salvar uma redação com 80 palavras ou mais', ico: 'lapis', ok: function () { return db.redacoes.some(function (r) { return (r.texto.trim().match(/\S+/g) || []).length >= 80; }); } },
  { id: 'simulado', nome: 'Primeiro simulado', como: 'Terminar um simulado', ico: 'relogio', ok: function () { return db.simulados.length >= 1; } },
  { id: 'simulado80', nome: 'Mandou no simulado', como: 'Acertar 80% num simulado de 10 perguntas ou mais', ico: 'medalha', ok: function () { return db.simulados.some(function (s) { return s.total >= 10 && s.certas / s.total >= 0.8; }); } },
  { id: 'erros10', nome: 'Aprendeu com os erros', como: 'Acertar 10 perguntas que você tinha errado', ico: 'alvo', ok: function () { return (db.errosLimpos || 0) >= 10; } },
  { id: 'calma', nome: 'Respira fundo', como: 'Fazer 10 respirações na aba Calma', ico: 'calma', ok: function () { return (db.respiracoes || 0) >= 10; } }
];
const ROUPAS_NOMES = { lacinho: 'Lacinho', oculos: 'Óculos', flores: 'Coroa de flores', capelo: 'Chapéu de formatura', cachecol: 'Cachecol' };
function conquistaDaRoupa(r) { return CONQUISTAS.find(function (c) { return c.roupa === r; }); }
function roupaLiberada(r) { const c = conquistaDaRoupa(r); return !!(c && db.conquistas[c.id]); }
let filaConquistas = [], timerConquistas = null;
function checarConquistas(quieto) {
  const novas = CONQUISTAS.filter(function (c) {
    if (db.conquistas[c.id]) return false;
    try { return c.ok(); } catch (e) { return false; }
  });
  if (!novas.length) return [];
  novas.forEach(function (c) { db.conquistas[c.id] = hojeStr(); });
  salvar();
  if (!quieto) {
    filaConquistas = filaConquistas.concat(novas);
    clearTimeout(timerConquistas);
    timerConquistas = setTimeout(mostrarConquistas, 1400);
  }
  return novas;
}
function mostrarConquistas() {
  if (!filaConquistas.length) return;
  // Espera a festa da Poponi, o tour ou a tela de instalar saírem da frente.
  if ($('.festa') || $('.tour')) { timerConquistas = setTimeout(mostrarConquistas, 900); return; }
  const lista = filaConquistas; filaConquistas = [];
  const roupas = lista.filter(function (c) { return c.roupa; });
  som('feito');
  const el = document.createElement('div');
  el.className = 'festa';
  const titulo = lista.length === 1 ? 'Medalha nova!' : plural(lista.length, 'medalha nova', 'medalhas novas') + '!';
  let html = '<div class="festa-caixa" role="dialog" aria-label="' + esc(titulo) + '"><div class="medalhas" style="width:100%;grid-template-columns:repeat(' + Math.min(3, lista.length) + ',minmax(0,1fr))">' +
    lista.slice(0, 6).map(function (c) { return '<div class="medalha" style="background:transparent"><span class="disco cresce">' + ico(c.ico, 26) + '</span><b>' + esc(c.nome) + '</b></div>'; }).join('') + '</div>';
  if (lista.length > 6) html += '<p class="mini">e mais ' + (lista.length - 6) + '...</p>';
  html += '<h2>' + esc(titulo) + '</h2>';
  if (roupas.length) {
    const r = roupas[roupas.length - 1].roupa;
    html += '<div>' + ARTE.poponi(Math.max(1, fasePoponi(db.poponi.dias)), 130, false, r) + '</div><p>A Poponi ganhou ' + (roupas.length > 1 ? 'roupinhas novas' : 'uma roupinha nova') + ': <b>' + roupas.map(function (c) { return ROUPAS_NOMES[c.roupa]; }).join(', ') + '</b>!</p>' +
      '<button class="btn largo" type="button" data-f="vestir" data-r="' + r + '">Vestir agora</button><button class="btn sec largo" type="button" data-f="ok">Depois</button>';
  } else {
    html += '<p>' + esc(lista.length === 1 ? lista[0].como + '. Arrasou!' : 'Você tá colecionando medalhas!') + '</p><button class="btn largo" type="button" data-f="ok">Que legal!</button>';
  }
  el.innerHTML = html + '</div>';
  document.body.appendChild(el);
  el.addEventListener('click', function (e) {
    const b = e.target.closest('[data-f]');
    if (!b) return;
    if (b.dataset.f === 'vestir') {
      db.poponi.roupa = b.dataset.r; salvar();
      atualizarMiniPoponi();
      if (rota.t === 'poponi' || rota.t === 'conquistas') atualizar();
      toast('A Poponi amou!');
    }
    el.remove();
  });
}

// ---------- Plano de hoje ----------
function proximaEtapa(mid) {
  const m = MAT_POR_ID[mid];
  if (!m) return null;
  const anos = [db.ano, 1, 2, 3].filter(function (a, i, l) { return l.indexOf(a) === i; });
  for (let k = 0; k < anos.length; k++) {
    const lista = aulasDe(m, anos[k]);
    for (let i = 0; i < lista.length; i++) {
      const p = progDe(lista[i].id);
      if (!p.resumo) return { tipo: 'resumo', top: lista[i].id };
      if (p.quiz == null) return { tipo: 'perguntas', top: lista[i].id };
      if (!p.cartoes) return { tipo: 'cartoes', top: lista[i].id };
    }
  }
  return null;
}
function gerarHoje() {
  const h = hojeStr();
  if (db.hoje && db.hoje.data === h) return db.hoje.tarefas;
  const mats = db.plano[new Date().getDay()] || [];
  const tarefas = [];
  mats.forEach(function (mid) {
    if (mid === 'rev') { if (cartoesParaHoje().length) tarefas.push({ tipo: 'rev' }); }
    else if (mid === 'red') tarefas.push({ tipo: 'red' });
    else { const pe = proximaEtapa(mid); if (pe) tarefas.push(pe); }
  });
  if (!tarefas.length) {
    const ordem = ['mat', 'por', 'bio', 'his', 'fis', 'qui', 'geo', 'lit', 'ing', 'fil', 'soc'];
    for (let i = 0; i < ordem.length && tarefas.length < 2; i++) { const pe = proximaEtapa(ordem[i]); if (pe) tarefas.push(pe); }
  }
  db.hoje = { data: h, tarefas: tarefas.slice(0, 4) };
  salvar();
  return db.hoje.tarefas;
}
function concluirTarefa(tipo, top) {
  if (!db.hoje || db.hoje.data !== hojeStr()) return;
  const t = db.hoje.tarefas.find(function (x) { return x.tipo === tipo && (x.top || null) === (top || null) && !x.feito; });
  if (t) { t.feito = true; salvar(); }
}

// ---------- Cartões (repetição espaçada) ----------
function cardInfo(id) {
  const i = id.lastIndexOf(':');
  const T = TOP_POR_ID[id.slice(0, i)];
  const n = +id.slice(i + 1);
  if (!T || !T.t.cartoes || !T.t.cartoes[n]) return null;
  return { c: T.t.cartoes[n], t: T.t, m: T.m };
}
function cartoesParaHoje() {
  const h = hojeStr();
  return Object.keys(db.cartoes).filter(function (id) { return db.cartoes[id].prox <= h && cardInfo(id); });
}
function responderCartao(id, sabia) {
  const c = db.cartoes[id] || { cx: 0 };
  c.cx = sabia ? Math.min(5, (c.cx || 0) + 1) : 1;
  c.prox = somaDias(hojeStr(), sabia ? INTERVALOS[c.cx] : 1);
  db.cartoes[id] = c;
}

// ---------- Navegação ----------
let rota = { t: 'inicio', p: 0 };
let abaPendente = null;
let sessao = {};
const TELAS = {};
const ACOES = {};
const ENTRADAS = {};
const ABA_DA_TELA = { materia: 'materias', topico: 'materias', redacao: 'materias', escrever: 'materias', simulado: 'materias', erros: 'materias', revisao: 'cartoes', consulta: 'materiais', videos: 'materiais', semana: 'plano', cinco: 'calma', tirar: 'calma', prova: 'calma', recado: 'calma', poponi: 'inicio', conquistas: 'inicio', ajuda: 'inicio', ajustes: 'inicio' };
const TELAS_ESTUDO = ['topico', 'revisao', 'escrever', 'redacao', 'consulta', 'materia', 'simulado', 'erros'];

let relogioSim = null;
function aoSairDaTela() { pararFala(); pararRespiro(); clearInterval(relogioSim); relogioSim = null; }
// O navegador só guarda uns 50 passos pra trás. Depois de 25 telas seguidas,
// a tela nova substitui a atual em vez de empilhar, pra o "voltar" nunca se perder.
const MAX_PROFUNDIDADE = 25;
function ir(t, extra) {
  const r = Object.assign({ t: t }, extra || {});
  const p = rota.p || 0;
  if (p >= MAX_PROFUNDIDADE) { r.p = p; history.replaceState(r, ''); }
  else { r.p = p + 1; history.pushState(r, ''); }
  aoSairDaTela(); sessao = {}; rota = r;
  desenhar(true); desenharOv();
}
function trocar(extra) {
  const r = Object.assign({}, rota, extra);
  history.replaceState(r, '');
  aoSairDaTela(); rota = r;
  desenhar(true);
}
function voltar() { if ((rota.p || 0) > 0) history.back(); else abrirAba('inicio'); }
let abaTimer = null;
function abrirAba(t) {
  if ((rota.p || 0) > 0) {
    abaPendente = t;
    history.go(-rota.p);
    // Se o navegador não conseguir voltar tudo (ele guarda só uns 50 passos), troca a aba direto.
    clearTimeout(abaTimer);
    abaTimer = setTimeout(function () { if (abaPendente) { abaPendente = null; abrirAbaDireto(t); } }, 600);
    return;
  }
  abrirAbaDireto(t);
}
function abrirAbaDireto(t) {
  const r = { t: t, p: 0 };
  history.replaceState(r, '');
  aoSairDaTela(); sessao = {}; rota = r;
  desenhar(true); desenharOv();
}
function abrirOv(nome, dados) {
  const r = Object.assign({}, rota, { ov: nome, ovd: dados == null ? null : dados, p: (rota.p || 0) + 1 });
  history.pushState(r, '');
  rota = r; desenharOv();
}
function fecharOv() { if (rota.ov) history.back(); }
function chaveTela(r) { const c = Object.assign({}, r); delete c.ov; delete c.ovd; delete c.p; return JSON.stringify(c); }
window.addEventListener('popstate', function (e) {
  if (abaPendente) {
    const t = abaPendente; abaPendente = null;
    clearTimeout(abaTimer);
    abrirAbaDireto(t);
    return;
  }
  const r = e.state || { t: 'inicio', p: 0 };
  const mesma = chaveTela(r) === chaveTela(rota);
  const fechouJanela = !!rota.ov && !r.ov;
  rota = r;
  if (!mesma) { aoSairDaTela(); sessao = {}; desenhar(true); }
  else if (fechouJanela && OVS_ATUALIZA.indexOf(rota.t) >= 0) atualizar();
  desenharOv();
});

function desenhar(topoDaTela) {
  const tela = $('#tela');
  const f = TELAS[rota.t] || TELAS.inicio;
  let r;
  try { r = f(rota); }
  catch (e) { console.error(e); r = { html: topo({ titulo: 'Ops' }) + '<div class="conteudo"><div class="cartao">Algo deu errado nessa tela. Toque em voltar.</div></div>' }; }
  tela.innerHTML = r.html;
  $('#abas').classList.toggle('esconder', r.semAbas === true);
  const aba = ABA_DA_TELA[rota.t] || rota.t;
  document.querySelectorAll('#abas .aba').forEach(function (b) {
    const on = b.dataset.v === aba;
    b.classList.toggle('ativa', on);
    if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
  });
  if (topoDaTela) tela.scrollTop = 0;
  if (r.depois) r.depois();
  if (topoDaTela && typeof tentarAtualizar === 'function') tentarAtualizar();
}
function atualizar() { const tela = $('#tela'); const y = tela.scrollTop; desenhar(false); tela.scrollTop = y; }

function topo(o) {
  return '<header class="topo"><div class="topo-linha">' +
    (o.voltar === false ? '' : '<button class="btn-ico vazio" type="button" data-a="voltar" aria-label="Voltar">' + ico('voltar', 24) + '</button>') +
    '<div class="topo-txt">' + (o.sub ? '<span class="sub">' + esc(o.sub) + '</span>' : '') + '<h1>' + esc(o.titulo) + '</h1></div>' +
    (o.ajuda ? '<button class="btn-ico vazio" type="button" data-a="ajudaTela" data-v="' + o.ajuda + '" aria-label="Como funciona esta tela">' + ico('ajuda', 22) + '</button>' : '') +
    (o.semCalc ? '' : '<button class="btn-ico" type="button" data-a="calc" aria-label="Calculadora">' + ico('calc', 22) + '</button>') +
    '</div>' + (o.extra || '') + '</header>';
}

document.addEventListener('click', function (e) {
  const el = e.target.closest('[data-a]');
  if (!el) return;
  const f = ACOES[el.dataset.a];
  if (!f) return;
  e.preventDefault();
  f(el, e);
});
document.addEventListener('input', function (e) {
  const el = e.target.closest('[data-in]');
  if (el && ENTRADAS[el.dataset.in]) ENTRADAS[el.dataset.in](el, e);
});
document.addEventListener('change', function (e) {
  const el = e.target.closest('[data-ch]');
  if (el && ENTRADAS[el.dataset.ch]) ENTRADAS[el.dataset.ch](el, e);
});

ACOES.voltar = function () { voltar(); };
ACOES.aba = function (el) { abrirAba(el.dataset.v); };
ACOES.ir = function (el) {
  const extra = {};
  Object.keys(el.dataset).forEach(function (k) { if (k !== 'a' && k !== 'v') extra[k] = el.dataset[k]; });
  ir(el.dataset.v, extra);
};
ACOES.calc = function () { abrirOv('calc'); };
ACOES.ajudaTela = function (el) { abrirOv('ajuda', el.dataset.v); };
ACOES.fecharOv = function () { fecharOv(); };
ACOES.fundoOv = function (el, e) { if (e.target === el) fecharOv(); };

// ---------- Tempo de estudo ----------
let ultimaAcao = Date.now(), ticks = 0;
['pointerdown', 'keydown', 'touchmove', 'wheel'].forEach(function (ev) { document.addEventListener(ev, function () { ultimaAcao = Date.now(); }, { passive: true }); });
setInterval(function () {
  if (document.visibilityState !== 'visible') return;
  if (TELAS_ESTUDO.indexOf(rota.t) < 0) return;
  if (Date.now() - ultimaAcao > 120000) return;
  const h = hojeStr();
  db.seg[h] = (db.seg[h] || 0) + 5;
  if (++ticks % 6 === 0) salvar();
}, 5000);
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') { salvar(); pararFala(); }
  else { checarPoponi(); if (rota.t === 'inicio' && !rota.ov) atualizar(); }
});

// ---------- Pãozinho flutuante ----------
const PAO = { el: null, timer: null, arrast: null };
function paoMontar() {
  const el = document.createElement('div');
  el.id = 'pao'; el.className = 'sumido';
  el.setAttribute('role', 'status');
  el.innerHTML = '<div class="balao"><span class="txt"></span><button class="fechar" type="button" aria-label="Fechar recado">' + ico('fechar', 14) + '</button></div>' + ARTE.pao(118);
  document.body.appendChild(el);
  PAO.el = el;
  const fx = el.querySelector('.fechar');
  fx.addEventListener('pointerdown', function (ev) { ev.stopPropagation(); });
  fx.addEventListener('click', function (ev) { ev.stopPropagation(); paoEsconder(true); });
  el.addEventListener('pointerdown', paoPegar);
  window.addEventListener('resize', paoPosicionar);
}
function paoFrase(cat) {
  const lista = FRASES[cat] || FRASES.donada;
  let us = db.pao.usadas[cat] || [];
  let livres = lista.map(function (_, i) { return i; }).filter(function (i) { return us.indexOf(i) < 0; });
  if (!livres.length) { us = []; livres = lista.map(function (_, i) { return i; }); }
  const i = sorteia(livres);
  us.push(i); db.pao.usadas[cat] = us;
  return lista[i];
}
function paoFalar(cat, texto) {
  if (!PAO.el || !db.ajustes.pao || $('.tour')) return;
  PAO.el.querySelector('.txt').textContent = texto || paoFrase(cat);
  PAO.el.classList.remove('sumido');
  paoPosicionar();
  db.pao.ultima = Date.now(); salvar();
  clearTimeout(PAO.timer);
  PAO.timer = setTimeout(paoEsconder, 6500);
}
function paoEsconder(forcar) {
  if (PAO.arrast && !forcar) return;
  clearTimeout(PAO.timer);
  if (PAO.el) PAO.el.classList.add('sumido');
}
function paoPosicionar() {
  const el = PAO.el;
  if (!el || PAO.arrast) return;
  const app = $('#app').getBoundingClientRect();
  const w = el.offsetWidth || 232, h = el.offsetHeight || 170, H = window.innerHeight;
  const dir = db.pao.lado !== 'esq';
  el.classList.toggle('esq', !dir);
  const x = dir ? app.right - w - 10 : app.left + 10;
  const y = Math.max(64, Math.min(H - h - 84, db.pao.y * H));
  el.style.left = Math.round(x) + 'px';
  el.style.top = Math.round(y) + 'px';
}
function paoPegar(e) {
  if (e.button > 0) return;
  const el = PAO.el, r = el.getBoundingClientRect();
  PAO.arrast = { dx: e.clientX - r.left, dy: e.clientY - r.top };
  el.classList.add('arrastando', 'acordado');
  el.style.left = r.left + 'px';
  el.style.top = r.top + 'px';
  el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
  som('pop');
  clearTimeout(PAO.timer);
  el.querySelector('.txt').textContent = paoFrase('pegar');
  try { el.setPointerCapture(e.pointerId); } catch (er) { }
  el.addEventListener('pointermove', paoMover);
  el.addEventListener('pointerup', paoSoltar);
  el.addEventListener('pointercancel', paoSoltar);
}
function paoMover(e) {
  const a = PAO.arrast;
  if (!a) return;
  PAO.el.style.left = (e.clientX - a.dx) + 'px';
  PAO.el.style.top = (e.clientY - a.dy) + 'px';
}
function paoSoltar() {
  const el = PAO.el;
  if (!PAO.arrast) return;
  PAO.arrast = null;
  el.removeEventListener('pointermove', paoMover);
  el.removeEventListener('pointerup', paoSoltar);
  el.removeEventListener('pointercancel', paoSoltar);
  const app = $('#app').getBoundingClientRect();
  const x = parseFloat(el.style.left), y = parseFloat(el.style.top);
  el.classList.remove('arrastando', 'acordado');
  db.pao.lado = (x + el.offsetWidth / 2) < (app.left + app.width / 2) ? 'esq' : 'dir';
  db.pao.y = y / window.innerHeight;
  salvar();
  paoPosicionar();
  clearTimeout(PAO.timer);
  PAO.timer = setTimeout(paoEsconder, 4000);
}
setInterval(function () {
  if (document.visibilityState !== 'visible' || !db.ajustes.pao || rota.ov || $('.tour') || $('.festa')) return;
  if (Date.now() - db.pao.ultima < 10 * 60 * 1000) return;
  const min = (Date.now() - INICIO_SESSAO) / 60000;
  paoFalar(min > 40 && Math.random() < 0.5 ? 'cansaco' : 'donada');
}, 30000);
function periodoDoDia() { const h = new Date().getHours(); return h >= 5 && h < 12 ? 'bomdia' : h >= 12 && h < 18 ? 'tarde' : h >= 18 && h < 22 ? 'donada' : 'noite'; }
function saudar() {
  if (db.poponi.aviso === 'encolheu') {
    db.poponi.aviso = null; salvar();
    setTimeout(function () { paoFalar('encolheu'); }, 1200);
    return;
  }
  const chave = hojeStr() + periodoDoDia();
  if (db.pao.saudou !== chave) {
    db.pao.saudou = chave; salvar();
    setTimeout(function () { paoFalar(periodoDoDia()); }, 1400);
  }
}

// ---------- Calculadora ----------
const CALC = { expr: '', res: '', graus: true, ans: 0, feito: false, erro: false };
function calcTokens(s) {
  const re = /\d+\.?\d*|\.\d+|sin|cos|tan|sqrt|log|pi|ans|[+\-*/^%()²]/g;
  const toks = s.match(re) || [];
  if (toks.join('') !== s) throw new Error('simbolo');
  return toks;
}
function calcAvaliar(s, graus, ans) {
  let abertos = 0;
  for (const ch of s) { if (ch === '(') abertos++; else if (ch === ')') abertos--; }
  while (abertos-- > 0) s += ')';
  const t = calcTokens(s);
  let i = 0;
  const ver = function () { return t[i]; };
  const prox = function () { return t[i++]; };
  const inicioPrim = function (x) { return x != null && (/^[\d.]/.test(x) || x === '(' || x === 'pi' || x === 'ans' || /^(sin|cos|tan|sqrt|log)$/.test(x)); };
  const rad = function (x) { return graus ? x * Math.PI / 180 : x; };
  function expr() {
    let v = termo();
    while (ver() === '+' || ver() === '-') { const op = prox(); const r = termo(); v = op === '+' ? v + r : v - r; }
    return v;
  }
  function termo() {
    let v = unario();
    for (;;) {
      if (ver() === '*' || ver() === '/') { const op = prox(); const r = unario(); v = op === '*' ? v * r : v / r; }
      else if (inicioPrim(ver())) { v = v * unario(); }
      else break;
    }
    return v;
  }
  function unario() {
    if (ver() === '-') { prox(); return -unario(); }
    if (ver() === '+') { prox(); return unario(); }
    return potencia();
  }
  function potencia() {
    const b = posfixo();
    if (ver() === '^') { prox(); return Math.pow(b, unario()); }
    return b;
  }
  function posfixo() {
    let v = primario();
    while (ver() === '%' || ver() === '²') { const op = prox(); v = op === '%' ? v / 100 : v * v; }
    return v;
  }
  function primario() {
    const x = prox();
    if (x == null) throw new Error('fim');
    if (/^[\d.]/.test(x)) return parseFloat(x);
    if (x === 'pi') return Math.PI;
    if (x === 'ans') return ans;
    if (x === '(') { const v = expr(); if (prox() !== ')') throw new Error('par'); return v; }
    if (/^(sin|cos|tan|sqrt|log)$/.test(x)) {
      if (prox() !== '(') throw new Error('par');
      const a = expr();
      if (prox() !== ')') throw new Error('par');
      if (x === 'sin') return Math.sin(rad(a));
      if (x === 'cos') return Math.cos(rad(a));
      if (x === 'tan') { const c = Math.cos(rad(a)); if (Math.abs(c) < 1e-12) return NaN; return Math.tan(rad(a)); }
      if (x === 'sqrt') return Math.sqrt(a);
      if (x === 'log') return Math.log10(a);
    }
    throw new Error('simbolo');
  }
  const v = expr();
  if (i < t.length) throw new Error('sobra');
  return v;
}
function calcFormatar(v) {
  if (!isFinite(v) || isNaN(v)) return null;
  if (Math.abs(v) < 1e-10) v = 0;
  v = +v.toPrecision(12);
  if (Math.abs(v) >= 1e15) return v.toExponential(6).replace('.', ',');
  return v.toLocaleString('pt-BR', { maximumFractionDigits: 10 });
}
function calcMostrar(s) {
  return s.replace(/sqrt/g, '√').replace(/sin/g, 'sen').replace(/pi/g, 'π').replace(/\*/g, '×').replace(/\//g, '÷').replace(/-/g, '−').replace(/\./g, ',');
}
const CALC_TECLAS = [
  ['sen', 'f'], ['cos', 'f'], ['tan', 'f'], ['π', 'f'], ['√', 'f'],
  ['x²', 'f'], ['xʸ', 'f'], ['log', 'f'], ['(', 'f'], [')', 'f'],
  ['7', ''], ['8', ''], ['9', ''], ['÷', 'o'], ['C', 'o'],
  ['4', ''], ['5', ''], ['6', ''], ['×', 'o'], ['⌫', 'o'],
  ['1', ''], ['2', ''], ['3', ''], ['−', 'o'], ['%', 'o'],
  ['0', ''], [',', ''], ['ans', 'f'], ['+', 'o'], ['=', 'igual']
];
const CALC_MAPA = { ',': '.', '+': '+', '−': '-', '×': '*', '÷': '/', 'π': 'pi', 'sen': 'sin(', 'cos': 'cos(', 'tan': 'tan(', '√': 'sqrt(', 'log': 'log(', 'x²': '²', 'xʸ': '^', 'ans': 'ans', '(': '(', ')': ')', '%': '%' };
function calcHTML() {
  const res = CALC.erro ? 'Erro' : CALC.res;
  return '<div class="folha-topo"><h2>Calculadora</h2>' +
    '<button class="chip' + (CALC.graus ? ' on' : '') + '" type="button" data-a="calcModo">' + (CALC.graus ? 'Graus' : 'Radianos') + '</button>' +
    '<button class="btn-ico claro" type="button" data-a="fecharOv" aria-label="Fechar calculadora">' + ico('fechar', 20) + '</button></div>' +
    '<div class="conteudo"><div class="calc-visor" aria-live="polite"><div class="calc-expr">' + esc(calcMostrar(CALC.expr)) + '</div>' +
    '<div class="calc-res"' + (CALC.feito ? '' : ' style="opacity:.55;font-size:30px"') + '>' + esc(res || (CALC.expr ? '' : '0')) + '</div></div>' +
    '<div class="calc-teclas">' + CALC_TECLAS.map(function (k) {
      const nome = k[0] === '⌫' ? 'Apagar' : k[0] === 'C' ? 'Limpar tudo' : k[0];
      return '<button class="tecla ' + k[1] + '" type="button" data-a="tecla" data-v="' + esc(k[0]) + '" aria-label="' + esc(nome) + '">' + esc(k[0]) + '</button>';
    }).join('') + '</div></div>';
}
function calcPrevia() {
  CALC.erro = false;
  if (!CALC.expr) { CALC.res = ''; return; }
  try { const f = calcFormatar(calcAvaliar(CALC.expr, CALC.graus, CALC.ans)); CALC.res = f == null ? '' : f; }
  catch (e) { CALC.res = ''; }
}
ACOES.tecla = function (el) {
  const k = el.dataset.v;
  if (k === 'C') { CALC.expr = ''; CALC.res = ''; CALC.feito = false; CALC.erro = false; }
  else if (k === '⌫') {
    if (CALC.feito) { CALC.feito = false; }
    CALC.expr = CALC.expr.replace(/(sin\(|cos\(|tan\(|sqrt\(|log\(|pi|ans|.)$/, '');
    calcPrevia();
  } else if (k === '=') {
    if (!CALC.expr) return;
    try {
      const v = calcAvaliar(CALC.expr, CALC.graus, CALC.ans), f = calcFormatar(v);
      if (f == null) { CALC.erro = true; CALC.feito = true; }
      else { CALC.res = f; CALC.ans = v; CALC.feito = true; CALC.erro = false; }
    } catch (e) { CALC.erro = true; CALC.feito = true; }
  } else {
    const add = /^\d$/.test(k) ? k : CALC_MAPA[k];
    if (add == null) return;
    if (CALC.feito) {
      CALC.expr = /^[+\-*/^%²]$/.test(add) && !CALC.erro ? 'ans' : '';
      CALC.feito = false;
    }
    CALC.expr += add;
    calcPrevia();
  }
  desenharOv();
};
ACOES.calcModo = function () { CALC.graus = !CALC.graus; if (!CALC.feito) calcPrevia(); desenharOv(); };

// ---------- Janelas por cima ----------
const OVS = {};
const OVS_ATUALIZA = ['plano', 'materiais', 'inicio'];
OVS.calc = calcHTML;
OVS.ajuda = function (chave) {
  const a = AJUDA[chave] || AJUDA.ajuda;
  return '<div class="folha-topo"><h2>' + esc(a[0]) + '</h2><button class="btn-ico claro" type="button" data-a="fecharOv" aria-label="Fechar">' + ico('fechar', 20) + '</button></div>' +
    '<div class="conteudo"><div class="recado">' + '<div class="recado-gato" style="background:var(--cartao)">' + ARTE.pao(58) + '</div><p style="font-size:16px;line-height:1.5">' + esc(a[1]) + '</p></div>' +
    '<button class="btn sec largo" type="button" data-a="tourDeNovo">Ver o tour do começo de novo</button></div>';
};
function desenharOv() {
  const c = $('#ov');
  if (!rota.ov || !OVS[rota.ov]) { c.innerHTML = ''; return; }
  const ja = c.querySelector('.folha');
  const html = OVS[rota.ov](rota.ovd);
  if (ja && c.dataset.tipo === rota.ov) { ja.innerHTML = html; return; }
  c.dataset.tipo = rota.ov;
  c.innerHTML = '<div class="ov" data-a="fundoOv"><div class="folha" role="dialog" aria-modal="true">' + html + '</div></div>';
  if (OVS_DEPOIS[rota.ov]) OVS_DEPOIS[rota.ov](rota.ovd);
}
const OVS_DEPOIS = {};

// ---------- Tour de boas-vindas ----------
const TOUR = [
  ['Oi, ' + 'Julia' + '!', 'Eu sou o Pãozinho. O MOSS me mandou aqui pra te ajudar a estudar. Vou te mostrar tudo, é rapidinho.', ''],
  ['Início', 'Aqui fica o seu Plano de hoje: o que estudar, já separadinho. É só tocar e começar.', 'inicio'],
  ['Matérias', 'Cada aula tem resumo pra ler ou ouvir, perguntas pra treinar e cartões pra memorizar.', 'materias'],
  ['A Poponi', 'Essa gatinha cresce a cada dia que você estuda. Se pular um dia, ela só encolhe um pouquinho.', 'coracao'],
  ['Materiais', 'Fórmulas, mapas, videoaulas e as fotos do seu caderno. A calculadora fica sempre no cantinho de cima.', 'materiais'],
  ['Calma', 'Bateu ansiedade? Vem respirar comigo. Tem exercícios rapidinhos pra acalmar.', 'calma'],
  ['Último segredo', 'Às vezes eu apareço na tela pra te dar força. Se eu atrapalhar, é só me segurar e me arrastar pro lado.', '']
];
let tourPasso = 0;
function abrirTour() {
  tourPasso = 0;
  let el = $('.tour');
  if (!el) { el = document.createElement('div'); el.className = 'tour'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'Apresentação do Miaula'); document.body.appendChild(el); }
  paoEsconder(true);
  desenharTour();
}
function desenharTour() {
  const el = $('.tour');
  if (!el) return;
  const p = TOUR[tourPasso], ultimo = tourPasso === TOUR.length - 1;
  const titulo = tourPasso === 0 ? 'Oi, ' + db.nome + '!' : p[0];
  el.innerHTML = '<div class="tour-topo"><span class="mini" style="color:var(--rosa-txt)">' + (tourPasso + 1) + ' de ' + TOUR.length + '</span>' +
    '<button class="pular" type="button" data-t="pular">Pular</button></div>' +
    '<div class="tour-meio"><div class="tour-arte"><div class="circ"></div>' + ARTE.pao(190) +
    (p[2] ? '<div class="selo">' + ico(p[2], 30) + '</div>' : '') + '</div>' +
    '<div class="entra" style="display:flex;flex-direction:column;align-items:center;gap:12px"><h1>' + esc(titulo) + '</h1><p>' + esc(p[1]) + '</p></div></div>' +
    '<div style="display:flex;flex-direction:column;gap:18px"><div class="pontos">' + TOUR.map(function (_, i) { return '<i class="' + (i === tourPasso ? 'on' : '') + '"></i>'; }).join('') + '</div>' +
    '<div class="linha-btns">' + (tourPasso > 0 ? '<button class="voltar-tour" type="button" data-t="voltar" aria-label="Voltar">' + ico('voltar', 22) + '</button>' : '') +
    '<button class="btn" type="button" data-t="prox">' + (ultimo ? 'Vamos começar!' : 'Próximo') + '</button></div></div>';
  el.onclick = function (e) {
    const b = e.target.closest('[data-t]');
    if (!b) return;
    const t = b.dataset.t;
    if (t === 'prox') { if (ultimo) fecharTour(); else { tourPasso++; desenharTour(); } }
    else if (t === 'voltar') { tourPasso = Math.max(0, tourPasso - 1); desenharTour(); }
    else if (t === 'pular') { tourPasso = TOUR.length - 1; desenharTour(); }
  };
}
function fecharTour() {
  const el = $('.tour');
  if (el) el.remove();
  const primeira = !db.tourVisto;
  db.tourVisto = true; salvar();
  if (primeira) setTimeout(function () { paoFalar('', 'Pronto! Começa pelo Plano de hoje, ali no Início. Tô aqui.'); }, 700);
}
ACOES.tourDeNovo = function () { if (rota.ov) history.back(); setTimeout(abrirTour, 50); };
