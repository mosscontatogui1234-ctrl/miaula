// Desenhos do Miaula: Pãozinho, Poponi, logo e ícones.

window.ARTE = (function () {
  function pao(w) {
    w = w || 120;
    const h = Math.round(w * 142 / 182);
    return '<svg class="pao-svg" width="' + w + '" height="' + h + '" viewBox="14 46 182 142" aria-hidden="true">' +
      '<ellipse class="pao-sombra" cx="100" cy="184" rx="70" ry="5" fill="#E8CACA"/>' +
      '<g class="pao-corpo">' +
      '<path d="M164 160C186 158 192 140 182 128" stroke="#5A8432" stroke-width="12" fill="none" stroke-linecap="round"/>' +
      '<path d="M38 98L36 62L64 82Z" fill="#6E9B3F" stroke="#6E9B3F" stroke-width="6" stroke-linejoin="round"/>' +
      '<path d="M102 82L114 52L126 86Z" fill="#6E9B3F" stroke="#6E9B3F" stroke-width="6" stroke-linejoin="round"/>' +
      '<path d="M43 90L42 72L56 82Z" fill="#F2B8C2"/><path d="M110 80L115 64L120 82Z" fill="#F2B8C2"/>' +
      '<rect x="22" y="84" width="156" height="96" rx="48" fill="#6E9B3F"/>' +
      '<circle cx="64" cy="86" r="10" fill="#6E9B3F"/><circle cx="96" cy="88" r="10" fill="#6E9B3F"/>' +
      '<circle cx="130" cy="92" r="11" fill="#6E9B3F"/><circle cx="158" cy="104" r="10" fill="#6E9B3F"/>' +
      '<circle cx="140" cy="130" r="4" fill="#5A8432"/><circle cx="156" cy="150" r="3" fill="#5A8432"/>' +
      '<path d="M138 84C138 74 140 68 144 64" stroke="#4E7330" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M144 64C152 56 162 58 166 62C160 70 150 70 144 64Z" fill="#B7CF8A"/>' +
      '<path d="M126 92C122 82 112 80 106 84C110 92 120 96 126 92Z" fill="#B7CF8A"/>' +
      '<g class="olhos-fechados"><path d="M50 126Q58 118 66 126" stroke="#2A1F1A" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
      '<path d="M86 126Q94 118 102 126" stroke="#2A1F1A" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
      '<path d="M69 142Q73 148 77 142Q81 148 85 142" stroke="#2A1F1A" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>' +
      '<g class="olhos-abertos"><ellipse cx="58" cy="122" rx="8" ry="10" fill="#2A1F1A"/><ellipse cx="94" cy="122" rx="8" ry="10" fill="#2A1F1A"/>' +
      '<circle cx="61" cy="118" r="3" fill="#fff"/><circle cx="97" cy="118" r="3" fill="#fff"/>' +
      '<ellipse cx="77" cy="146" rx="4" ry="5" fill="#7A1E3A"/></g>' +
      '<ellipse cx="50" cy="140" rx="8" ry="4.5" fill="#E9A7A7"/><ellipse cx="104" cy="140" rx="8" ry="4.5" fill="#E9A7A7"/>' +
      '<path d="M73 134L81 134L77 139Z" fill="#E07A8E"/>' +
      '<ellipse cx="62" cy="178" rx="14" ry="7" fill="#7FA650"/><ellipse cx="96" cy="178" rx="14" ry="7" fill="#7FA650"/>' +
      '</g></svg>';
  }

  // Poponi: fase 0 a 4. dormindo = olhos fechados (antes do primeiro dia).
  function poponi(fase, w, dormindo) {
    w = w || 120;
    if (fase === 0) {
      const olhos = dormindo
        ? '<path d="M72 134Q84 126 96 134M104 134Q116 126 128 134" stroke="#2A2A33" stroke-width="4" fill="none" stroke-linecap="round"/>'
        : '<g class="pp-olhos"><ellipse cx="84" cy="134" rx="11" ry="13" fill="#2A2A33"/><ellipse cx="116" cy="134" rx="11" ry="13" fill="#2A2A33"/>' +
          '<circle cx="88" cy="129" r="4.5" fill="#fff"/><circle cx="120" cy="129" r="4.5" fill="#fff"/><circle cx="81" cy="139" r="2" fill="#fff"/><circle cx="113" cy="139" r="2" fill="#fff"/></g>';
      return '<svg class="pp-svg" width="' + w + '" height="' + w + '" viewBox="0 0 200 200" aria-hidden="true">' +
        '<ellipse cx="100" cy="184" rx="40" ry="5" fill="#E8D8D8"/>' +
        '<g class="pp-corpo">' +
        '<path d="M68 112L66 84L90 100Z" fill="#E8964A" stroke="#E8964A" stroke-width="6" stroke-linejoin="round"/>' +
        '<path d="M132 112L134 84L110 100Z" fill="#2B2420" stroke="#2B2420" stroke-width="6" stroke-linejoin="round"/>' +
        '<path d="M72 104L71 92L82 100Z" fill="#F2B3B8"/><path d="M128 104L129 92L118 100Z" fill="#F2B3B8"/>' +
        '<circle cx="100" cy="135" r="46" fill="#E8964A"/><ellipse cx="100" cy="156" rx="30" ry="22" fill="#FFF8F0"/>' +
        '<ellipse cx="84" cy="178" rx="11" ry="6" fill="#FFF8F0"/><ellipse cx="116" cy="178" rx="11" ry="6" fill="#FFF8F0"/>' +
        olhos +
        '<ellipse cx="70" cy="152" rx="7" ry="4" fill="#F2A7A0"/><ellipse cx="130" cy="152" rx="7" ry="4" fill="#F2A7A0"/>' +
        '<path d="M97 149L103 149L100 153Z" fill="#D98A9C"/>' +
        '<path d="M96 156Q100 160 104 156" stroke="#2A2A33" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
        '<circle cx="113" cy="161" r="3.5" fill="#2B2420"/>' +
        '</g></svg>';
    }
    const m1 = fase >= 2, m2 = fase >= 3, m3 = fase >= 4, bigode = fase >= 3;
    return '<svg class="pp-svg" width="' + w + '" height="' + w + '" viewBox="0 0 200 200" aria-hidden="true">' +
      '<ellipse cx="100" cy="194" rx="62" ry="5" fill="#E8D8D8"/>' +
      '<g class="pp-rabo"><path d="M140 172C172 168 180 136 164 118" stroke="#E8964A" stroke-width="14" fill="none" stroke-linecap="round"/>' +
      (m1 ? '<circle cx="172" cy="140" r="6" fill="#2B2420"/>' : '') +
      '<circle cx="164" cy="118" r="7.5" fill="#FFF8F0"/></g>' +
      '<g class="pp-corpo">' +
      '<ellipse cx="100" cy="152" rx="49" ry="38" fill="#E8964A"/>' +
      (m1 ? '<ellipse cx="72" cy="140" rx="11" ry="9" fill="#2B2420"/>' : '') +
      (m2 ? '<circle cx="134" cy="136" r="7" fill="#2B2420"/>' : '') +
      (m3 ? '<circle cx="146" cy="154" r="4" fill="#2B2420"/>' : '') +
      '<ellipse cx="100" cy="160" rx="27" ry="26" fill="#FFF8F0"/>' +
      '<ellipse cx="82" cy="188" rx="13" ry="8" fill="#FFF8F0"/><ellipse cx="118" cy="188" rx="13" ry="8" fill="#FFF8F0"/>' +
      '<path d="M60 72L56 34L90 54Z" fill="#E8964A" stroke="#E8964A" stroke-width="6" stroke-linejoin="round"/>' +
      '<path d="M140 72L144 34L110 54Z" fill="#2B2420" stroke="#2B2420" stroke-width="6" stroke-linejoin="round"/>' +
      '<path d="M65 64L63 46L80 56Z" fill="#F2B3B8"/><path d="M135 64L137 46L120 56Z" fill="#F2B3B8"/>' +
      '<circle cx="100" cy="94" r="44" fill="#E8964A"/>' +
      '<ellipse cx="100" cy="114" rx="24" ry="16" fill="#FFF8F0"/>' +
      '<path d="M100 52C96 62 96 74 100 84C104 74 104 62 100 52Z" fill="#FFF8F0"/>' +
      '<g class="pp-olhos"><ellipse cx="82" cy="96" rx="9" ry="11" fill="#2A2A33"/><ellipse cx="118" cy="96" rx="9" ry="11" fill="#2A2A33"/>' +
      '<circle cx="85" cy="92" r="3.5" fill="#fff"/><circle cx="121" cy="92" r="3.5" fill="#fff"/></g>' +
      '<ellipse cx="68" cy="112" rx="8" ry="4.5" fill="#F2A7A0"/><ellipse cx="132" cy="112" rx="8" ry="4.5" fill="#F2A7A0"/>' +
      '<path d="M96 107L104 107L100 112Z" fill="#D98A9C"/>' +
      '<path d="M92 114Q96 120 100 114Q104 120 108 114" stroke="#2A2A33" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
      '<circle cx="116" cy="121" r="4" fill="#2B2420"/>' +
      (bigode ? '<path d="M56 104L40 100M56 110L40 112M144 104L160 100M144 110L160 112" stroke="#8A5A3A" stroke-width="2" stroke-linecap="round"/>' : '') +
      '</g></svg>';
  }

  function logo(w) {
    w = w || 96;
    return '<svg width="' + w + '" height="' + w + '" viewBox="0 0 200 200" aria-hidden="true"><rect width="200" height="200" rx="46" fill="#FFF6F4"/>' +
      '<path d="M58 90L52 44L88 66Z" fill="#E8964A" stroke="#E8964A" stroke-width="6" stroke-linejoin="round"/>' +
      '<path d="M142 90L148 44L112 66Z" fill="#2B2420" stroke="#2B2420" stroke-width="6" stroke-linejoin="round"/>' +
      '<path d="M63 80L60 56L80 68Z" fill="#F2B3B8"/><circle cx="100" cy="116" r="50" fill="#E8964A"/>' +
      '<path d="M100 66C96 76 96 86 100 94C104 86 104 76 100 66Z" fill="#FFF8F0"/>' +
      '<ellipse cx="80" cy="102" rx="9" ry="11" fill="#2A2A33"/><ellipse cx="120" cy="102" rx="9" ry="11" fill="#2A2A33"/>' +
      '<circle cx="83" cy="98" r="3.5" fill="#fff"/><circle cx="123" cy="98" r="3.5" fill="#fff"/>' +
      '<rect x="26" y="116" width="148" height="62" rx="12" fill="#7A1E3A"/><rect x="34" y="162" width="132" height="8" rx="3" fill="#FFF6F4"/>' +
      '<rect x="60" y="132" width="80" height="6" rx="3" fill="#E9B8C0"/>' +
      '<ellipse cx="74" cy="117" rx="14" ry="9" fill="#FFF8F0"/><ellipse cx="126" cy="117" rx="14" ry="9" fill="#FFF8F0"/></svg>';
  }

  const P = {
    inicio: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    materias: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/>',
    cartoes: '<rect x="7" y="3" width="13" height="16" rx="2"/><path d="M4 7v12a2 2 0 0 0 2 2h10"/>',
    materiais: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    plano: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    calma: '<path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 12h16a3 3 0 1 1-3 3"/><path d="M3 16h7"/>',
    calc: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01M16 18h.01"/>',
    ajuda: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14"/><path d="M12 17.5h.01"/>',
    voltar: '<path d="M15 5l-7 7 7 7"/>',
    seta: '<path d="M9 5l7 7-7 7"/>',
    fechar: '<path d="M6 6l12 12M18 6L6 18"/>',
    check: '<path d="M5 12l5 5 9-10"/>',
    mais: '<path d="M12 5v14M5 12h14"/>',
    lixo: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    video: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9l5 3-5 3z"/>',
    site: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    foto: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 8"/>',
    pdf: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/>',
    coracao: '<path d="M12 21s-7-4.4-9.3-9C1.2 8.8 3 5 6.6 5c2.1 0 3.6 1.2 5.4 3 1.8-1.8 3.3-3 5.4-3C21 5 22.8 8.8 21.3 12 19 16.6 12 21 12 21z"/>',
    engrenagem: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    som: '<path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
    play: '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
    pausa: '<rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/>',
    lapis: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
    grafico: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    busca: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    girar: '<path d="M4 12a8 8 0 0 1 14-5.3M20 4v4h-4M20 12a8 8 0 0 1-14 5.3M4 20v-4h4"/>',
    baixar: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    subir: '<path d="M12 20V9M7 14l5-5 5 5M5 4h14"/>'
  };

  function icone(nome, tam, extra) {
    tam = tam || 22;
    return '<svg class="ico" width="' + tam + '" height="' + tam + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (extra || '') + '>' + (P[nome] || '') + '</svg>';
  }

  return { pao: pao, poponi: poponi, logo: logo, icone: icone };
})();
