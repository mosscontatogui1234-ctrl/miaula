// Geografia — 1º, 2º e 3º ano
window.AULAS = window.AULAS || {};
Object.assign(window.AULAS, {
  'geo-relevo': {
    resumo: [
      { t: 'Camadas da Terra', p: '**Crosta**: a camada fina onde vivemos.\n**Manto**: rochas derretidas e quentes (magma).\n**Núcleo**: externo líquido e interno sólido, de ferro e níquel.' },
      { t: 'Placas tectônicas', p: 'A crosta é dividida em **placas** que se movem lentamente sobre o manto.\n**Convergentes** (se chocam): formam **montanhas**, vulcões e terremotos (Andes, Himalaia).\n**Divergentes** (se afastam): formam as dorsais no fundo do oceano.\n**Transformantes** (deslizam lado a lado): causam terremotos.' },
      { t: 'O Brasil', p: 'Fica no **meio da Placa Sul-Americana**, longe das bordas. Por isso tem **poucos terremotos fortes** e **nenhum vulcão ativo**.' },
      { t: 'Agentes do relevo', p: '**Internos** (constroem): tectonismo, vulcanismo, terremotos.\n**Externos** (modelam): **intemperismo** (desgaste das rochas) e **erosão** pela água, vento e gelo.' },
      { t: 'Formas de relevo', p: '**Planalto**: área elevada onde o **desgaste** é maior.\n**Planície**: área plana onde há **acúmulo** de sedimentos.\n**Depressão**: área mais baixa que o entorno.\n**Montanha**: grande elevação.\nO ponto mais alto do Brasil é o **Pico da Neblina** (AM).' }
    ],
    exemplo: 'A Cordilheira dos Andes existe porque a Placa de Nazca mergulha por baixo da Placa Sul-Americana: limite convergente.',
    perguntas: [
      { p: 'A camada da Terra onde vivemos é a:', o: ['Manto', 'Crosta', 'Núcleo', 'Atmosfera'], c: 1, e: 'A crosta é a camada mais externa e fina.' },
      { p: 'Os Andes se formaram por placas:', o: ['Divergentes', 'Convergentes', 'Paradas', 'Transformantes'], c: 1, e: 'O choque entre placas ergue montanhas.' },
      { p: 'O Brasil tem poucos terremotos fortes porque:', o: ['Fica no meio de uma placa', 'É muito quente', 'Tem muitos rios', 'Fica perto do Equador'], c: 0, e: 'Longe das bordas, onde os tremores são fortes.' },
      { p: 'Uma área plana formada por acúmulo de sedimentos é uma:', o: ['Planície', 'Montanha', 'Planalto', 'Depressão'], c: 0, e: 'Na planície predomina a deposição.' },
      { p: 'O desgaste das rochas pela chuva, calor e frio é o:', o: ['Vulcanismo', 'Intemperismo', 'Tectonismo', 'Dobramento'], c: 1, e: 'Intemperismo é um agente externo.' },
      { p: 'O ponto mais alto do Brasil é o:', o: ['Pico da Bandeira', 'Pico da Neblina', 'Monte Roraima', 'Pão de Açúcar'], c: 1, e: 'Pico da Neblina, no Amazonas.' }
    ],
    cartoes: [
      { f: 'Camadas da Terra', v: 'Crosta, manto e núcleo.' },
      { f: 'Placas convergentes', v: 'Se chocam: montanhas, vulcões, terremotos.' },
      { f: 'Por que o Brasil quase não treme?', v: 'Fica no meio da Placa Sul-Americana.' },
      { f: 'Agentes externos', v: 'Intemperismo e erosão.' },
      { f: 'Planalto x planície', v: 'Desgaste x acúmulo de sedimentos.' },
      { f: 'Ponto mais alto do Brasil', v: 'Pico da Neblina (AM).' }
    ]
  },

  'geo-clima': {
    resumo: [
      { t: 'Tempo x clima', p: '**Tempo**: como está a atmosfera **agora** (hoje está chovendo).\n**Clima**: o **padrão** observado por muitos anos (cerca de 30).' },
      { t: 'Fatores do clima', p: '**Latitude**: perto do Equador, mais quente.\n**Altitude**: quanto mais alto, mais frio.\n**Maritimidade**: perto do mar, temperatura mais estável.\n**Massas de ar**, **correntes marítimas**, relevo e vegetação.' },
      { t: 'Tipos de chuva', p: '**Convectiva**: calor faz o ar subir (as chuvas de fim de tarde no verão).\n**Orográfica**: o ar sobe ao encontrar uma serra.\n**Frontal**: encontro de massas de ar quente e fria.' },
      { t: 'Climas do Brasil', p: '**Equatorial**: quente e úmido o ano todo (Amazônia).\n**Tropical**: verão chuvoso e inverno seco (Centro-Oeste).\n**Semiárido**: pouca chuva e irregular (Sertão nordestino).\n**Tropical de altitude**: mais ameno (serras do Sudeste).\n**Subtropical**: estações bem definidas, com geada (Sul).' },
      { t: 'El Niño', p: 'Aquecimento anormal das águas do **Pacífico**. No Brasil costuma trazer **seca no Nordeste** e **chuva forte no Sul**.' }
    ],
    exemplo: '"Amanhã vai chover em São Paulo" é previsão do tempo. "São Paulo tem verões chuvosos" é sobre o clima.',
    perguntas: [
      { p: '"Hoje está fazendo 30 °C" fala sobre:', o: ['Clima', 'Tempo', 'Relevo', 'Bioma'], c: 1, e: 'É a condição do momento: tempo.' },
      { p: 'Quanto maior a altitude:', o: ['Mais quente', 'Mais frio', 'Mais úmido sempre', 'Não muda'], c: 1, e: 'O ar fica mais rarefeito e frio.' },
      { p: 'O clima da maior parte do Sertão nordestino é:', o: ['Equatorial', 'Semiárido', 'Subtropical', 'Temperado'], c: 1, e: 'Pouca chuva e mal distribuída.' },
      { p: 'A chuva de fim de tarde no verão, causada pelo calor, é a:', o: ['Orográfica', 'Convectiva', 'Frontal', 'Ácida'], c: 1, e: 'O ar quente sobe, esfria e forma nuvens.' },
      { p: 'A região com geada e as quatro estações mais definidas é o:', o: ['Norte', 'Nordeste', 'Sul', 'Centro-Oeste'], c: 2, e: 'Clima subtropical.' },
      { p: 'O El Niño costuma causar no Nordeste:', o: ['Enchentes', 'Seca', 'Neve', 'Furacões'], c: 1, e: 'E chuva forte no Sul.' }
    ],
    cartoes: [
      { f: 'Tempo x clima', v: 'Momento x padrão de muitos anos.' },
      { f: 'Latitude', v: 'Perto do Equador = mais quente.' },
      { f: 'Clima equatorial', v: 'Quente e úmido (Amazônia).' },
      { f: 'Clima semiárido', v: 'Pouca chuva (Sertão).' },
      { f: 'Chuva orográfica', v: 'Causada pelo relevo (serras).' },
      { f: 'El Niño', v: 'Seca no Nordeste, chuva no Sul.' }
    ]
  },

  'geo-hidrografia': {
    resumo: [
      { t: 'Água no planeta', p: 'Cerca de **97%** da água da Terra é **salgada**. Da pouca água doce, a maior parte está **congelada** em geleiras ou embaixo da terra.' },
      { t: 'Bacia hidrográfica', p: 'É a área drenada por um rio principal e seus **afluentes**. As partes altas que separam uma bacia da outra são os **divisores de águas**.' },
      { t: 'Rios de planalto x de planície', p: '**Planalto**: têm quedas d’água e grande **potencial pra hidrelétricas**.\n**Planície**: mais calmos, bons pra **navegação**.' },
      { t: 'Bacias do Brasil', p: '**Amazônica**: a **maior do mundo**; o Amazonas é o rio com **maior volume de água**.\n**São Francisco**: o "rio da integração nacional", cruza o semiárido (projeto de transposição).\n**Paraná**: muitas hidrelétricas, como **Itaipu**.\n**Tocantins-Araguaia**.' },
      { t: 'Aquíferos', p: 'Reservatórios de água **subterrânea**. O **Aquífero Guarani** é um dos maiores do mundo, embaixo de Brasil, Argentina, Paraguai e Uruguai.' }
    ],
    exemplo: 'O rio São Francisco nasce em Minas Gerais e atravessa a Bahia e o Sertão: por isso é tão importante pro Nordeste.',
    perguntas: [
      { p: 'Qual a maior bacia hidrográfica do mundo?', o: ['São Francisco', 'Amazônica', 'Paraná', 'Nilo'], c: 1, e: 'A Bacia Amazônica.' },
      { p: 'O "rio da integração nacional" é o:', o: ['Amazonas', 'São Francisco', 'Tietê', 'Paraná'], c: 1, e: 'Liga o Sudeste ao Nordeste.' },
      { p: 'Rios de planalto são bons pra:', o: ['Navegação', 'Hidrelétricas', 'Pesca de baleias', 'Nada'], c: 1, e: 'As quedas d’água geram energia.' },
      { p: 'Cerca de quanto da água da Terra é salgada?', o: ['50%', '75%', '97%', '10%'], c: 2, e: 'A água doce é bem pouca.' },
      { p: 'O Aquífero Guarani é um reservatório de água:', o: ['Salgada', 'Subterrânea', 'Congelada', 'Poluída'], c: 1, e: 'Um dos maiores aquíferos do mundo.' },
      { p: 'A hidrelétrica de Itaipu fica na bacia do:', o: ['Amazonas', 'São Francisco', 'Paraná', 'Tocantins'], c: 2, e: 'No rio Paraná, na fronteira com o Paraguai.' }
    ],
    cartoes: [
      { f: 'Bacia hidrográfica', v: 'Área drenada por um rio e seus afluentes.' },
      { f: 'Divisor de águas', v: 'Terreno alto que separa bacias.' },
      { f: 'Maior bacia do mundo', v: 'Amazônica.' },
      { f: 'Rio da integração nacional', v: 'São Francisco.' },
      { f: 'Aquífero Guarani', v: 'Água subterrânea; um dos maiores do mundo.' },
      { f: 'Água salgada no planeta', v: 'Cerca de 97%.' }
    ]
  },

  'geo-biomas': {
    resumo: [
      { t: 'Os 6 biomas do Brasil', p: 'Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa e Pantanal.' },
      { t: 'Amazônia', p: 'O **maior** bioma, com floresta equatorial densa e **enorme biodiversidade**. Sofre com **desmatamento** e queimadas, principalmente na borda sul (o "arco do desmatamento").' },
      { t: 'Cerrado', p: 'Uma savana com **árvores tortas**, de **casca grossa** e **raízes profundas**. É o **"berço das águas"**: nascentes de vários rios importantes. Muito ocupado pela **soja** e pelo gado.' },
      { t: 'Caatinga', p: 'Bioma **exclusivo do Brasil**, no semiárido. Plantas que **perdem as folhas** na seca e cactos como o **mandacaru** e o **xique-xique**.' },
      { t: 'Mata Atlântica', p: 'Fica no **litoral**, onde vive a maior parte da população. É o bioma **mais devastado**: restam pouco mais de **10%** da área original.' },
      { t: 'Pampa e Pantanal', p: '**Pampa**: campos no **Rio Grande do Sul**, usados pra pecuária.\n**Pantanal**: a **maior planície alagável do mundo** (MT e MS), com cheias e secas que mudam a paisagem.' }
    ],
    exemplo: 'Na Caatinga, a árvore perde as folhas na seca pra economizar água. Quando chove, tudo fica verde em poucos dias.',
    perguntas: [
      { p: 'Qual bioma é exclusivo do Brasil?', o: ['Amazônia', 'Caatinga', 'Pampa', 'Pantanal'], c: 1, e: 'A Caatinga só existe no Brasil.' },
      { p: 'O bioma mais devastado do Brasil é a:', o: ['Mata Atlântica', 'Amazônia', 'Caatinga', 'Pantanal'], c: 0, e: 'Restam pouco mais de 10% da Mata Atlântica.' },
      { p: 'Árvores tortas, casca grossa e raízes profundas são do:', o: ['Pampa', 'Cerrado', 'Pantanal', 'Mata Atlântica'], c: 1, e: 'Adaptações do Cerrado ao fogo e à seca.' },
      { p: 'A maior planície alagável do mundo é o:', o: ['Pampa', 'Pantanal', 'Cerrado', 'Delta do Nilo'], c: 1, e: 'Fica no Mato Grosso e no Mato Grosso do Sul.' },
      { p: 'O Pampa fica no estado:', o: ['Bahia', 'Rio Grande do Sul', 'Amazonas', 'Goiás'], c: 1, e: 'Os campos gaúchos.' },
      { p: 'O Cerrado é chamado de "berço das águas" porque:', o: ['Chove o ano todo', 'Tem nascentes de vários rios importantes', 'Fica no litoral', 'Tem muitos lagos salgados'], c: 1, e: 'Muitos rios brasileiros nascem lá.' }
    ],
    cartoes: [
      { f: 'Biomas brasileiros', v: 'Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa, Pantanal.' },
      { f: 'Caatinga', v: 'Exclusiva do Brasil; semiárido.' },
      { f: 'Mata Atlântica', v: 'Litoral; o mais devastado.' },
      { f: 'Cerrado', v: 'Savana; "berço das águas".' },
      { f: 'Pantanal', v: 'Maior planície alagável do mundo.' },
      { f: 'Pampa', v: 'Campos do Rio Grande do Sul.' }
    ]
  },

  'geo-populacao': {
    resumo: [
      { t: 'Populoso x povoado', p: '**População absoluta**: o total de habitantes. O Brasil tem cerca de **203 milhões** (Censo 2022), por isso é **populoso**.\n**Densidade demográfica**: habitantes por km². No Brasil é baixa (cerca de 24 hab/km²), então ele é **pouco povoado**.' },
      { t: 'Crescimento vegetativo', p: '**Natalidade − mortalidade**. Se nascem mais do que morrem, a população cresce.' },
      { t: 'Transição demográfica', p: 'Os países passam por fases: primeiro **muitos nascimentos e muitas mortes**; depois a mortalidade cai e a população **explode**; depois a natalidade também cai; por fim, a população **envelhece**. O Brasil está **envelhecendo**, e as famílias têm menos filhos.' },
      { t: 'Pirâmide etária', p: 'Gráfico das idades. **Base larga**: muitos jovens. **Topo largo**: muitos idosos. A pirâmide brasileira está ficando mais estreita na base.' },
      { t: 'Migrações e IDH', p: '**Êxodo rural**: do campo pra cidade. No século XX, muitos **nordestinos** migraram pro **Sudeste**.\n**IDH** (Índice de Desenvolvimento Humano): mede **renda**, **educação** e **saúde** (expectativa de vida).' }
    ],
    exemplo: 'A China é populosa e muito povoada; o Brasil é populoso, mas pouco povoado, porque tem um território enorme.',
    perguntas: [
      { p: 'Densidade demográfica é:', o: ['O total de habitantes', 'Habitantes por km²', 'O número de cidades', 'O IDH'], c: 1, e: 'É a população dividida pela área.' },
      { p: 'O Brasil é:', o: ['Pouco populoso e muito povoado', 'Populoso e pouco povoado', 'Pouco populoso e pouco povoado', 'Muito povoado'], c: 1, e: 'Muita gente, mas espalhada num território enorme.' },
      { p: 'Crescimento vegetativo é:', o: ['Imigrantes − emigrantes', 'Natalidade − mortalidade', 'Área ÷ população', 'Renda ÷ população'], c: 1, e: 'Nascimentos menos mortes.' },
      { p: 'Uma pirâmide etária com topo largo indica:', o: ['População jovem', 'População envelhecida', 'Guerra', 'Natalidade alta'], c: 1, e: 'Muitos idosos.' },
      { p: 'O IDH considera:', o: ['Só a renda', 'Renda, educação e saúde', 'O número de carros', 'O tamanho do país'], c: 1, e: 'Três dimensões do desenvolvimento.' },
      { p: 'O êxodo rural é a migração:', o: ['Da cidade pro campo', 'Do campo pra cidade', 'Entre países', 'Entre continentes'], c: 1, e: 'Muito forte no Brasil no século XX.' }
    ],
    cartoes: [
      { f: 'População absoluta', v: 'Total de habitantes.' },
      { f: 'Densidade demográfica', v: 'Habitantes por km².' },
      { f: 'Crescimento vegetativo', v: 'Natalidade − mortalidade.' },
      { f: 'Pirâmide com base larga', v: 'População jovem.' },
      { f: 'IDH', v: 'Renda, educação e saúde.' },
      { f: 'Êxodo rural', v: 'Campo → cidade.' }
    ]
  },

  'geo-urbanizacao': {
    resumo: [
      { t: 'O que é', p: 'É o aumento da população que vive nas **cidades**. No Brasil foi **muito rápido** a partir de **1950**, com a industrialização e o êxodo rural. Hoje a grande maioria dos brasileiros mora em cidades.' },
      { t: 'Conceitos', p: '**Metrópole**: cidade grande que influencia uma região.\n**Região metropolitana**: a metrópole e as cidades ligadas a ela.\n**Conurbação**: cidades que crescem até "se encostar".\n**Megalópole**: união de metrópoles (Rio–São Paulo).' },
      { t: 'Problemas urbanos', p: '**Moradias precárias** e favelização, **segregação socioespacial** (ricos e pobres separados), trânsito e **mobilidade** ruim, **enchentes** (solo impermeabilizado pelo asfalto), **ilhas de calor** e poluição.' },
      { t: 'Gentrificação', p: 'Quando um bairro popular é "valorizado", os aluguéis sobem e os moradores antigos acabam **expulsos** pra mais longe.' },
      { t: 'Planejamento', p: 'O **Estatuto da Cidade** (2001) exige que cidades maiores tenham **plano diretor**, que organiza o crescimento urbano.' }
    ],
    exemplo: 'Em São Paulo, quando chove forte, a água não infiltra no asfalto e corre toda pros rios: daí vêm as enchentes.',
    perguntas: [
      { p: 'A urbanização brasileira acelerou a partir de:', o: ['1500', '1888', '1950', '2010'], c: 2, e: 'Com a industrialização e o êxodo rural.' },
      { p: 'Cidades que crescem até se juntarem formam uma:', o: ['Megalópole', 'Conurbação', 'Vila', 'Capitania'], c: 1, e: 'É a conurbação, como entre São Paulo e o ABC.' },
      { p: 'As enchentes urbanas pioram por causa da:', o: ['Impermeabilização do solo', 'Altitude', 'Latitude', 'Agricultura'], c: 0, e: 'Asfalto e concreto não deixam a água infiltrar.' },
      { p: 'A expulsão de moradores antigos de um bairro que ficou caro chama-se:', o: ['Conurbação', 'Gentrificação', 'Êxodo rural', 'Metropolização'], c: 1, e: 'O bairro "valoriza" e os pobres saem.' },
      { p: 'O Rio de Janeiro e São Paulo juntos formam uma:', o: ['Vila', 'Megalópole', 'Capitania', 'Aldeia'], c: 1, e: 'A megalópole Rio–São Paulo.' },
      { p: 'O documento que organiza o crescimento de uma cidade é o:', o: ['Plano diretor', 'Código de Hamurábi', 'Censo', 'IDH'], c: 0, e: 'Exigido pelo Estatuto da Cidade.' }
    ],
    cartoes: [
      { f: 'Urbanização', v: 'Aumento da população nas cidades.' },
      { f: 'Conurbação', v: 'Cidades que se juntam.' },
      { f: 'Megalópole', v: 'União de metrópoles (Rio–SP).' },
      { f: 'Segregação socioespacial', v: 'Ricos e pobres em áreas separadas.' },
      { f: 'Gentrificação', v: 'Moradores pobres expulsos de bairro valorizado.' },
      { f: 'Ilha de calor', v: 'Centro urbano mais quente que o entorno.' }
    ]
  },

  'geo-industria': {
    resumo: [
      { t: 'As revoluções industriais', p: '**1ª** (séc. XVIII, Inglaterra): carvão, **máquina a vapor**, indústria têxtil.\n**2ª** (fim do séc. XIX): **petróleo**, **eletricidade**, aço e a **linha de montagem** (fordismo).\n**3ª** (meados do séc. XX): **informática**, robótica e o **toyotismo** (produção flexível, **estoque mínimo**, "just in time").\n**4ª** (hoje): internet das coisas e inteligência artificial.' },
      { t: 'Tipos de indústria', p: '**De base**: transforma matéria-prima pra outras indústrias (siderurgia, petroquímica).\n**Bens de capital**: máquinas.\n**Bens de consumo**: duráveis (carros, geladeiras) e não duráveis (alimentos, roupas).' },
      { t: 'Industrialização do Brasil', p: 'Foi **tardia**. **Vargas** criou a indústria de base (**CSN**). **Juscelino Kubitschek** trouxe as **montadoras** com o Plano de Metas ("**50 anos em 5**"). A indústria se concentrou no **Sudeste**, principalmente em **São Paulo**.' },
      { t: 'Onde as indústrias se instalam', p: 'Perto de **matéria-prima**, **mão de obra**, **mercado consumidor** e **infraestrutura**, e onde há **incentivos fiscais**. A "**guerra fiscal**" entre estados espalhou fábricas pro interior e outras regiões.' }
    ],
    exemplo: 'Uma siderúrgica produz aço (indústria de base), que vira máquinas (bens de capital), que fabricam carros (bens de consumo duráveis).',
    perguntas: [
      { p: 'A máquina a vapor é símbolo da:', o: ['1ª Revolução Industrial', '2ª Revolução Industrial', '3ª Revolução Industrial', '4ª Revolução Industrial'], c: 0, e: 'Inglaterra, século XVIII.' },
      { p: 'A linha de montagem de Ford é da:', o: ['1ª Revolução', '2ª Revolução', '3ª Revolução', 'Idade Média'], c: 1, e: 'É o fordismo, da 2ª Revolução Industrial.' },
      { p: 'O toyotismo é marcado por:', o: ['Estoques enormes', 'Produção flexível e estoque mínimo', 'Trabalho escravo', 'Máquinas a vapor'], c: 1, e: 'Produz só o necessário, na hora certa.' },
      { p: 'Uma siderúrgica é uma indústria:', o: ['De base', 'De bens de consumo', 'Artesanal', 'De serviços'], c: 0, e: 'Produz aço pra outras indústrias.' },
      { p: 'O Plano de Metas, "50 anos em 5", foi de:', o: ['Getúlio Vargas', 'Juscelino Kubitschek', 'Dom Pedro II', 'Médici'], c: 1, e: 'JK trouxe as montadoras de carros.' },
      { p: 'A indústria brasileira se concentrou principalmente no:', o: ['Norte', 'Nordeste', 'Sudeste', 'Sul'], c: 2, e: 'Principalmente em São Paulo.' }
    ],
    cartoes: [
      { f: '1ª Revolução Industrial', v: 'Vapor, carvão, têxtil.' },
      { f: '2ª Revolução Industrial', v: 'Petróleo, eletricidade, fordismo.' },
      { f: '3ª Revolução Industrial', v: 'Informática, robótica, toyotismo.' },
      { f: 'Indústria de base', v: 'Siderurgia, petroquímica.' },
      { f: 'Plano de Metas', v: 'JK, "50 anos em 5".' },
      { f: 'Guerra fiscal', v: 'Estados dando incentivos pra atrair fábricas.' }
    ]
  },

  'geo-agro': {
    resumo: [
      { t: 'Agricultura familiar', p: 'Pequenas propriedades, produção **variada** (policultura) e trabalho da família. Produz boa parte dos **alimentos que chegam à mesa** dos brasileiros.' },
      { t: 'Agronegócio', p: 'Grandes propriedades, **monocultura**, máquinas e tecnologia, produção voltada pra **exportação**: **soja**, milho, café, carne, açúcar. O Brasil é o **maior exportador de soja** e o **maior produtor de café** do mundo.' },
      { t: 'Revolução Verde', p: 'Pacote de **sementes melhoradas**, **fertilizantes**, **agrotóxicos** e **máquinas** que aumentou muito a produção, mas trouxe problemas ambientais e de saúde.' },
      { t: 'Questão agrária', p: 'A terra no Brasil é **muito concentrada** em latifúndios. Isso gera **conflitos no campo** e a luta pela **reforma agrária** (como a do MST).' },
      { t: 'Fronteira agrícola', p: 'A agropecuária avançou sobre o **Cerrado** e a **Amazônia**, causando **desmatamento**. Alternativas: **agroecologia** e produção **orgânica**.' }
    ],
    exemplo: 'A soja plantada no Cerrado vira ração e óleo, e boa parte é vendida pra China.',
    perguntas: [
      { p: 'A agricultura familiar se caracteriza por:', o: ['Monocultura de exportação', 'Pequenas propriedades e produção variada', 'Só gado', 'Trabalho escravo'], c: 1, e: 'Produz muitos alimentos do mercado interno.' },
      { p: 'O principal produto do agronegócio brasileiro na exportação é a:', o: ['Soja', 'Maçã', 'Uva', 'Trigo'], c: 0, e: 'O Brasil é o maior exportador de soja.' },
      { p: 'A Revolução Verde envolveu:', o: ['Só agricultura orgânica', 'Sementes melhoradas, fertilizantes, agrotóxicos e máquinas', 'Reforma agrária', 'Fim das máquinas'], c: 1, e: 'Um pacote tecnológico pra aumentar a produção.' },
      { p: 'A concentração de terras gera:', o: ['Conflitos no campo', 'Mais florestas', 'Fim da fome', 'Mais chuva'], c: 0, e: 'E a luta pela reforma agrária.' },
      { p: 'A expansão da fronteira agrícola atinge principalmente:', o: ['O Pampa', 'O Cerrado e a Amazônia', 'A Antártida', 'O litoral'], c: 1, e: 'Com muito desmatamento.' },
      { p: 'Monocultura significa:', o: ['Várias plantações juntas', 'Plantar um só produto em grande área', 'Criar só um animal', 'Agricultura sem máquinas'], c: 1, e: 'Típica do agronegócio.' }
    ],
    cartoes: [
      { f: 'Agricultura familiar', v: 'Pequena, variada, alimenta o mercado interno.' },
      { f: 'Agronegócio', v: 'Grande, monocultura, exportação.' },
      { f: 'Revolução Verde', v: 'Sementes, fertilizantes, agrotóxicos, máquinas.' },
      { f: 'Latifúndio', v: 'Grande propriedade de terra.' },
      { f: 'Fronteira agrícola', v: 'Avanço sobre o Cerrado e a Amazônia.' },
      { f: 'Maior produtor de café do mundo', v: 'Brasil.' }
    ]
  },

  'geo-energia': {
    resumo: [
      { t: 'Renováveis x não renováveis', p: '**Renováveis**: se recompõem (hídrica, **solar**, **eólica**, biomassa, geotérmica).\n**Não renováveis**: acabam (**petróleo**, **carvão mineral**, **gás natural**, **nuclear**).' },
      { t: 'O mundo', p: 'A maior parte da energia do mundo ainda vem de **combustíveis fósseis**, que emitem **gases de efeito estufa**.' },
      { t: 'O Brasil', p: 'A **matriz elétrica** brasileira é das mais **renováveis** do mundo: a maior parte vem das **hidrelétricas**, e a **eólica** e a **solar** crescem rápido. Destaques: **Itaipu** (com o Paraguai), Belo Monte, o **etanol** da cana (Proálcool, 1975) e o petróleo do **pré-sal**, em águas profundas.' },
      { t: 'Impactos', p: '**Hidrelétricas**: alagam grandes áreas e deslocam populações.\n**Fósseis**: poluição e aquecimento global.\n**Nuclear**: não emite CO₂, mas gera lixo radioativo e há risco de acidentes (Chernobyl, 1986; Fukushima, 2011). No Brasil, as usinas ficam em **Angra dos Reis** (RJ).' }
    ],
    exemplo: 'Os parques eólicos se espalharam pelo Nordeste, onde venta forte e constante.',
    perguntas: [
      { p: 'Qual é uma fonte renovável?', o: ['Petróleo', 'Carvão', 'Eólica', 'Gás natural'], c: 2, e: 'O vento não acaba.' },
      { p: 'A maior parte da eletricidade do Brasil vem de:', o: ['Usinas nucleares', 'Hidrelétricas', 'Carvão', 'Diesel'], c: 1, e: 'O país tem muitos rios de planalto.' },
      { p: 'Itaipu é uma usina:', o: ['Nuclear', 'Hidrelétrica binacional, com o Paraguai', 'Solar', 'Eólica'], c: 1, e: 'Fica no rio Paraná.' },
      { p: 'O pré-sal é uma reserva de:', o: ['Sal de cozinha', 'Petróleo em águas profundas', 'Urânio', 'Água doce'], c: 1, e: 'Fica embaixo de uma camada de sal no oceano.' },
      { p: 'Um problema das hidrelétricas é:', o: ['Lixo radioativo', 'Alagar grandes áreas', 'Emitir fumaça preta', 'Usar petróleo'], c: 1, e: 'Os reservatórios inundam florestas e comunidades.' },
      { p: 'As usinas nucleares do Brasil ficam em:', o: ['Itaipu', 'Angra dos Reis', 'Belo Monte', 'Brasília'], c: 1, e: 'Angra 1 e 2, no Rio de Janeiro.' }
    ],
    cartoes: [
      { f: 'Fontes renováveis', v: 'Hídrica, solar, eólica, biomassa.' },
      { f: 'Fontes não renováveis', v: 'Petróleo, carvão, gás, nuclear.' },
      { f: 'Matriz elétrica do Brasil', v: 'Muito renovável; hidrelétricas na frente.' },
      { f: 'Pré-sal', v: 'Petróleo em águas profundas.' },
      { f: 'Proálcool', v: '1975, etanol da cana.' },
      { f: 'Angra dos Reis', v: 'Usinas nucleares (RJ).' }
    ]
  },

  'geo-globalizacao': {
    resumo: [
      { t: 'O que é', p: 'A **integração do mundo** na economia, na cultura e na tecnologia. Produtos, dinheiro, informações e pessoas circulam cada vez mais rápido.' },
      { t: 'O que permitiu', p: 'O avanço dos **transportes** (contêineres, aviões) e das **comunicações** (internet). O geógrafo **Milton Santos** chamou isso de **meio técnico-científico-informacional**.' },
      { t: 'Empresas transnacionais', p: 'Grandes empresas atuando em muitos países. Muitas levam fábricas pra lugares com **mão de obra barata** e impostos baixos.' },
      { t: 'Neoliberalismo', p: 'Ideias que guiaram a globalização: **privatizações**, abertura dos mercados e **menos Estado** na economia.' },
      { t: 'Consequências', p: '**Mais comércio** e tecnologia, mas também **desigualdade** entre países e pessoas, e **padronização cultural** (as mesmas marcas e músicas em todo lugar). Ao mesmo tempo, culturas locais resistem e se misturam.' }
    ],
    exemplo: 'Um celular pode ser projetado nos EUA, ter peças da Coreia, ser montado na China e vendido no Brasil. Isso é globalização.',
    perguntas: [
      { p: 'Globalização é:', o: ['O isolamento dos países', 'A integração mundial econômica, cultural e tecnológica', 'Uma guerra', 'O fim do comércio'], c: 1, e: 'Tudo cada vez mais conectado.' },
      { p: 'O "meio técnico-científico-informacional" é conceito de:', o: ['Karl Marx', 'Milton Santos', 'Adam Smith', 'Darwin'], c: 1, e: 'Geógrafo brasileiro.' },
      { p: 'Empresas que atuam em vários países são chamadas de:', o: ['Estatais', 'Transnacionais', 'Feudais', 'Familiares'], c: 1, e: 'Ou multinacionais.' },
      { p: 'O neoliberalismo defende:', o: ['Mais Estado na economia', 'Privatizações e menos Estado', 'O feudalismo', 'Fechar os mercados'], c: 1, e: 'Abertura e Estado mínimo.' },
      { p: 'Uma consequência negativa da globalização é:', o: ['Mais comunicação', 'Aumento da desigualdade', 'Internet', 'Comércio maior'], c: 1, e: 'Os ganhos não são distribuídos igualmente.' },
      { p: 'Ver as mesmas marcas e músicas no mundo todo é exemplo de:', o: ['Padronização cultural', 'Isolamento', 'Feudalismo', 'Êxodo rural'], c: 0, e: 'A cultura fica mais parecida em todo lugar.' }
    ],
    cartoes: [
      { f: 'Globalização', v: 'Integração mundial: economia, cultura, tecnologia.' },
      { f: 'Milton Santos', v: 'Meio técnico-científico-informacional.' },
      { f: 'Transnacionais', v: 'Empresas em vários países.' },
      { f: 'Neoliberalismo', v: 'Privatizações e menos Estado.' },
      { f: 'Padronização cultural', v: 'Mesmos produtos e costumes no mundo todo.' }
    ]
  },

  'geo-geopolitica': {
    resumo: [
      { t: 'Da bipolar à multipolar', p: 'Na **Guerra Fria**, o mundo era **bipolar** (EUA x URSS). Depois de 1991, os **EUA** viraram a grande potência militar, mas a economia ficou **multipolar**, com vários centros de poder: EUA, União Europeia, China, Japão.' },
      { t: 'A ascensão da China', p: 'A **China** virou a **segunda maior economia** do mundo, a "fábrica do mundo", e investe pelo planeta com a **Nova Rota da Seda**.' },
      { t: 'Grupos de países', p: '**BRICS**: Brasil, Rússia, Índia, China e África do Sul, ampliado recentemente com novos membros.\n**G7**: os países mais ricos.\n**G20**: as maiores economias, incluindo o Brasil.' },
      { t: 'A ONU', p: 'Criada em **1945**. Seu **Conselho de Segurança** tem **5 membros permanentes com poder de veto**: EUA, Rússia, China, Reino Unido e França.' },
      { t: 'Conflitos atuais', p: '**Israel x Palestina**, **Rússia x Ucrânia** (invasão em 2022), terrorismo (ataques de **11 de setembro de 2001**) e milhões de **refugiados** pelo mundo.' }
    ],
    exemplo: 'Mesmo que quase todos os países votem a favor, uma resolução do Conselho de Segurança cai se um dos 5 membros permanentes vetar.',
    perguntas: [
      { p: 'Na Guerra Fria, a ordem mundial era:', o: ['Unipolar', 'Bipolar', 'Multipolar', 'Feudal'], c: 1, e: 'Dois polos: EUA e URSS.' },
      { p: 'A segunda maior economia do mundo hoje é a:', o: ['Alemanha', 'China', 'Rússia', 'Brasil'], c: 1, e: 'Só fica atrás dos EUA.' },
      { p: 'Os membros originais do BRICS são:', o: ['Brasil, Rússia, Índia, China, África do Sul', 'EUA, Reino Unido, França', 'Japão e Coreia', 'Argentina e Chile'], c: 0, e: 'As iniciais formam BRICS.' },
      { p: 'Quantos membros permanentes com poder de veto tem o Conselho de Segurança da ONU?', o: ['3', '5', '10', '15'], c: 1, e: 'EUA, Rússia, China, Reino Unido e França.' },
      { p: 'A ONU foi criada em:', o: ['1919', '1945', '1989', '2001'], c: 1, e: 'Logo após a Segunda Guerra.' },
      { p: 'A Rússia invadiu a Ucrânia em:', o: ['1991', '2014', '2022', '2001'], c: 2, e: 'Em fevereiro de 2022.' }
    ],
    cartoes: [
      { f: 'Ordem bipolar', v: 'EUA x URSS (Guerra Fria).' },
      { f: 'Ordem multipolar', v: 'Vários centros econômicos.' },
      { f: 'BRICS', v: 'Brasil, Rússia, Índia, China, África do Sul (+ novos membros).' },
      { f: 'Conselho de Segurança', v: '5 membros permanentes com veto.' },
      { f: 'ONU', v: 'Criada em 1945.' },
      { f: 'China', v: 'Segunda maior economia; "fábrica do mundo".' }
    ]
  },

  'geo-blocos': {
    resumo: [
      { t: 'Por que blocos', p: 'Países se juntam pra **facilitar o comércio** entre eles e ganhar força nas negociações com o resto do mundo.' },
      { t: 'Níveis de integração', p: '**Zona de livre comércio**: reduz as tarifas entre os membros.\n**União aduaneira**: + **tarifa externa comum** pra quem é de fora.\n**Mercado comum**: + livre circulação de **pessoas, capitais e serviços**.\n**União econômica e monetária**: + **moeda única**.' },
      { t: 'Mercosul', p: 'Criado em **1991** (Tratado de Assunção) por **Brasil, Argentina, Paraguai e Uruguai**. É uma **união aduaneira** (ainda incompleta). A Venezuela está suspensa e a Bolívia entrou mais recentemente.' },
      { t: 'União Europeia', p: 'O bloco **mais integrado** do mundo: tem **moeda única (euro)** e livre circulação de pessoas. O **Reino Unido saiu** em 2020 (**Brexit**).' },
      { t: 'Outros blocos', p: '**USMCA** (EUA, México e Canadá), que substituiu o NAFTA.\n**APEC** (Ásia-Pacífico).\n**ASEAN** (Sudeste Asiático).' }
    ],
    exemplo: 'Um francês pode morar e trabalhar na Espanha sem visto e pagar com euro nos dois países: isso é a União Europeia.',
    perguntas: [
      { p: 'O Mercosul foi criado em:', o: ['1957', '1991', '2002', '2020'], c: 1, e: 'Pelo Tratado de Assunção, em 1991.' },
      { p: 'Os fundadores do Mercosul são:', o: ['Brasil, Argentina, Paraguai e Uruguai', 'Brasil, Chile e Peru', 'EUA, México e Canadá', 'Brasil e Portugal'], c: 0, e: 'Os quatro países do Cone Sul.' },
      { p: 'Qual bloco tem moeda única?', o: ['Mercosul', 'União Europeia', 'USMCA', 'APEC'], c: 1, e: 'O euro.' },
      { p: 'A tarifa externa comum caracteriza a:', o: ['Zona de livre comércio', 'União aduaneira', 'Moeda única', 'ONU'], c: 1, e: 'Todos cobram a mesma tarifa de quem é de fora.' },
      { p: 'O Brexit foi a saída de qual país da União Europeia?', o: ['França', 'Reino Unido', 'Alemanha', 'Grécia'], c: 1, e: 'O Reino Unido saiu em 2020.' },
      { p: 'O USMCA reúne:', o: ['EUA, México e Canadá', 'Brasil e Argentina', 'China e Japão', 'França e Alemanha'], c: 0, e: 'Substituiu o NAFTA.' }
    ],
    cartoes: [
      { f: 'Zona de livre comércio', v: 'Reduz tarifas entre os membros.' },
      { f: 'União aduaneira', v: '+ tarifa externa comum (Mercosul).' },
      { f: 'Mercado comum', v: '+ circulação de pessoas e capitais.' },
      { f: 'União monetária', v: '+ moeda única (euro).' },
      { f: 'Mercosul', v: '1991: Brasil, Argentina, Paraguai, Uruguai.' },
      { f: 'Brexit', v: 'Saída do Reino Unido da UE (2020).' }
    ]
  },

  'geo-ambiente': {
    resumo: [
      { t: 'Aquecimento global', p: 'O **efeito estufa** é natural e mantém a Terra aquecida, mas a queima de combustíveis e o desmatamento aumentaram o **CO₂** e o **metano**, **intensificando** o efeito. Consequências: derretimento de geleiras, **aumento do nível do mar** e **eventos extremos** (secas, enchentes, ondas de calor).' },
      { t: 'Acordos do clima', p: '**Protocolo de Kyoto** (1997) e **Acordo de Paris** (2015), que busca limitar o aquecimento a bem menos de 2 °C, tentando ficar em 1,5 °C. A **COP30** aconteceu em **Belém** (2025).' },
      { t: 'Camada de ozônio', p: 'Protege dos raios ultravioleta. Foi danificada pelos gases **CFC**. O **Protocolo de Montreal** (1987) proibiu esses gases e a camada está se recuperando: um exemplo de acordo que funcionou.' },
      { t: 'Problemas urbanos', p: '**Ilha de calor**: o centro da cidade fica mais quente.\n**Inversão térmica**: no inverno, uma camada de ar frio prende a **poluição** perto do chão.\n**Chuva ácida**: por gases de fábricas e carros.' },
      { t: 'Desenvolvimento sustentável', p: 'Atender às necessidades de hoje **sem comprometer as gerações futuras** (Relatório Brundtland, 1987). A **Rio-92** (Eco-92) criou a Agenda 21.' }
    ],
    exemplo: 'Em São Paulo, nos dias frios e secos de inverno, a inversão térmica deixa uma faixa cinza de poluição no horizonte.',
    perguntas: [
      { p: 'O aquecimento global é causado principalmente pelo aumento de:', o: ['Oxigênio', 'CO₂ e metano', 'Nitrogênio', 'Vapor de água das chuvas'], c: 1, e: 'Gases que intensificam o efeito estufa.' },
      { p: 'Os gases que destruíram a camada de ozônio são os:', o: ['CFCs', 'CO₂', 'O₂', 'H₂O'], c: 0, e: 'Proibidos pelo Protocolo de Montreal.' },
      { p: 'O acordo que busca limitar o aquecimento a 1,5 °C é o:', o: ['Protocolo de Montreal', 'Acordo de Paris', 'Tratado de Tordesilhas', 'Tratado de Versalhes'], c: 1, e: 'Assinado em 2015.' },
      { p: 'A inversão térmica é mais comum no:', o: ['Verão', 'Inverno', 'Outono chuvoso', 'Carnaval'], c: 1, e: 'O ar frio fica preso embaixo e segura a poluição.' },
      { p: 'Desenvolvimento sustentável é:', o: ['Crescer a qualquer custo', 'Atender o presente sem prejudicar as gerações futuras', 'Parar toda indústria', 'Só plantar árvores'], c: 1, e: 'Definição do Relatório Brundtland.' },
      { p: 'A COP30 aconteceu em qual cidade brasileira?', o: ['Rio de Janeiro', 'Belém', 'São Paulo', 'Manaus'], c: 1, e: 'Em Belém, no Pará, em 2025.' }
    ],
    cartoes: [
      { f: 'Efeito estufa', v: 'Natural; intensificado por CO₂ e metano.' },
      { f: 'Acordo de Paris', v: '2015; limitar o aquecimento (1,5 °C).' },
      { f: 'Protocolo de Montreal', v: '1987; proibiu os CFCs.' },
      { f: 'Inversão térmica', v: 'Poluição presa perto do chão no inverno.' },
      { f: 'Desenvolvimento sustentável', v: 'Presente sem comprometer o futuro.' },
      { f: 'Rio-92', v: 'Conferência no Rio; Agenda 21.' }
    ]
  }
});
