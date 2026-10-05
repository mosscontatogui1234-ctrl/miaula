'use strict';
// Telas do Miaula.

const ATIVIDADE = { resumo: 'ler o resumo', perguntas: 'responder as perguntas', cartoes: 'passar os cartões' };

function normaliza(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
function fmtTempo(seg) {
  const m = Math.round(seg / 60);
  if (m < 60) return m + ' min';
  return Math.floor(m / 60) + 'h' + pad(m % 60);
}
function anoChips() {
  return '<div class="chips">' + [1, 2, 3].map(function (a) {
    return '<button class="chip' + (db.ano === a ? ' on' : '') + '" type="button" data-a="ano" data-v="' + a + '" aria-pressed="' + (db.ano === a) + '">' + a + 'º ano</button>';
  }).join('') + '</div>';
}
ACOES.ano = function (el) { db.ano = +el.dataset.v; salvar(); atualizar(); };
function fraseDoDia() {
  const chave = hojeStr() + periodoDoDia();
  if (db.fraseDia.chave !== chave) { db.fraseDia = { chave: chave, txt: paoFrase(periodoDoDia()) }; salvar(); }
  return db.fraseDia.txt;
}
function itemSeta(o) {
  return '<' + (o.tag || 'button') + ' class="item"' + (o.tag === 'a' ? '' : ' type="button"') + ' ' + (o.attrs || '') + '>' +
    (o.ico ? '<span class="item-ico">' + o.ico + '</span>' : '') +
    '<span class="item-txt"><b>' + esc(o.titulo) + '</b>' + (o.sub ? '<span class="mini">' + esc(o.sub) + '</span>' : '') + '</span>' +
    (o.fim || '<span class="seta">' + ico('seta', 18) + '</span>') + '</' + (o.tag || 'button') + '>';
}

// ================= Início =================
function tarefaInfo(t) {
  if (t.top) {
    const T = TOP_POR_ID[t.top];
    if (!T) return null;
    return { titulo: T.t.titulo, sub: T.m.nome + ' · ' + ATIVIDADE[t.tipo] };
  }
  if (t.tipo === 'rev') { const n = cartoesParaHoje().length; return { titulo: 'Revisar cartões', sub: n ? plural(n, 'cartão esperando', 'cartões esperando') : 'Tudo revisado' }; }
  if (t.tipo === 'red') return { titulo: 'Treino de redação', sub: 'Tema da semana' };
  return null;
}
TELAS.inicio = function () {
  checarPoponi();
  const tarefas = gerarHoje();
  const feitas = tarefas.filter(function (t) { return t.feito; }).length;
  const due = cartoesParaHoje().length;
  let html = '<header class="topo"><div class="saudacao"><div class="topo-txt"><span class="sub">' + esc(dataLonga(new Date())) + '</span><h1>Olá, ' + esc(db.nome) + '</h1></div>' +
    '<div class="acoes-topo"><button class="poponi-mini" type="button" data-a="ir" data-v="poponi" aria-label="Ver a Poponi">' + miniPoponiHTML() + '</button>' +
    '<button class="btn-ico" type="button" data-a="trocarTema" aria-label="' + (temaEscuro() ? 'Mudar pro modo claro' : 'Mudar pro modo noite') + '">' + ico(temaEscuro() ? 'sol' : 'lua') + '</button>' +
    '<button class="btn-ico" type="button" data-a="calc" aria-label="Calculadora">' + ico('calc') + '</button></div></div>' +
    '<div class="recado"><div class="recado-gato">' + ARTE.pao(58) + '</div><p class="frase">“' + esc(fraseDoDia()) + '”</p></div></header>';
  html += '<div class="conteudo">';
  html += '<section class="secao"><div class="linha-sec"><h2 class="titulo-sec">Plano de hoje</h2><span class="mini">' + (tarefas.length ? feitas + ' de ' + tarefas.length : '') + '</span></div>';
  if (!tarefas.length) html += '<div class="cartao vazio-msg">Hoje está livre! Se quiser, escolha uma matéria aqui embaixo.</div>';
  else {
    html += '<div class="lista">' + tarefas.map(function (t, i) {
      const inf = tarefaInfo(t) || { titulo: 'Tarefa', sub: '' };
      return '<button class="tarefa' + (t.feito ? ' feita' : '') + '" type="button" data-a="tarefa" data-v="' + i + '"><span class="bolinha">' + (t.feito ? ico('check', 14) : '') + '</span>' +
        '<span class="item-txt"><b>' + esc(inf.titulo) + '</b><span class="mini">' + esc(inf.sub) + '</span></span><span class="seta">' + ico('seta', 18) + '</span></button>';
    }).join('') + '</div>';
    if (feitas === tarefas.length) html += '<div class="cartao centro frase" style="color:var(--destaque);font-size:17px">Tudo feito por hoje! Que orgulho.</div>';
  }
  html += '</section>';
  if (due && !tarefas.some(function (t) { return t.tipo === 'rev' && !t.feito; })) {
    html += '<button class="item cartao borda" type="button" data-a="ir" data-v="revisao" style="padding:12px 14px"><span class="item-ico">' + ico('cartoes', 20) + '</span><span class="item-txt"><b>' + plural(due, 'cartão pra revisar', 'cartões pra revisar') + '</b><span class="mini">Leva só uns minutinhos</span></span><span class="seta">' + ico('seta', 18) + '</span></button>';
  }
  html += treinoHTML();
  const dia = db.plano[new Date().getDay()] || [];
  const ids = dia.filter(function (id) { return MAT_POR_ID[id] && !MAT_POR_ID[id].especial; });
  ['mat', 'por', 'bio', 'his', 'fis', 'qui'].forEach(function (id) { if (ids.length < 4 && ids.indexOf(id) < 0) ids.push(id); });
  html += '<section class="secao"><h2 class="titulo-sec">Matérias</h2><div class="grade2">' + ids.slice(0, 4).map(function (id) {
    const m = MAT_POR_ID[id], pct = pctLista(todasAulasDe(m)) || 0;
    return '<button class="materia-mini" type="button" data-a="ir" data-v="materia" data-id="' + id + '"><span class="linha-sec" style="width:100%"><b>' + esc(m.nome) + '</b><span class="mini" style="color:var(--destaque);font-weight:700">' + pct + '%</span></span><span class="barra" style="width:100%"><i style="width:' + pct + '%"></i></span></button>';
  }).join('') + '</div></section>';
  html += '<div class="lista">' +
    itemSeta({ titulo: 'Sua semana', sub: 'Tempo, acertos e o que revisar', ico: ico('grafico', 20), attrs: 'data-a="ir" data-v="semana"' }) +
    itemSeta({ titulo: 'Conquistas', sub: Object.keys(db.conquistas).length + ' de ' + CONQUISTAS.length + ' medalhas', ico: ico('medalha', 20), attrs: 'data-a="ir" data-v="conquistas"' }) +
    itemSeta({ titulo: 'Ajuda e ajustes', sub: 'Rever o tour e como tudo funciona', ico: ico('ajuda', 20), attrs: 'data-a="ir" data-v="ajuda"' }) +
    '</div>';
  html += '</div>';
  return { html: html };
};
ACOES.tarefa = function (el) {
  const t = db.hoje.tarefas[+el.dataset.v];
  if (!t) return;
  if (t.top) ir('topico', { id: t.top, aba: t.tipo });
  else if (t.tipo === 'rev') ir('revisao');
  else if (t.tipo === 'red') ir('redacao');
};

// ================= Matérias =================
TELAS.materias = function () {
  let html = topo({ titulo: 'Matérias', voltar: false, ajuda: 'materias', extra: anoChips() });
  html += '<div class="conteudo">' + treinoHTML() + '<h2 class="titulo-sec">Todas as matérias</h2><div class="grade2">' + MATERIAS.map(function (m) {
    let sub, barra = '';
    if (m.especial === 'redacao') sub = 'Tema novo toda semana';
    else {
      const prontas = aulasDe(m, db.ano), total = (m.anos[db.ano] || []).length;
      if (prontas.length) {
        const pct = pctLista(prontas);
        sub = plural(prontas.length, 'aula pronta', 'aulas prontas') + ' de ' + total;
        barra = '<span class="barra"><i style="width:' + pct + '%"></i></span>';
      } else sub = 'Aulas em breve';
    }
    return '<button class="materia-btn" type="button" data-a="ir" data-v="materia" data-id="' + m.id + '"><span class="inicial">' + esc(m.nome[0]) + '</span><span style="display:flex;flex-direction:column;gap:2px"><b>' + esc(m.nome) + '</b><span class="mini">' + esc(sub) + '</span></span>' + barra + '</button>';
  }).join('') + '</div></div>';
  return { html: html };
};

TELAS.materia = function (r) {
  const m = MAT_POR_ID[r.id];
  if (!m) return TELAS.materias();
  if (m.especial === 'redacao') return TELAS.redacao(r);
  const lista = m.anos[db.ano] || [];
  let html = topo({ titulo: m.nome, sub: 'Matéria', ajuda: 'materia', extra: anoChips() });
  html += '<div class="conteudo"><div class="lista">';
  if (!lista.length) html += '<div class="vazio-msg">Nenhuma aula neste ano.</div>';
  html += lista.map(function (t) {
    if (!temAula(t)) {
      return '<button class="item" type="button" disabled><span class="item-txt"><b>' + esc(t.titulo) + '</b></span><span class="breve">em breve</span></button>';
    }
    const pct = pctTopico(t.id);
    const st = pct === 100 ? '<span class="status cheio">' + ico('check', 16) + '</span>' : '<span class="status">' + pct + '%</span>';
    const p = progDe(t.id);
    const sub = pct === 0 ? 'Começar pelo resumo' : (p.quiz != null ? 'Acertos: ' + p.quiz + '%' : 'Continuar');
    return '<button class="item" type="button" data-a="ir" data-v="topico" data-id="' + t.id + '">' + st + '<span class="item-txt"><b>' + esc(t.titulo) + '</b><span class="mini">' + esc(sub) + '</span></span><span class="seta">' + ico('seta', 18) + '</span></button>';
  }).join('');
  html += '</div><div class="lista">' + itemSeta({ titulo: 'Videoaulas de ' + m.nome, sub: 'Professores e sites indicados', ico: ico('video', 20), attrs: 'data-a="ir" data-v="videos" data-f="' + m.id + '"' }) + '</div></div>';
  return { html: html };
};

// ================= Aula (resumo, perguntas, cartões) =================
TELAS.topico = function (r) {
  const T = TOP_POR_ID[r.id];
  if (!T || !temAula(T.t)) return { html: topo({ titulo: 'Aula' }) + '<div class="conteudo"><div class="cartao">Essa aula ainda não está pronta.</div></div>' };
  const aba = r.aba || 'resumo';
  const abas = '<div class="abas-topico" role="tablist">' + [['resumo', 'Resumo'], ['perguntas', 'Perguntas'], ['cartoes', 'Cartões']].map(function (a) {
    return '<button type="button" role="tab" aria-selected="' + (aba === a[0]) + '" class="' + (aba === a[0] ? 'on' : '') + '" data-a="abaTopico" data-v="' + a[0] + '">' + a[1] + '</button>';
  }).join('') + '</div>';
  let html = topo({ titulo: T.t.titulo, sub: T.m.nome + ' · ' + T.ano + 'º ano', ajuda: 'topico', extra: abas });
  html += '<div class="conteudo">' + (aba === 'perguntas' ? quizHTML(T) : aba === 'cartoes' ? cartoesTopicoHTML(T) : resumoHTML(T)) + '</div>';
  return { html: html, semAbas: true };
};
ACOES.abaTopico = function (el) { trocar({ aba: el.dataset.v }); };

function resumoHTML(T) {
  const lido = progDe(T.t.id).resumo;
  const vel = String(db.velFala || 1).replace('.', ',') + 'x';
  let h = '<div class="ouvir"><button class="play" type="button" data-a="ouvir" aria-label="' + (falando ? 'Parar a leitura' : 'Ouvir o resumo') + '">' + ico(falando ? 'pausa' : 'play', 22) + '</button>' +
    '<span class="item-txt" style="color:var(--creme)"><b>Ouvir o resumo</b><span class="mini" style="color:var(--rosa-txt)">' + (falando ? 'Lendo pra você...' : 'O celular lê em voz alta') + '</span></span>' +
    '<button class="vel" type="button" data-a="vel" aria-label="Velocidade da voz">' + vel + '</button></div>';
  h += T.t.resumo.map(function (b) { return '<div class="cartao resumo-bloco"><h3>' + esc(b.t) + '</h3><p>' + rico(b.p) + '</p></div>'; }).join('');
  if (T.t.exemplo) h += '<div class="exemplo"><b>Exemplo:</b> ' + rico(T.t.exemplo) + '</div>';
  h += lido
    ? '<div class="cartao centro mini" style="display:flex;align-items:center;justify-content:center;gap:6px;color:var(--ok-txt)">' + ico('check', 16) + ' Você já leu este resumo</div>'
    : '<button class="btn largo" type="button" data-a="lido">Terminei de ler</button>';
  h += '<button class="btn sec largo" type="button" data-a="abaTopico" data-v="perguntas">Treinar com perguntas</button>';
  return h;
}
function textoDoResumo(t) {
  return t.titulo + '. ' + t.resumo.map(function (b) { return b.t + '. ' + b.p.replace(/\n/g, '. '); }).join(' ') + (t.exemplo ? ' Exemplo: ' + t.exemplo : '');
}
ACOES.ouvir = function () {
  if (falando) { pararFala(); atualizar(); return; }
  const T = TOP_POR_ID[rota.id];
  if (!T) return;
  if (falar(textoDoResumo(T.t), function () { if (rota.t === 'topico') atualizar(); })) atualizar();
};
ACOES.vel = function () {
  const v = [1, 1.25, 1.5, 0.85];
  db.velFala = v[(v.indexOf(db.velFala || 1) + 1) % v.length];
  salvar();
  if (falando) { const T = TOP_POR_ID[rota.id]; falar(textoDoResumo(T.t), function () { if (rota.t === 'topico') atualizar(); }); }
  atualizar();
};
ACOES.lido = function () {
  const id = rota.id, p = progEditar(id);
  if (!p.resumo) {
    p.resumo = true;
    concluirTarefa('resumo', id);
    som('feito');
    if (!marcarEstudo()) paoFalar('terminou');
  }
  atualizar();
};

// ---- Perguntas ----
function novoQuiz(t) {
  const ordem = embaralha(t.perguntas.map(function (_, i) { return i; }));
  return { tid: t.id, ordem: ordem, ops: ordem.map(function (n) { return embaralha(t.perguntas[n].o.map(function (_, j) { return j; })); }), i: 0, escolha: null, acertos: 0, seguidos: 0, fim: false };
}
function quizHTML(T) {
  let q = sessao.quiz;
  if (!q || q.tid !== T.t.id) q = sessao.quiz = novoQuiz(T.t);
  const N = q.ordem.length;
  if (q.fim) {
    const pct = Math.round(q.acertos / N * 100);
    const msg = pct >= 80 ? 'Mandou muito bem!' : pct >= 50 ? 'Foi bem! Mais um treino e fica perfeito.' : 'Tá aprendendo! Relê o resumo e tenta de novo.';
    return '<div class="resultado entra">' + ARTE.pao(150) + '<div class="grande">' + q.acertos + ' de ' + N + '</div><p class="frase" style="font-size:20px;color:var(--destaque)">' + msg + '</p></div>' +
      '<button class="btn largo" type="button" data-a="abaTopico" data-v="cartoes">Ir pros cartões</button>' +
      '<button class="btn sec largo" type="button" data-a="refazerQuiz">Fazer de novo</button>';
  }
  const n = q.ordem[q.i], P = T.t.perguntas[n], resp = q.escolha != null, ok = resp && q.escolha === P.c;
  let h = '<div class="secao" style="gap:8px"><div class="linha-sec"><span class="mini">Pergunta ' + (q.i + 1) + ' de ' + N + '</span><span class="mini">' + plural(q.acertos, 'certa', 'certas') + '</span></div><div class="barra"><i style="width:' + (q.i / N * 100) + '%"></i></div></div>';
  h += '<div class="cartao"><p class="pergunta">' + rico(P.p) + '</p></div>';
  h += q.ops[q.i].map(function (j, k) {
    let cls = 'opcao';
    if (resp) { if (j === P.c) cls += ' certa'; else if (j === q.escolha) cls += ' errada'; }
    return '<button class="' + cls + '" type="button" data-a="responder" data-v="' + j + '"' + (resp ? ' disabled' : '') + '><span>' + 'ABCD'[k] + ') ' + esc(P.o[j]) + '</span>' +
      (resp && j === P.c ? ico('check', 22) : resp && j === q.escolha ? ico('fechar', 20) : '') + '</button>';
  }).join('');
  if (resp) {
    h += '<div class="explica entra"><b class="' + (ok ? 'ok' : 'nao') + '">' + (ok ? 'Isso!' : 'Quase!') + '</b> ' + rico(P.e) + '</div>' +
      '<button class="btn largo" type="button" data-a="proxima">' + (q.i + 1 < N ? 'Próxima' : 'Ver resultado') + '</button>';
  }
  return h;
}
ACOES.responder = function (el) {
  const q = sessao.quiz;
  if (!q || q.escolha != null) return;
  const T = TOP_POR_ID[q.tid], P = T.t.perguntas[q.ordem[q.i]];
  q.escolha = +el.dataset.v;
  const ok = q.escolha === P.c;
  if (ok) {
    q.acertos++; q.seguidos++;
    som('acerto');
    if (q.seguidos === 3 || q.seguidos === 5 || q.seguidos === 8) paoFalar('acerto');
  } else {
    q.seguidos = 0;
    som('erro');
    if (Math.random() < 0.5) paoFalar('erro');
  }
  registrarResposta(q.tid, T.m.id, ok, q.ordem[q.i]);
  salvar();
  atualizar();
  const ex = document.querySelector('.explica');
  if (ex && ex.scrollIntoView) ex.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
};
ACOES.proxima = function () {
  const q = sessao.quiz;
  if (!q) return;
  q.i++; q.escolha = null;
  if (q.i >= q.ordem.length) {
    q.fim = true;
    const pct = Math.round(q.acertos / q.ordem.length * 100);
    const p = progEditar(q.tid);
    p.quiz = Math.max(p.quiz || 0, pct);
    concluirTarefa('perguntas', q.tid);
    som('feito');
    if (!marcarEstudo()) paoFalar(pct >= 60 ? 'terminou' : 'donada');
  }
  salvar();
  desenhar(true);
};
ACOES.refazerQuiz = function () { sessao.quiz = null; desenhar(true); };

// ---- Cartões ----
function novaSessaoCartoes(ids, tipo, tid) { return { fila: ids.slice(), i: 0, virado: false, ja: 0, total: ids.length, vistos: {}, rep: {}, tipo: tipo, tid: tid, fim: false }; }
function cartoesTopicoHTML(T) {
  let s = sessao.cards;
  if (!s || s.tid !== T.t.id) s = sessao.cards = novaSessaoCartoes(T.t.cartoes.map(function (_, i) { return T.t.id + ':' + i; }), 'topico', T.t.id);
  return sessaoCartoesHTML(s);
}
function sessaoCartoesHTML(s) {
  if (s.fim) {
    const fim = s.tipo === 'topico'
      ? '<button class="btn largo" type="button" data-a="refazerCartoes">Passar de novo</button><button class="btn sec largo" type="button" data-a="voltar">Voltar</button>'
      : '<button class="btn largo" type="button" data-a="voltar">Voltar</button>';
    return '<div class="resultado entra">' + ARTE.pao(140) + '<div class="grande">' + s.ja + ' de ' + s.total + '</div>' +
      '<p class="frase" style="font-size:19px;color:var(--destaque)">' + (s.ja === s.total ? 'Você sabia todos!' : 'Cartões que você já sabia de primeira.') + '</p>' +
      '<p class="mini">' + (s.ja < s.total ? 'Os que você não sabia voltam amanhã na aba Cartões.' : 'Eles voltam na aba Cartões na hora certa de revisar.') + '</p></div>' + fim;
  }
  const id = s.fila[s.i], inf = cardInfo(id);
  if (!inf) { s.i++; if (s.i >= s.fila.length) s.fim = true; return sessaoCartoesHTML(s); }
  return '<div class="secao" style="gap:8px"><div class="linha-sec"><span class="mini">Cartão ' + (s.i + 1) + ' de ' + s.fila.length + '</span><span class="mini">' + esc(inf.m.nome) + '</span></div>' +
    '<div class="barra"><i style="width:' + (s.i / s.fila.length * 100) + '%"></i></div></div>' +
    '<button class="flip' + (s.virado ? ' virado' : '') + '" type="button" data-a="virar" aria-label="Virar o cartão"><span class="flip-in">' +
    '<span class="face"><span class="dica">Pergunta</span><span class="txt">' + esc(inf.c.f) + '</span><span class="dica">Toque pra ver a resposta</span></span>' +
    '<span class="face tras"><span class="dica">Resposta</span><span class="txt">' + esc(inf.c.v) + '</span></span></span></button>' +
    '<div class="linha-btns' + (s.virado ? '' : ' esconder') + '" id="botoesCartao"><button class="btn sec" type="button" data-a="cartao" data-v="0">Não sabia</button><button class="btn" type="button" data-a="cartao" data-v="1">Sabia!</button></div>' +
    '<p class="mini centro' + (s.virado ? ' esconder' : '') + '" id="dicaCartao">Pensa na resposta e depois toca no cartão.</p>';
}
ACOES.virar = function (el) {
  const s = sessao.cards;
  if (!s) return;
  s.virado = !s.virado;
  el.classList.toggle('virado', s.virado);
  const b = $('#botoesCartao'), d = $('#dicaCartao');
  if (b) b.classList.toggle('esconder', !s.virado);
  if (d) d.classList.toggle('esconder', s.virado);
  som('virar');
};
ACOES.cartao = function (el) {
  const s = sessao.cards;
  if (!s || s.fim) return;
  const id = s.fila[s.i], sabia = el.dataset.v === '1';
  responderCartao(id, sabia);
  db.cartoesVistos = (db.cartoesVistos || 0) + 1;
  if (!s.vistos[id]) { s.vistos[id] = 1; if (sabia) s.ja++; }
  if (sabia) som('ok');
  else if (!s.rep[id]) { s.rep[id] = 1; s.fila.push(id); }
  s.i++; s.virado = false;
  if (s.i >= s.fila.length) {
    s.fim = true;
    if (s.tipo === 'topico') { progEditar(s.tid).cartoes = true; concluirTarefa('cartoes', s.tid); }
    else concluirTarefa('rev');
    som('feito');
    if (!marcarEstudo()) paoFalar('terminou');
  }
  salvar();
  atualizar();
};
ACOES.refazerCartoes = function () { sessao.cards = null; atualizar(); };

TELAS.cartoes = function () {
  const due = cartoesParaHoje();
  const todos = Object.keys(db.cartoes).filter(cardInfo);
  const firmes = todos.filter(function (id) { return db.cartoes[id].cx >= 3; }).length;
  let html = topo({ titulo: 'Cartões', voltar: false, ajuda: 'cartoes' });
  html += '<div class="conteudo"><div class="contador-cartoes"><div class="cartao"><b>' + due.length + '</b><span class="mini">pra hoje</span></div>' +
    '<div class="cartao"><b>' + (todos.length - firmes) + '</b><span class="mini">aprendendo</span></div><div class="cartao"><b>' + firmes + '</b><span class="mini">já firmes</span></div></div>';
  if (due.length) {
    const porMat = {};
    due.forEach(function (id) { const n = cardInfo(id).m.nome; porMat[n] = (porMat[n] || 0) + 1; });
    html += '<div class="cartao borda secao"><h2 class="titulo-sec">' + plural(due.length, 'cartão pra revisar', 'cartões pra revisar') + '</h2>' +
      '<div class="tags">' + Object.keys(porMat).map(function (n) { return '<span class="tag">' + esc(n) + ' · ' + porMat[n] + '</span>'; }).join('') + '</div>' +
      '<button class="btn largo" type="button" data-a="ir" data-v="revisao">Revisar agora</button></div>';
  } else {
    html += '<div class="cartao vazio-msg">' + ARTE.pao(110) + '<b style="color:var(--destaque)">Nada pra revisar hoje!</b><span>Os cartões que você já viu voltam aqui sozinhos, na hora certa de revisar.</span></div>';
  }
  const novos = [];
  MATERIAS.forEach(function (m) { todasAulasDe(m).forEach(function (t) { if (t.cartoes && !progDe(t.id).cartoes) novos.push({ t: t, m: m }); }); });
  if (novos.length) {
    html += '<section class="secao"><h2 class="titulo-sec">Cartões novos pra aprender</h2><div class="lista">' + novos.slice(0, 6).map(function (x) {
      return itemSeta({ titulo: x.t.titulo, sub: x.m.nome + ' · ' + plural(x.t.cartoes.length, 'cartão', 'cartões'), attrs: 'data-a="ir" data-v="topico" data-id="' + x.t.id + '" data-aba="cartoes"' });
    }).join('') + '</div></section>';
  }
  html += '</div>';
  return { html: html };
};
TELAS.revisao = function () {
  let s = sessao.cards;
  if (!s) s = sessao.cards = novaSessaoCartoes(embaralha(cartoesParaHoje()).slice(0, 30), 'rev', null);
  let html = topo({ titulo: 'Revisão de cartões', ajuda: 'cartoes' }) + '<div class="conteudo">';
  if (!s.fila.length) html += '<div class="cartao vazio-msg">' + ARTE.pao(110) + '<b style="color:var(--destaque)">Nada pra revisar agora!</b></div><button class="btn largo" type="button" data-a="voltar">Voltar</button>';
  else html += sessaoCartoesHTML(s);
  return { html: html + '</div>', semAbas: true };
};

// ================= Materiais =================
const CONSULTAS = [
  ['fmat', 'Fórmulas', 'Matemática'], ['ffis', 'Fórmulas', 'Física'], ['tabela', 'Tabela periódica', 'Química'],
  ['estados', 'Estados e capitais', 'Geografia'], ['linha', 'Linha do tempo', 'História do Brasil'], ['verbos', 'Verbos irregulares', 'Inglês']
];
function tamanhoTxt(b) { return b > 1048576 ? (b / 1048576).toFixed(1).replace('.', ',') + ' MB' : Math.max(1, Math.round(b / 1024)) + ' KB'; }
TELAS.materiais = function () {
  let html = topo({ titulo: 'Materiais', voltar: false, ajuda: 'materiais' }) + '<div class="conteudo">';
  html += '<button class="item cartao borda" type="button" data-a="ir" data-v="videos" style="padding:12px 14px"><span class="item-ico" style="background:var(--vinho);color:var(--creme)">' + ico('play', 18) + '</span><span class="item-txt"><b>Videoaulas e links</b><span class="mini">Professores e sites escolhidos pra você</span></span><span class="seta">' + ico('seta', 18) + '</span></button>';
  html += '<section class="secao"><h2 class="titulo-sec">Consulta rápida</h2><div class="grade2">' + CONSULTAS.map(function (c) {
    return '<button class="consulta-btn" type="button" data-a="ir" data-v="consulta" data-tipo="' + c[0] + '"><b>' + c[1] + '</b><span class="mini">' + c[2] + '</span></button>';
  }).join('') + '</div></section>';
  html += '<section class="secao"><h2 class="titulo-sec">Seus materiais</h2>';
  if (db.arquivos.length) {
    html += '<div class="lista">' + db.arquivos.slice().reverse().map(function (a) {
      return '<div class="item"><button class="item" type="button" data-a="abrirArquivo" data-v="' + a.id + '" style="padding:0;border:none;min-height:44px;flex:1">' +
        '<span class="item-ico">' + ico(a.tipo === 'pdf' ? 'pdf' : 'foto', 20) + '</span><span class="item-txt"><b>' + esc(a.nome) + '</b><span class="mini">' + dataCurta(a.data) + ' · ' + tamanhoTxt(a.tam) + '</span></span></button>' +
        '<button class="btn-ico claro" type="button" data-a="apagarArquivo" data-v="' + a.id + '" aria-label="Apagar ' + esc(a.nome) + '">' + ico('lixo', 18) + '</button></div>';
    }).join('') + '</div>';
  } else html += '<div class="cartao mini centro">Guarde aqui fotos do caderno, da lousa ou PDFs da escola.</div>';
  html += '<label class="tracejado" style="display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer">' + ico('mais', 18) + ' Adicionar foto ou PDF<input class="so-leitor" type="file" accept="image/*,application/pdf" data-ch="arquivo"></label></section>';
  return { html: html + '</div>' };
};

// Arquivos guardados no celular (IndexedDB)
function abrirBanco() {
  return new Promise(function (res, rej) {
    const r = indexedDB.open('miaula-arquivos', 1);
    r.onupgradeneeded = function () { r.result.createObjectStore('arq'); };
    r.onsuccess = function () { res(r.result); };
    r.onerror = function () { rej(r.error); };
  });
}
function bancoFazer(modo, fn) {
  return abrirBanco().then(function (b) {
    return new Promise(function (res, rej) {
      const tx = b.transaction('arq', modo);
      const req = fn(tx.objectStore('arq'));
      tx.oncomplete = function () { res(req && req.result); };
      tx.onerror = function () { rej(tx.error); };
    });
  });
}
function reduzirImagem(arq) {
  return new Promise(function (res) {
    const url = URL.createObjectURL(arq), img = new Image();
    img.onload = function () {
      const max = 1800, f = Math.min(1, max / Math.max(img.width, img.height));
      if (f === 1 && arq.size < 1500000) { URL.revokeObjectURL(url); res(arq); return; }
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * f); c.height = Math.round(img.height * f);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      c.toBlob(function (b) { res(b && b.size < arq.size ? b : arq); }, 'image/jpeg', 0.85);
    };
    img.onerror = function () { URL.revokeObjectURL(url); res(arq); };
    img.src = url;
  });
}
ENTRADAS.arquivo = function (el) {
  const arqs = Array.prototype.slice.call(el.files || []);
  el.value = '';
  if (!arqs.length) return;
  let feitos = 0;
  arqs.reduce(function (p, arq) {
    return p.then(function () {
      const tipo = /^image\//.test(arq.type) ? 'img' : arq.type === 'application/pdf' || /\.pdf$/i.test(arq.name) ? 'pdf' : null;
      if (!tipo) { toast('Só dá pra guardar fotos e PDFs.'); return; }
      if (arq.size > 30 * 1048576) { toast('Esse arquivo é grande demais (máximo 30 MB).'); return; }
      return (tipo === 'img' ? reduzirImagem(arq) : Promise.resolve(arq)).then(function (blob) {
        const id = 'a' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
        return bancoFazer('readwrite', function (st) { return st.put(blob, id); }).then(function () {
          db.arquivos.push({ id: id, nome: arq.name || 'Foto', tipo: tipo, data: hojeStr(), tam: blob.size });
          feitos++;
        });
      });
    });
  }, Promise.resolve()).then(function () {
    if (feitos) { salvar(); toast(feitos === 1 ? 'Guardado!' : feitos + ' arquivos guardados!'); }
    if (rota.t === 'materiais') atualizar();
  }).catch(function () { toast('Não consegui guardar. O celular está sem espaço?'); });
};
ACOES.abrirArquivo = function (el) {
  const a = db.arquivos.find(function (x) { return x.id === el.dataset.v; });
  if (!a) return;
  if (a.tipo === 'img') { abrirOv('img', a.id); return; }
  bancoFazer('readonly', function (st) { return st.get(a.id); }).then(function (blob) {
    if (!blob) { toast('Não achei esse arquivo.'); return; }
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.target = '_blank'; link.rel = 'noopener'; link.download = a.nome;
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 60000);
  }).catch(function () { toast('Não consegui abrir.'); });
};
OVS.img = function (id) {
  const a = db.arquivos.find(function (x) { return x.id === id; }) || { nome: 'Foto' };
  return '<div class="folha-topo"><h2 style="font-size:18px">' + esc(a.nome) + '</h2><button class="btn-ico claro" type="button" data-a="fecharOv" aria-label="Fechar">' + ico('fechar', 20) + '</button></div>' +
    '<div class="conteudo"><img id="imgVisor" alt="' + esc(a.nome) + '" style="width:100%;border-radius:16px;background:#fff;min-height:120px"></div>';
};
OVS_DEPOIS.img = function (id) {
  bancoFazer('readonly', function (st) { return st.get(id); }).then(function (blob) {
    const im = $('#imgVisor');
    if (im && blob) { im.src = URL.createObjectURL(blob); }
  }).catch(function () { });
};
ACOES.apagarArquivo = function (el) {
  const a = db.arquivos.find(function (x) { return x.id === el.dataset.v; });
  if (!a || !confirm('Apagar "' + a.nome + '"?')) return;
  bancoFazer('readwrite', function (st) { return st.delete(a.id); }).catch(function () { });
  db.arquivos = db.arquivos.filter(function (x) { return x.id !== a.id; });
  salvar(); atualizar(); toast('Apagado.');
};

