// Química — 1º, 2º e 3º ano
window.AULAS = window.AULAS || {};
Object.assign(window.AULAS, {
  'qui-materia': {
    resumo: [
      { t: 'Matéria e estados físicos', p: 'Matéria é tudo que tem **massa** e **ocupa espaço**.\n**Sólido**: forma e volume fixos.\n**Líquido**: volume fixo, forma do recipiente.\n**Gasoso**: forma e volume variáveis.' },
      { t: 'Propriedades', p: '**Gerais** (toda matéria tem): massa, volume, inércia.\n**Específicas** (identificam a substância): ponto de fusão e de ebulição, solubilidade e **densidade** (**d = m / V**).' },
      { t: 'Substâncias', p: '**Simples**: um só elemento (O₂, Fe).\n**Composta**: dois ou mais elementos (H₂O, NaCl).' },
      { t: 'Misturas', p: '**Homogênea**: uma fase só, aspecto uniforme (água com sal, ar).\n**Heterogênea**: duas ou mais fases (água com óleo, granito).' },
      { t: 'Separação de misturas', p: '**Filtração**: sólido + líquido que não se dissolve.\n**Decantação** e **funil de separação**: líquidos que não se misturam (água e óleo).\n**Destilação simples**: sólido dissolvido em líquido (água e sal).\n**Destilação fracionada**: líquidos misturados (petróleo).\n**Separação magnética**: com ímã (limalha de ferro).' },
      { t: 'Fenômeno físico x químico', p: '**Físico**: não cria substância nova (gelo derretendo, papel rasgado).\n**Químico**: forma substância nova (ferro enferrujando, papel queimando).' }
    ],
    exemplo: 'Uma amostra de 200 g com 100 mL de volume tem densidade d = 200 / 100 = 2 g/mL.',
    perguntas: [
      { p: 'Água e óleo formam uma mistura:', o: ['Homogênea', 'Heterogênea', 'Substância pura', 'Solução'], c: 1, e: 'Dá pra ver duas fases.' },
      { p: 'Qual método separa a água do sal dissolvido nela?', o: ['Filtração', 'Destilação simples', 'Separação magnética', 'Peneiração'], c: 1, e: 'A água evapora e é condensada; o sal fica.' },
      { p: 'O gás oxigênio (O₂) é uma substância:', o: ['Composta', 'Simples', 'Mistura', 'Heterogênea'], c: 1, e: 'Formada por um só elemento: simples.' },
      { p: 'Qual a densidade de 200 g que ocupam 100 mL?', o: ['0,5 g/mL', '2 g/mL', '20 g/mL', '300 g/mL'], c: 1, e: 'd = m/V = 200/100 = 2 g/mL.' },
      { p: 'Ferro enferrujando é um fenômeno:', o: ['Físico', 'Químico', 'Biológico', 'Mecânico'], c: 1, e: 'Forma uma substância nova (a ferrugem).' },
      { p: 'O gelo derretendo é um fenômeno:', o: ['Físico', 'Químico', 'Nuclear', 'Elétrico'], c: 0, e: 'Continua sendo água, só mudou de estado.' },
      { p: 'Qual método separa os componentes do petróleo?', o: ['Filtração', 'Destilação fracionada', 'Catação', 'Imantação'], c: 1, e: 'Separa líquidos misturados pelos pontos de ebulição.' }
    ],
    cartoes: [
      { f: 'Densidade', v: 'd = m / V' },
      { f: 'Substância simples', v: 'Um só elemento: O₂.' },
      { f: 'Mistura heterogênea', v: 'Duas ou mais fases: água e óleo.' },
      { f: 'Destilação simples', v: 'Separa sólido dissolvido em líquido.' },
      { f: 'Funil de separação', v: 'Separa líquidos que não se misturam.' },
      { f: 'Fenômeno químico', v: 'Forma substância nova.' }
    ]
  },

  'qui-tabela': {
    resumo: [
      { t: 'Organização', p: 'A tabela periódica organiza os elementos pelo **número atômico (Z)** crescente.\n**Períodos** (linhas, 7): indicam o **número de camadas** de elétrons.\n**Grupos ou famílias** (colunas, 18): elementos com **propriedades parecidas**.' },
      { t: 'Famílias famosas', p: '**Grupo 1**: metais alcalinos (Li, Na, K). Muito reativos.\n**Grupo 2**: alcalinoterrosos (Mg, Ca).\n**Grupo 17**: halogênios (F, Cl, Br, I).\n**Grupo 18**: gases nobres (He, Ne, Ar). Estáveis, quase não reagem.' },
      { t: 'Metais e ametais', p: 'A maioria é **metal**: brilho, conduz calor e eletricidade. Os **ametais** ficam à direita. O **hidrogênio** é um caso especial: fica no grupo 1, mas não é metal.' },
      { t: 'Propriedades periódicas', p: '**Raio atômico**: aumenta **pra baixo** e **pra esquerda**.\n**Eletronegatividade** (vontade de atrair elétrons) e **energia de ionização**: aumentam **pra cima** e **pra direita**. O **flúor** é o mais eletronegativo.' }
    ],
    exemplo: 'O sódio (Na) tem 3 camadas, então fica no 3º período. Tem 1 elétron na última camada: grupo 1, metal alcalino.',
    perguntas: [
      { p: 'As linhas horizontais da tabela são os:', o: ['Grupos', 'Períodos', 'Famílias', 'Blocos'], c: 1, e: 'Linhas = períodos; colunas = grupos.' },
      { p: 'O sódio (Na) pertence à família dos:', o: ['Halogênios', 'Gases nobres', 'Metais alcalinos', 'Calcogênios'], c: 2, e: 'Grupo 1: metais alcalinos.' },
      { p: 'Os gases nobres ficam no grupo:', o: ['1', '2', '17', '18'], c: 3, e: 'Última coluna, grupo 18.' },
      { p: 'O elemento mais eletronegativo é o:', o: ['Oxigênio', 'Flúor', 'Cloro', 'Hélio'], c: 1, e: 'O flúor tem a maior eletronegatividade.' },
      { p: 'O raio atômico aumenta:', o: ['Pra cima no grupo', 'Pra baixo no grupo', 'Pra direita', 'Nunca muda'], c: 1, e: 'Mais camadas pra baixo = átomo maior.' },
      { p: 'O cloro (Cl) é um:', o: ['Metal alcalino', 'Halogênio', 'Gás nobre', 'Metal de transição'], c: 1, e: 'Grupo 17: halogênios.' },
      { p: 'Um elemento com 3 camadas de elétrons está no:', o: ['1º período', '2º período', '3º período', 'Grupo 3'], c: 2, e: 'Número de camadas = número do período.' }
    ],
    cartoes: [
      { f: 'Organização da tabela', v: 'Número atômico (Z) crescente.' },
      { f: 'Período', v: 'Linha; indica o número de camadas.' },
      { f: 'Grupo 1', v: 'Metais alcalinos.' },
      { f: 'Grupo 17', v: 'Halogênios.' },
      { f: 'Grupo 18', v: 'Gases nobres (estáveis).' },
      { f: 'Eletronegatividade', v: 'Aumenta pra cima e pra direita; o flúor é o maior.' }
    ]
  },

  'qui-ligacoes': {
    resumo: [
      { t: 'Regra do octeto', p: 'Os átomos se ligam pra ficar **estáveis**, geralmente com **8 elétrons na última camada**, como os gases nobres.' },
      { t: 'Ligação iônica', p: 'Entre **metal e ametal**. O metal **doa** elétrons e vira **cátion** (+); o ametal **recebe** e vira **ânion** (−). Ex.: **NaCl** (sal de cozinha). Formam sólidos com alto ponto de fusão.' },
      { t: 'Ligação covalente', p: 'Entre **ametais** (e hidrogênio). Os átomos **compartilham** pares de elétrons e formam **moléculas**. Ex.: H₂O, CO₂, O₂.' },
      { t: 'Ligação metálica', p: 'Entre **metais**. Os elétrons ficam soltos, num **"mar de elétrons"**. Por isso metais **conduzem eletricidade**.' },
      { t: 'Ligas metálicas', p: 'Misturas de metais (ou metal com outro elemento):\n**Aço** = ferro + carbono.\n**Bronze** = cobre + estanho.\n**Latão** = cobre + zinco.' }
    ],
    exemplo: 'O sódio perde 1 elétron (vira Na⁺) e o cloro ganha 1 (vira Cl⁻). Os dois ficam com 8 na última camada e se atraem: NaCl.',
    perguntas: [
      { p: 'O sal de cozinha (NaCl) é formado por ligação:', o: ['Covalente', 'Iônica', 'Metálica', 'De hidrogênio'], c: 1, e: 'Metal (Na) + ametal (Cl): iônica.' },
      { p: 'A água (H₂O) tem ligações:', o: ['Iônicas', 'Covalentes', 'Metálicas', 'Nenhuma'], c: 1, e: 'Hidrogênio e oxigênio compartilham elétrons.' },
      { p: 'A ligação entre átomos de um metal é a:', o: ['Iônica', 'Covalente', 'Metálica', 'Polar'], c: 2, e: 'Metais: ligação metálica, com mar de elétrons.' },
      { p: 'A regra do octeto diz que os átomos buscam:', o: ['2 elétrons', '8 elétrons na última camada', '8 prótons', 'Perder todos os elétrons'], c: 1, e: 'Como os gases nobres, que são estáveis.' },
      { p: 'Na ligação covalente, os elétrons são:', o: ['Transferidos', 'Compartilhados', 'Destruídos', 'Soltos num mar'], c: 1, e: 'Covalente = compartilhamento.' },
      { p: 'O aço é uma liga de:', o: ['Cobre e zinco', 'Ferro e carbono', 'Cobre e estanho', 'Ouro e prata'], c: 1, e: 'Aço = ferro + carbono.' },
      { p: 'Quando o sódio perde 1 elétron, ele vira:', o: ['Na⁻', 'Na⁺', 'Na²⁺', 'Um gás nobre'], c: 1, e: 'Perde carga negativa: vira cátion Na⁺.' }
    ],
    cartoes: [
      { f: 'Regra do octeto', v: '8 elétrons na última camada.' },
      { f: 'Ligação iônica', v: 'Metal + ametal; transferência de elétrons.' },
      { f: 'Ligação covalente', v: 'Ametal + ametal; compartilhamento.' },
      { f: 'Ligação metálica', v: 'Entre metais; mar de elétrons.' },
      { f: 'Cátion', v: 'Íon positivo (perdeu elétrons).' },
      { f: 'Latão', v: 'Cobre + zinco.' }
    ]
  },

  'qui-inorganicas': {
    resumo: [
      { t: 'Ácidos', p: 'Na água, liberam **H⁺**. Têm sabor azedo e **pH menor que 7**. Ex.: HCl (no estômago), H₂SO₄ (bateria), ácido cítrico (limão), ácido acético (vinagre).' },
      { t: 'Bases', p: 'Na água, liberam **OH⁻**. Sabor adstringente ("amarra" a boca) e **pH maior que 7**. Ex.: NaOH (soda cáustica), Mg(OH)₂ (leite de magnésia).' },
      { t: 'Sais', p: 'Saem da reação entre ácido e base: **ácido + base → sal + água** (**neutralização**). Ex.: HCl + NaOH → NaCl + H₂O.' },
      { t: 'Óxidos', p: 'Um elemento + **oxigênio**. Ex.: CO₂ (gás carbônico), CaO (cal virgem). Os óxidos **SO₂** e **NO₂**, da poluição, causam a **chuva ácida**.' },
      { t: 'pH e indicadores', p: 'Escala de 0 a 14: **< 7 ácido**, **7 neutro**, **> 7 básico**.\n**Fenolftaleína**: fica **rosa** em base.\n**Papel tornassol**: vermelho em ácido, azul em base.' }
    ],
    exemplo: 'Leite de magnésia (base) alivia a azia porque neutraliza o excesso de ácido do estômago.',
    perguntas: [
      { p: 'Uma solução com pH 3 é:', o: ['Ácida', 'Neutra', 'Básica', 'Salina'], c: 0, e: 'pH menor que 7: ácida.' },
      { p: 'O NaOH (soda cáustica) é um(a):', o: ['Ácido', 'Base', 'Sal', 'Óxido'], c: 1, e: 'Libera OH⁻ na água: base.' },
      { p: 'Ácido + base forma:', o: ['Óxido + água', 'Sal + água', 'Só sal', 'Gás oxigênio'], c: 1, e: 'É a reação de neutralização.' },
      { p: 'O CO₂ é um:', o: ['Ácido', 'Sal', 'Óxido', 'Base'], c: 2, e: 'Elemento + oxigênio: óxido.' },
      { p: 'A fenolftaleína numa base fica:', o: ['Incolor', 'Rosa', 'Azul', 'Amarela'], c: 1, e: 'Em meio básico ela fica rosa.' },
      { p: 'Quais gases causam a chuva ácida?', o: ['O₂ e N₂', 'SO₂ e NO₂', 'He e Ne', 'H₂ e CO'], c: 1, e: 'Óxidos de enxofre e nitrogênio reagem com a água da chuva.' },
      { p: 'O vinagre é:', o: ['Ácido', 'Básico', 'Neutro', 'Um óxido'], c: 0, e: 'Contém ácido acético.' }
    ],
    cartoes: [
      { f: 'Ácido', v: 'Libera H⁺; pH < 7.' },
      { f: 'Base', v: 'Libera OH⁻; pH > 7.' },
      { f: 'Neutralização', v: 'Ácido + base → sal + água.' },
      { f: 'Óxido', v: 'Elemento + oxigênio.' },
      { f: 'pH neutro', v: '7' },
      { f: 'Chuva ácida', v: 'Causada por SO₂ e NO₂.' }
    ]
  },

  'qui-reacoes': {
    resumo: [
      { t: 'Reação química', p: '**Reagentes → produtos**. Sinais de que houve reação: mudança de cor, liberação de gás, formação de sólido (precipitado), luz ou calor.' },
      { t: 'Lei de Lavoisier', p: '**Conservação da massa**: num sistema fechado, a massa dos reagentes é igual à dos produtos. "Na natureza nada se cria, nada se perde, tudo se transforma."' },
      { t: 'Balanceamento', p: 'O número de átomos de cada elemento tem que ser **igual dos dois lados**. Ex.: **2 H₂ + O₂ → 2 H₂O**.' },
      { t: 'Tipos de reação', p: '**Síntese**: A + B → AB.\n**Análise (decomposição)**: AB → A + B.\n**Simples troca**: A + BC → AC + B.\n**Dupla troca**: AB + CD → AD + CB.\n**Combustão**: combustível + O₂ → CO₂ + H₂O.' },
      { t: 'O mol', p: 'É uma "dúzia" de químico: **1 mol = 6,02 × 10²³** partículas (constante de Avogadro). A **massa molar** é a massa de 1 mol. Ex.: H₂O = 2·1 + 16 = **18 g/mol**.' }
    ],
    exemplo: 'CaCO₃ → CaO + CO₂: o calcário se decompõe no calor (reação de análise).',
    perguntas: [
      { p: 'Balanceando H₂ + O₂ → H₂O, os coeficientes são:', o: ['1, 1, 1', '2, 1, 2', '1, 2, 1', '2, 2, 2'], c: 1, e: '2 H₂ + O₂ → 2 H₂O: 4 H e 2 O de cada lado.' },
      { p: 'A Lei de Lavoisier fala da conservação da:', o: ['Energia', 'Massa', 'Temperatura', 'Cor'], c: 1, e: 'Num sistema fechado, a massa não muda.' },
      { p: 'Se reagem 10 g de reagentes num sistema fechado, os produtos têm:', o: ['Menos de 10 g', '10 g', 'Mais de 10 g', 'Depende da cor'], c: 1, e: 'Conservação da massa.' },
      { p: 'CaCO₃ → CaO + CO₂ é uma reação de:', o: ['Síntese', 'Decomposição', 'Simples troca', 'Dupla troca'], c: 1, e: 'Uma substância vira duas: decomposição.' },
      { p: 'Zn + 2 HCl → ZnCl₂ + H₂ é uma reação de:', o: ['Síntese', 'Análise', 'Simples troca', 'Dupla troca'], c: 2, e: 'O zinco "troca de lugar" com o hidrogênio.' },
      { p: '1 mol de qualquer coisa tem quantas partículas?', o: ['6,02 × 10²³', '1000', '10²³', '6,02'], c: 0, e: 'É a constante de Avogadro.' },
      { p: 'Qual a massa molar da água (H = 1, O = 16)?', o: ['17 g/mol', '18 g/mol', '16 g/mol', '32 g/mol'], c: 1, e: '2·1 + 16 = 18 g/mol.' }
    ],
    cartoes: [
      { f: 'Lei de Lavoisier', v: 'Conservação da massa.' },
      { f: 'Balancear', v: 'Mesmo número de átomos dos dois lados.' },
      { f: 'Síntese', v: 'A + B → AB' },
      { f: 'Decomposição', v: 'AB → A + B' },
      { f: 'Constante de Avogadro', v: '6,02 × 10²³' },
      { f: 'Combustão', v: 'Combustível + O₂ → CO₂ + H₂O' }
    ]
  },

  'qui-solucoes': {
    resumo: [
      { t: 'Solução', p: 'Mistura **homogênea** de **soluto** (o que dissolve, como o açúcar) e **solvente** (onde dissolve, geralmente a **água**, o "solvente universal").' },
      { t: 'Concentração comum', p: '**C = m / V** (gramas por litro). Ex.: 20 g de sal em 2 L → 10 g/L.' },
      { t: 'Concentração em mol', p: '**M = n / V** (mol por litro), onde n = massa ÷ massa molar.' },
      { t: 'Diluição', p: 'Acrescentar solvente diminui a concentração, mas a quantidade de soluto não muda: **C₁ · V₁ = C₂ · V₂**.' },
      { t: 'Solubilidade', p: 'O máximo de soluto que dissolve numa quantidade de solvente.\n**Insaturada**: dissolve mais.\n**Saturada**: chegou no limite (o que passar vai pro fundo, o "corpo de fundo").\n**Supersaturada**: mais que o limite, instável.' }
    ],
    exemplo: 'Diluir 100 mL de solução 2 mol/L até 400 mL: 2 · 100 = C₂ · 400 → C₂ = 0,5 mol/L.',
    perguntas: [
      { p: '20 g de sal dissolvidos em 2 L. Concentração?', o: ['40 g/L', '10 g/L', '22 g/L', '0,1 g/L'], c: 1, e: 'C = 20/2 = 10 g/L.' },
      { p: '0,5 mol dissolvido em 250 mL. Concentração?', o: ['0,125 mol/L', '2 mol/L', '0,5 mol/L', '125 mol/L'], c: 1, e: '250 mL = 0,25 L. M = 0,5/0,25 = 2 mol/L.' },
      { p: '100 mL de solução 2 mol/L diluída até 400 mL fica com:', o: ['8 mol/L', '0,5 mol/L', '1 mol/L', '2 mol/L'], c: 1, e: 'C₁V₁ = C₂V₂ → 200 = C₂ · 400 → 0,5 mol/L.' },
      { p: 'No café adoçado, o açúcar é o:', o: ['Solvente', 'Soluto', 'Precipitado', 'Catalisador'], c: 1, e: 'É o que se dissolve: soluto.' },
      { p: 'Uma solução com sal sobrando no fundo é:', o: ['Insaturada', 'Saturada com corpo de fundo', 'Diluída', 'Heterogênea sem soluto'], c: 1, e: 'Chegou no limite e o excesso foi pro fundo.' },
      { p: '4 g de NaOH (massa molar 40 g/mol) em 1 L. Concentração?', o: ['4 mol/L', '0,1 mol/L', '40 mol/L', '10 mol/L'], c: 1, e: 'n = 4/40 = 0,1 mol. M = 0,1/1 = 0,1 mol/L.' }
    ],
    cartoes: [
      { f: 'Soluto', v: 'O que se dissolve.' },
      { f: 'Solvente universal', v: 'Água.' },
      { f: 'Concentração comum', v: 'C = m / V (g/L)' },
      { f: 'Concentração em mol', v: 'M = n / V (mol/L)' },
      { f: 'Diluição', v: 'C₁ · V₁ = C₂ · V₂' },
      { f: 'Solução saturada', v: 'Chegou no limite de soluto.' }
    ]
  },

  'qui-termoquimica': {
    resumo: [
      { t: 'Calor nas reações', p: 'Toda reação troca energia. A **entalpia (H)** mede essa energia: **ΔH = H(produtos) − H(reagentes)**.' },
      { t: 'Exotérmica', p: '**Libera calor**, esquenta o ambiente. **ΔH < 0**. Ex.: combustão, respiração celular.' },
      { t: 'Endotérmica', p: '**Absorve calor**. **ΔH > 0**. Ex.: fotossíntese, cozinhar um ovo, compressa fria instantânea.' },
      { t: 'Lei de Hess', p: 'O ΔH de uma reação **não depende do caminho**: é a **soma** dos ΔH das etapas.' },
      { t: 'Energia de ligação', p: '**Quebrar** ligação **absorve** energia; **formar** ligação **libera** energia.' }
    ],
    exemplo: 'Queimar gás de cozinha libera calor (exotérmica, ΔH negativo); a fotossíntese precisa da luz do Sol (endotérmica, ΔH positivo).',
    perguntas: [
      { p: 'Uma reação que libera calor é:', o: ['Endotérmica', 'Exotérmica', 'Neutra', 'Isotérmica'], c: 1, e: 'Exo = pra fora: libera calor.' },
      { p: 'Numa reação exotérmica, o ΔH é:', o: ['Positivo', 'Negativo', 'Zero', 'Infinito'], c: 1, e: 'Os produtos têm menos energia: ΔH < 0.' },
      { p: 'A fotossíntese é uma reação:', o: ['Exotérmica', 'Endotérmica', 'Nuclear', 'De combustão'], c: 1, e: 'Ela absorve a energia da luz.' },
      { p: 'A Lei de Hess diz que o ΔH:', o: ['Depende do caminho', 'É a soma das etapas, independente do caminho', 'É sempre zero', 'Só existe em gases'], c: 1, e: 'Só importam o começo e o fim.' },
      { p: 'Quebrar ligações químicas:', o: ['Libera energia', 'Absorve energia', 'Não envolve energia', 'Cria massa'], c: 1, e: 'É preciso gastar energia pra quebrar.' },
      { p: 'A queima de combustível é:', o: ['Endotérmica', 'Exotérmica', 'Sem troca de calor', 'Física'], c: 1, e: 'Combustão libera calor.' }
    ],
    cartoes: [
      { f: 'Exotérmica', v: 'Libera calor; ΔH < 0.' },
      { f: 'Endotérmica', v: 'Absorve calor; ΔH > 0.' },
      { f: 'ΔH', v: 'H(produtos) − H(reagentes)' },
      { f: 'Lei de Hess', v: 'ΔH total = soma das etapas.' },
      { f: 'Quebrar ligação', v: 'Absorve energia.' },
      { f: 'Formar ligação', v: 'Libera energia.' }
    ]
  },

  'qui-cinetica': {
    resumo: [
      { t: 'Velocidade das reações', p: 'Algumas reações são rápidas (explosão) e outras lentas (ferrugem). A **cinética** estuda essa velocidade.' },
      { t: 'Teoria das colisões', p: 'Pra reagir, as partículas precisam **colidir** com **energia suficiente** (a **energia de ativação**) e na **orientação certa**.' },
      { t: 'O que acelera', p: '**Temperatura** maior: partículas mais agitadas.\n**Concentração** maior: mais colisões.\n**Superfície de contato** maior: comprimido em pó reage mais rápido que inteiro.\n**Pressão** maior (em gases).\n**Catalisador**.' },
      { t: 'Catalisador', p: 'Acelera a reação **diminuindo a energia de ativação**, e **não é consumido**. No corpo, as **enzimas** são catalisadores biológicos.' }
    ],
    exemplo: 'A geladeira conserva os alimentos porque a baixa temperatura deixa as reações de apodrecimento mais lentas.',
    perguntas: [
      { p: 'Um comprimido em pó dissolve mais rápido por causa da:', o: ['Temperatura', 'Superfície de contato', 'Pressão', 'Cor'], c: 1, e: 'Em pó há muito mais área exposta.' },
      { p: 'A geladeira conserva os alimentos porque:', o: ['Aumenta a temperatura', 'Diminui a velocidade das reações', 'Mata todos os micróbios', 'Tira o oxigênio'], c: 1, e: 'Frio = reações mais lentas.' },
      { p: 'Um catalisador:', o: ['É consumido na reação', 'Diminui a energia de ativação', 'Aumenta a energia de ativação', 'Muda os produtos'], c: 1, e: 'Abre um "caminho mais fácil" pra reação.' },
      { p: 'As enzimas do corpo são:', o: ['Catalisadores biológicos', 'Ácidos fortes', 'Gases nobres', 'Sais'], c: 0, e: 'Aceleram reações no organismo.' },
      { p: 'Aumentar a concentração dos reagentes faz a velocidade:', o: ['Diminuir', 'Aumentar', 'Não mudar', 'Zerar'], c: 1, e: 'Mais partículas, mais colisões.' },
      { p: 'A energia mínima pra uma reação começar é a:', o: ['Entalpia', 'Energia de ativação', 'Energia cinética', 'Massa molar'], c: 1, e: 'É a "barreira" que precisa ser vencida.' }
    ],
    cartoes: [
      { f: 'Teoria das colisões', v: 'Choques com energia e orientação certas.' },
      { f: 'Energia de ativação', v: 'Energia mínima pra reação começar.' },
      { f: 'Catalisador', v: 'Diminui a energia de ativação e não é consumido.' },
      { f: 'Superfície de contato', v: 'Maior (pó) = reação mais rápida.' },
      { f: 'Temperatura alta', v: 'Reação mais rápida.' },
      { f: 'Enzimas', v: 'Catalisadores biológicos.' }
    ]
  },

  'qui-equilibrio': {
    resumo: [
      { t: 'Reações reversíveis', p: 'Algumas reações acontecem **nos dois sentidos** ao mesmo tempo (⇌). O **equilíbrio** chega quando a velocidade de ida é **igual** à de volta. As concentrações ficam **constantes** (não necessariamente iguais).' },
      { t: 'Constante de equilíbrio', p: '**Kc = [produtos] / [reagentes]**, cada concentração elevada ao seu coeficiente. Kc grande: o equilíbrio favorece os produtos.' },
      { t: 'Princípio de Le Chatelier', p: 'Se você "mexer" no equilíbrio, ele se desloca pra **diminuir a perturbação**:\nMais **reagente** → desloca pros **produtos**.\nMais **temperatura** → favorece a reação **endotérmica**.\nMais **pressão** → favorece o lado com **menos mols de gás**.' },
      { t: 'pH', p: '**pH = −log [H⁺]**. Água pura a 25 °C: pH 7. Cada número a menos no pH significa **10 vezes** mais ácido.' }
    ],
    exemplo: 'N₂ + 3 H₂ ⇌ 2 NH₃: são 4 mols de gás à esquerda e 2 à direita. Aumentando a pressão, forma-se mais amônia.',
    perguntas: [
      { p: 'No equilíbrio químico:', o: ['A reação para', 'As velocidades de ida e volta são iguais', 'Só existem produtos', 'As concentrações são sempre iguais'], c: 1, e: 'A reação continua nos dois sentidos, na mesma velocidade.' },
      { p: 'Adicionar reagente a um equilíbrio desloca a reação pra:', o: ['Os reagentes', 'Os produtos', 'Lugar nenhum', 'Parar'], c: 1, e: 'Le Chatelier: o sistema consome o excesso.' },
      { p: 'Em N₂ + 3 H₂ ⇌ 2 NH₃, aumentar a pressão favorece:', o: ['Os reagentes', 'A formação de NH₃', 'Nenhum lado', 'A decomposição'], c: 1, e: 'O lado com menos mols de gás (2 contra 4).' },
      { p: 'Aumentar a temperatura favorece a reação:', o: ['Exotérmica', 'Endotérmica', 'Mais rápida sempre', 'Nenhuma'], c: 1, e: 'O sistema "absorve" o calor extra.' },
      { p: 'Uma solução de pH 3 comparada a uma de pH 4 é:', o: ['10 vezes mais ácida', '1 vez mais ácida', '10 vezes menos ácida', 'Igual'], c: 0, e: 'Cada unidade de pH é um fator 10.' },
      { p: 'Um Kc muito grande indica que o equilíbrio favorece:', o: ['Os reagentes', 'Os produtos', 'A água', 'O catalisador'], c: 1, e: 'Produtos em cima da fração: Kc grande, mais produtos.' }
    ],
    cartoes: [
      { f: 'Equilíbrio químico', v: 'Velocidade de ida = velocidade de volta.' },
      { f: 'Kc', v: '[produtos] / [reagentes]' },
      { f: 'Le Chatelier', v: 'O equilíbrio se desloca pra diminuir a perturbação.' },
      { f: 'Mais pressão', v: 'Favorece o lado com menos mols de gás.' },
      { f: 'Mais temperatura', v: 'Favorece a reação endotérmica.' },
      { f: 'pH', v: '−log [H⁺]' }
    ]
  },

  'qui-eletroquimica': {
    resumo: [
      { t: 'Oxidação e redução', p: '**Oxidação**: o átomo **perde elétrons** (o NOX aumenta).\n**Redução**: o átomo **ganha elétrons** (o NOX diminui).\nUma não acontece sem a outra: é a reação de **oxirredução**.' },
      { t: 'Pilha', p: 'Transforma **energia química em elétrica**, de forma **espontânea**.\n**Ânodo**: onde ocorre a **oxidação** (polo negativo).\n**Cátodo**: onde ocorre a **redução** (polo positivo).\nEx.: pilha de Daniell (zinco e cobre).' },
      { t: 'Eletrólise', p: 'O contrário: usa **energia elétrica** pra provocar uma reação **não espontânea**. Serve pra produzir alumínio e cloro e pra **galvanizar** (revestir metais, como a cromagem).' },
      { t: 'Corrosão', p: 'A **ferrugem** é a oxidação do ferro com água e oxigênio. Uma proteção é cobrir o ferro com **zinco** (galvanização): o zinco oxida no lugar dele (**metal de sacrifício**).' }
    ],
    exemplo: 'Na pilha de Daniell, o zinco perde elétrons (oxida, ânodo) e os íons de cobre ganham elétrons (reduzem, cátodo).',
    perguntas: [
      { p: 'Oxidação é:', o: ['Ganhar elétrons', 'Perder elétrons', 'Ganhar prótons', 'Perder nêutrons'], c: 1, e: 'Na oxidação, o átomo perde elétrons e o NOX sobe.' },
      { p: 'A pilha transforma:', o: ['Energia elétrica em química', 'Energia química em elétrica', 'Calor em luz', 'Luz em calor'], c: 1, e: 'Pilha: química → elétrica, de forma espontânea.' },
      { p: 'Na pilha, a oxidação ocorre no:', o: ['Cátodo', 'Ânodo', 'Fio', 'Sal'], c: 1, e: 'Ânodo = oxidação (polo negativo).' },
      { p: 'A eletrólise é usada pra:', o: ['Gerar energia de graça', 'Produzir alumínio e revestir metais', 'Congelar a água', 'Medir pH'], c: 1, e: 'Usa eletricidade pra forçar reações.' },
      { p: 'A ferrugem é um exemplo de:', o: ['Redução do ferro', 'Oxidação do ferro', 'Fusão', 'Eletrólise'], c: 1, e: 'O ferro perde elétrons pro oxigênio.' },
      { p: 'Cobrir o ferro com zinco protege porque o zinco:', o: ['É mais bonito', 'Oxida no lugar do ferro', 'Não conduz', 'É um gás nobre'], c: 1, e: 'É o metal de sacrifício.' }
    ],
    cartoes: [
      { f: 'Oxidação', v: 'Perde elétrons; NOX aumenta.' },
      { f: 'Redução', v: 'Ganha elétrons; NOX diminui.' },
      { f: 'Ânodo', v: 'Oxidação (polo negativo na pilha).' },
      { f: 'Cátodo', v: 'Redução (polo positivo na pilha).' },
      { f: 'Pilha x eletrólise', v: 'Espontânea (gera corrente) x forçada (usa corrente).' },
      { f: 'Metal de sacrifício', v: 'Oxida pra proteger outro (zinco no ferro).' }
    ]
  },

  'qui-organica': {
    resumo: [
      { t: 'O que estuda', p: 'A química orgânica estuda os **compostos do carbono**. Em 1828, **Wöhler** produziu ureia em laboratório e derrubou a ideia de que só seres vivos fabricavam esses compostos (teoria da força vital).' },
      { t: 'O carbono', p: 'É **tetravalente**: faz **4 ligações**. E consegue se ligar a outros carbonos formando **cadeias** enormes.' },
      { t: 'Cadeias carbônicas', p: '**Aberta** ou **fechada** (anel).\n**Saturada** (só ligações simples) ou **insaturada** (com dupla ou tripla).\n**Homogênea** (só carbono na cadeia) ou **heterogênea** (com outro átomo no meio).\n**Normal** ou **ramificada**.' },
      { t: 'Hidrocarbonetos', p: 'Só carbono e hidrogênio.\n**Alcanos**: só ligações simples (CₙH₂ₙ₊₂).\n**Alcenos**: uma dupla.\n**Alcinos**: uma tripla.\n**Aromáticos**: com anel benzênico.' },
      { t: 'Nomenclatura', p: '**Prefixo** (nº de carbonos): met (1), et (2), prop (3), but (4), pent (5), hex (6).\n**Meio**: an (simples), en (dupla), in (tripla).\n**Final**: "o" pros hidrocarbonetos.\nEx.: **metano** (CH₄), **propeno**, **etino** (acetileno).' }
    ],
    exemplo: 'But + an + o = butano: 4 carbonos, só ligações simples. É o gás do isqueiro.',
    perguntas: [
      { p: 'A química orgânica estuda os compostos do:', o: ['Oxigênio', 'Carbono', 'Ferro', 'Hidrogênio'], c: 1, e: 'É a química do carbono.' },
      { p: 'Quantas ligações o carbono faz?', o: ['2', '3', '4', '6'], c: 2, e: 'O carbono é tetravalente.' },
      { p: 'Um alceno tem:', o: ['Só ligações simples', 'Uma ligação dupla', 'Uma ligação tripla', 'Um anel benzênico'], c: 1, e: 'Alceno: ligação dupla (en).' },
      { p: 'Quantos carbonos tem o propano?', o: ['1', '2', '3', '4'], c: 2, e: 'Prop = 3.' },
      { p: 'O metano (CH₄) é um:', o: ['Alcano', 'Alceno', 'Alcino', 'Álcool'], c: 0, e: 'Só ligações simples: alcano.' },
      { p: 'Uma cadeia com uma ligação dupla é:', o: ['Saturada', 'Insaturada', 'Heterogênea', 'Aromática'], c: 1, e: 'Dupla ou tripla = insaturada.' },
      { p: 'Quem derrubou a teoria da força vital ao sintetizar a ureia?', o: ['Lavoisier', 'Wöhler', 'Dalton', 'Mendeleev'], c: 1, e: 'Friedrich Wöhler, em 1828.' }
    ],
    cartoes: [
      { f: 'Carbono tetravalente', v: 'Faz 4 ligações.' },
      { f: 'Alcano', v: 'Só ligações simples.' },
      { f: 'Alceno', v: 'Uma ligação dupla.' },
      { f: 'Alcino', v: 'Uma ligação tripla.' },
      { f: 'Prefixos', v: 'met 1, et 2, prop 3, but 4, pent 5, hex 6' },
      { f: 'Cadeia insaturada', v: 'Tem dupla ou tripla.' }
    ]
  },

  'qui-funcoesorg': {
    resumo: [
      { t: 'Funções oxigenadas (1)', p: '**Álcool**: –OH ligado a carbono saturado. Termina em **-ol**. Ex.: etanol (álcool da cana).\n**Fenol**: –OH ligado direto ao anel aromático.\n**Éter**: oxigênio entre dois carbonos (C–O–C).' },
      { t: 'Funções oxigenadas (2)', p: '**Aldeído**: –CHO na ponta. Termina em **-al**. Ex.: metanal (formol).\n**Cetona**: C=O no meio da cadeia. Termina em **-ona**. Ex.: propanona (acetona).' },
      { t: 'Ácidos e ésteres', p: '**Ácido carboxílico**: –COOH. "Ácido ...-oico". Ex.: ácido etanoico (vinagre).\n**Éster**: –COO–. Dá **cheiro e sabor de frutas**. Sai da reação **ácido + álcool → éster + água** (esterificação).' },
      { t: 'Funções nitrogenadas', p: '**Amina**: derivada da amônia (–NH₂). Cheiro de peixe.\n**Amida**: –CONH₂. Ex.: ureia.' }
    ],
    exemplo: 'A acetona do removedor de esmalte é uma cetona (propanona). O álcool do posto é o etanol, um álcool.',
    perguntas: [
      { p: 'O grupo –OH ligado a carbono saturado caracteriza o:', o: ['Fenol', 'Álcool', 'Aldeído', 'Éster'], c: 1, e: 'Álcool, com terminação -ol.' },
      { p: 'A acetona (propanona) é uma:', o: ['Cetona', 'Aldeído', 'Amina', 'Éter'], c: 0, e: 'Terminação -ona: cetona.' },
      { p: 'O vinagre contém ácido acético, que é um:', o: ['Álcool', 'Ácido carboxílico', 'Éster', 'Fenol'], c: 1, e: 'Tem o grupo –COOH.' },
      { p: 'Os ésteres são conhecidos por:', o: ['Cheiro de peixe', 'Aromas de frutas', 'Serem explosivos', 'Serem metais'], c: 1, e: 'Muitos aromas e sabores artificiais são ésteres.' },
      { p: 'Ácido carboxílico + álcool forma:', o: ['Éster + água', 'Sal + água', 'Amina', 'Cetona'], c: 0, e: 'É a esterificação.' },
      { p: 'A terminação -al indica:', o: ['Álcool', 'Aldeído', 'Cetona', 'Ácido'], c: 1, e: 'Aldeído: metanal, etanal.' },
      { p: 'O cheiro de peixe vem principalmente das:', o: ['Aminas', 'Cetonas', 'Ésteres', 'Álcoois'], c: 0, e: 'Aminas têm cheiro característico de peixe.' }
    ],
    cartoes: [
      { f: 'Álcool', v: '–OH em carbono saturado; -ol.' },
      { f: 'Aldeído', v: '–CHO na ponta; -al.' },
      { f: 'Cetona', v: 'C=O no meio; -ona.' },
      { f: 'Ácido carboxílico', v: '–COOH; ácido ...-oico.' },
      { f: 'Éster', v: '–COO–; aromas de frutas.' },
      { f: 'Esterificação', v: 'Ácido + álcool → éster + água.' }
    ]
  },

  'qui-isomeria': {
    resumo: [
      { t: 'O que são isômeros', p: 'Compostos com a **mesma fórmula molecular**, mas **estruturas diferentes** (e por isso propriedades diferentes).' },
      { t: 'Isomeria plana', p: '**De cadeia**: muda o tipo de cadeia (normal x ramificada).\n**De posição**: muda a posição de uma dupla ou de um grupo.\n**De função**: funções diferentes. Ex.: C₂H₆O pode ser **etanol** (álcool) ou **metoximetano** (éter).' },
      { t: 'Isomeria geométrica (cis-trans)', p: 'Acontece com ligação **dupla** (ou anel) e ligantes diferentes em cada carbono.\n**Cis**: ligantes iguais do **mesmo lado**.\n**Trans**: em **lados opostos**.' },
      { t: 'Isomeria óptica', p: 'Acontece quando há **carbono quiral** (assimétrico): ligado a **4 grupos diferentes**. Formam-se dois isômeros espelhados, os **enantiômeros**, que desviam a luz polarizada em sentidos opostos. Podem ter efeitos diferentes no corpo (caso da talidomida).' }
    ],
    exemplo: 'C₂H₆O: CH₃–CH₂–OH (etanol, líquido de beber) e CH₃–O–CH₃ (éter, gás). Mesma fórmula, substâncias bem diferentes.',
    perguntas: [
      { p: 'Isômeros têm:', o: ['Mesma estrutura', 'Mesma fórmula molecular e estruturas diferentes', 'Fórmulas diferentes', 'Mesmo nome'], c: 1, e: 'É a definição de isomeria.' },
      { p: 'Etanol e metoximetano (C₂H₆O) são isômeros de:', o: ['Cadeia', 'Posição', 'Função', 'Óptica'], c: 2, e: 'Um é álcool e o outro éter: isomeria de função.' },
      { p: 'A isomeria cis-trans exige:', o: ['Carbono quiral', 'Ligação dupla com ligantes diferentes', 'Ligação tripla', 'Um anel benzênico'], c: 1, e: 'A dupla trava a rotação e cria os dois "lados".' },
      { p: 'Carbono quiral é aquele ligado a:', o: ['4 grupos iguais', '4 grupos diferentes', '2 hidrogênios', 'Uma dupla'], c: 1, e: 'Quatro ligantes diferentes: assimétrico.' },
      { p: 'Os enantiômeros desviam a luz polarizada:', o: ['No mesmo sentido', 'Em sentidos opostos', 'Não desviam', 'Só no escuro'], c: 1, e: 'Um pra direita e o outro pra esquerda.' },
      { p: 'Na forma "trans", os ligantes iguais ficam:', o: ['Do mesmo lado', 'Em lados opostos', 'No mesmo carbono', 'Fora da molécula'], c: 1, e: 'Trans = em lados opostos.' }
    ],
    cartoes: [
      { f: 'Isômeros', v: 'Mesma fórmula molecular, estruturas diferentes.' },
      { f: 'Isomeria de função', v: 'Funções diferentes: etanol x éter.' },
      { f: 'Cis', v: 'Ligantes iguais do mesmo lado.' },
      { f: 'Trans', v: 'Ligantes iguais em lados opostos.' },
      { f: 'Carbono quiral', v: '4 grupos diferentes.' },
      { f: 'Enantiômeros', v: 'Isômeros ópticos, imagens espelhadas.' }
    ]
  },

  'qui-reacoesorg': {
    resumo: [
      { t: 'Substituição', p: 'Um átomo (geralmente H) é **trocado** por outro. Típica de **alcanos** e **aromáticos**. Ex.: CH₄ + Cl₂ → CH₃Cl + HCl.' },
      { t: 'Adição', p: 'A dupla ou tripla **se abre** e recebe novos átomos. Típica de alcenos e alcinos. Ex.: **hidrogenação** de óleos vegetais pra fazer **margarina**.\n**Regra de Markovnikov**: o H entra no carbono da dupla que **já tem mais hidrogênios**.' },
      { t: 'Eliminação', p: 'Saem átomos da molécula e se forma uma dupla. Ex.: **desidratação** de álcool → alceno + água.' },
      { t: 'Combustão', p: '**Completa**: gera CO₂ e H₂O.\n**Incompleta** (pouco oxigênio): gera **CO** (monóxido de carbono, tóxico) e **fuligem**.' },
      { t: 'Saponificação e polimerização', p: '**Saponificação**: gordura + base forte → **sabão** + glicerol.\n**Polimerização**: muitas moléculas pequenas (monômeros) se juntam num **polímero**: polietileno (sacolas), PVC (canos), náilon.' }
    ],
    exemplo: 'Sabão caseiro: óleo de cozinha usado + soda cáustica → sabão. É uma saponificação.',
    perguntas: [
      { p: 'A transformação de óleo vegetal em margarina é uma reação de:', o: ['Substituição', 'Adição (hidrogenação)', 'Eliminação', 'Combustão'], c: 1, e: 'Hidrogênio é adicionado às duplas do óleo.' },
      { p: 'CH₄ + Cl₂ → CH₃Cl + HCl é uma reação de:', o: ['Adição', 'Substituição', 'Eliminação', 'Polimerização'], c: 1, e: 'Um H foi trocado por um Cl.' },
      { p: 'A combustão incompleta pode produzir:', o: ['Só água', 'Monóxido de carbono (CO)', 'Oxigênio', 'Ozônio'], c: 1, e: 'Com pouco oxigênio, forma CO e fuligem.' },
      { p: 'Gordura + base forte produz:', o: ['Plástico', 'Sabão e glicerol', 'Éster', 'Gasolina'], c: 1, e: 'É a saponificação.' },
      { p: 'A desidratação de um álcool formando alceno é uma reação de:', o: ['Adição', 'Eliminação', 'Substituição', 'Combustão'], c: 1, e: 'Sai água e forma uma dupla: eliminação.' },
      { p: 'Polietileno, PVC e náilon são:', o: ['Ésteres simples', 'Polímeros', 'Ácidos', 'Metais'], c: 1, e: 'São formados por polimerização.' }
    ],
    cartoes: [
      { f: 'Substituição', v: 'Troca um átomo por outro (alcanos, aromáticos).' },
      { f: 'Adição', v: 'A dupla/tripla abre e recebe átomos.' },
      { f: 'Markovnikov', v: 'O H vai pro carbono da dupla com mais H.' },
      { f: 'Combustão incompleta', v: 'Forma CO e fuligem.' },
      { f: 'Saponificação', v: 'Gordura + base → sabão + glicerol.' },
      { f: 'Polímero', v: 'Muitos monômeros unidos: PVC, náilon.' }
    ]
  }
});
