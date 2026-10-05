// Física — 1º, 2º e 3º ano
window.AULAS = window.AULAS || {};
Object.assign(window.AULAS, {
  'fis-grandezas': {
    resumo: [
      { t: 'Grandeza', p: 'É tudo que dá pra **medir**: comprimento, tempo, massa, velocidade. Toda medida tem um **valor** e uma **unidade**.' },
      { t: 'Escalar x vetorial', p: '**Escalar**: basta o valor e a unidade (massa, tempo, temperatura, energia).\n**Vetorial**: precisa também de **direção e sentido** (velocidade, força, aceleração, deslocamento). É representada por uma seta.' },
      { t: 'Sistema Internacional (SI)', p: 'As unidades básicas: **metro** (m), **quilograma** (kg), **segundo** (s), ampère (A), kelvin (K), mol e candela.' },
      { t: 'Notação científica', p: 'Escrever o número como **a × 10ⁿ**, com a entre 1 e 10. Ex.: 3500 = 3,5 × 10³; 0,002 = 2 × 10⁻³.' },
      { t: 'Prefixos', p: '**k** (quilo) = 10³ · **M** (mega) = 10⁶ · **c** (centi) = 10⁻² · **m** (mili) = 10⁻³ · **μ** (micro) = 10⁻⁶.\nE lembre: 1 h = 3600 s; 1 km = 1000 m.' }
    ],
    exemplo: 'A velocidade da luz, 300.000.000 m/s, em notação científica fica 3 × 10⁸ m/s.',
    perguntas: [
      { p: 'Qual destas grandezas é vetorial?', o: ['Massa', 'Tempo', 'Força', 'Temperatura'], c: 2, e: 'Força precisa de direção e sentido.' },
      { p: 'A unidade de massa no SI é o:', o: ['Grama', 'Quilograma', 'Newton', 'Litro'], c: 1, e: 'No SI, massa é em quilograma (kg).' },
      { p: 'Como fica 3500 em notação científica?', o: ['35 × 10²', '3,5 × 10³', '0,35 × 10⁴', '3,5 × 10²'], c: 1, e: 'O número precisa ficar entre 1 e 10: 3,5 × 10³.' },
      { p: 'Quantos metros têm 2 km?', o: ['20', '200', '2000', '20000'], c: 2, e: 'Quilo = 1000: 2 × 1000 = 2000 m.' },
      { p: '1 milímetro equivale a:', o: ['10⁻² m', '10⁻³ m', '10³ m', '10⁻⁶ m'], c: 1, e: 'Mili = 10⁻³.' },
      { p: 'Quantos segundos tem 1 hora?', o: ['60', '360', '3600', '6000'], c: 2, e: '60 minutos × 60 segundos = 3600 s.' }
    ],
    cartoes: [
      { f: 'Grandeza escalar', v: 'Só valor e unidade: massa, tempo.' },
      { f: 'Grandeza vetorial', v: 'Valor, direção e sentido: força, velocidade.' },
      { f: 'Unidades básicas do SI', v: 'metro, quilograma, segundo...' },
      { f: 'Prefixo quilo (k)', v: '10³' },
      { f: 'Prefixo mili (m)', v: '10⁻³' },
      { f: 'Notação científica', v: 'a × 10ⁿ, com 1 ≤ a < 10' }
    ]
  },

  'fis-muv': {
    resumo: [
      { t: 'Aceleração', p: 'É a mudança de velocidade com o tempo: **a = Δv / Δt**, em **m/s²**. No **MUV** (movimento uniformemente variado), a aceleração é **constante**.' },
      { t: 'Equações do MUV', p: 'Velocidade: **v = v₀ + a·t**\nPosição: **s = s₀ + v₀·t + a·t²/2**\nTorricelli (sem tempo): **v² = v₀² + 2·a·Δs**' },
      { t: 'Acelerado ou retardado', p: '**Acelerado**: a velocidade aumenta (v e a com o mesmo sinal).\n**Retardado**: a velocidade diminui, como numa freada (sinais opostos).' },
      { t: 'Gráficos', p: 'No gráfico **v × t** do MUV, a linha é uma **reta inclinada**. A inclinação é a aceleração e a **área embaixo** é o deslocamento.' }
    ],
    exemplo: 'Um carro sai do repouso com a = 2 m/s². Em 4 s: v = 0 + 2·4 = 8 m/s e Δs = 2·16/2 = 16 m.',
    perguntas: [
      { p: 'Um carro vai de 0 a 20 m/s em 5 s. Qual a aceleração?', o: ['2 m/s²', '4 m/s²', '5 m/s²', '100 m/s²'], c: 1, e: 'a = 20 / 5 = 4 m/s².' },
      { p: 'v₀ = 10 m/s, a = 2 m/s². Qual a velocidade em t = 3 s?', o: ['12 m/s', '16 m/s', '13 m/s', '6 m/s'], c: 1, e: 'v = 10 + 2·3 = 16 m/s.' },
      { p: 'Partindo do repouso com a = 2 m/s², quanto anda em 4 s?', o: ['8 m', '16 m', '32 m', '4 m'], c: 1, e: 'Δs = a·t²/2 = 2·16/2 = 16 m.' },
      { p: 'Do repouso, com a = 5 m/s², após andar 10 m a velocidade é:', o: ['5 m/s', '10 m/s', '50 m/s', '25 m/s'], c: 1, e: 'Torricelli: v² = 0 + 2·5·10 = 100 → v = 10 m/s.' },
      { p: 'Um carro freando está em movimento:', o: ['Acelerado', 'Retardado', 'Uniforme', 'Parado'], c: 1, e: 'A velocidade diminui: retardado.' },
      { p: 'No gráfico v × t, a área embaixo da linha representa:', o: ['A aceleração', 'O deslocamento', 'O tempo', 'A força'], c: 1, e: 'A área do gráfico velocidade × tempo é o deslocamento.' }
    ],
    cartoes: [
      { f: 'Aceleração', v: 'a = Δv / Δt (m/s²)' },
      { f: 'Velocidade no MUV', v: 'v = v₀ + a·t' },
      { f: 'Posição no MUV', v: 's = s₀ + v₀·t + a·t²/2' },
      { f: 'Torricelli', v: 'v² = v₀² + 2·a·Δs' },
      { f: 'Movimento retardado', v: 'A velocidade diminui.' },
      { f: 'Área do gráfico v × t', v: 'Deslocamento.' }
    ]
  },

  'fis-queda': {
    resumo: [
      { t: 'Queda livre', p: 'É a queda só pela **gravidade**, desprezando o ar. É um MUV com aceleração **g ≈ 10 m/s²** (o valor real é 9,8).' },
      { t: 'Massa não importa', p: 'Sem ar, **todos os corpos caem juntos**, pesados ou leves. Galileu mostrou isso. No dia a dia a pena cai devagar por causa do ar.' },
      { t: 'Fórmulas (partindo do repouso)', p: '**v = g·t**\n**h = g·t²/2**\n**v² = 2·g·h**' },
      { t: 'Lançamento pra cima', p: 'O corpo sobe perdendo velocidade e, **no ponto mais alto, v = 0**.\nTempo de subida: **t = v₀ / g**.\nAltura máxima: **h = v₀² / 2g**.\nO tempo de subida é igual ao de descida.' }
    ],
    exemplo: 'Uma pedra cai de 45 m: 45 = 10·t²/2 → t² = 9 → t = 3 s. Chega com v = 10·3 = 30 m/s.',
    perguntas: [
      { p: 'Um objeto cai por 3 s. Qual a velocidade? (g = 10)', o: ['3 m/s', '13 m/s', '30 m/s', '90 m/s'], c: 2, e: 'v = g·t = 10·3 = 30 m/s.' },
      { p: 'Quanto um objeto cai em 2 s? (g = 10)', o: ['10 m', '20 m', '40 m', '5 m'], c: 1, e: 'h = 10·4/2 = 20 m.' },
      { p: 'No vácuo, uma bola de ferro e uma pena soltas juntas:', o: ['A bola chega antes', 'A pena chega antes', 'Chegam juntas', 'A pena flutua'], c: 2, e: 'Sem ar, todos caem com a mesma aceleração.' },
      { p: 'No ponto mais alto de um lançamento vertical, a velocidade é:', o: ['Máxima', 'Zero', 'Igual a g', 'Negativa'], c: 1, e: 'Ela para por um instante antes de voltar.' },
      { p: 'Uma bola lançada pra cima a 20 m/s sobe por quanto tempo? (g = 10)', o: ['1 s', '2 s', '4 s', '20 s'], c: 1, e: 't = v₀/g = 20/10 = 2 s.' },
      { p: 'E qual a altura máxima dessa bola?', o: ['10 m', '20 m', '40 m', '200 m'], c: 1, e: 'h = v₀²/2g = 400/20 = 20 m.' },
      { p: 'Quanto tempo leva pra cair de 45 m? (g = 10)', o: ['2 s', '3 s', '4,5 s', '9 s'], c: 1, e: '45 = 5·t² → t² = 9 → t = 3 s.' }
    ],
    cartoes: [
      { f: 'Aceleração da gravidade', v: 'g ≈ 10 m/s² (9,8)' },
      { f: 'Velocidade na queda', v: 'v = g·t' },
      { f: 'Altura na queda', v: 'h = g·t²/2' },
      { f: 'No ponto mais alto', v: 'v = 0' },
      { f: 'Altura máxima', v: 'v₀² / 2g' },
      { f: 'Massa influencia a queda livre?', v: 'Não (sem ar, todos caem juntos).' }
    ]
  },

  'fis-newton': {
    resumo: [
      { t: '1ª Lei: Inércia', p: 'Se a força resultante é zero, o corpo **continua como está**: parado fica parado, em movimento reto e constante continua assim. É por isso que você vai pra frente quando o ônibus freia.' },
      { t: '2ª Lei: Princípio fundamental', p: '**F = m · a**. A força resultante é a massa vezes a aceleração. Força se mede em **newtons (N)**.' },
      { t: '3ª Lei: Ação e reação', p: 'Toda ação tem uma reação de **mesma intensidade**, **mesma direção** e **sentido oposto**. Elas agem em **corpos diferentes**, por isso **não se anulam**. Ex.: o foguete empurra os gases pra baixo e os gases empurram o foguete pra cima.' },
      { t: 'Peso x massa', p: '**Massa** (kg) é a quantidade de matéria, igual em qualquer lugar. **Peso** é uma força: **P = m · g**, em newtons. Na Lua você tem a mesma massa e menos peso.' },
      { t: 'Outras forças', p: '**Normal**: a superfície empurrando o corpo.\n**Atrito**: contra o deslizamento, **Fat = μ · N**.\n**Tração**: força em cordas e cabos.' }
    ],
    exemplo: 'Uma força resultante de 20 N num corpo de 4 kg: a = F/m = 20/4 = 5 m/s².',
    perguntas: [
      { p: 'Quando o ônibus freia, você é jogado pra frente. Isso se explica pela:', o: ['1ª Lei (inércia)', '2ª Lei', '3ª Lei', 'Lei da gravitação'], c: 0, e: 'Seu corpo tende a continuar em movimento: inércia.' },
      { p: 'Qual a força pra acelerar 2 kg a 3 m/s²?', o: ['5 N', '6 N', '1,5 N', '9 N'], c: 1, e: 'F = m·a = 2·3 = 6 N.' },
      { p: 'Qual o peso de uma pessoa de 50 kg? (g = 10)', o: ['50 N', '500 N', '5 N', '5000 N'], c: 1, e: 'P = m·g = 50·10 = 500 N.' },
      { p: 'Ação e reação não se anulam porque:', o: ['Têm intensidades diferentes', 'Agem em corpos diferentes', 'Têm a mesma direção', 'Uma é maior'], c: 1, e: 'Cada uma age num corpo diferente.' },
      { p: 'O foguete sobe porque empurra os gases pra baixo. Isso é a:', o: ['1ª Lei', '2ª Lei', '3ª Lei', 'Lei de Ohm'], c: 2, e: 'Os gases reagem empurrando o foguete: ação e reação.' },
      { p: 'Força resultante de 20 N num corpo de 4 kg. A aceleração é:', o: ['80 m/s²', '5 m/s²', '16 m/s²', '0,2 m/s²'], c: 1, e: 'a = F/m = 20/4 = 5 m/s².' },
      { p: 'A unidade de força no SI é o:', o: ['Joule', 'Watt', 'Newton', 'Pascal'], c: 2, e: 'Newton (N).' }
    ],
    cartoes: [
      { f: '1ª Lei de Newton', v: 'Inércia: sem força resultante, o corpo mantém seu estado.' },
      { f: '2ª Lei de Newton', v: 'F = m · a' },
      { f: '3ª Lei de Newton', v: 'Ação e reação: iguais, opostas, em corpos diferentes.' },
      { f: 'Peso', v: 'P = m · g (em newtons)' },
      { f: 'Atrito', v: 'Fat = μ · N' },
      { f: 'Massa x peso', v: 'Massa não muda; peso depende da gravidade.' }
    ]
  },

  'fis-energia': {
    resumo: [
      { t: 'Trabalho', p: 'Uma força realiza trabalho quando desloca um corpo: **τ = F · d · cos θ**, em **joules (J)**. Se a força for **perpendicular** ao movimento, o trabalho é **zero**.' },
      { t: 'Energia cinética', p: 'Energia do **movimento**: **Ec = m · v² / 2**.' },
      { t: 'Energia potencial', p: 'Energia **guardada**.\nGravitacional (altura): **Ep = m · g · h**.\nElástica (mola): **Ep = k · x² / 2**.' },
      { t: 'Conservação da energia', p: 'Sem atrito, a **energia mecânica** (Ec + Ep) **não muda**: só se transforma. Uma bola caindo troca potencial por cinética.' },
      { t: 'Potência', p: 'Rapidez pra realizar trabalho: **P = τ / Δt**, em **watts (W)**. Na conta de luz aparece o **kWh** (energia de 1000 W durante 1 hora).' }
    ],
    exemplo: 'Uma bola cai de 5 m sem atrito: m·g·h = m·v²/2 → v = √(2·10·5) = 10 m/s.',
    perguntas: [
      { p: 'Uma força de 10 N desloca um objeto 5 m na mesma direção. Trabalho?', o: ['2 J', '15 J', '50 J', '500 J'], c: 2, e: 'τ = F·d = 10·5 = 50 J.' },
      { p: 'Energia cinética de 2 kg a 3 m/s?', o: ['6 J', '9 J', '18 J', '3 J'], c: 1, e: 'Ec = 2·9/2 = 9 J.' },
      { p: 'Energia potencial de 1 kg a 10 m de altura? (g = 10)', o: ['10 J', '100 J', '1 J', '1000 J'], c: 1, e: 'Ep = 1·10·10 = 100 J.' },
      { p: 'Uma bola cai de 5 m sem atrito. Com que velocidade chega ao chão?', o: ['5 m/s', '10 m/s', '50 m/s', '25 m/s'], c: 1, e: 'v = √(2gh) = √100 = 10 m/s.' },
      { p: 'Um motor faz 600 J em 2 minutos. Potência?', o: ['300 W', '5 W', '1200 W', '50 W'], c: 1, e: '2 min = 120 s. P = 600/120 = 5 W.' },
      { p: 'A unidade de energia no SI é o:', o: ['Watt', 'Newton', 'Joule', 'Volt'], c: 2, e: 'Energia e trabalho: joule.' },
      { p: 'Uma força perpendicular ao deslocamento realiza trabalho:', o: ['Máximo', 'Zero', 'Negativo', 'Infinito'], c: 1, e: 'cos 90° = 0, então o trabalho é zero.' }
    ],
    cartoes: [
      { f: 'Trabalho', v: 'τ = F · d · cos θ (J)' },
      { f: 'Energia cinética', v: 'Ec = m · v² / 2' },
      { f: 'Energia potencial gravitacional', v: 'Ep = m · g · h' },
      { f: 'Energia potencial elástica', v: 'k · x² / 2' },
      { f: 'Conservação da energia mecânica', v: 'Sem atrito, Ec + Ep é constante.' },
      { f: 'Potência', v: 'P = τ / Δt (W)' }
    ]
  },

  'fis-termologia': {
    resumo: [
      { t: 'Temperatura x calor', p: '**Temperatura** mede a **agitação das partículas**. **Calor** é a **energia térmica em trânsito**, sempre do corpo **mais quente** pro **mais frio**, até o **equilíbrio térmico**.' },
      { t: 'Escalas', p: '**Celsius**: gelo derrete a 0 °C, água ferve a 100 °C.\n**Fahrenheit**: 32 °F e 212 °F.\n**Kelvin**: 273 K e 373 K. O **zero absoluto** é 0 K = −273 °C.' },
      { t: 'Conversão', p: '**C/5 = (F − 32)/9 = (K − 273)/5**\nAtalho: **K = C + 273**.' },
      { t: 'Dilatação térmica', p: 'Aquecidos, os corpos aumentam de tamanho: **ΔL = L₀ · α · ΔT**. Por isso trilhos e pontes têm juntas de dilatação.' },
      { t: 'Como o calor se propaga', p: '**Condução**: de partícula em partícula, nos sólidos (a colher esquentando).\n**Convecção**: correntes em líquidos e gases (por isso o ar-condicionado fica no alto).\n**Irradiação**: por ondas, até no **vácuo** (o calor do Sol).' }
    ],
    exemplo: '25 °C em kelvin: 25 + 273 = 298 K.',
    perguntas: [
      { p: 'Quanto é 0 °C em kelvin?', o: ['0 K', '100 K', '273 K', '−273 K'], c: 2, e: 'K = C + 273 = 273 K.' },
      { p: 'Quanto é 100 °C em Fahrenheit?', o: ['100 °F', '180 °F', '212 °F', '373 °F'], c: 2, e: 'A água ferve a 212 °F.' },
      { p: 'O calor flui sempre:', o: ['Do frio pro quente', 'Do quente pro frio', 'Pra cima', 'Só nos metais'], c: 1, e: 'Até os dois ficarem na mesma temperatura.' },
      { p: 'O calor do Sol chega à Terra por:', o: ['Condução', 'Convecção', 'Irradiação', 'Dilatação'], c: 2, e: 'É o único processo que funciona no vácuo do espaço.' },
      { p: 'O ar-condicionado fica no alto por causa da:', o: ['Condução', 'Convecção', 'Irradiação', 'Inércia'], c: 1, e: 'O ar frio, mais denso, desce e cria correntes de convecção.' },
      { p: 'Quanto é 41 °F em Celsius?', o: ['5 °C', '9 °C', '41 °C', '−5 °C'], c: 0, e: 'C/5 = (41 − 32)/9 = 1 → C = 5 °C.' },
      { p: 'Temperatura mede:', o: ['A quantidade de calor', 'A agitação das partículas', 'A massa', 'A pressão'], c: 1, e: 'Quanto mais agitadas as partículas, maior a temperatura.' }
    ],
    cartoes: [
      { f: 'Temperatura', v: 'Agitação das partículas.' },
      { f: 'Calor', v: 'Energia térmica em trânsito, do quente pro frio.' },
      { f: 'Celsius → Kelvin', v: 'K = C + 273' },
      { f: 'Zero absoluto', v: '0 K = −273 °C' },
      { f: 'Condução', v: 'Partícula a partícula (sólidos).' },
      { f: 'Irradiação', v: 'Por ondas, até no vácuo (Sol).' }
    ]
  },

  'fis-calorimetria': {
    resumo: [
      { t: 'Calor sensível', p: 'Muda a **temperatura**: **Q = m · c · ΔT** ("que macete").\nO **c** é o calor específico. Da água: **1 cal/g°C**, um valor alto (por isso ela demora pra esquentar).' },
      { t: 'Calor latente', p: 'Muda o **estado físico**, com a temperatura **constante**: **Q = m · L**. Ex.: fusão do gelo, L = 80 cal/g.' },
      { t: 'Mudanças de estado', p: '**Fusão**: sólido → líquido. **Solidificação**: líquido → sólido.\n**Vaporização**: líquido → gás (evaporação, ebulição, calefação).\n**Condensação**: gás → líquido.\n**Sublimação**: sólido → gás direto (naftalina, gelo-seco).' },
      { t: 'Trocas de calor', p: 'Num recipiente isolado, o calor que um corpo perde o outro ganha: **soma dos Q = 0**.' },
      { t: 'Capacidade térmica', p: '**C = m · c**: quanto calor o corpo inteiro precisa pra subir 1 °C.' }
    ],
    exemplo: '100 g de água a 80 °C misturados com 100 g a 20 °C: massas iguais, temperatura final = média = 50 °C.',
    perguntas: [
      { p: 'Calor pra aquecer 100 g de água de 20 °C a 30 °C? (c = 1 cal/g°C)', o: ['100 cal', '1000 cal', '3000 cal', '10 cal'], c: 1, e: 'Q = 100·1·10 = 1000 cal.' },
      { p: 'Calor pra derreter 10 g de gelo a 0 °C? (L = 80 cal/g)', o: ['8 cal', '80 cal', '800 cal', '90 cal'], c: 2, e: 'Q = m·L = 10·80 = 800 cal.' },
      { p: 'Durante uma mudança de estado, a temperatura:', o: ['Sobe', 'Desce', 'Fica constante', 'Vira zero'], c: 2, e: 'A energia vai toda pra mudar o estado.' },
      { p: 'A passagem do sólido direto pro gasoso é a:', o: ['Fusão', 'Sublimação', 'Condensação', 'Ebulição'], c: 1, e: 'Como a naftalina "sumindo" no armário.' },
      { p: 'A água demora pra esquentar porque:', o: ['É transparente', 'Tem calor específico alto', 'É líquida', 'Tem massa pequena'], c: 1, e: 'Precisa de muito calor pra subir cada grau.' },
      { p: 'Misturando 100 g de água a 80 °C com 100 g a 20 °C, a temperatura final é:', o: ['40 °C', '50 °C', '60 °C', '100 °C'], c: 1, e: 'Massas iguais da mesma substância: média, 50 °C.' }
    ],
    cartoes: [
      { f: 'Calor sensível', v: 'Q = m · c · ΔT (muda a temperatura)' },
      { f: 'Calor latente', v: 'Q = m · L (muda o estado)' },
      { f: 'Calor específico da água', v: '1 cal/g°C' },
      { f: 'Sublimação', v: 'Sólido → gás direto.' },
      { f: 'Condensação', v: 'Gás → líquido.' },
      { f: 'Trocas de calor', v: 'Soma dos Q = 0' }
    ]
  },

  'fis-optica': {
    resumo: [
      { t: 'A luz', p: 'Se propaga em **linha reta** (por isso existe a sombra) e, no vácuo, a **300.000 km/s** (3 × 10⁸ m/s).' },
      { t: 'Reflexão', p: 'A luz bate e volta. O **ângulo de incidência é igual ao de reflexão**.\nNo **espelho plano**, a imagem é **virtual**, do **mesmo tamanho**, à **mesma distância** e invertida lado a lado.' },
      { t: 'Refração', p: 'Ao mudar de meio (ar → água), a luz muda de **velocidade** e **desvia**. Por isso o canudo parece quebrado no copo. Índice de refração: **n = c / v**. O **arco-íris** vem da refração e da dispersão.' },
      { t: 'Lentes', p: '**Convergentes**: juntam a luz (lupa). Corrigem **hipermetropia**.\n**Divergentes**: espalham a luz. Corrigem **miopia**.' },
      { t: 'Cores', p: 'Um objeto **vermelho reflete o vermelho** e absorve as outras cores. O **branco reflete todas**; o **preto absorve todas** (por isso esquenta mais no Sol).' }
    ],
    exemplo: 'Se você está a 2 m de um espelho plano, sua imagem fica 2 m atrás dele, ou seja, a 4 m de você.',
    perguntas: [
      { p: 'A existência da sombra mostra que a luz:', o: ['É uma partícula', 'Se propaga em linha reta', 'É muito lenta', 'Faz curva'], c: 1, e: 'Propagação retilínea: o objeto bloqueia a luz.' },
      { p: 'Você está a 2 m de um espelho plano. A que distância está sua imagem de você?', o: ['2 m', '4 m', '1 m', '0 m'], c: 1, e: 'A imagem fica 2 m atrás do espelho: 4 m de você.' },
      { p: 'O canudo parece "quebrado" num copo d’água por causa da:', o: ['Reflexão', 'Refração', 'Difração', 'Sombra'], c: 1, e: 'A luz muda de direção ao passar da água pro ar.' },
      { p: 'A lente que corrige a miopia é:', o: ['Convergente', 'Divergente', 'Plana', 'Espelhada'], c: 1, e: 'Miopia: lente divergente.' },
      { p: 'Uma camiseta vermelha parece vermelha porque:', o: ['Absorve o vermelho', 'Reflete o vermelho', 'Emite luz', 'Reflete todas as cores'], c: 1, e: 'Ela reflete o vermelho e absorve as outras cores.' },
      { p: 'A imagem num espelho plano é:', o: ['Real e maior', 'Virtual e do mesmo tamanho', 'Real e menor', 'Virtual e maior'], c: 1, e: 'Virtual, do mesmo tamanho e simétrica.' }
    ],
    cartoes: [
      { f: 'Velocidade da luz no vácuo', v: '3 × 10⁸ m/s' },
      { f: 'Lei da reflexão', v: 'Ângulo de incidência = ângulo de reflexão.' },
      { f: 'Refração', v: 'Desvio da luz ao mudar de meio.' },
      { f: 'Miopia', v: 'Corrigida com lente divergente.' },
      { f: 'Hipermetropia', v: 'Corrigida com lente convergente.' },
      { f: 'Objeto preto', v: 'Absorve todas as cores.' }
    ]
  },

  'fis-ondas': {
    resumo: [
      { t: 'O que é onda', p: 'Uma perturbação que **transporta energia sem transportar matéria**. A onda do mar faz a boia subir e descer, mas a boia não viaja junto.' },
      { t: 'Tipos', p: '**Mecânicas**: precisam de um meio (o **som**). **Não existem no vácuo**.\n**Eletromagnéticas**: não precisam de meio (luz, rádio, micro-ondas, raio X).\n**Transversais** (vibram perpendicular, como a luz) e **longitudinais** (vibram na mesma direção, como o som).' },
      { t: 'Elementos', p: '**Amplitude**: a "altura" da onda.\n**Comprimento de onda (λ)**: distância entre duas cristas.\n**Frequência (f)**: oscilações por segundo, em **hertz (Hz)**.\n**Período**: **T = 1/f**.' },
      { t: 'Equação fundamental', p: '**v = λ · f**' },
      { t: 'O som', p: '**Altura**: depende da frequência (alta = **agudo**, baixa = **grave**).\n**Intensidade**: o volume, em decibéis.\n**Timbre**: o que diferencia um violão de um piano tocando a mesma nota.\n**Efeito Doppler**: a sirene parece mais aguda quando se aproxima.' }
    ],
    exemplo: 'Uma onda com λ = 2 m e f = 5 Hz: v = 2 · 5 = 10 m/s.',
    perguntas: [
      { p: 'Uma onda tem λ = 2 m e f = 5 Hz. Qual a velocidade?', o: ['2,5 m/s', '7 m/s', '10 m/s', '0,4 m/s'], c: 2, e: 'v = λ·f = 2·5 = 10 m/s.' },
      { p: 'O som consegue se propagar no vácuo?', o: ['Sim, mais rápido', 'Sim, mais devagar', 'Não', 'Só se for agudo'], c: 2, e: 'O som é onda mecânica: precisa de um meio.' },
      { p: 'A luz é uma onda:', o: ['Mecânica', 'Eletromagnética', 'Sonora', 'Longitudinal'], c: 1, e: 'Por isso atravessa o vácuo do espaço.' },
      { p: 'Um som agudo tem frequência:', o: ['Alta', 'Baixa', 'Zero', 'Negativa'], c: 0, e: 'Agudo = alta frequência; grave = baixa.' },
      { p: 'Se f = 4 Hz, qual o período?', o: ['4 s', '0,25 s', '2 s', '0,5 s'], c: 1, e: 'T = 1/f = 1/4 = 0,25 s.' },
      { p: 'A sirene da ambulância fica mais aguda quando ela se aproxima. Isso é o:', o: ['Eco', 'Efeito Doppler', 'Timbre', 'Arco-íris'], c: 1, e: 'Efeito Doppler: a frequência percebida muda com o movimento.' },
      { p: 'O que diferencia um violão de um piano na mesma nota?', o: ['Altura', 'Intensidade', 'Timbre', 'Frequência'], c: 2, e: 'O timbre é a "assinatura" de cada som.' }
    ],
    cartoes: [
      { f: 'Onda', v: 'Transporta energia, não matéria.' },
      { f: 'Equação fundamental', v: 'v = λ · f' },
      { f: 'Período', v: 'T = 1/f' },
      { f: 'Onda mecânica', v: 'Precisa de meio (som). Não existe no vácuo.' },
      { f: 'Som agudo', v: 'Frequência alta.' },
      { f: 'Efeito Doppler', v: 'Frequência muda com o movimento da fonte.' }
    ]
  },

  'fis-eletrostatica': {
    resumo: [
      { t: 'Carga elétrica', p: 'Prótons têm carga **positiva** e elétrons, **negativa**. Um corpo fica carregado quando **ganha ou perde elétrons**. A carga elementar é **e = 1,6 × 10⁻¹⁹ C** e **Q = n · e**.' },
      { t: 'Atração e repulsão', p: 'Cargas **iguais se repelem**; cargas **opostas se atraem**.' },
      { t: 'Eletrização', p: '**Atrito**: os dois corpos ficam com cargas **opostas**.\n**Contato**: ficam com cargas de **mesmo sinal**.\n**Indução**: sem encostar; o induzido fica com sinal **oposto** ao indutor.' },
      { t: 'Condutores e isolantes', p: '**Condutores** deixam as cargas andarem (metais). **Isolantes** não deixam (borracha, plástico, vidro).' },
      { t: 'Lei de Coulomb', p: '**F = k · |Q₁ · Q₂| / d²**. Se a distância **dobra**, a força fica **4 vezes menor**.' }
    ],
    exemplo: 'Esfregar um balão no cabelo: o balão fica negativo, o cabelo positivo, e um atrai o outro (eletrização por atrito).',
    perguntas: [
      { p: 'Duas cargas negativas:', o: ['Se atraem', 'Se repelem', 'Não interagem', 'Viram positivas'], c: 1, e: 'Cargas iguais se repelem.' },
      { p: 'Na eletrização por atrito, os corpos ficam com cargas:', o: ['Iguais', 'Opostas', 'Nulas', 'Positivas'], c: 1, e: 'Um perde elétrons e o outro ganha.' },
      { p: 'Um corpo fica positivo quando:', o: ['Ganha elétrons', 'Perde elétrons', 'Ganha prótons', 'Perde nêutrons'], c: 1, e: 'Perdendo elétrons, sobram mais prótons.' },
      { p: 'Se a distância entre duas cargas dobra, a força fica:', o: ['2 vezes maior', '2 vezes menor', '4 vezes menor', 'Igual'], c: 2, e: 'A força depende de 1/d²: dobrar d divide por 4.' },
      { p: 'Qual material é um bom isolante?', o: ['Cobre', 'Ferro', 'Borracha', 'Alumínio'], c: 2, e: 'A borracha não deixa as cargas passarem.' },
      { p: 'Na eletrização por contato, os corpos ficam com cargas:', o: ['De mesmo sinal', 'De sinais opostos', 'Neutras', 'Aleatórias'], c: 0, e: 'Eles dividem a carga: mesmo sinal.' }
    ],
    cartoes: [
      { f: 'Carga elementar', v: 'e = 1,6 × 10⁻¹⁹ C' },
      { f: 'Cargas iguais', v: 'Se repelem.' },
      { f: 'Eletrização por atrito', v: 'Cargas opostas.' },
      { f: 'Eletrização por contato', v: 'Cargas de mesmo sinal.' },
      { f: 'Lei de Coulomb', v: 'F = k · |Q₁·Q₂| / d²' },
      { f: 'Corpo positivo', v: 'Perdeu elétrons.' }
    ]
  },

  'fis-corrente': {
    resumo: [
      { t: 'Corrente elétrica', p: 'É o movimento ordenado de cargas: **i = Q / Δt**, em **ampères (A)**.' },
      { t: 'Tensão e resistência', p: '**Tensão (ddp)**: o "empurrão" nas cargas, em **volts (V)**. Na tomada: 127 V ou 220 V.\n**Resistência**: a dificuldade pra corrente passar, em **ohms (Ω)**.' },
      { t: 'Leis de Ohm', p: '**1ª**: **U = R · i**.\n**2ª**: **R = ρ · L / A**. Fio mais **comprido** = mais resistência; fio mais **grosso** = menos resistência.' },
      { t: 'Potência e energia', p: '**P = U · i** (também R·i² e U²/R), em watts.\nEnergia gasta: **E = P · Δt**. Na conta de luz, em **kWh**.' },
      { t: 'Efeito Joule', p: 'A passagem de corrente **aquece** o resistor. É assim que funcionam o chuveiro, o ferro de passar e a torradeira.' }
    ],
    exemplo: 'Um chuveiro de 5500 W ligado 2 horas gasta 5,5 kW · 2 h = 11 kWh.',
    perguntas: [
      { p: 'Tensão de 220 V num resistor de 55 Ω. Corrente?', o: ['4 A', '275 A', '0,25 A', '12100 A'], c: 0, e: 'i = U/R = 220/55 = 4 A.' },
      { p: 'Um chuveiro de 5500 W ligado por 2 h gasta:', o: ['2750 kWh', '11 kWh', '5,5 kWh', '110 kWh'], c: 1, e: '5,5 kW · 2 h = 11 kWh.' },
      { p: 'Passam 10 C de carga em 2 s. Qual a corrente?', o: ['20 A', '5 A', '0,2 A', '12 A'], c: 1, e: 'i = Q/Δt = 10/2 = 5 A.' },
      { p: 'Um fio mais comprido tem resistência:', o: ['Menor', 'Maior', 'Igual', 'Zero'], c: 1, e: '2ª Lei de Ohm: R aumenta com o comprimento.' },
      { p: 'O aquecimento do chuveiro é explicado pelo:', o: ['Efeito Doppler', 'Efeito Joule', 'Efeito estufa', 'Efeito fotoelétrico'], c: 1, e: 'A corrente aquece a resistência: efeito Joule.' },
      { p: 'U = 10 V e i = 2 A. Qual a potência?', o: ['5 W', '12 W', '20 W', '8 W'], c: 2, e: 'P = U·i = 10·2 = 20 W.' }
    ],
    cartoes: [
      { f: 'Corrente elétrica', v: 'i = Q / Δt (A)' },
      { f: '1ª Lei de Ohm', v: 'U = R · i' },
      { f: '2ª Lei de Ohm', v: 'R = ρ · L / A' },
      { f: 'Potência elétrica', v: 'P = U · i (W)' },
      { f: 'Energia elétrica', v: 'E = P · Δt (kWh na conta)' },
      { f: 'Efeito Joule', v: 'Corrente aquece o resistor.' }
    ]
  },

  'fis-circuitos': {
    resumo: [
      { t: 'Associação em série', p: 'Um resistor depois do outro, num caminho só.\n**Mesma corrente** em todos. As **tensões se somam**.\n**Req = R₁ + R₂ + ...**\nSe um queima, **todos apagam** (pisca-pisca antigo).' },
      { t: 'Associação em paralelo', p: 'Cada resistor num caminho diferente.\n**Mesma tensão** em todos. As **correntes se somam**.\n**1/Req = 1/R₁ + 1/R₂ + ...**\nDois iguais: Req = R/2. É assim que a **casa** é ligada: um aparelho desligado não desliga os outros.' },
      { t: 'Medidores', p: '**Amperímetro** (mede corrente): ligado **em série**.\n**Voltímetro** (mede tensão): ligado **em paralelo**.' },
      { t: 'Segurança', p: '**Fusível** e **disjuntor** cortam o circuito quando a corrente fica alta demais, evitando incêndios. **Curto-circuito**: a corrente passa por um caminho sem resistência e dispara.' }
    ],
    exemplo: 'Resistores de 3 Ω e 6 Ω em paralelo: Req = (3·6)/(3+6) = 18/9 = 2 Ω.',
    perguntas: [
      { p: 'Resistores de 4 Ω e 6 Ω em série. Resistência equivalente?', o: ['2,4 Ω', '10 Ω', '24 Ω', '2 Ω'], c: 1, e: 'Em série soma: 4 + 6 = 10 Ω.' },
      { p: 'Dois resistores de 6 Ω em paralelo. Equivalente?', o: ['12 Ω', '6 Ω', '3 Ω', '36 Ω'], c: 2, e: 'Dois iguais em paralelo: R/2 = 3 Ω.' },
      { p: 'As tomadas de uma casa são ligadas em:', o: ['Série', 'Paralelo', 'Nenhuma das duas', 'Só um fio'], c: 1, e: 'Paralelo: todos com a mesma tensão e independentes.' },
      { p: 'O amperímetro deve ser ligado:', o: ['Em série', 'Em paralelo', 'Fora do circuito', 'Na tomada'], c: 0, e: 'Pra medir a corrente que passa, ele fica em série.' },
      { p: 'Num circuito em série, a corrente é:', o: ['Diferente em cada resistor', 'Igual em todos', 'Zero', 'Maior no último'], c: 1, e: 'Só existe um caminho: a corrente é a mesma.' },
      { p: 'Resistores de 3 Ω e 6 Ω em paralelo. Equivalente?', o: ['9 Ω', '2 Ω', '4,5 Ω', '18 Ω'], c: 1, e: 'Produto sobre soma: 18/9 = 2 Ω.' },
      { p: 'A função do disjuntor é:', o: ['Aumentar a tensão', 'Cortar a corrente quando ela fica alta demais', 'Medir a energia', 'Gerar eletricidade'], c: 1, e: 'Ele protege a instalação.' }
    ],
    cartoes: [
      { f: 'Série', v: 'Mesma corrente; Req = soma.' },
      { f: 'Paralelo', v: 'Mesma tensão; 1/Req = soma dos inversos.' },
      { f: 'Dois resistores iguais em paralelo', v: 'R/2' },
      { f: 'Amperímetro', v: 'Ligado em série.' },
      { f: 'Voltímetro', v: 'Ligado em paralelo.' },
      { f: 'Instalação da casa', v: 'Em paralelo.' }
    ]
  },

  'fis-magnetismo': {
    resumo: [
      { t: 'Ímãs', p: 'Todo ímã tem **polo norte e polo sul**. Polos **opostos se atraem** e polos **iguais se repelem**.' },
      { t: 'Polos inseparáveis', p: 'Se você quebra um ímã ao meio, **não separa** os polos: fica com **dois ímãs menores**, cada um com norte e sul.' },
      { t: 'A Terra é um ímã', p: 'A **bússola** aponta pro norte porque a Terra funciona como um grande ímã. Curiosidade: o polo **norte geográfico** fica perto do **sul magnético**.' },
      { t: 'Eletricidade gera magnetismo', p: '**Oersted** (1820) descobriu que **corrente elétrica cria campo magnético**. Assim funcionam o **eletroímã** e o **motor elétrico**.' },
      { t: 'Magnetismo gera eletricidade', p: '**Faraday**: um campo magnético **variando** cria corrente elétrica (**indução eletromagnética**). É o princípio dos **geradores das usinas** e dos **transformadores**.' }
    ],
    exemplo: 'Numa usina hidrelétrica, a água gira a turbina, que gira ímãs perto de bobinas: o campo variando gera a energia da sua casa.',
    perguntas: [
      { p: 'Dois polos norte aproximados:', o: ['Se atraem', 'Se repelem', 'Viram sul', 'Não fazem nada'], c: 1, e: 'Polos iguais se repelem.' },
      { p: 'Quebrando um ímã ao meio, você obtém:', o: ['Um polo norte e um polo sul separados', 'Dois ímãs, cada um com norte e sul', 'Dois pedaços sem magnetismo', 'Só polos norte'], c: 1, e: 'Os polos são inseparáveis.' },
      { p: 'Quem descobriu que a corrente elétrica cria campo magnético?', o: ['Newton', 'Oersted', 'Galileu', 'Ohm'], c: 1, e: 'Oersted, em 1820.' },
      { p: 'Os geradores das usinas funcionam por:', o: ['Efeito Joule', 'Indução eletromagnética', 'Refração', 'Atrito'], c: 1, e: 'Campo magnético variando gera corrente (Faraday).' },
      { p: 'A bússola aponta pro norte porque:', o: ['A Terra se comporta como um ímã', 'O Sol a atrai', 'O ar a empurra', 'Ela tem pilha'], c: 0, e: 'O campo magnético da Terra orienta a agulha.' },
      { p: 'O eletroímã funciona graças a:', o: ['Corrente elétrica criando campo magnético', 'Luz', 'Calor', 'Som'], c: 0, e: 'Ao passar corrente na bobina, ela vira um ímã.' }
    ],
    cartoes: [
      { f: 'Polos iguais', v: 'Se repelem.' },
      { f: 'Inseparabilidade dos polos', v: 'Quebrar um ímã gera dois ímãs.' },
      { f: 'Oersted', v: 'Corrente elétrica cria campo magnético.' },
      { f: 'Faraday', v: 'Campo magnético variando gera corrente (indução).' },
      { f: 'Gerador de usina', v: 'Funciona por indução eletromagnética.' },
      { f: 'Norte geográfico', v: 'Fica perto do sul magnético.' }
    ]
  }
});