// ---- Consulta rápida ----
function tipoElemento(n) {
  if ([3, 11, 19, 37, 55, 87].indexOf(n) >= 0) return ['t-alc', 'Metal alcalino'];
  if ([4, 12, 20, 38, 56, 88].indexOf(n) >= 0) return ['t-alt', 'Metal alcalinoterroso'];
  if ([9, 17, 35, 53, 85, 117].indexOf(n) >= 0) return ['t-hal', 'Halogênio'];
  if ([2, 10, 18, 36, 54, 86, 118].indexOf(n) >= 0) return ['t-nob', 'Gás nobre'];
  if ([1, 6, 7, 8, 15, 16, 34].indexOf(n) >= 0) return ['t-nmet', 'Não metal'];
  if ([5, 14, 32, 33, 51, 52].indexOf(n) >= 0) return ['t-semi', 'Semimetal'];
  if (n >= 57 && n <= 71) return ['t-lan', 'Lantanídeo'];
  if (n >= 89 && n <= 103) return ['t-act', 'Actinídeo'];
  return ['', 'Metal'];
}
TELAS.consulta = function (r) {
  const c = CONSULTAS.find(function (x) { return x[0] === r.tipo; }) || CONSULTAS[0];
  const titulo = c[1] + (c[1] === 'Fórmulas' ? ' de ' + c[2] : '');
  let corpo = '', busca = '';
  if (r.tipo === 'fmat' || r.tipo === 'ffis') {
    const L = r.tipo === 'fmat' ? CONSULTA.formulasMat : CONSULTA.formulasFis;
    corpo = '<div class="lista">' + L.map(function (f) { return '<div class="formula"><span class="mini">' + esc(f.n) + '</span><code>' + esc(f.f) + '</code></div>'; }).join('') + '</div>';
  } else if (r.tipo === 'tabela') {
    busca = '<label class="busca">' + ico('busca', 18) + '<input type="search" placeholder="Procurar: ferro, Na, 26..." data-in="filtro" aria-label="Procurar elemento"></label>';
    corpo = '<div class="legenda">' + [['#E8964A', 'Alcalino'], ['#F2C35A', 'Alcalinoterroso'], ['#E9B8C0', 'Metal'], ['#3F8FB0', 'Não metal'], ['#9C8A6E', 'Semimetal'], ['#6E9B3F', 'Halogênio'], ['#7B6BD6', 'Gás nobre'], ['#D98A9C', 'Lantanídeo'], ['#B9798A', 'Actinídeo']].map(function (l) { return '<span style="--c:' + l[0] + '">' + l[1] + '</span>'; }).join('') + '</div>' +
      '<div class="elementos">' + CONSULTA.elementos.map(function (e) {
        const tp = tipoElemento(e[0]);
        return '<div class="elemento ' + tp[0] + '" data-busca="' + esc(normaliza(e[0] + ' ' + e[1] + ' ' + e[2] + ' ' + tp[1])) + '" title="' + esc(tp[1]) + '"><span class="num">' + e[0] + '</span><span class="sim">' + e[1] + '</span><span class="nome">' + esc(e[2]) + '</span><span class="massa">' + (e[3] || 'sintético') + '</span></div>';
      }).join('') + '</div><p class="mini centro">O número de cima é o número atômico (Z). O de baixo é a massa atômica aproximada.</p>';
  } else if (r.tipo === 'estados') {
    corpo = CONSULTA.regioes.map(function (g) {
      return '<section class="secao"><h2 class="titulo-sec">' + esc(g[0]) + '</h2><div class="lista">' + g[1].map(function (e) {
        return '<div class="item" style="min-height:44px"><span class="item-txt"><b>' + esc(e[0]) + '</b></span><span class="mini" style="color:var(--destaque);font-weight:700">' + esc(e[1]) + '</span></div>';
      }).join('') + '</div></section>';
    }).join('');
  } else if (r.tipo === 'linha') {
    corpo = '<div class="lista">' + CONSULTA.linhaTempo.map(function (l) { return '<div class="ano-linha"><b>' + esc(l[0]) + '</b><span>' + esc(l[1]) + '</span></div>'; }).join('') + '</div>';
  } else if (r.tipo === 'verbos') {
    busca = '<label class="busca">' + ico('busca', 18) + '<input type="search" placeholder="Procurar: go, comer..." data-in="filtro" aria-label="Procurar verbo"></label>';
    corpo = '<div class="cartao" style="padding:8px 12px"><table class="tabela-linhas"><thead><tr><th>Verbo</th><th>Passado</th><th>Particípio</th></tr></thead><tbody>' +
      CONSULTA.verbos.map(function (v) {
        return '<tr data-busca="' + esc(normaliza(v.join(' '))) + '"><td>' + esc(v[0]) + '<br><span class="mini" style="font-weight:400">' + esc(v[3]) + '</span></td><td>' + esc(v[1]) + '</td><td>' + esc(v[2]) + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }
  return { html: topo({ titulo: titulo, sub: c[2], ajuda: 'consulta', extra: busca }) + '<div class="conteudo">' + corpo + '</div>' };
};
ENTRADAS.filtro = function (el) {
  const q = normaliza(el.value.trim());
  document.querySelectorAll('[data-busca]').forEach(function (n) { n.classList.toggle('esconder', !!q && n.dataset.busca.indexOf(q) < 0); });
};

// ---- Videoaulas ----
TELAS.videos = function (r) {
  const f = sessao.filtroV || r.f || 'todas';
  const opcoes = [['todas', 'Todas']].concat(MATERIAS.map(function (m) { return [m.id, m.nome]; }));
  const extra = '<div class="chips rolar">' + opcoes.map(function (o) { return '<button class="chip' + (f === o[0] ? ' on' : '') + '" type="button" data-a="filtroV" data-v="' + o[0] + '">' + esc(o[1]) + '</button>'; }).join('') + '</div>';
  const lista = LINKS.filter(function (l) { return f === 'todas' || l.mat.indexOf(f) >= 0 || l.mat.indexOf('todas') >= 0; });
  let html = topo({ titulo: 'Videoaulas e links', ajuda: 'videos', extra: extra }) + '<div class="conteudo"><div class="lista">';
  html += lista.map(function (l) {
    return itemSeta({ tag: 'a', titulo: l.nome, sub: l.d + ' · ' + (l.tipo === 'yt' ? 'YouTube' : 'Site'), ico: ico(l.tipo === 'yt' ? 'video' : 'site', 20), attrs: 'href="' + esc(l.url) + '" target="_blank" rel="noopener"' });
  }).join('');
  html += '</div><p class="mini centro">Os links abrem fora do app, no YouTube ou no navegador. Precisa de internet.</p></div>';
  return { html: html, depois: function () { const on = document.querySelector('.chips.rolar .chip.on'); if (on && on.scrollIntoView) on.scrollIntoView({ inline: 'center', block: 'nearest' }); } };
};
ACOES.filtroV = function (el) { sessao.filtroV = el.dataset.v; atualizar(); };

// ================= Plano =================
function nomeItemPlano(id) { return id === 'rev' ? 'Revisão de cartões' : MAT_POR_ID[id] ? MAT_POR_ID[id].nome : id; }
TELAS.plano = function () {
  const hoje = new Date().getDay();
  let html = topo({ titulo: 'Plano', voltar: false, ajuda: 'plano' }) + '<div class="conteudo">';
  html += '<section class="secao"><div class="linha-sec"><h2 class="titulo-sec">Sua semana de estudos</h2></div><p class="mini">Toque num dia pra escolher as matérias. O Miaula monta o Plano de hoje com isso.</p><div class="lista">';
  html += [1, 2, 3, 4, 5, 6, 0].map(function (d) {
    const l = db.plano[d] || [];
    return '<button class="dia-plano' + (d === hoje ? ' hoje' : '') + '" type="button" data-a="editarDia" data-v="' + d + '"><span class="dia">' + DIAS_CURTO[d] + '</span><span class="tags">' +
      (l.length ? l.map(function (id) { return '<span class="tag">' + esc(nomeItemPlano(id)) + '</span>'; }).join('') : '<span class="mini">Dia de folga</span>') +
      '</span><span class="seta">' + ico('lapis', 18) + '</span></button>';
  }).join('');
  html += '</div></section>';
  html += '<div class="lista">' + itemSeta({ titulo: 'Resumo da semana', sub: 'Tempo, acertos e o que revisar', ico: ico('grafico', 20), attrs: 'data-a="ir" data-v="semana"' }) + '</div>';
  return { html: html + '</div>' };
};
ACOES.editarDia = function (el) { abrirOv('dia', +el.dataset.v); };
OVS.dia = function (d) {
  const l = db.plano[d] || [];
  const ids = MATERIAS.map(function (m) { return m.id; }).concat(['rev']);
  return '<div class="folha-topo"><h2>' + DIAS_SEM[d] + '</h2><button class="btn-ico claro" type="button" data-a="fecharOv" aria-label="Fechar">' + ico('fechar', 20) + '</button></div>' +
    '<div class="conteudo"><p class="mini">Escolha o que estudar nesse dia. Dica: duas ou três matérias por dia já é ótimo.</p><div class="chips">' +
    ids.map(function (id) { const on = l.indexOf(id) >= 0; return '<button class="chip' + (on ? ' on' : '') + '" type="button" data-a="togDia" data-v="' + id + '" aria-pressed="' + on + '">' + esc(nomeItemPlano(id)) + '</button>'; }).join('') +
    '</div><button class="btn largo" type="button" data-a="fecharOv">Pronto</button></div>';
};
ACOES.togDia = function (el) {
  const d = rota.ovd, id = el.dataset.v;
  const l = (db.plano[d] || []).slice();
  const i = l.indexOf(id);
  if (i >= 0) l.splice(i, 1); else l.push(id);
  db.plano[d] = l;
  if (d === new Date().getDay()) db.hoje = { data: null, tarefas: [] };
  salvar();
  desenharOv();
};

// ================= Semana =================
TELAS.semana = function () {
  const h = hojeStr(), dow = new Date().getDay();
  const ini = somaDias(h, -dow), fim = somaDias(ini, 6), iniAnt = somaDias(ini, -7), fimAnt = somaDias(ini, -1);
  const dias = [0, 1, 2, 3, 4, 5, 6].map(function (i) { return somaDias(ini, i); });
  const segDe = function (a, b) { let s = 0; Object.keys(db.seg).forEach(function (d) { if (d >= a && d <= b) s += db.seg[d]; }); return s; };
  const tot = segDe(ini, fim), totAnt = segDe(iniAnt, fimAnt);
  const rs = db.resp.filter(function (x) { return x.d >= ini && x.d <= fim; });
  const rsAnt = db.resp.filter(function (x) { return x.d >= iniAnt && x.d <= fimAnt; });
  const acc = rs.length ? Math.round(rs.filter(function (x) { return x.ok; }).length / rs.length * 100) : null;
  const diasEst = dias.filter(function (d) { return db.dias.indexOf(d) >= 0; }).length;
  const maxSeg = Math.max.apply(null, dias.map(function (d) { return db.seg[d] || 0; }).concat([60]));

  const accPor = function (lista, chave) {
    const g = {};
    lista.forEach(function (x) { const k = x[chave]; g[k] = g[k] || [0, 0]; g[k][0] += x.ok; g[k][1]++; });
    return g;
  };
  const mAt = accPor(rs, 'm'), mAn = accPor(rsAnt, 'm');
  let melhor = null;
  Object.keys(mAt).forEach(function (k) {
    if (mAt[k][1] < 3 || !mAn[k] || mAn[k][1] < 3) return;
    const a = Math.round(mAt[k][0] / mAt[k][1] * 100), b = Math.round(mAn[k][0] / mAn[k][1] * 100);
    if (a > b && (!melhor || a - b > melhor.dif)) melhor = { m: k, de: b, para: a, dif: a - b };
  });
  const tAt = accPor(rs, 't');
  const revisar = Object.keys(tAt).filter(function (k) { return tAt[k][1] >= 2 && tAt[k][0] / tAt[k][1] < 0.7 && TOP_POR_ID[k]; })
    .sort(function (a, b) { return tAt[a][0] / tAt[a][1] - tAt[b][0] / tAt[b][1]; }).slice(0, 2);

  let frase;
  if (!tot && !rs.length) frase = 'Essa semana tá começando. Bora estudar um pouquinho hoje?';
  else if (totAnt && tot > totAnt) frase = 'Que semana, ' + db.nome + '! ' + fmtTempo(tot - totAnt) + ' a mais que a passada. Tô bobo de orgulho.';
  else frase = 'Cada minutinho conta. Tô orgulhoso de você!';

  const d1 = dataDe(ini), d2 = dataDe(fim);
  const periodo = d1.getDate() + ' de ' + MESES[d1.getMonth()] + ' a ' + d2.getDate() + ' de ' + MESES[d2.getMonth()];
  let html = topo({ titulo: 'Sua semana', sub: periodo, ajuda: 'semana', extra: '<div class="recado"><div class="recado-gato">' + ARTE.pao(56) + '</div><p class="frase">“' + esc(frase) + '”</p></div>' });
  html += '<div class="conteudo"><div class="numeros"><div class="cartao"><b>' + fmtTempo(tot) + '</b><span class="mini">estudando</span></div>' +
    '<div class="cartao"><b>' + (acc == null ? '—' : acc + '%') + '</b><span class="mini">de acertos</span></div>' +
    '<div class="cartao"><b>' + diasEst + ' de 7</b><span class="mini">dias</span></div></div>';
  html += '<div class="cartao secao"><b>Minutos por dia</b><div class="barras">' + dias.map(function (d, i) {
    const s = db.seg[d] || 0, alt = Math.max(4, Math.round(s / maxSeg * 84));
    return '<div class="' + (d === h ? 'hoje' : '') + '" title="' + fmtTempo(s) + '"><i style="height:' + alt + 'px"></i><span>' + DIAS_CURTO[i][0] + '</span></div>';
  }).join('') + '</div></div>';
  html += '<div class="lista">';
  if (melhor) html += '<div class="item"><span class="item-txt"><span class="mini" style="color:var(--ok);font-weight:700">MELHOROU</span><b>' + esc(MAT_POR_ID[melhor.m].nome) + '</b></span><b style="color:var(--ok-txt)">' + melhor.de + '% → ' + melhor.para + '%</b></div>';
  revisar.forEach(function (k) {
    html += '<button class="item" type="button" data-a="ir" data-v="topico" data-id="' + k + '"><span class="item-txt"><span class="mini" style="color:var(--destaque);font-weight:700">PRA REVISAR</span><b>' + esc(TOP_POR_ID[k].t.titulo) + '</b></span><span class="mini">' + esc(TOP_POR_ID[k].m.nome) + '</span><span class="seta">' + ico('seta', 18) + '</span></button>';
  });
  if (!melhor && !revisar.length) html += '<div class="item"><span class="item-txt mini">Quando você responder mais perguntas, aqui aparece o que melhorou e o que vale revisar.</span></div>';
  html += '</div></div>';
  return { html: html };
};

// ================= Calma =================
const FASES_R = [['Inspira...', 1, 4], ['Segura...', 1, 4], ['Solta devagar...', 0.62, 6]];
const RESP = { ativo: false, fase: -1, ciclos: 0, timer: null };
function pararRespiro() { clearTimeout(RESP.timer); RESP.ativo = false; RESP.fase = -1; RESP.ciclos = 0; }
function aplicarRespiro() {
  const c1 = $('#rc1'), c2 = $('#rc2'), g = $('#rgato');
  if (!c1) { pararRespiro(); return; }
  const f = RESP.fase >= 0 ? FASES_R[RESP.fase] : null;
  const e = f ? f[1] : 0.62, dur = f ? f[2] : 0.6;
  [c1, c2].forEach(function (x) { x.style.transitionDuration = dur + 's'; x.style.transform = 'scale(' + e + ')'; });
  g.style.transitionDuration = dur + 's';
  g.style.transform = 'scale(' + (f && e === 1 ? 1.08 : 0.94) + ')';
  $('#rtxt').textContent = f ? f[0] : 'Vamos respirar juntos?';
  $('#rdica').textContent = RESP.ativo ? (RESP.ciclos ? plural(RESP.ciclos, 'respiração completa', 'respirações completas') : 'Acompanha o círculo') : 'Inspira 4, segura 4, solta 6';
  $('#rbtn').textContent = RESP.ativo ? 'Parar' : 'Começar';
}
function passoRespiro(i) {
  if (!RESP.ativo) return;
  if (i === 0 && RESP.fase === 2) { RESP.ciclos++; db.respiracoes = (db.respiracoes || 0) + 1; }
  RESP.fase = i;
  aplicarRespiro();
  RESP.timer = setTimeout(function () { passoRespiro((i + 1) % 3); }, FASES_R[i][2] * 1000);
}
ACOES.respirar = function () {
  if (RESP.ativo) {
    const n = RESP.ciclos;
    pararRespiro(); salvar(); aplicarRespiro(); checarConquistas();
    if (n >= 2) paoFalar('', 'Muito bem. ' + plural(n, 'respiração', 'respirações') + '. ' + paoFrase('autoestima'));
  } else { RESP.ativo = true; RESP.ciclos = 0; RESP.fase = -1; passoRespiro(0); }
};
TELAS.calma = function () {
  let html = topo({ titulo: 'Calma', voltar: false, ajuda: 'calma', extra: '<span class="sub" style="margin-top:-6px">Tá tudo bem. Respira comigo.</span>' }) + '<div class="conteudo">';
  html += '<div class="respiro-caixa"><div class="respiro"><div class="c1" id="rc1"></div><div class="c2" id="rc2"></div><div class="gato" id="rgato">' + ARTE.pao(120) + '</div></div>' +
    '<div class="respiro-txt" id="rtxt" aria-live="polite">Vamos respirar juntos?</div><div class="mini" id="rdica">Inspira 4, segura 4, solta 6</div>' +
    '<button class="btn" type="button" id="rbtn" data-a="respirar" style="min-width:160px">Começar</button></div>';
  if (!sessao.autoestima) sessao.autoestima = paoFrase('autoestima');
  html += '<div class="cartao borda secao" style="align-items:center;text-align:center"><span class="mini" style="color:var(--destaque);font-weight:700;letter-spacing:.06em">' + ico('coracao', 14) + ' LEMBRETE PRA VOCÊ</span>' +
    '<p class="frase entra" id="autoTxt" style="font-size:19px;line-height:1.4">“' + esc(sessao.autoestima) + '”</p>' +
    '<button class="btn sec peq" type="button" data-a="outraAuto">' + ico('girar', 16) + ' Outra frase</button></div>';
  const PJ = faseJogo();
  html += '<button class="item cartao borda" type="button" data-a="ir" data-v="jogo" style="padding:12px 14px"><span class="recado-gato" style="width:54px;height:54px;background:var(--rosa-claro)">' + ARTE.rostinho(40) + '</span>' +
    '<span class="item-txt"><b>Joguinho pra descansar</b><span class="mini">Sudoku de gatinho' + (PJ ? ' · Fase ' + db.jogo.fase + ' · ' + NIVEL_JOGO[PJ.n] : '') + '</span></span><span class="seta">' + ico('seta', 18) + '</span></button>';
  html += '<div class="grade2">' + [['cinco', '5 coisas que você vê', 'Volta pro agora, passo a passo'], ['tirar', 'Tirar da cabeça', 'Escreve o que tá preocupando'], ['prova', 'Antes da prova', 'Dicas rápidas pra hora H'], ['recado', 'Recado do MOSS', 'Uma mensagem só pra você']].map(function (c) {
    return '<button class="consulta-btn" type="button" data-a="ir" data-v="' + c[0] + '"><b>' + c[1] + '</b><span class="mini">' + c[2] + '</span></button>';
  }).join('') + '</div>';
  html += '<p class="cvv">Se ficar muito pesado, fala com alguém de confiança. O CVV atende de graça, a qualquer hora, no <a href="tel:188">188</a>.</p></div>';
  return { html: html };
};
// ================= Sudoku de gatinho =================
// Um gatinho por linha, coluna e cor; não podem se encostar nem na diagonal.
// Não conta como estudo (é pra descansar), mas dá a medalha "Mestre dos gatinhos".
const NIVEL_JOGO = { 5: 'Fácil', 6: 'Médio', 7: 'Difícil', 8: 'Desafio' };
// Depois da última fase, as difíceis e os desafios voltam em rodízio.
function faseJogo() {
  const F = window.JOGO_FASES || [];
  if (!F.length) return null;
  const i = db.jogo.fase - 1;
  if (i < F.length) return F[i];
  const grandes = F.filter(function (p) { return p.n >= 7; });
  return grandes[(i - F.length) % grandes.length];
}
function casasJogo(P) {
  const j = db.jogo;
  if (!j.cel || j.celFase !== j.fase || j.cel.length !== P.n * P.n) { j.cel = Array(P.n * P.n).fill(0); j.celFase = j.fase; }
  return j.cel;
}
function brigasJogo(P, cel) {
  const n = P.n, reg = function (i) { return P.m[Math.floor(i / n)][i % n]; };
  const gatos = [];
  cel.forEach(function (v, i) { if (v === 2) gatos.push(i); });
  const briga = {};
  gatos.forEach(function (a) {
    gatos.forEach(function (b) {
      if (a >= b) return;
      const ra = Math.floor(a / n), ca = a % n, rb = Math.floor(b / n), cb = b % n;
      if (ra === rb || ca === cb || reg(a) === reg(b) || (Math.abs(ra - rb) <= 1 && Math.abs(ca - cb) <= 1)) { briga[a] = 1; briga[b] = 1; }
    });
  });
  return { gatos: gatos, briga: briga, venceu: gatos.length === n && !Object.keys(briga).length };
}
TELAS.jogo = function () {
  const P = faseJogo();
  if (!P) return { html: topo({ titulo: 'Sudoku de gatinho' }) + '<div class="conteudo"><div class="cartao">O jogo não carregou. Tente abrir de novo.</div></div>' };
  const n = P.n, cel = casasJogo(P), b = brigasJogo(P, cel);
  const regra = '<p class="jogo-regra">Esconda ' + n + ' gatinhos: um em cada linha, cada coluna e cada cor. Eles não podem se encostar, nem na diagonal.</p>';
  let html = topo({ titulo: 'Sudoku de gatinho', sub: 'Fase ' + db.jogo.fase + ' · ' + NIVEL_JOGO[n], ajuda: 'jogo', semCalc: true, extra: regra }) + '<div class="conteudo">';
  html += '<div class="jogo-info"><span>Gatinhos: <b style="color:var(--destaque)">' + b.gatos.length + ' de ' + n + '</b></span><span>Toque 1x: patinha · 2x: gatinho</span></div>';
  html += '<div class="jogo-tab' + (n >= 7 ? ' grande' : '') + '" style="grid-template-columns:repeat(' + n + ',minmax(0,1fr))">' + cel.map(function (v, i) {
    const r = Math.floor(i / n), c = i % n, k = P.m[r].charCodeAt(c) - 65;
    const nome = 'Linha ' + (r + 1) + ', coluna ' + (c + 1) + (v === 2 ? ', gatinho' : v === 1 ? ', patinha' : '');
    return '<button class="casa r' + k + (b.briga[i] ? ' briga' : '') + (v === 2 && sessao.novoGato === i ? ' novo' : '') + '" type="button" data-a="casa" data-v="' + i + '" aria-label="' + nome + '">' +
      (v === 2 ? ARTE.rostinho(40) : v === 1 ? ico('pata', 16) : '') + '</button>';
  }).join('') + '</div>';
  if (Object.keys(b.briga).length) html += '<p class="centro" style="color:var(--erro);font-weight:700;font-size:14px">Opa! Tem gatinho brigando (os de borda vermelha).</p>';
  html += '<div class="linha-btns"><button class="btn sec" type="button" data-a="jogoRecomecar">Recomeçar</button><button class="btn" type="button" data-a="jogoDica">Dica</button></div>';
  html += '<p class="mini centro">' + (db.jogo.feitas ? 'Você já passou ' + plural(db.jogo.feitas, 'fase', 'fases') + '.' : 'Dica: comece pelas cores pequenas, elas têm poucos lugares pro gatinho.') + '</p>';
  return { html: html + '</div>', semAbas: true };
};
ACOES.casa = function (el) {
  if (sessao.jogoGanhou) return;
  const P = faseJogo(), cel = casasJogo(P), i = +el.dataset.v;
  cel[i] = (cel[i] + 1) % 3;
  sessao.novoGato = cel[i] === 2 ? i : null;
  som(cel[i] === 2 ? 'pop' : 'virar');
  const b = brigasJogo(P, cel);
  // Desenha o tabuleiro resolvido antes de passar de fase, pra ela ver os gatinhos que achou.
  atualizar();
  if (b.venceu) {
    sessao.jogoGanhou = true;
    db.jogo.feitas = (db.jogo.feitas || 0) + 1;
    db.jogo.fase += 1; db.jogo.cel = null; db.jogo.celFase = null;
  }
  salvar();
  if (b.venceu) {
    som('feito');
    const prox = faseJogo();
    $('#tela').insertAdjacentHTML('beforeend', '<div class="festa" id="jogoFim"><div class="festa-caixa" role="dialog" aria-label="Fase completa">' +
      '<div class="cresce">' + ARTE.poponi(Math.max(1, fasePoponi(db.poponi.dias)), 150, false, roupaAtual()) + '</div><h2>Achou todos!</h2>' +
      '<p>Os ' + P.n + ' gatinhos estão bem acomodados.' + (prox && prox.n > P.n ? ' A próxima fase é maior: ' + prox.n + ' por ' + prox.n + '!' : '') + '</p>' +
      '<button class="btn largo" type="button" data-a="jogoProxima">Próxima fase</button><button class="btn sec largo" type="button" data-a="jogoSair">Voltar a estudar</button></div></div>');
    checarConquistas();
  }
};
ACOES.jogoProxima = function () { sessao.jogoGanhou = false; sessao.novoGato = null; desenhar(true); };
ACOES.jogoSair = function () { sessao.jogoGanhou = false; abrirAba('inicio'); };
ACOES.jogoRecomecar = function () {
  if (sessao.jogoGanhou) return;
  const P = faseJogo();
  db.jogo.cel = Array(P.n * P.n).fill(0); db.jogo.celFase = db.jogo.fase;
  sessao.novoGato = null; salvar(); som('virar'); atualizar();
};
ACOES.jogoDica = function () {
  if (sessao.jogoGanhou) return;
  const P = faseJogo(), cel = casasJogo(P), n = P.n;
  const certo = function (i) { return P.s[Math.floor(i / n)] === i % n; };
  const errado = cel.findIndex(function (v, i) { return v === 2 && !certo(i); });
  if (errado >= 0) { cel[errado] = 1; toast('Esse gatinho não fica aí. Troquei por uma patinha.'); salvar(); atualizar(); return; }
  for (let r = 0; r < n; r++) {
    const i = r * n + P.s[r];
    if (cel[i] !== 2) {
      cel[i] = 1;
      toast('Um gatinho fica aqui!');
      ACOES.casa({ dataset: { v: String(i) } });
      return;
    }
  }
};
ACOES.outraAuto = function () {
  sessao.autoestima = paoFrase('autoestima');
  salvar(); som('virar');
  const p = $('#autoTxt');
  if (p) { p.textContent = '“' + sessao.autoestima + '”'; p.classList.remove('entra'); void p.offsetWidth; p.classList.add('entra'); }
};
TELAS.cinco = function () {
  const i = sessao.cinco || 0;
  let html = topo({ titulo: 'Volta pro agora', sub: 'Exercício 5, 4, 3, 2, 1', ajuda: 'calma' }) + '<div class="conteudo">';
  if (i < 5) {
    const p = CALMA.cinco[i];
    html += '<div class="cartao centro entra" style="padding:30px 18px;display:flex;flex-direction:column;gap:10px;align-items:center"><div class="passo-grande">' + p[0] + '</div><h2 class="titulo-sec">' + esc(p[1]) + '</h2><p style="color:var(--suave)">' + esc(p[2]) + '</p></div>' +
      '<div class="pontos" style="--x:1">' + [0, 1, 2, 3, 4].map(function (k) { return '<i class="' + (k === i ? 'on' : '') + '" style="background:' + (k === i ? 'var(--destaque)' : 'var(--rosa)') + '"></i>'; }).join('') + '</div>' +
      '<p class="mini centro">Sem pressa. Quando terminar, toque em próximo.</p><button class="btn largo" type="button" data-a="cincoProx">Próximo</button>';
  } else {
    html += '<div class="resultado entra">' + ARTE.pao(150) + '<h2 class="titulo-sec">Você voltou pro agora.</h2><p class="frase" style="font-size:18px;color:var(--destaque)">“Tô orgulhoso de você. Respira mais uma vez, bem devagar.”</p></div>' +
      '<button class="btn largo" type="button" data-a="voltar">Voltar</button><button class="btn sec largo" type="button" data-a="cincoDeNovo">Fazer de novo</button>';
  }
  return { html: html + '</div>' };
};
ACOES.cincoProx = function () { sessao.cinco = (sessao.cinco || 0) + 1; som(sessao.cinco >= 5 ? 'feito' : 'ok'); desenhar(true); };
ACOES.cincoDeNovo = function () { sessao.cinco = 0; desenhar(true); };
TELAS.tirar = function () {
  let html = topo({ titulo: 'Tirar da cabeça', sub: 'Escreve o que tá te preocupando', ajuda: 'calma' }) + '<div class="conteudo">';
  html += '<textarea class="campo" id="tirarTxt" rows="7" placeholder="Pode escrever tudo. Ninguém vai ler." aria-label="O que está te preocupando"></textarea>' +
    '<div class="linha-btns"><button class="btn sec" type="button" data-a="jogarFora">Jogar fora</button><button class="btn" type="button" data-a="guardarPens">Guardar</button></div>' +
    '<p class="mini centro">"Jogar fora" apaga pra sempre. Às vezes só escrever já alivia.</p>';
  if (db.pensamentos.length) {
    html += '<section class="secao"><h2 class="titulo-sec">Guardados</h2><div class="lista">' + db.pensamentos.slice().reverse().map(function (p) {
      return '<div class="pensamento"><p>' + esc(p.txt) + '<br><span class="mini">' + dataCurta(p.data) + '</span></p><button class="btn-ico claro" type="button" data-a="apagarPens" data-v="' + p.id + '" aria-label="Apagar">' + ico('lixo', 18) + '</button></div>';
    }).join('') + '</div></section>';
  }
  return { html: html + '</div>' };
};
ACOES.jogarFora = function () {
  const ta = $('#tirarTxt');
  if (!ta || !ta.value.trim()) { toast('Escreve alguma coisa primeiro.'); return; }
  ta.classList.add('voando'); som('virar');
  setTimeout(function () { ta.value = ''; ta.classList.remove('voando'); paoFalar('', 'Pronto. Isso não precisa mais ficar aí dentro.'); }, 900);
};
ACOES.guardarPens = function () {
  const ta = $('#tirarTxt');
  if (!ta || !ta.value.trim()) { toast('Escreve alguma coisa primeiro.'); return; }
  db.pensamentos.push({ id: 'p' + Date.now().toString(36), txt: ta.value.trim(), data: hojeStr() });
  salvar(); toast('Guardado.'); atualizar();
};
ACOES.apagarPens = function (el) {
  if (!confirm('Apagar esse texto?')) return;
  db.pensamentos = db.pensamentos.filter(function (p) { return p.id !== el.dataset.v; });
  salvar(); atualizar();
};
TELAS.prova = function () {
  let html = topo({ titulo: 'Antes da prova', sub: 'Dicas rápidas pra hora H', ajuda: 'calma' }) + '<div class="conteudo"><div class="lista">';
  html += CALMA.prova.map(function (d, i) {
    return '<div class="item" style="align-items:flex-start"><span class="status cheio" style="margin-top:2px">' + (i + 1) + '</span><span class="item-txt"><b>' + esc(d[0]) + '</b><span style="color:var(--suave);font-size:15px">' + esc(d[1]) + '</span></span></div>';
  }).join('');
  return { html: html + '</div><button class="btn sec largo" type="button" data-a="aba" data-v="calma">Respirar com o Pãozinho</button></div>' };
};
TELAS.recado = function () {
  const txt = db.recado || CALMA.recado;
  return {
    html: topo({ titulo: 'Recado do MOSS', sub: 'Uma mensagem só pra você', ajuda: 'calma' }) +
      '<div class="conteudo"><div class="cartao centro entra" style="padding:24px 20px;display:flex;flex-direction:column;align-items:center;gap:14px">' + ARTE.pao(150) +
      '<p class="frase" style="font-size:19px;line-height:1.5;color:var(--destaque)">' + esc(txt) + '</p></div></div>'
  };
};

// ================= Redação =================
function semanaNumero() { return Math.floor((dataDe(hojeStr()) - new Date(2026, 0, 4)) / (7 * 86400000)); }
function temaDaSemana(delta) { const L = REDACAO.temas, n = semanaNumero() + (delta || 0); return L[((n % L.length) + L.length) % L.length]; }
TELAS.redacao = function () {
  const delta = sessao.temaDelta || 0, tema = temaDaSemana(delta);
  let html = topo({ titulo: 'Redação', sub: 'Treino semanal', ajuda: 'redacao', extra: '<div class="cartao" style="background:var(--vinho2);color:var(--creme)"><span class="mini" style="color:var(--rosa-txt);font-weight:700;letter-spacing:.06em">' + (delta ? 'OUTRO TEMA' : 'TEMA DA SEMANA') + '</span><p class="frase" style="font-size:19px;margin-top:4px;line-height:1.3">' + esc(tema) + '</p></div>' });
  html += '<div class="conteudo"><button class="btn sec peq" type="button" data-a="outroTema" style="align-self:flex-start">' + ico('girar', 16) + ' Ver outro tema</button>';
  html += '<section class="secao"><h2 class="titulo-sec">Ideias pra pensar</h2><div class="lista">' + REDACAO.pensar.map(function (p) { return '<div class="item" style="min-height:44px"><span class="item-txt">' + esc(p) + '</span></div>'; }).join('') + '</div></section>';
  html += '<section class="secao"><h2 class="titulo-sec">O caminho do texto</h2><div class="lista">' + REDACAO.partes.map(function (p, i) {
    return '<div class="item"><span class="status">' + (i + 1) + '</span><span class="item-txt"><b>' + esc(p[0]) + '</b><span class="mini">' + esc(p[1]) + '</span></span></div>';
  }).join('') + '</div></section>';
  html += '<button class="btn largo" type="button" data-a="ir" data-v="escrever" data-tema="' + esc(tema) + '">' + ico('lapis', 18) + ' Escrever minha redação</button>';
  if (db.redacoes.length) {
    html += '<section class="secao"><h2 class="titulo-sec">Minhas redações</h2><div class="lista">' + db.redacoes.map(function (r) {
      const n = (r.texto.trim().match(/\S+/g) || []).length;
      return itemSeta({ titulo: r.tema, sub: dataCurta(r.data) + ' · ' + plural(n, 'palavra', 'palavras'), attrs: 'data-a="ir" data-v="escrever" data-id="' + r.id + '"' });
    }).join('') + '</div></section>';
  }
  return { html: html + '</div>' };
};
ACOES.outroTema = function () { sessao.temaDelta = (sessao.temaDelta || 0) + 1; atualizar(); };
function contarTexto(t) { const p = (t.trim().match(/\S+/g) || []).length; return { p: p, l: Math.ceil(p / 11) }; }
TELAS.escrever = function (r) {
  if (!sessao.red) {
    const ex = r.id ? db.redacoes.find(function (x) { return x.id === r.id; }) : null;
    sessao.red = ex ? { id: ex.id, tema: ex.tema, texto: ex.texto, checks: (ex.checks || []).slice() } : { id: null, tema: r.tema || temaDaSemana(0), texto: '', checks: [] };
  }
  const s = sessao.red, c = contarTexto(s.texto);
  let html = topo({ titulo: 'Minha redação', sub: 'Redação', ajuda: 'redacao' }) + '<div class="conteudo">';
  html += '<div class="cartao"><span class="mini">Tema</span><p style="font-weight:700">' + esc(s.tema) + '</p></div>';
  html += '<textarea class="campo" rows="14" data-in="redTexto" placeholder="Comece pela introdução: apresente o problema e a sua opinião..." aria-label="Texto da redação">' + esc(s.texto) + '</textarea>';
  html += '<div class="contadores"><span id="cPal">' + plural(c.p, 'palavra', 'palavras') + '</span><span id="cLin">cerca de ' + plural(c.l, 'linha', 'linhas') + '</span><span>No ENEM: de 7 a 30 linhas</span></div>';
  html += '<section class="secao"><h2 class="titulo-sec">Conferir meu texto</h2><div class="cartao">' + REDACAO.conferir.map(function (t, i) {
    return '<label class="check-linha"><input type="checkbox" data-ch="redCheck" data-i="' + i + '"' + (s.checks.indexOf(i) >= 0 ? ' checked' : '') + '> ' + esc(t) + '</label>';
  }).join('') + '</div></section>';
  html += '<button class="btn largo" type="button" data-a="salvarRed">Salvar redação</button>';
  if (s.id) html += '<button class="btn sec largo" type="button" data-a="apagarRed">Apagar redação</button>';
  return { html: html + '</div>', semAbas: true };
};
ENTRADAS.redTexto = function (el) {
  if (!sessao.red) return;
  sessao.red.texto = el.value;
  const c = contarTexto(el.value);
  $('#cPal').textContent = plural(c.p, 'palavra', 'palavras');
  $('#cLin').textContent = 'cerca de ' + plural(c.l, 'linha', 'linhas');
};
ENTRADAS.redCheck = function (el) {
  const s = sessao.red, i = +el.dataset.i;
  if (!s) return;
  s.checks = s.checks.filter(function (x) { return x !== i; });
  if (el.checked) s.checks.push(i);
};
ACOES.salvarRed = function () {
  const s = sessao.red;
  if (!s || !s.texto.trim()) { toast('Escreve o texto primeiro.'); return; }
  let r = s.id ? db.redacoes.find(function (x) { return x.id === s.id; }) : null;
  if (!r) { r = { id: 'r' + Date.now().toString(36) }; db.redacoes.unshift(r); s.id = r.id; }
  r.tema = s.tema; r.texto = s.texto; r.checks = s.checks.slice(); r.data = hojeStr();
  toast('Redação salva!'); som('feito');
  let pao = false;
  if (contarTexto(s.texto).p >= 80) { concluirTarefa('red'); pao = marcarEstudo(); }
  salvar();
  if (!pao) paoFalar('terminou');
  atualizar();
};
ACOES.apagarRed = function () {
  const s = sessao.red;
  if (!s || !s.id || !confirm('Apagar essa redação?')) return;
  db.redacoes = db.redacoes.filter(function (x) { return x.id !== s.id; });
  salvar(); voltar();
};

// ================= Poponi =================
TELAS.poponi = function () {
  const d = db.poponi.dias, f = fasePoponi(d), dorm = d === 0;
  let html = topo({ titulo: 'Poponi', sub: 'Sua gatinha de estudos', ajuda: 'poponi' }) + '<div class="conteudo">';
  html += '<div class="cartao secao" style="align-items:center"><div class="poponi-palco">' + ARTE.poponi(f, [150, 180, 205, 230, 255][f], dorm, roupaAtual()) + '</div>';
  if (dorm) html += '<h2 class="titulo-sec centro">A Poponi está dormindo</h2><p class="centro">Estude hoje pra ela acordar!</p>';
  else {
    html += '<h2 class="titulo-sec centro">Ela é a ' + NOMES_FASE[f] + '</h2><p class="centro"><b>' + plural(d, 'dia', 'dias') + '</b> de estudo</p>' +
      '<p class="centro mini">' + (f < 4 ? 'Faltam ' + plural(LIM[f + 1] - d, 'dia', 'dias') + ' pra ela virar ' + NOMES_FASE[f + 1] + '.' : 'Ela chegou no tamanho máximo. Que orgulho!') + '</p>';
  }
  html += '<p class="centro mini">' + (db.poponi.ultimo === hojeStr() ? 'Hoje você já cuidou dela.' : 'Ela tá esperando você estudar hoje.') + '</p></div>';
  html += '<div class="cartao"><div class="fases">' + [0, 1, 2, 3, 4].map(function (i) {
    return '<div class="' + (i <= f && !dorm ? 'on' : '') + '">' + ARTE.poponi(i, 30 + i * 8) + '<span>' + plural(LIM[i], 'dia', 'dias') + '</span><span>' + NOMES_FASE[i] + '</span></div>';
  }).join('') + '</div></div>';
  html += '<div class="cartao mini" style="font-size:14px;line-height:1.5">Cada dia que você estuda, ela cresce. <b>Estudar</b> é terminar um resumo, umas perguntas, uns cartões ou uma redação. Se pular um dia, ela só volta uma fase, não volta a ser neném.</div>';
  const fv = Math.max(f, 1), atual = roupaAtual();
  html += '<section class="secao"><div class="linha-sec"><h2 class="titulo-sec">Guarda-roupa</h2><span class="mini">' + ico('cabide', 18) + '</span></div><div class="roupas">' +
    '<button class="roupa' + (!atual ? ' on' : '') + '" type="button" data-a="vestir" data-v="" aria-pressed="' + !atual + '">' + ARTE.poponi(fv, 76) + 'Sem roupinha</button>' +
    ARTE.roupas.map(function (r) {
      if (!roupaLiberada(r)) return '<div class="roupa bloq"><span class="cad">' + ico('cadeado', 26) + '</span><span>' + esc(ROUPAS_NOMES[r]) + '</span><span class="mini" style="font-weight:500;text-align:center">' + esc(conquistaDaRoupa(r).nome) + '</span></div>';
      return '<button class="roupa' + (atual === r ? ' on' : '') + '" type="button" data-a="vestir" data-v="' + r + '" aria-pressed="' + (atual === r) + '">' + ARTE.poponi(fv, 76, false, r) + esc(ROUPAS_NOMES[r]) + '</button>';
    }).join('') + '</div><p class="mini">As roupinhas chegam junto com algumas medalhas. Uma vez ganha, é dela pra sempre.</p></section>';
  html += '<div class="lista">' + itemSeta({ titulo: 'Conquistas', sub: Object.keys(db.conquistas).length + ' de ' + CONQUISTAS.length + ' medalhas', ico: ico('medalha', 20), attrs: 'data-a="ir" data-v="conquistas"' }) + '</div>';
  return { html: html + '</div>' };
};
ACOES.vestir = function (el) {
  db.poponi.roupa = el.dataset.v || null;
  salvar(); som('pop'); atualizar();
};

// ================= Conquistas =================
TELAS.conquistas = function () {
  const n = Object.keys(db.conquistas).length;
  let html = topo({ titulo: 'Conquistas', sub: n + ' de ' + CONQUISTAS.length + ' medalhas', ajuda: 'conquistas' }) + '<div class="conteudo"><div class="medalhas">';
  html += CONQUISTAS.map(function (c) {
    const d = db.conquistas[c.id];
    return '<div class="medalha' + (d ? '' : ' bloq') + '"><span class="disco">' + ico(d ? c.ico : 'cadeado', 26) + '</span><b>' + esc(c.nome) + '</b><span>' +
      (d ? 'Ganhou em ' + dataCurta(d) : esc(c.como)) + '</span>' + (c.roupa ? '<span style="color:var(--destaque);font-weight:700">+ ' + esc(ROUPAS_NOMES[c.roupa]) + '</span>' : '') + '</div>';
  }).join('');
  return { html: html + '</div></div>' };
};

// ================= Treinar: simulado e erros =================
function treinoHTML() {
  const n = listaErros().length, s = db.simAtual;
  return '<section class="secao"><h2 class="titulo-sec">Treinar</h2><div class="grade2">' +
    '<button class="treino-btn" type="button" data-a="ir" data-v="simulado"><span class="item-ico">' + ico('relogio', 20) + '</span><b>Simulado</b><span class="mini">' + (s && !s.fim ? 'Continuar de onde parou' : 'Prova de treino misturada') + '</span></button>' +
    '<button class="treino-btn" type="button" data-a="ir" data-v="erros"><span class="item-ico">' + ico('alvo', 20) + '</span><b>Meus erros' + (n ? ' <span class="selo-num">' + n + '</span>' : '') + '</b><span class="mini">' + (n ? 'Treinar o que errou' : 'Nada pra revisar') + '</span></button>' +
    '</div></section>';
}
function materiasComPerguntas() { return MATERIAS.filter(function (m) { return !m.especial; }); }
function poolSimulado(cfg) {
  const porMat = {};
  materiasComPerguntas().forEach(function (m) {
    if (cfg.mats.indexOf(m.id) < 0) return;
    cfg.anos.forEach(function (a) {
      aulasDe(m, a).forEach(function (t) {
        (t.perguntas || []).forEach(function (_, n) { (porMat[m.id] = porMat[m.id] || []).push(t.id + ':' + n); });
      });
    });
  });
  return porMat;
}
// Mistura as matérias: pega uma de cada vez, pra prova não ficar só de uma.
function montarSimulado(cfg) {
  const porMat = poolSimulado(cfg), filas = Object.keys(porMat).map(function (k) { return embaralha(porMat[k]); });
  const qs = [];
  for (let r = 0; qs.length < cfg.qtd && filas.some(function (f) { return f.length; }); r++) {
    embaralha(filas).forEach(function (f) { if (f.length && qs.length < cfg.qtd) qs.push(f.pop()); });
  }
  return embaralha(qs).map(function (k) { return { k: k, ops: embaralha(erroInfo(k).P.o.map(function (_, j) { return j; })) }; });
}
function cfgSimulado() {
  return sessao.simCfg || (sessao.simCfg = { mats: materiasComPerguntas().map(function (m) { return m.id; }), anos: [db.ano], qtd: 20, tempo: 30 });
}
function fmtRelogio(s) { s = Math.max(0, Math.ceil(s)); return Math.floor(s / 60) + ':' + pad(s % 60); }
function restanteSim(s) { return s.lim ? s.lim - (Date.now() - s.ini) / 1000 : null; }

TELAS.simulado = function (r) {
  const s = db.simAtual;
  if (s && s.fim && r.ver === 'res') return simResultado(s);
  if (s && !s.fim && r.ver === 'prova') return simProva(s);
  const cfg = cfgSimulado(), pool = poolSimulado(cfg);
  const totalDisp = Object.keys(pool).reduce(function (t, k) { return t + pool[k].length; }, 0);
  const chip = function (on, acao, v, txt) { return '<button class="chip' + (on ? ' on' : '') + '" type="button" data-a="' + acao + '" data-v="' + v + '" aria-pressed="' + on + '">' + txt + '</button>'; };
  let html = topo({ titulo: 'Simulado', sub: 'Prova de treino', ajuda: 'simulado' }) + '<div class="conteudo">';
  if (s && !s.fim) {
    const resp = s.resp.filter(function (x) { return x != null; }).length;
    html += '<div class="cartao borda secao"><h2 class="titulo-sec">Você tem um simulado começado</h2><p class="mini">' + resp + ' de ' + s.qs.length + ' respondidas' + (s.lim ? ' · ' + fmtRelogio(Math.max(0, restanteSim(s))) + ' restando' : '') + '</p>' +
      '<button class="btn largo" type="button" data-a="simContinuar">Continuar</button><button class="btn sec largo" type="button" data-a="simDesistir">Desistir dele</button></div>';
  }
  html += '<p class="mini">Perguntas misturadas, igual numa prova. Você só vê o que acertou no final.</p>';
  html += '<section class="secao"><div class="linha-sec"><h2 class="titulo-sec">Matérias</h2><button class="chip" type="button" data-a="simTodas">' + (cfg.mats.length === materiasComPerguntas().length ? 'Limpar' : 'Todas') + '</button></div><div class="chips">' +
    materiasComPerguntas().map(function (m) { return chip(cfg.mats.indexOf(m.id) >= 0, 'simMat', m.id, esc(m.nome)); }).join('') + '</div></section>';
  html += '<section class="secao"><h2 class="titulo-sec">Ano</h2><div class="chips">' + [1, 2, 3].map(function (a) { return chip(cfg.anos.indexOf(a) >= 0, 'simAno', a, a + 'º ano'); }).join('') + '</div></section>';
  html += '<section class="secao"><h2 class="titulo-sec">Quantas perguntas</h2><div class="chips">' + [10, 20, 30].map(function (q) { return chip(cfg.qtd === q, 'simQtd', q, q + ' perguntas'); }).join('') + '</div></section>';
  html += '<section class="secao"><h2 class="titulo-sec">Tempo</h2><div class="chips">' + [[0, 'Sem tempo'], [15, '15 min'], [30, '30 min'], [45, '45 min']].map(function (t) { return chip(cfg.tempo === t[0], 'simTempo', t[0], t[1]); }).join('') + '</div></section>';
  const qtdReal = Math.min(cfg.qtd, totalDisp);
  if (!totalDisp) html += '<div class="cartao mini centro">Escolha pelo menos uma matéria e um ano.</div>';
  else if (qtdReal < cfg.qtd) html += '<p class="mini centro">Com essas escolhas dá pra fazer ' + plural(qtdReal, 'pergunta', 'perguntas') + '.</p>';
  html += '<button class="btn largo" type="button" data-a="simComecar"' + (totalDisp ? '' : ' disabled') + '>' + ico('relogio', 18) + ' Começar simulado</button>';
  const ult = db.simulados.slice(-3).reverse();
  if (ult.length) {
    html += '<section class="secao"><h2 class="titulo-sec">Últimos simulados</h2><div class="lista">' + ult.map(function (x, i) {
      const pct = Math.round(x.certas / x.total * 100);
      const ver = i === 0 && s && s.fim;
      return '<' + (ver ? 'button type="button" data-a="simVerUltimo"' : 'div') + ' class="item"><span class="item-txt"><b>' + x.certas + ' de ' + x.total + ' (' + pct + '%)</b><span class="mini">' + dataCurta(x.d) + ' · ' + fmtTempo(x.seg) + '</span></span>' + (ver ? '<span class="seta">' + ico('seta', 18) + '</span></button>' : '</div>');
    }).join('') + '</div></section>';
  }
  return { html: html + '</div>', semAbas: true };
};
function togLista(l, v) { const i = l.indexOf(v); if (i >= 0) l.splice(i, 1); else l.push(v); }
ACOES.simMat = function (el) { togLista(cfgSimulado().mats, el.dataset.v); atualizar(); };
ACOES.simTodas = function () { const c = cfgSimulado(), todas = materiasComPerguntas().map(function (m) { return m.id; }); c.mats = c.mats.length === todas.length ? [] : todas; atualizar(); };
ACOES.simAno = function (el) { togLista(cfgSimulado().anos, +el.dataset.v); atualizar(); };
ACOES.simQtd = function (el) { cfgSimulado().qtd = +el.dataset.v; atualizar(); };
ACOES.simTempo = function (el) { cfgSimulado().tempo = +el.dataset.v; atualizar(); };
ACOES.simComecar = function () {
  const cfg = cfgSimulado(), qs = montarSimulado(cfg);
  if (!qs.length) return;
  db.simAtual = { qs: qs, resp: qs.map(function () { return null; }), i: 0, ini: Date.now(), lim: cfg.tempo * 60, fim: false };
  salvar(); som('ok');
  trocar({ ver: 'prova' });
};
ACOES.simContinuar = function () { trocar({ ver: 'prova' }); };
ACOES.simVerUltimo = function () { trocar({ ver: 'res' }); };
ACOES.simDesistir = function () {
  if (!confirm('Desistir desse simulado? As respostas dele não vão contar.')) return;
  db.simAtual = null; salvar(); atualizar();
};
function simProva(s) {
  const N = s.qs.length, q = s.qs[s.i], inf = erroInfo(q.k);
  const feitas = s.resp.filter(function (x) { return x != null; }).length;
  const rel = s.lim ? '<span class="cronometro" id="simTempo">' + ico('relogio', 18) + '<span>' + fmtRelogio(restanteSim(s)) + '</span></span>' : '';
  let html = topo({ titulo: 'Simulado', sub: 'Pergunta ' + (s.i + 1) + ' de ' + N, semCalc: false,
    extra: '<div class="linha-sec"><span class="mini">' + feitas + ' de ' + N + ' respondidas</span>' + rel + '</div><div class="barra"><i style="width:' + (feitas / N * 100) + '%"></i></div>' });
  html += '<div class="conteudo">';
  if (!inf) html += '<div class="cartao">Essa pergunta não está mais no app. Pode pular.</div>';
  else {
    html += '<div class="cartao"><span class="mini" style="color:var(--destaque);font-weight:700">' + esc(inf.m.nome.toUpperCase()) + '</span><p class="pergunta">' + rico(inf.P.p) + '</p></div>';
    html += q.ops.map(function (j, k) {
      const on = s.resp[s.i] === j;
      return '<button class="opcao' + (on ? ' escolhida' : '') + '" type="button" data-a="simResp" data-v="' + j + '" aria-pressed="' + on + '"><span>' + 'ABCD'[k] + ') ' + esc(inf.P.o[j]) + '</span>' + (on ? ico('check', 20) : '') + '</button>';
    }).join('');
  }
  const ultima = s.i === N - 1;
  html += '<div class="linha-btns">' + (s.i > 0 ? '<button class="btn sec" type="button" data-a="simIr" data-v="-1">Anterior</button>' : '') +
    (ultima ? '<button class="btn" type="button" data-a="simTerminar">Terminar</button>' : '<button class="btn" type="button" data-a="simIr" data-v="1">Próxima</button>') + '</div>';
  if (!ultima) html += '<button class="btn sec largo" type="button" data-a="simTerminar">Terminar agora</button>';
  return {
    html: html + '</div>', semAbas: true,
    depois: function () {
      if (!s.lim) return;
      const tick = function () {
        const rest = restanteSim(s), el = $('#simTempo');
        if (rest <= 0) { terminarSim(true); return; }
        if (el) { el.querySelector('span').textContent = fmtRelogio(rest); el.classList.toggle('pouco', rest <= 60); }
      };
      clearInterval(relogioSim);
      relogioSim = setInterval(tick, 1000);
      tick();
    }
  };
}
ACOES.simResp = function (el) {
  const s = db.simAtual;
  if (!s || s.fim) return;
  s.resp[s.i] = +el.dataset.v;
  salvar(); som('virar');
  // Vai sozinho pra próxima, pra ficar rápido como numa prova.
  clearTimeout(simAvanco);
  const i = s.i;
  if (i < s.qs.length - 1) simAvanco = setTimeout(function () { if (db.simAtual === s && s.i === i && rota.t === 'simulado' && rota.ver === 'prova') { s.i++; salvar(); desenhar(true); } }, 350);
  atualizar();
};
let simAvanco = null;
ACOES.simIr = function (el) {
  const s = db.simAtual;
  if (!s) return;
  clearTimeout(simAvanco);
  s.i = Math.max(0, Math.min(s.qs.length - 1, s.i + +el.dataset.v));
  salvar(); desenhar(true);
};
ACOES.simTerminar = function () {
  const s = db.simAtual;
  if (!s) return;
  const faltam = s.resp.filter(function (x) { return x == null; }).length;
  if (faltam && !confirm('Ainda ' + (faltam === 1 ? 'falta 1 pergunta' : 'faltam ' + faltam + ' perguntas') + '. Terminar mesmo assim?')) return;
  terminarSim(false);
};
function terminarSim(porTempo) {
  const s = db.simAtual;
  if (!s || s.fim) return;
  clearInterval(relogioSim); relogioSim = null;
  let certas = 0;
  const mats = {};
  s.qs.forEach(function (q, i) {
    const inf = erroInfo(q.k);
    if (!inf) return;
    const r = s.resp[i], ok = r === inf.P.c;
    if (ok) certas++;
    mats[inf.m.id] = mats[inf.m.id] || [0, 0];
    mats[inf.m.id][1]++; if (ok) mats[inf.m.id][0]++;
    if (r != null) registrarResposta(inf.t.id, inf.m.id, ok, inf.n);
  });
  s.fim = true; s.porTempo = porTempo;
  s.seg = Math.round(s.lim ? Math.min(s.lim, (Date.now() - s.ini) / 1000) : (Date.now() - s.ini) / 1000);
  s.certas = certas; s.mats = mats;
  db.simulados.push({ d: hojeStr(), total: s.qs.length, certas: certas, seg: s.seg });
  if (db.simulados.length > 60) db.simulados.shift();
  salvar();
  som('feito');
  if (porTempo) toast('Acabou o tempo!');
  if (!marcarEstudo()) paoFalar(certas / s.qs.length >= 0.6 ? 'terminou' : 'donada');
  if (rota.t === 'simulado') trocar({ ver: 'res' });
}
function simResultado(s) {
  const N = s.qs.length, pct = Math.round(s.certas / N * 100);
  const msg = pct >= 80 ? 'Mandou muito bem!' : pct >= 60 ? 'Foi bem! Tá no caminho.' : pct >= 40 ? 'Tá aprendendo! Olha a correção com calma.' : 'Simulado serve pra isso: achar o que treinar. Bora revisar!';
  let html = topo({ titulo: 'Resultado', sub: 'Simulado', voltar: true, semCalc: true });
  html += '<div class="conteudo"><div class="resultado entra">' + ARTE.pao(140) + '<div class="grande">' + s.certas + ' de ' + N + '</div><p class="frase" style="font-size:20px;color:var(--destaque)">' + msg + '</p>' +
    '<p class="mini">' + pct + '% de acertos · ' + fmtTempo(s.seg) + (s.porTempo ? ' (acabou o tempo)' : '') + '</p></div>';
  html += '<div class="cartao secao"><b>Por matéria</b>' + Object.keys(s.mats).map(function (k) {
    const v = s.mats[k], p = Math.round(v[0] / v[1] * 100);
    return '<div class="secao" style="gap:4px"><div class="linha-sec"><span>' + esc(MAT_POR_ID[k] ? MAT_POR_ID[k].nome : k) + '</span><span class="mini" style="font-weight:700">' + v[0] + ' de ' + v[1] + '</span></div><div class="barra"><i style="width:' + p + '%"></i></div></div>';
  }).join('') + '</div>';
  const nErros = listaErros().length;
  html += '<div class="linha-btns"><button class="btn sec" type="button" data-a="simOutro">Fazer outro</button>' + (nErros ? '<button class="btn" type="button" data-a="ir" data-v="erros">Treinar erros</button>' : '') + '</div>';
  html += '<section class="secao"><h2 class="titulo-sec">Correção</h2><div class="cartao" style="padding-top:2px;padding-bottom:2px">' + s.qs.map(function (q, i) {
    const inf = erroInfo(q.k);
    if (!inf) return '';
    const r = s.resp[i], ok = r === inf.P.c;
    return '<div class="correcao"><span class="mini">' + (i + 1) + '. ' + esc(inf.m.nome) + ' · ' + esc(inf.t.titulo) + '</span><b>' + rico(inf.P.p) + '</b>' +
      (ok ? '<span class="r-ok">' + ico('check', 16) + ' ' + esc(inf.P.o[r]) + '</span>'
        : '<span class="r-nao">' + (r == null ? 'Não respondeu' : 'Você marcou: ' + esc(inf.P.o[r])) + '</span><span class="r-ok">Certa: ' + esc(inf.P.o[inf.P.c]) + '</span><span class="mini" style="color:var(--explica);font-size:14px">' + rico(inf.P.e) + '</span>') + '</div>';
  }).join('') + '</div></section>';
  return { html: html + '</div>', semAbas: true };
}
ACOES.simOutro = function () { trocar({ ver: null }); };

TELAS.erros = function () {
  const s = sessao.err;
  let html = topo({ titulo: 'Meus erros', sub: 'Treinar o que errou', ajuda: 'erros' }) + '<div class="conteudo">';
  if (s) return { html: html + errosSessaoHTML(s) + '</div>', semAbas: true };
  const lista = listaErros();
  if (!lista.length) {
    html += '<div class="cartao vazio-msg">' + ARTE.pao(110) + '<b style="color:var(--destaque)">Nenhum erro guardado!</b><span>Quando você errar uma pergunta numa aula ou num simulado, ela aparece aqui pra você treinar de novo.</span></div>';
    if (db.errosLimpos) html += '<p class="mini centro">Você já acertou ' + plural(db.errosLimpos, 'pergunta que tinha errado', 'perguntas que tinha errado') + '. Orgulho!</p>';
    return { html: html + '</div>', semAbas: true };
  }
  const porMat = {};
  lista.forEach(function (k) { const n = erroInfo(k).m.nome; porMat[n] = (porMat[n] || 0) + 1; });
  html += '<div class="cartao borda secao"><h2 class="titulo-sec">' + plural(lista.length, 'pergunta pra treinar', 'perguntas pra treinar') + '</h2>' +
    '<div class="tags">' + Object.keys(porMat).map(function (n) { return '<span class="tag">' + esc(n) + ' · ' + porMat[n] + '</span>'; }).join('') + '</div>' +
    '<p class="mini">Acertou, sai da lista. Errou de novo, ela fica pra próxima.</p>' +
    '<button class="btn largo" type="button" data-a="errComecar">' + ico('alvo', 18) + ' Treinar ' + (lista.length > 15 ? '15 agora' : 'agora') + '</button></div>';
  if (db.errosLimpos) html += '<p class="mini centro">Você já acertou ' + plural(db.errosLimpos, 'pergunta que tinha errado', 'perguntas que tinha errado') + '.</p>';
  return { html: html + '</div>', semAbas: true };
};
ACOES.errComecar = function () {
  const fila = embaralha(listaErros()).slice(0, 15);
  sessao.err = { fila: fila, ops: fila.map(function (k) { return embaralha(erroInfo(k).P.o.map(function (_, j) { return j; })); }), i: 0, escolha: null, acertos: 0, fim: false };
  desenhar(true);
};
function errosSessaoHTML(s) {
  const N = s.fila.length;
  if (s.fim) {
    const resta = listaErros().length;
    return '<div class="resultado entra">' + ARTE.pao(150) + '<div class="grande">' + s.acertos + ' de ' + N + '</div><p class="frase" style="font-size:20px;color:var(--destaque)">' +
      (s.acertos === N ? 'Todas certas! Saíram da lista.' : s.acertos ? plural(s.acertos, 'saiu', 'saíram') + ' da lista. Tá aprendendo!' : 'Essas são difíceis mesmo. Relê o resumo e tenta de novo.') + '</p>' +
      '<p class="mini">' + (resta ? plural(resta, 'pergunta ainda na lista', 'perguntas ainda na lista') : 'A lista ficou vazia!') + '</p></div>' +
      (resta ? '<button class="btn largo" type="button" data-a="errComecar">Treinar mais</button>' : '') + '<button class="btn sec largo" type="button" data-a="voltar">Voltar</button>';
  }
  const inf = erroInfo(s.fila[s.i]), resp = s.escolha != null, ok = resp && s.escolha === inf.P.c;
  let h = '<div class="secao" style="gap:8px"><div class="linha-sec"><span class="mini">Pergunta ' + (s.i + 1) + ' de ' + N + '</span><span class="mini">' + plural(s.acertos, 'certa', 'certas') + '</span></div><div class="barra"><i style="width:' + (s.i / N * 100) + '%"></i></div></div>';
  h += '<div class="cartao"><span class="mini" style="color:var(--destaque);font-weight:700">' + esc(inf.m.nome.toUpperCase()) + ' · ' + esc(inf.t.titulo) + '</span><p class="pergunta">' + rico(inf.P.p) + '</p></div>';
  h += s.ops[s.i].map(function (j, k) {
    let cls = 'opcao';
    if (resp) { if (j === inf.P.c) cls += ' certa'; else if (j === s.escolha) cls += ' errada'; }
    return '<button class="' + cls + '" type="button" data-a="errResp" data-v="' + j + '"' + (resp ? ' disabled' : '') + '><span>' + 'ABCD'[k] + ') ' + esc(inf.P.o[j]) + '</span>' +
      (resp && j === inf.P.c ? ico('check', 22) : resp && j === s.escolha ? ico('fechar', 20) : '') + '</button>';
  }).join('');
  if (resp) {
    h += '<div class="explica entra"><b class="' + (ok ? 'ok' : 'nao') + '">' + (ok ? 'Isso! Saiu da lista.' : 'Ainda não.') + '</b> ' + rico(inf.P.e) + '</div>' +
      '<button class="btn largo" type="button" data-a="errProx">' + (s.i + 1 < N ? 'Próxima' : 'Ver resultado') + '</button>';
  }
  return h;
}
ACOES.errResp = function (el) {
  const s = sessao.err;
  if (!s || s.escolha != null) return;
  const inf = erroInfo(s.fila[s.i]);
  s.escolha = +el.dataset.v;
  const ok = s.escolha === inf.P.c;
  if (ok) { s.acertos++; som('acerto'); } else som('erro');
  registrarResposta(inf.t.id, inf.m.id, ok, inf.n);
  salvar(); atualizar();
  const ex = document.querySelector('.explica');
  if (ex && ex.scrollIntoView) ex.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
};
ACOES.errProx = function () {
  const s = sessao.err;
  if (!s) return;
  s.i++; s.escolha = null;
  if (s.i >= s.fila.length) {
    s.fim = true; som('feito');
    if (!marcarEstudo()) paoFalar(s.acertos ? 'terminou' : 'donada');
  }
  salvar(); desenhar(true);
};

// ================= Ajuda e ajustes =================
TELAS.ajuda = function () {
  const partes = [['inicio', 'inicio'], ['materias', 'materias'], ['topico', 'materias'], ['cartoes', 'cartoes'], ['materiais', 'materiais'], ['plano', 'plano'], ['calma', 'calma'], ['redacao', 'lapis'], ['simulado', 'relogio'], ['erros', 'alvo'], ['jogo', 'pata'], ['poponi', 'coracao'], ['conquistas', 'medalha']];
  let html = topo({ titulo: 'Ajuda', sub: 'Esqueceu como funciona? Toca aqui.' }) + '<div class="conteudo">';
  html += '<button class="item cartao borda" type="button" data-a="tourDeNovo" style="padding:12px 14px"><span class="recado-gato" style="width:54px;height:54px;background:var(--rosa-claro)">' + ARTE.pao(48) + '</span><span class="item-txt"><b>Ver o tour de novo</b><span class="mini">O Pãozinho mostra tudo outra vez</span></span><span class="seta">' + ico('seta', 18) + '</span></button>';
  html += '<section class="secao"><h2 class="titulo-sec">Como funciona cada parte</h2><div class="lista">' + partes.map(function (p) {
    return itemSeta({ titulo: AJUDA[p[0]][0], sub: AJUDA[p[0]][1].split('. ')[0] + '.', ico: ico(p[1], 18), attrs: 'data-a="ajudaTela" data-v="' + p[0] + '"' });
  }).join('') + '</div></section>';
  html += '<div class="lista">' + itemSeta({ titulo: 'Ajustes', sub: 'Modo noite, sons, Pãozinho e cópia de segurança', ico: ico('engrenagem', 18), attrs: 'data-a="ir" data-v="ajustes"' }) + '</div>';
  html += '<p class="mini centro">Miaula ' + VERSAO_APP + ' · feito com carinho pelo MOSS</p></div>';
  return { html: html };
};
TELAS.ajustes = function () {
  const ch = function (k, t, s) {
    return '<label class="chave"><span class="item-txt"><b>' + t + '</b><span class="mini">' + s + '</span></span><input type="checkbox" data-ch="ajuste" data-k="' + k + '"' + (db.ajustes[k] ? ' checked' : '') + '></label>';
  };
  let html = topo({ titulo: 'Ajustes', ajuda: 'ajustes' }) + '<div class="conteudo">';
  html += '<section class="secao"><h2 class="titulo-sec">Seu nome</h2><input class="campo" type="text" maxlength="30" value="' + esc(db.nome) + '" data-in="nome" aria-label="Seu nome"></section>';
  html += '<section class="secao"><h2 class="titulo-sec">Aparência</h2><div class="chips">' + [['claro', 'Claro'], ['escuro', 'Modo noite'], ['auto', 'Igual ao celular']].map(function (t) {
    const on = (db.ajustes.tema || 'auto') === t[0];
    return '<button class="chip' + (on ? ' on' : '') + '" type="button" data-a="tema" data-v="' + t[0] + '" aria-pressed="' + on + '">' + (t[0] === 'escuro' ? ico('lua', 16) + ' ' : '') + t[1] + '</button>';
  }).join('') + '</div><p class="mini">O modo noite deixa a tela escura, pra estudar à noite sem cansar a vista.</p></section>';
  html += '<div class="cartao" style="padding-top:4px;padding-bottom:4px">' + ch('sons', 'Sons', 'Pop, acertos e o som da Poponi') + ch('animacoes', 'Animações', 'Gatinhos respirando e telas se mexendo') + ch('pao', 'Pãozinho flutuante', 'Ele aparece às vezes com recadinhos') + '</div>';
  html += '<section class="secao"><h2 class="titulo-sec">Cópia de segurança</h2><p class="mini">Guarda o seu progresso num arquivo. Útil se trocar de celular. (As fotos e PDFs não vão junto.)</p>' +
    '<div class="linha-btns"><button class="btn sec" type="button" data-a="exportar">' + ico('baixar', 18) + ' Baixar cópia</button>' +
    '<label class="btn sec" style="cursor:pointer">' + ico('subir', 18) + ' Restaurar<input class="so-leitor" type="file" accept="application/json,.json" data-ch="importar"></label></div></section>';
  html += '<button class="btn sec largo" type="button" data-a="apagarTudo" style="color:var(--erro);border-color:var(--erro-fundo)">Apagar todo o progresso</button>';
  return { html: html + '</div>' };
};
ENTRADAS.nome = function (el) { db.nome = el.value.trim() || 'Julia'; salvar(); };
ENTRADAS.ajuste = function (el) {
  db.ajustes[el.dataset.k] = el.checked;
  salvar(); aplicarAjustes();
  if (el.dataset.k === 'pao') { if (el.checked) paoFalar('', 'Voltei! Tô aqui do seu lado.'); else paoEsconder(true); }
  if (el.dataset.k === 'sons' && el.checked) som('ok');
};
const CEL_ESCURO = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
function temaEscuro() { const t = db.ajustes.tema || 'auto'; return t === 'escuro' || (t === 'auto' && !!CEL_ESCURO && CEL_ESCURO.matches); }
function aplicarAjustes() {
  document.body.classList.toggle('sem-anim', !db.ajustes.animacoes);
  const escuro = temaEscuro();
  document.body.classList.toggle('escuro', escuro);
  const m = document.querySelector('meta[name="theme-color"]');
  if (m) m.setAttribute('content', escuro ? '#1A1114' : '#7A1E3A');
}
if (CEL_ESCURO) { try { CEL_ESCURO.addEventListener('change', aplicarAjustes); } catch (e) { try { CEL_ESCURO.addListener(aplicarAjustes); } catch (e2) { } } }
ACOES.trocarTema = function () {
  db.ajustes.tema = temaEscuro() ? 'claro' : 'escuro';
  salvar(); aplicarAjustes(); som('ok'); atualizar();
  toast(db.ajustes.tema === 'escuro' ? 'Modo noite ligado' : 'Modo claro ligado');
};
ACOES.tema = function (el) { db.ajustes.tema = el.dataset.v; salvar(); aplicarAjustes(); som('ok'); atualizar(); };
ACOES.exportar = function () {
  const blob = new Blob([JSON.stringify(db)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = 'miaula-copia-' + hojeStr() + '.json';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(function () { URL.revokeObjectURL(a.href); }, 30000);
  toast('Cópia baixada!');
};
ENTRADAS.importar = function (el) {
  const f = el.files && el.files[0];
  el.value = '';
  if (!f) return;
  f.text().then(function (t) {
    const o = JSON.parse(t);
    if (!o || o.v !== 1 || !o.prog) throw new Error('arquivo');
    if (!confirm('Restaurar essa cópia? O progresso de agora vai ser trocado por ela.')) return;
    localStorage.setItem(CHAVE, JSON.stringify(o));
    location.reload();
  }).catch(function () { toast('Esse arquivo não é uma cópia do Miaula.'); });
};
ACOES.apagarTudo = function () {
  if (!confirm('Apagar TODO o progresso? Isso não tem volta.')) return;
  if (!confirm('Tem certeza mesmo? A Poponi volta a ser neném.')) return;
  localStorage.removeItem(CHAVE);
  try { indexedDB.deleteDatabase('miaula-arquivos'); } catch (e) { }
  location.reload();
};
ACOES.chamarPao = function () { paoFalar('donada'); };

// ================= Instalação no celular =================
const UA = navigator.userAgent || '';
const EH_ANDROID = /Android/i.test(UA);
const EH_IOS = /iPhone|iPad|iPod/i.test(UA);
const NAVEGADOR_DE_APP = /FBAN|FBAV|Instagram|WhatsApp|Line\/|; wv\)|TikTok|Snapchat/i.test(UA);
function estaInstalado() { return (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true; }
function deveMostrarInstalar() {
  if (!/^https?:$/.test(location.protocol) || DEMO || estaInstalado()) return PARAMS.has('instalar');
  if (location.hostname === 'localhost' && !PARAMS.has('instalar')) return false;
  try { if (sessionStorage.getItem('miaula-no-navegador')) return false; } catch (e) { }
  return true;
}
function abrirInstalar() {
  const el = document.createElement('div');
  el.className = 'tour instalar';
  el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'Instalar o Miaula');
  document.body.appendChild(el);
  paoEsconder(true);
  let estado = NAVEGADOR_DE_APP && EH_ANDROID ? 'chrome' : window.__pedidoInstalar ? 'botao' : EH_IOS ? 'iphone' : 'esperando';
  const passo = function (n, txt) { return '<li><span class="num">' + n + '</span><span>' + txt + '</span></li>'; };
  const continuar = '<button class="pular" type="button" data-i="navegador" style="align-self:center">Agora não, continuar no navegador</button>';
  function desenha() {
    let meio = '', baixo = '';
    if (estado === 'botao' || estado === 'esperando') {
      meio = '<h1>Oi, ' + esc(db.nome) + '!</h1><p>Vamos colocar o Miaula no seu celular? É um toque só, e ele fica lá igual aos outros apps.</p>';
      baixo = '<button class="btn" type="button" data-i="instalar"' + (estado === 'esperando' ? ' disabled' : '') + '>' + (estado === 'esperando' ? 'Preparando...' : 'Instalar o Miaula') + '</button>' + continuar;
    } else if (estado === 'chrome') {
      const intent = 'intent://' + location.host + location.pathname + '#Intent;scheme=https;package=com.android.chrome;end';
      meio = '<h1>Quase lá!</h1><p>Esse link abriu dentro de outro app (tipo o WhatsApp), e por aqui não dá pra instalar. Toque no botão pra abrir no Chrome.</p>' +
        '<ol class="passos-inst">' + passo(1, 'Se o botão não funcionar, toque nos <b>três pontinhos ⋮</b> lá em cima.') + passo(2, 'Escolha <b>Abrir no Chrome</b> (ou "Abrir no navegador").') + '</ol>';
      baixo = '<a class="btn" href="' + esc(intent) + '" style="text-decoration:none">Abrir no Chrome</a>' + continuar;
    } else if (estado === 'passos') {
      meio = '<h1>Instalar o Miaula</h1><p>São só três toques:</p><ol class="passos-inst">' +
        passo(1, 'Toque nos <b>três pontinhos ⋮</b> no canto de cima, à direita.') +
        passo(2, 'Toque em <b>Instalar app</b> (ou <b>Adicionar à tela inicial</b>).') +
        passo(3, 'Confirme em <b>Instalar</b>. O ícone da Poponi vai aparecer na tela do celular!') + '</ol>';
      baixo = '<button class="btn" type="button" data-i="ja">Já instalei</button>' + continuar;
    } else if (estado === 'iphone') {
      meio = '<h1>Instalar o Miaula</h1><p>No iPhone, pelo Safari:</p><ol class="passos-inst">' +
        passo(1, 'Toque no botão <b>Compartilhar</b> (o quadradinho com a setinha pra cima).') +
        passo(2, 'Role e toque em <b>Adicionar à Tela de Início</b>.') +
        passo(3, 'Toque em <b>Adicionar</b>. Pronto!') + '</ol>';
      baixo = '<button class="btn" type="button" data-i="ja">Já instalei</button>' + continuar;
    } else if (estado === 'pronto') {
      meio = '<h1>Prontinho!</h1><p>O Miaula já está no seu celular. Procure na tela o ícone da <b>Poponi espiando o livro</b> e toque nele pra entrar.</p>';
      baixo = '<p class="mini" style="color:var(--rosa-txt);text-align:center">Já pode fechar esta página.</p>' + continuar.replace('Agora não, continuar no navegador', 'Prefiro continuar por aqui');
    }
    el.innerHTML = '<div class="tour-meio"><div class="entra" style="display:flex;flex-direction:column;align-items:center;gap:18px">' +
      '<div class="logo-inst">' + ARTE.logo(132) + '</div>' + meio + '</div></div><div style="display:flex;flex-direction:column;gap:14px">' + baixo + '</div>';
  }
  el.addEventListener('click', function (e) {
    const b = e.target.closest('[data-i]');
    if (!b) return;
    const a = b.dataset.i;
    if (a === 'instalar' && window.__pedidoInstalar) {
      const pedido = window.__pedidoInstalar;
      window.__pedidoInstalar = null;
      pedido.prompt();
      pedido.userChoice.then(function (r) { estado = r.outcome === 'accepted' ? 'pronto' : 'passos'; desenha(); }).catch(function () { estado = 'passos'; desenha(); });
    } else if (a === 'ja') { estado = 'pronto'; desenha(); }
    else if (a === 'navegador') {
      try { sessionStorage.setItem('miaula-no-navegador', '1'); } catch (er) { }
      el.remove();
      if (!db.tourVisto) abrirTour(); else saudar();
    }
  });
  document.addEventListener('miaula-pode-instalar', function () { if (estado === 'esperando' || estado === 'passos') { estado = 'botao'; desenha(); } });
  window.addEventListener('appinstalled', function () { estado = 'pronto'; desenha(); });
  if (estado === 'esperando') setTimeout(function () { if (estado === 'esperando') { estado = window.__pedidoInstalar ? 'botao' : 'passos'; desenha(); } }, 3500);
  desenha();
}

// ================= Começo =================
function popularDemo() {
  const h = hojeStr();
  db.tourVisto = true;
  db.dias = [-4, -3, -2, -1, 0].map(function (n) { return somaDias(h, n); });
  db.poponi = { dias: 5, ultimo: h, aviso: null, roupa: 'lacinho', recorde: 5 };
  ['mat-funcoes:1', 'mat-funcoes:3', 'bio-citologia:2', 'mat-conjuntos:4', 'his-brasil-colonia:0'].forEach(function (k) { db.erros[k] = { n: 1, d: h }; });
  db.errosLimpos = 3;
  db.simulados = [{ d: somaDias(h, -2), total: 20, certas: 13, seg: 1260 }];
  db.prog = {
    'mat-conjuntos': { resumo: true, quiz: 88, cartoes: true },
    'mat-funcoes': { resumo: true, quiz: 75 },
    'mat-afim': { resumo: true },
    'bio-citologia': { resumo: true, quiz: 71, cartoes: true },
    'por-figuras': { resumo: true }
  };
  for (let i = 0; i < 8; i++) db.cartoes['mat-conjuntos:' + i] = { cx: 2, prox: i < 4 ? h : somaDias(h, 3) };
  for (let i = 0; i < 8; i++) db.cartoes['bio-citologia:' + i] = { cx: i < 2 ? 1 : 3, prox: i < 2 ? h : somaDias(h, 6) };
  const dow = new Date().getDay();
  for (let k = 0; k < 14; k++) {
    const d = somaDias(h, -k);
    const estaSemana = k <= dow;
    if (k > 0 && k % 4 === 3) continue;
    db.seg[d] = (estaSemana ? [1500, 900, 2400, 1800, 2100, 1200, 2700] : [900, 1200, 600, 800, 1000, 700, 900])[k % 7];
    const n = 6 + (k % 3);
    for (let j = 0; j < n; j++) {
      const mat = j % 2 ? 'mat' : 'bio';
      const t = mat === 'mat' ? (j % 3 ? 'mat-funcoes' : 'mat-conjuntos') : 'bio-citologia';
      const okp = estaSemana ? (mat === 'mat' ? 0.8 : 0.72) : (mat === 'mat' ? 0.6 : 0.7);
      db.resp.push({ d: d, t: t, m: mat, ok: ((j * 37 + k * 11) % 100) / 100 < okp ? 1 : 0 });
    }
  }
  db.redacoes = [{ id: 'rdemo', tema: REDACAO.temas[0], texto: 'O desperdício de alimentos é um problema que afeta todo o Brasil...', checks: [0], data: somaDias(h, -2) }];
}
// Versão nova do app chegou: só recarrega numa aba principal, pra não atrapalhar um quiz no meio.
let atualizacaoPronta = false;
const ABAS_PRINCIPAIS = ['inicio', 'materias', 'cartoes', 'materiais', 'plano', 'calma'];
function tentarAtualizar() {
  if (!atualizacaoPronta || rota.ov || ABAS_PRINCIPAIS.indexOf(rota.t) < 0 || RESP.ativo) return;
  try { if (sessionStorage.getItem('miaula-recarregou')) return; sessionStorage.setItem('miaula-recarregou', '1'); } catch (e) { }
  salvar();
  location.reload();
}
function montarAbas() {
  const abas = [['inicio', 'Início'], ['materias', 'Matérias'], ['cartoes', 'Cartões'], ['materiais', 'Materiais'], ['plano', 'Plano'], ['calma', 'Calma']];
  $('#abas').innerHTML = abas.map(function (a) { return '<button class="aba" type="button" data-a="aba" data-v="' + a[0] + '">' + ico(a[0], 22) + '<span>' + a[1] + '</span></button>'; }).join('');
}
function iniciar() {
  if (DEMO && (PARAMS.has('novo') || PARAMS.has('popular'))) {
    localStorage.removeItem(CHAVE);
    db = dbPadrao();
    if (PARAMS.has('popular')) popularDemo();
    salvar();
  }
  aplicarAjustes();
  montarAbas();
  paoMontar();
  try { if (window.speechSynthesis) { window.speechSynthesis.getVoices(); window.speechSynthesis.onvoiceschanged = function () { window.speechSynthesis.getVoices(); }; } } catch (e) { }
  checarPoponi();
  const novasMedalhas = checarConquistas(true);
  let r = { t: 'inicio', p: 0 };
  if (location.hash.length > 1) {
    const hp = new URLSearchParams(location.hash.slice(1));
    if (hp.get('t')) { r = { p: 0 }; hp.forEach(function (v, k) { r[k] = v; }); if (r.ovd != null && /^\d+$/.test(r.ovd)) r.ovd = +r.ovd; }
  }
  history.replaceState(r, '');
  rota = r;
  desenhar(true);
  desenharOv();
  if (deveMostrarInstalar()) abrirInstalar();
  else if (!db.tourVisto && !PARAMS.has('semtour')) abrirTour();
  else if (!PARAMS.has('quieto')) saudar();
  // Medalhas que ela já merecia antes desta versão aparecem logo na primeira abertura.
  if (novasMedalhas.length && !PARAMS.has('quieto')) { filaConquistas = novasMedalhas; timerConquistas = setTimeout(mostrarConquistas, 2500); }
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    // Quando chega uma versão nova do app, recarrega uma vez pra ela já aparecer.
    const tinhaVersao = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (!tinhaVersao) return;
      atualizacaoPronta = true;
      tentarAtualizar();
    });
    navigator.serviceWorker.register('sw.js').then(function (reg) { reg.update().catch(function () { }); }).catch(function () { });
  }
}
window.__miaula = { db: function () { return db; }, ir: ir, abrirAba: abrirAba, ACOES: ACOES, TELAS: TELAS, paoFalar: paoFalar, calcAvaliar: calcAvaliar, calcFormatar: calcFormatar, marcarEstudo: marcarEstudo, checarPoponi: checarPoponi, fasePoponi: fasePoponi, gerarHoje: gerarHoje, abrirOv: abrirOv, rota: function () { return rota; }, sessao: function () { return sessao; }, checarConquistas: checarConquistas, terminarSim: terminarSim, listaErros: listaErros, temaEscuro: temaEscuro, aplicarAjustes: aplicarAjustes };
iniciar();
