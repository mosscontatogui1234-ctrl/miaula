// Biologia — 1º, 2º e 3º ano
window.AULAS = window.AULAS || {};
Object.assign(window.AULAS, {
  'bio-origem': {
    resumo: [
      { t: 'Abiogênese x biogênese', p: '**Abiogênese** (geração espontânea): a ideia antiga de que seres vivos nasciam da matéria sem vida (ratos da sujeira, larvas da carne podre).\n**Biogênese**: todo ser vivo vem de **outro ser vivo**.' },
      { t: 'Redi (1668)', p: 'Colocou carne em frascos abertos e em frascos cobertos com gaze. Só apareceram larvas onde as **moscas puderam pôr ovos**.' },
      { t: 'Pasteur (século XIX)', p: 'Usou frascos com **"pescoço de cisne"**: o caldo fervido ficava sem micróbios enquanto o pescoço estava inteiro. Isso **derrubou de vez a abiogênese**.' },
      { t: 'Oparin e Haldane', p: 'Propuseram que, na **Terra primitiva**, sem oxigênio livre, gases como metano, amônia, hidrogênio e vapor d’água, com **descargas elétricas** e radiação, formaram moléculas orgânicas numa **"sopa primordial"**, que deram origem às primeiras células.' },
      { t: 'Miller e Urey (1953)', p: 'Simularam essa atmosfera primitiva em laboratório, com faíscas elétricas, e conseguiram produzir **aminoácidos**. Foi um forte apoio à hipótese.' },
      { t: 'Panspermia', p: 'Hipótese de que a vida (ou suas moléculas) teria vindo do **espaço**, em meteoritos.' }
    ],
    exemplo: 'Pasteur não fechou os frascos: o ar entrava, mas os micróbios ficavam presos na curva do pescoço. Assim provou que eles vinham do ar, não do caldo.',
    perguntas: [
      { p: 'A ideia de que seres vivos surgem da matéria sem vida é a:', o: ['Biogênese', 'Abiogênese', 'Evolução', 'Panspermia'], c: 1, e: 'Abiogênese, ou geração espontânea.' },
      { p: 'Quem derrubou de vez a abiogênese com frascos de "pescoço de cisne"?', o: ['Redi', 'Pasteur', 'Darwin', 'Miller'], c: 1, e: 'Louis Pasteur, no século XIX.' },
      { p: 'No experimento de Redi, as larvas surgiram:', o: ['Nos frascos fechados', 'Só onde as moscas puderam pôr ovos', 'Em todos os frascos', 'Na gaze'], c: 1, e: 'Mostrou que as larvas vinham de ovos de moscas.' },
      { p: 'O experimento de Miller e Urey produziu:', o: ['Células vivas', 'Aminoácidos', 'Bactérias', 'DNA completo'], c: 1, e: 'Formaram aminoácidos a partir dos gases da Terra primitiva.' },
      { p: 'Segundo Oparin, a atmosfera primitiva NÃO tinha:', o: ['Metano', 'Amônia', 'Oxigênio livre', 'Vapor d’água'], c: 2, e: 'Não havia O₂ livre na Terra primitiva.' },
      { p: 'A hipótese de que a vida veio do espaço chama-se:', o: ['Panspermia', 'Biogênese', 'Criacionismo', 'Abiogênese'], c: 0, e: 'Panspermia: vida trazida por meteoritos.' }
    ],
    cartoes: [
      { f: 'Abiogênese', v: 'Geração espontânea (ideia derrubada).' },
      { f: 'Biogênese', v: 'Todo ser vivo vem de outro ser vivo.' },
      { f: 'Pasteur', v: 'Frasco pescoço de cisne; derrubou a abiogênese.' },
      { f: 'Oparin e Haldane', v: 'Sopa primordial na Terra primitiva.' },
      { f: 'Miller e Urey', v: 'Produziram aminoácidos em laboratório (1953).' },
      { f: 'Panspermia', v: 'Vida vinda do espaço.' }
    ]
  },

  'bio-bioquimica': {
    resumo: [
      { t: 'Água e sais minerais', p: 'A **água** é cerca de 70% do corpo: dissolve substâncias, transporta e regula a temperatura.\nSais importantes: **cálcio** (ossos), **ferro** (hemoglobina; falta causa anemia), **sódio e potássio** (impulso nervoso), **iodo** (tireoide).' },
      { t: 'Carboidratos', p: 'Principal fonte de **energia**. **Glicose** (energia rápida), **amido** (reserva das plantas), **glicogênio** (reserva dos animais, no fígado e músculos) e **celulose** (parede das células vegetais).' },
      { t: 'Lipídios', p: 'Gorduras e óleos: **reserva de energia**, isolamento térmico, formam as **membranas** e alguns **hormônios** (o colesterol é a base dos hormônios sexuais).' },
      { t: 'Proteínas', p: 'Feitas de **aminoácidos** unidos por ligações peptídicas. Funções: estrutura (colágeno, queratina), **enzimas**, **anticorpos**, transporte (hemoglobina). O calor pode **desnaturar** uma proteína (como a clara do ovo endurecendo).' },
      { t: 'Vitaminas', p: '**A**: visão. **C**: imunidade (a falta causa escorbuto). **D**: ossos (o corpo produz com o Sol). **K**: coagulação. **B12**: sangue e nervos.' },
      { t: 'Ácidos nucleicos', p: '**DNA** e **RNA**, formados por **nucleotídeos**. Guardam e usam a informação genética.' }
    ],
    exemplo: 'Ovo frito: o calor muda a forma das proteínas da clara (desnaturação), e por isso ela fica branca e firme.',
    perguntas: [
      { p: 'A principal função dos carboidratos é:', o: ['Defesa', 'Fornecer energia', 'Formar ossos', 'Transmitir genes'], c: 1, e: 'Glicose é o "combustível" das células.' },
      { p: 'A reserva de energia dos animais, guardada no fígado, é o:', o: ['Amido', 'Glicogênio', 'Celulose', 'Colesterol'], c: 1, e: 'Amido é das plantas; glicogênio, dos animais.' },
      { p: 'A falta de ferro pode causar:', o: ['Escorbuto', 'Anemia', 'Bócio', 'Cegueira noturna'], c: 1, e: 'O ferro faz parte da hemoglobina, que leva oxigênio.' },
      { p: 'As enzimas são:', o: ['Lipídios', 'Proteínas', 'Carboidratos', 'Sais'], c: 1, e: 'Quase todas as enzimas são proteínas.' },
      { p: 'A vitamina produzida pela pele com a luz do Sol é a:', o: ['A', 'C', 'D', 'K'], c: 2, e: 'Vitamina D, importante pros ossos.' },
      { p: 'A falta de vitamina C causa:', o: ['Raquitismo', 'Escorbuto', 'Anemia', 'Diabetes'], c: 1, e: 'Escorbuto: sangramento nas gengivas.' },
      { p: 'Proteínas são formadas por:', o: ['Glicose', 'Aminoácidos', 'Nucleotídeos', 'Ácidos graxos'], c: 1, e: 'Aminoácidos unidos por ligações peptídicas.' }
    ],
    cartoes: [
      { f: 'Glicogênio', v: 'Reserva de energia dos animais.' },
      { f: 'Amido', v: 'Reserva de energia das plantas.' },
      { f: 'Proteínas', v: 'Feitas de aminoácidos; enzimas, anticorpos.' },
      { f: 'Vitamina D', v: 'Ossos; produzida com o Sol.' },
      { f: 'Vitamina C', v: 'Imunidade; falta causa escorbuto.' },
      { f: 'Ferro', v: 'Hemoglobina; falta causa anemia.' }
    ]
  },

  'bio-divisao': {
    resumo: [
      { t: 'Cromossomos', p: 'O DNA fica organizado em **cromossomos**. O ser humano tem **46** (23 pares) nas células do corpo (**2n**) e **23** nos gametas (**n**).' },
      { t: 'Interfase', p: 'Antes de dividir, a célula **duplica o DNA**. É a fase mais longa do ciclo celular.' },
      { t: 'Mitose', p: 'Serve pra **crescimento e regeneração**. Uma célula vira **duas idênticas**, com o **mesmo número** de cromossomos (2n → 2n).\nFases: **prófase**, **metáfase** (cromossomos alinhados no meio, a melhor fase pra vê-los), **anáfase** (separação) e **telófase**.' },
      { t: 'Meiose', p: 'Forma os **gametas** (óvulo e espermatozoide). São **duas divisões**: uma célula 2n vira **quatro células n**, com **metade** dos cromossomos. O **crossing-over** troca pedaços entre cromossomos e gera **variabilidade**.' },
      { t: 'Quando dá errado', p: 'O **câncer** é uma divisão celular **descontrolada**.' }
    ],
    exemplo: 'Quando você rala o joelho, as células da pele fazem mitose pra fechar o machucado.',
    perguntas: [
      { p: 'A mitose produz:', o: ['4 células com metade dos cromossomos', '2 células idênticas', 'Só gametas', '1 célula maior'], c: 1, e: 'Mitose: 2 células iguais à original.' },
      { p: 'A meiose serve pra formar:', o: ['Células da pele', 'Gametas', 'Músculos', 'Neurônios'], c: 1, e: 'Gametas com metade dos cromossomos.' },
      { p: 'Quantos cromossomos tem um gameta humano?', o: ['46', '23', '92', '12'], c: 1, e: 'Gametas são n = 23.' },
      { p: 'Em qual fase da mitose os cromossomos se alinham no meio da célula?', o: ['Prófase', 'Metáfase', 'Anáfase', 'Telófase'], c: 1, e: 'Metáfase: alinhados no "meio".' },
      { p: 'O crossing-over acontece na meiose e causa:', o: ['Morte celular', 'Variabilidade genética', 'Clonagem', 'Câncer'], c: 1, e: 'A troca de pedaços cria combinações novas.' },
      { p: 'O câncer está ligado a:', o: ['Divisão celular descontrolada', 'Falta de vitamina', 'Excesso de água', 'Meiose normal'], c: 0, e: 'Células que se dividem sem parar.' },
      { p: 'Na interfase, a célula:', o: ['Morre', 'Duplica o DNA', 'Forma gametas', 'Perde cromossomos'], c: 1, e: 'Ela se prepara duplicando o material genético.' }
    ],
    cartoes: [
      { f: 'Mitose', v: '2 células idênticas (2n → 2n). Crescimento.' },
      { f: 'Meiose', v: '4 células com metade (2n → n). Gametas.' },
      { f: 'Cromossomos humanos', v: '46 no corpo, 23 nos gametas.' },
      { f: 'Metáfase', v: 'Cromossomos alinhados no meio.' },
      { f: 'Crossing-over', v: 'Troca de pedaços; gera variabilidade.' },
      { f: 'Interfase', v: 'Duplicação do DNA.' }
    ]
  },

  'bio-histologia': {
    resumo: [
      { t: 'Tecidos', p: 'Tecido é um grupo de células parecidas trabalhando juntas. Nos animais existem **quatro tipos básicos**.' },
      { t: 'Epitelial', p: '**Reveste** o corpo e os órgãos (pele, mucosas) e forma as **glândulas**. Células bem **juntinhas**, sem vasos sanguíneos.' },
      { t: 'Conjuntivo', p: '**Une e sustenta**. Tem muito material entre as células. Inclui: **ósseo**, **cartilaginoso**, **adiposo** (gordura), **sanguíneo** e o conjuntivo propriamente dito.' },
      { t: 'Muscular', p: 'Faz **contração**.\n**Estriado esquelético**: voluntário (braços, pernas).\n**Estriado cardíaco**: involuntário (coração).\n**Liso**: involuntário (estômago, intestino, vasos).' },
      { t: 'Nervoso', p: 'Recebe e transmite **impulsos**. A célula principal é o **neurônio**: **dendritos** (recebem), **corpo celular** e **axônio** (envia). As **células da glia** dão suporte.' }
    ],
    exemplo: 'Quando você decide levantar o braço, usa músculo estriado esquelético. O coração bate sozinho, com o estriado cardíaco.',
    perguntas: [
      { p: 'O tecido que reveste o corpo é o:', o: ['Conjuntivo', 'Epitelial', 'Muscular', 'Nervoso'], c: 1, e: 'Epitelial: pele e mucosas.' },
      { p: 'O sangue é um tipo de tecido:', o: ['Epitelial', 'Conjuntivo', 'Muscular', 'Nervoso'], c: 1, e: 'É um tecido conjuntivo especial.' },
      { p: 'O músculo do coração é:', o: ['Liso', 'Estriado esquelético', 'Estriado cardíaco', 'Epitelial'], c: 2, e: 'Estriado cardíaco, involuntário.' },
      { p: 'O músculo do intestino é:', o: ['Liso', 'Estriado esquelético', 'Estriado cardíaco', 'Ósseo'], c: 0, e: 'Liso e involuntário.' },
      { p: 'A parte do neurônio que envia o impulso é o:', o: ['Dendrito', 'Axônio', 'Núcleo', 'Glia'], c: 1, e: 'Dendrito recebe, axônio envia.' },
      { p: 'O tecido adiposo armazena:', o: ['Cálcio', 'Gordura', 'Oxigênio', 'Impulsos'], c: 1, e: 'Adiposo = gordura.' }
    ],
    cartoes: [
      { f: 'Tecido epitelial', v: 'Reveste e forma glândulas.' },
      { f: 'Tecido conjuntivo', v: 'Une e sustenta (osso, sangue, gordura).' },
      { f: 'Músculo estriado esquelético', v: 'Voluntário.' },
      { f: 'Músculo liso', v: 'Involuntário (vísceras).' },
      { f: 'Neurônio', v: 'Dendritos recebem, axônio envia.' },
      { f: 'Músculo cardíaco', v: 'Estriado e involuntário.' }
    ]
  },

  'bio-classificacao': {
    resumo: [
      { t: 'Por que classificar', p: 'Pra organizar a enorme diversidade de seres vivos. O sistema que usamos vem de **Lineu** (século XVIII).' },
      { t: 'Nome científico', p: '**Nomenclatura binomial**: **gênero + espécie**, em latim e em **itálico**, com o gênero em maiúscula. Ex.: ***Homo sapiens*** (ser humano), ***Felis catus*** (gato).' },
      { t: 'Categorias', p: 'Do maior pro menor: **Reino, Filo, Classe, Ordem, Família, Gênero, Espécie**. Dica: "**Rei Fi Cla Or Fa Ge Es**".' },
      { t: 'Os cinco reinos', p: '**Monera**: bactérias (procariontes).\n**Protista**: protozoários e algas.\n**Fungi**: fungos (absorvem alimento; parede de quitina).\n**Plantae**: plantas (fazem fotossíntese).\n**Animalia**: animais (heterótrofos, multicelulares).' },
      { t: 'Domínios e vírus', p: 'Hoje também se usam **três domínios**: Bacteria, Archaea e Eukarya. Os **vírus** não entram em nenhum reino: **não têm células** e só se reproduzem dentro de outras células.' }
    ],
    exemplo: 'O gato é Animalia (reino), Chordata (filo), Mammalia (classe), Carnivora (ordem), Felidae (família), Felis (gênero), Felis catus (espécie).',
    perguntas: [
      { p: 'Como se escreve corretamente o nome científico do ser humano?', o: ['homo Sapiens', 'Homo sapiens (em itálico)', 'HOMO SAPIENS', 'Homo Sapiens'], c: 1, e: 'Gênero com maiúscula, espécie com minúscula, em itálico.' },
      { p: 'A categoria mais específica é a:', o: ['Família', 'Espécie', 'Reino', 'Classe'], c: 1, e: 'A espécie é a menor categoria.' },
      { p: 'As bactérias pertencem ao reino:', o: ['Protista', 'Monera', 'Fungi', 'Plantae'], c: 1, e: 'Monera: seres procariontes.' },
      { p: 'Os cogumelos pertencem ao reino:', o: ['Plantae', 'Fungi', 'Monera', 'Animalia'], c: 1, e: 'Fungos não fazem fotossíntese: reino Fungi.' },
      { p: 'Por que os vírus não estão em nenhum reino?', o: ['São muito grandes', 'Não têm células', 'Fazem fotossíntese', 'São animais'], c: 1, e: 'São acelulares e dependem de outras células.' },
      { p: 'Quem criou o sistema de nome científico com duas palavras?', o: ['Darwin', 'Lineu', 'Mendel', 'Pasteur'], c: 1, e: 'Carl Lineu, no século XVIII.' }
    ],
    cartoes: [
      { f: 'Nomenclatura binomial', v: 'Gênero + espécie, em itálico.' },
      { f: 'Categorias', v: 'Reino, Filo, Classe, Ordem, Família, Gênero, Espécie.' },
      { f: 'Reino Monera', v: 'Bactérias (procariontes).' },
      { f: 'Reino Fungi', v: 'Fungos; parede de quitina.' },
      { f: 'Vírus', v: 'Acelulares; fora dos reinos.' },
      { f: 'Três domínios', v: 'Bacteria, Archaea, Eukarya.' }
    ]
  },

  'bio-botanica': {
    resumo: [
      { t: 'Os grupos de plantas', p: '**Briófitas**: musgos. Pequenas, **sem vasos**, dependem de água pra reproduzir.\n**Pteridófitas**: samambaias. **Com vasos**, mas **sem sementes** (usam esporos).\n**Gimnospermas**: pinheiros e araucária. Têm **sementes "nuas"**, **sem fruto**.\n**Angiospermas**: a maioria. Têm **flores e frutos**.' },
      { t: 'Fotossíntese', p: 'A planta usa **luz**, **gás carbônico** e **água** pra fazer **glicose** e liberar **oxigênio**:\n**6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂**\nAcontece nos **cloroplastos**, graças à **clorofila**.' },
      { t: 'Raiz e caule', p: '**Raiz**: fixa e absorve água e sais.\n**Caule**: sustenta e transporta. O **xilema** leva a **seiva bruta** (água e sais) pra cima; o **floema** leva a **seiva elaborada** (açúcares).' },
      { t: 'Folha', p: 'Faz fotossíntese. Os **estômatos** são "poros" pras trocas gasosas e pra **transpiração**.' },
      { t: 'Flor e fruto', p: '**Flor**: órgão reprodutor das angiospermas. A **polinização** leva o pólen até a parte feminina (por vento, insetos, aves).\n**Fruto**: protege a semente e ajuda a espalhá-la.' }
    ],
    exemplo: 'MOSS quer dizer musgo em inglês, e o musgo é uma briófita: o Pãozinho é uma planta sem vasos!',
    perguntas: [
      { p: 'Plantas sem vasos condutores, como os musgos, são as:', o: ['Pteridófitas', 'Briófitas', 'Gimnospermas', 'Angiospermas'], c: 1, e: 'Briófitas: musgos, sem vasos.' },
      { p: 'As samambaias são:', o: ['Briófitas', 'Pteridófitas', 'Gimnospermas', 'Angiospermas'], c: 1, e: 'Têm vasos, mas não têm sementes.' },
      { p: 'Qual grupo tem flores e frutos?', o: ['Briófitas', 'Pteridófitas', 'Gimnospermas', 'Angiospermas'], c: 3, e: 'Só as angiospermas têm frutos.' },
      { p: 'A araucária (pinheiro-do-paraná) é uma:', o: ['Angiosperma', 'Gimnosperma', 'Briófita', 'Pteridófita'], c: 1, e: 'Tem semente (pinhão) mas não tem fruto verdadeiro.' },
      { p: 'Na fotossíntese, a planta libera:', o: ['Gás carbônico', 'Oxigênio', 'Nitrogênio', 'Metano'], c: 1, e: 'Libera O₂ e produz glicose.' },
      { p: 'O vaso que leva água e sais da raiz pra cima é o:', o: ['Floema', 'Xilema', 'Estômato', 'Cloroplasto'], c: 1, e: 'Xilema: seiva bruta.' },
      { p: 'Os estômatos ficam nas folhas e servem pra:', o: ['Absorver água do solo', 'Trocas gasosas e transpiração', 'Produzir sementes', 'Fixar a planta'], c: 1, e: 'São pequenas aberturas na folha.' }
    ],
    cartoes: [
      { f: 'Briófitas', v: 'Musgos; sem vasos.' },
      { f: 'Pteridófitas', v: 'Samambaias; vasos, sem sementes.' },
      { f: 'Gimnospermas', v: 'Pinheiros; sementes sem fruto.' },
      { f: 'Angiospermas', v: 'Flores e frutos.' },
      { f: 'Xilema', v: 'Seiva bruta (água e sais) pra cima.' },
      { f: 'Floema', v: 'Seiva elaborada (açúcares).' },
      { f: 'Fotossíntese', v: 'CO₂ + água + luz → glicose + O₂' }
    ]
  },

  'bio-zoologia': {
    resumo: [
      { t: 'Invertebrados', p: 'Sem coluna vertebral:\n**Poríferos**: esponjas.\n**Cnidários**: água-viva, coral.\n**Platelmintos**: vermes achatados (tênia, planária).\n**Nematelmintos**: vermes cilíndricos (lombriga).\n**Anelídeos**: corpo em anéis (minhoca).\n**Moluscos**: corpo mole (caracol, polvo).\n**Artrópodes**: patas articuladas e exoesqueleto (insetos, aranhas, caranguejos). **O maior grupo de animais**.\n**Equinodermos**: estrela-do-mar, ouriço.' },
      { t: 'Artrópodes', p: '**Insetos**: 6 patas, corpo em cabeça, tórax e abdome, antenas.\n**Aracnídeos**: 8 patas, sem antenas (aranha, escorpião).\n**Crustáceos**: geralmente aquáticos (camarão, caranguejo).' },
      { t: 'Vertebrados (1)', p: '**Peixes**: vivem na água e respiram por **brânquias**.\n**Anfíbios**: sapos e rãs. Fazem **metamorfose** (girino → adulto), pele úmida e respiram também pela pele.' },
      { t: 'Vertebrados (2)', p: '**Répteis**: pele com escamas e **ovo com casca**, que permitiu a vida longe da água.\n**Aves**: **penas**, ossos leves (pneumáticos), bico.\n**Mamíferos**: **pelos** e **glândulas mamárias**.' },
      { t: 'Temperatura do corpo', p: '**Aves e mamíferos** são **endotérmicos**: mantêm a temperatura constante. Os outros variam com o ambiente.' }
    ],
    exemplo: 'Aranha não é inseto: tem 8 patas e não tem antenas. É um aracnídeo.',
    perguntas: [
      { p: 'Quantas patas têm os insetos?', o: ['4', '6', '8', '10'], c: 1, e: 'Insetos têm 6 patas.' },
      { p: 'A aranha é um:', o: ['Inseto', 'Aracnídeo', 'Crustáceo', 'Molusco'], c: 1, e: '8 patas e sem antenas: aracnídeo.' },
      { p: 'O maior grupo de animais é o dos:', o: ['Mamíferos', 'Artrópodes', 'Peixes', 'Moluscos'], c: 1, e: 'Artrópodes, com destaque pros insetos.' },
      { p: 'Qual vertebrado passa por metamorfose?', o: ['Sapo', 'Cobra', 'Galinha', 'Cachorro'], c: 0, e: 'Os anfíbios passam de girino a adulto.' },
      { p: 'O ovo com casca, que permitiu viver longe da água, surgiu nos:', o: ['Peixes', 'Anfíbios', 'Répteis', 'Mamíferos'], c: 2, e: 'Foi uma grande conquista dos répteis.' },
      { p: 'Quais animais são endotérmicos?', o: ['Peixes e anfíbios', 'Aves e mamíferos', 'Répteis e peixes', 'Só os insetos'], c: 1, e: 'Mantêm a temperatura do corpo constante.' },
      { p: 'A minhoca pertence aos:', o: ['Anelídeos', 'Nematelmintos', 'Platelmintos', 'Moluscos'], c: 0, e: 'Corpo dividido em anéis.' }
    ],
    cartoes: [
      { f: 'Artrópodes', v: 'Patas articuladas, exoesqueleto. Maior grupo.' },
      { f: 'Insetos', v: '6 patas, antenas.' },
      { f: 'Aracnídeos', v: '8 patas, sem antenas.' },
      { f: 'Anfíbios', v: 'Metamorfose, pele úmida.' },
      { f: 'Répteis', v: 'Escamas e ovo com casca.' },
      { f: 'Endotérmicos', v: 'Aves e mamíferos.' }
    ]
  },

  'bio-fisiologia': {
    resumo: [
      { t: 'Digestão', p: '**Boca**: a saliva começa a digerir o amido.\n**Estômago**: ácido clorídrico e **pepsina** digerem proteínas.\n**Intestino delgado**: termina a digestão e **absorve** os nutrientes. A **bile** (do fígado) separa as gorduras em gotinhas (emulsifica), facilitando a digestão.\n**Intestino grosso**: absorve **água** e forma as fezes.' },
      { t: 'Respiração', p: 'O ar chega aos **alvéolos** dos pulmões, onde acontece a **troca gasosa**: o **oxigênio** vai pro sangue e o **gás carbônico** sai. O **diafragma** ajuda a puxar o ar.' },
      { t: 'Circulação', p: 'O **coração** tem 4 cavidades: **2 átrios** e **2 ventrículos**.\n**Artérias**: levam o sangue **saindo** do coração.\n**Veias**: trazem o sangue **de volta**.\n**Capilares**: onde ocorrem as trocas com as células.' },
      { t: 'Excreção', p: 'Os **rins** filtram o sangue nos **néfrons** e formam a **urina**, eliminando a **ureia** e o excesso de sais e água.' },
      { t: 'Hormônios', p: '**Insulina** (pâncreas): baixa o açúcar do sangue; sua falta causa **diabetes**.\n**Adrenalina**: susto e emergência.\n**Tireoide**: metabolismo.' },
      { t: 'Defesa', p: 'Os **glóbulos brancos** e os **anticorpos** defendem o corpo.\n**Vacina**: estimula o corpo a produzir defesa (imunidade **ativa**, duradoura).\n**Soro**: já traz anticorpos prontos (imunidade **passiva**, rápida).' }
    ],
    exemplo: 'Picada de cobra pede soro (anticorpos prontos, agem na hora). Pra prevenir doenças, a vacina ensina o corpo a se defender.',
    perguntas: [
      { p: 'Onde acontece a maior parte da absorção dos nutrientes?', o: ['Estômago', 'Intestino delgado', 'Intestino grosso', 'Boca'], c: 1, e: 'No intestino delgado.' },
      { p: 'As trocas gasosas acontecem nos:', o: ['Brônquios', 'Alvéolos', 'Rins', 'Átrios'], c: 1, e: 'Nos alvéolos pulmonares.' },
      { p: 'Os vasos que levam o sangue pra fora do coração são as:', o: ['Veias', 'Artérias', 'Linfas', 'Válvulas'], c: 1, e: 'Artérias saem, veias chegam.' },
      { p: 'A falta de insulina causa:', o: ['Anemia', 'Diabetes', 'Escorbuto', 'Gripe'], c: 1, e: 'Sem insulina, o açúcar do sangue fica alto.' },
      { p: 'A vacina dá imunidade:', o: ['Passiva e rápida', 'Ativa e duradoura', 'Nenhuma', 'Só por um dia'], c: 1, e: 'O próprio corpo aprende a produzir defesa.' },
      { p: 'Os rins filtram o sangue e eliminam principalmente:', o: ['Oxigênio', 'Ureia', 'Glicose', 'Insulina'], c: 1, e: 'A urina leva a ureia embora.' },
      { p: 'Quantas cavidades tem o coração humano?', o: ['2', '3', '4', '6'], c: 2, e: '2 átrios e 2 ventrículos.' }
    ],
    cartoes: [
      { f: 'Intestino delgado', v: 'Absorve os nutrientes.' },
      { f: 'Alvéolos', v: 'Trocas gasosas nos pulmões.' },
      { f: 'Artérias x veias', v: 'Saem do coração x voltam ao coração.' },
      { f: 'Néfron', v: 'Unidade de filtragem do rim.' },
      { f: 'Insulina', v: 'Pâncreas; baixa o açúcar do sangue.' },
      { f: 'Vacina x soro', v: 'Imunidade ativa x passiva.' }
    ]
  },

  'bio-genetica': {
    resumo: [
      { t: 'Mendel', p: '**Gregor Mendel**, o "pai da genética", estudou cruzamentos de **ervilhas** e descobriu como as características passam de pais pra filhos.' },
      { t: 'Conceitos', p: '**Gene**: trecho do DNA que determina uma característica.\n**Alelos**: versões do gene. **Dominante** (A) aparece mesmo com uma cópia; **recessivo** (a) só aparece em dupla (aa).\n**Homozigoto**: AA ou aa. **Heterozigoto**: Aa.\n**Genótipo**: os genes. **Fenótipo**: o que aparece.' },
      { t: '1ª Lei de Mendel', p: 'Cada característica é dada por **um par de alelos** que se **separam** na formação dos gametas.\nCruzamento **Aa × Aa**: 1 AA : 2 Aa : 1 aa → **3 dominantes : 1 recessivo**.' },
      { t: 'Sangue ABO', p: 'Alelos **Iᴬ**, **Iᴮ** e **i**. Tipo **O** (ii) é **doador universal** de hemácias; tipo **AB** é **receptor universal**. Há também o fator **Rh** (+ ou −).' },
      { t: 'Herança ligada ao sexo', p: 'Mulheres são **XX** e homens **XY**. Doenças como **daltonismo** e **hemofilia** estão no cromossomo X e são **mais comuns em homens**, que têm um X só.' }
    ],
    exemplo: 'Pais Aa × Aa (olhos castanhos, carregando o alelo de olho azul): 25% de chance de filho aa, de olhos azuis.',
    perguntas: [
      { p: 'Quem é considerado o pai da genética?', o: ['Darwin', 'Mendel', 'Lamarck', 'Pasteur'], c: 1, e: 'Gregor Mendel, com as ervilhas.' },
      { p: 'Um indivíduo Aa é:', o: ['Homozigoto dominante', 'Heterozigoto', 'Homozigoto recessivo', 'Mutante'], c: 1, e: 'Alelos diferentes: heterozigoto.' },
      { p: 'No cruzamento Aa × Aa, a chance de nascer aa é:', o: ['0%', '25%', '50%', '75%'], c: 1, e: '1 em 4: 25%.' },
      { p: 'O que aparece no organismo (cor dos olhos, por exemplo) é o:', o: ['Genótipo', 'Fenótipo', 'Alelo', 'Cromossomo'], c: 1, e: 'Fenótipo é a característica visível.' },
      { p: 'O tipo sanguíneo doador universal de hemácias é o:', o: ['A', 'B', 'AB', 'O'], c: 3, e: 'O tipo O não tem antígenos A nem B.' },
      { p: 'O daltonismo é mais comum em homens porque:', o: ['Eles têm dois X', 'Está no X e eles têm um X só', 'Está no Y', 'É contagioso'], c: 1, e: 'Com um X só, basta um alelo pra ter a característica.' },
      { p: 'A proporção de fenótipos em Aa × Aa é:', o: ['1 : 1', '3 : 1', '1 : 2 : 1', '9 : 3 : 3 : 1'], c: 1, e: '3 com a característica dominante pra 1 recessiva.' }
    ],
    cartoes: [
      { f: 'Gene', v: 'Trecho do DNA que determina uma característica.' },
      { f: 'Alelo recessivo', v: 'Só aparece em dupla (aa).' },
      { f: 'Heterozigoto', v: 'Aa' },
      { f: 'Aa × Aa', v: '3 dominantes : 1 recessivo.' },
      { f: 'Doador universal', v: 'Tipo O.' },
      { f: 'Daltonismo e hemofilia', v: 'Ligados ao X; mais comuns em homens.' }
    ]
  },

  'bio-evolucao': {
    resumo: [
      { t: 'Lamarck', p: '**Uso e desuso**: órgãos usados se desenvolvem, os não usados atrofiam. E essas mudanças seriam **herdadas**. Ex.: a girafa esticaria o pescoço e passaria isso aos filhos. Essa ideia de herdar o que foi adquirido **está errada**.' },
      { t: 'Darwin', p: '**Seleção natural** ("A Origem das Espécies", 1859): os indivíduos de uma espécie são **diferentes**; os **mais adaptados** ao ambiente sobrevivem e **se reproduzem mais**, passando suas características. Wallace chegou a ideias parecidas.' },
      { t: 'Teoria sintética', p: 'Junta Darwin com a genética: a **variação** vem de **mutações** e da **recombinação** dos genes, e a **seleção natural** escolhe as melhores.' },
      { t: 'Evidências', p: '**Fósseis**, comparação de **DNA** e órgãos:\n**Homólogos**: mesma origem, funções diferentes (braço humano e asa do morcego).\n**Análogos**: mesma função, origens diferentes (asa de inseto e asa de ave).' },
      { t: 'Evolução hoje', p: 'Bactérias **resistentes a antibióticos**: o remédio mata as sensíveis e as resistentes sobram e se multiplicam. É seleção natural acontecendo agora.' }
    ],
    exemplo: 'Por Darwin, entre as girafas ancestrais, as de pescoço mais longo alcançavam mais folhas, sobreviviam mais e deixavam mais filhotes.',
    perguntas: [
      { p: 'A ideia de "uso e desuso" é de:', o: ['Darwin', 'Lamarck', 'Mendel', 'Wallace'], c: 1, e: 'Lamarck propôs uso e desuso.' },
      { p: 'A seleção natural foi proposta por:', o: ['Lamarck', 'Darwin', 'Pasteur', 'Lineu'], c: 1, e: 'Darwin, em "A Origem das Espécies".' },
      { p: 'Segundo Darwin, sobrevivem e se reproduzem mais os:', o: ['Maiores', 'Mais adaptados ao ambiente', 'Mais velhos', 'Que se esforçam mais'], c: 1, e: 'A adaptação ao ambiente é o que conta.' },
      { p: 'Braço humano e asa de morcego são órgãos:', o: ['Análogos', 'Homólogos', 'Vestigiais', 'Iguais'], c: 1, e: 'Mesma origem, funções diferentes: homólogos.' },
      { p: 'Asa de borboleta e asa de pássaro são órgãos:', o: ['Homólogos', 'Análogos', 'Vestigiais', 'Fósseis'], c: 1, e: 'Mesma função, origens diferentes: análogos.' },
      { p: 'O surgimento de bactérias resistentes a antibióticos é exemplo de:', o: ['Uso e desuso', 'Seleção natural', 'Geração espontânea', 'Vacina'], c: 1, e: 'O antibiótico seleciona as resistentes.' },
      { p: 'A teoria sintética da evolução junta a seleção natural com:', o: ['A genética (mutação e recombinação)', 'A geração espontânea', 'O uso e desuso', 'A astrologia'], c: 0, e: 'Explica de onde vem a variação.' }
    ],
    cartoes: [
      { f: 'Lamarck', v: 'Uso e desuso; herança do adquirido (errada).' },
      { f: 'Darwin', v: 'Seleção natural (1859).' },
      { f: 'Teoria sintética', v: 'Seleção natural + mutação e recombinação.' },
      { f: 'Órgãos homólogos', v: 'Mesma origem, funções diferentes.' },
      { f: 'Órgãos análogos', v: 'Mesma função, origens diferentes.' },
      { f: 'Bactérias resistentes', v: 'Seleção natural pelos antibióticos.' }
    ]
  },

  'bio-ecologia': {
    resumo: [
      { t: 'Conceitos', p: '**População**: indivíduos da mesma espécie num lugar.\n**Comunidade**: várias populações juntas.\n**Ecossistema**: a comunidade + o ambiente físico.\n**Habitat**: onde vive. **Nicho**: o que faz (como come, quando age).' },
      { t: 'Cadeia alimentar', p: '**Produtores** (plantas, algas) → **consumidores primários** (herbívoros) → **secundários** (carnívoros) → ... Os **decompositores** (fungos e bactérias) reciclam a matéria. A **energia diminui** a cada nível (cerca de 10% passa adiante). Várias cadeias ligadas formam uma **teia alimentar**.' },
      { t: 'Relações entre seres', p: '**Mutualismo**: os dois ganham e dependem um do outro (líquen).\n**Protocooperação**: os dois ganham, mas não dependem.\n**Comensalismo**: um ganha, o outro nem ganha nem perde.\n**Parasitismo**: um ganha, o outro perde.\n**Predação** e **competição**.' },
      { t: 'Ciclos', p: '**Carbono**: fotossíntese tira CO₂ do ar; respiração e queimadas devolvem.\n**Nitrogênio**: bactérias nas raízes de **leguminosas** (feijão) fixam o nitrogênio do ar.' },
      { t: 'Problemas ambientais', p: '**Efeito estufa** natural, intensificado pelo CO₂ e metano → **aquecimento global**.\n**Camada de ozônio** destruída pelos CFCs.\n**Eutrofização**: excesso de nutrientes na água mata os peixes.\n**Magnificação trófica**: poluentes (mercúrio, DDT) se **acumulam** no topo da cadeia.' }
    ],
    exemplo: 'Capim → gafanhoto → sapo → cobra → gavião. Se o mercúrio entra no capim, o gavião acumula a maior quantidade.',
    perguntas: [
      { p: 'Num ecossistema, as plantas são:', o: ['Consumidores', 'Produtores', 'Decompositores', 'Parasitas'], c: 1, e: 'Fazem o próprio alimento: produtores.' },
      { p: 'Fungos e bactérias que reciclam a matéria são os:', o: ['Produtores', 'Decompositores', 'Herbívoros', 'Predadores'], c: 1, e: 'Decompositores devolvem os nutrientes ao solo.' },
      { p: 'Ao longo da cadeia alimentar, a energia:', o: ['Aumenta', 'Diminui', 'Fica igual', 'Some no primeiro nível'], c: 1, e: 'Cerca de 90% se perde a cada nível.' },
      { p: 'Uma relação em que um ganha e o outro perde é o:', o: ['Mutualismo', 'Parasitismo', 'Comensalismo', 'Protocooperação'], c: 1, e: 'Parasitismo: o parasita prejudica o hospedeiro.' },
      { p: 'O conjunto de indivíduos da mesma espécie num lugar é a:', o: ['Comunidade', 'População', 'Biosfera', 'Ecossistema'], c: 1, e: 'Mesma espécie = população.' },
      { p: 'O acúmulo de poluentes no topo da cadeia é a:', o: ['Eutrofização', 'Magnificação trófica', 'Fotossíntese', 'Sucessão'], c: 1, e: 'Os predadores do topo acumulam mais.' },
      { p: 'Bactérias que fixam nitrogênio vivem nas raízes de:', o: ['Leguminosas, como o feijão', 'Pinheiros', 'Cactos', 'Samambaias'], c: 0, e: 'É por isso que se planta feijão pra adubar o solo.' }
    ],
    cartoes: [
      { f: 'População', v: 'Mesma espécie num lugar.' },
      { f: 'Nicho ecológico', v: 'O "papel" da espécie: o que come, como vive.' },
      { f: 'Decompositores', v: 'Fungos e bactérias; reciclam a matéria.' },
      { f: 'Mutualismo', v: 'Os dois ganham e dependem um do outro.' },
      { f: 'Parasitismo', v: 'Um ganha, o outro perde.' },
      { f: 'Magnificação trófica', v: 'Poluente acumula no topo da cadeia.' },
      { f: 'Eutrofização', v: 'Excesso de nutrientes na água.' }
    ]
  }
});
