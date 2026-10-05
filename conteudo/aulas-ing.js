// Inglês — 1º, 2º e 3º ano
window.AULAS = window.AULAS || {};
Object.assign(window.AULAS, {
  'ing-tobe': {
    resumo: [
      { t: 'Ser e estar', p: 'O **verb to be** significa **ser** ou **estar**. É o verbo mais importante do inglês.' },
      { t: 'No presente', p: '**I am** (eu sou/estou)\n**You are** (você é/está)\n**He / She / It is** (ele/ela é/está)\n**We / You / They are** (nós/vocês/eles são/estão)' },
      { t: 'Contrações', p: 'I am → **I’m** · You are → **you’re** · He is → **he’s** · is not → **isn’t** · are not → **aren’t**.' },
      { t: 'Negativa e pergunta', p: '**Negativa**: põe **not** depois do verbo: "She **is not** (isn’t) tired."\n**Pergunta**: o verbo vai pra **frente**: "**Are** you ready?" "**Is** he your brother?"' },
      { t: 'No passado', p: '**Was**: I, he, she, it. **Were**: you, we, they.\n"I **was** at home." "They **were** happy."' },
      { t: 'Cuidado com a idade', p: 'Em inglês a idade usa o **to be**, não o "ter": "I **am** 16 years old" (e não "I have 16 years").' }
    ],
    exemplo: 'Julia is a student. She is 16. Is she tired? No, she isn’t. She is happy!',
    perguntas: [
      { p: 'Complete: She ___ a student.', o: ['am', 'is', 'are', 'be'], c: 1, e: 'He, she, it: is.' },
      { p: 'Complete: They ___ my friends.', o: ['is', 'am', 'are', 'was'], c: 2, e: 'They: are.' },
      { p: 'Qual é a forma correta de dizer "Eu tenho 16 anos"?', o: ['I have 16 years', 'I am 16 years old', 'I has 16 years', 'I is 16 years old'], c: 1, e: 'Idade em inglês usa o verb to be.' },
      { p: 'A pergunta correta é:', o: ['You are ready?', 'Are you ready?', 'Ready you are?', 'Is you ready?'], c: 1, e: 'Na pergunta, o verbo to be vem antes do sujeito.' },
      { p: 'O passado de "I am" é:', o: ['I were', 'I was', 'I am was', 'I be'], c: 1, e: 'I, he, she, it: was.' },
      { p: '"He isn’t" quer dizer:', o: ['Ele é', 'Ele não é / não está', 'Ele era', 'Eles são'], c: 1, e: 'Isn’t = is not.' }
    ],
    cartoes: [
      { f: 'I ___', v: 'am' },
      { f: 'He / she / it ___', v: 'is' },
      { f: 'You / we / they ___', v: 'are' },
      { f: 'Passado de am/is', v: 'was' },
      { f: 'Passado de are', v: 'were' },
      { f: '"Tenho 16 anos" em inglês', v: 'I am 16 years old.' }
    ]
  },

  'ing-pronomes': {
    resumo: [
      { t: 'Pronomes sujeito', p: 'Fazem a ação: **I, you, he, she, it, we, they**. O **it** é pra coisas e animais.' },
      { t: 'Pronomes objeto', p: 'Recebem a ação, vêm **depois do verbo**: **me, you, him, her, it, us, them**.\n"She loves **him**." "Call **me**!"' },
      { t: 'Adjetivos possessivos', p: 'Vêm **antes de um substantivo**: **my, your, his, her, its, our, their**.\n"**My** book." "**Her** cat."' },
      { t: 'Pronomes possessivos', p: 'Ficam **sozinhos**, substituindo o substantivo: **mine, yours, his, hers, ours, theirs**.\n"This book is **mine**."' },
      { t: 'Reflexivos', p: 'Quando a pessoa faz a ação nela mesma: **myself, yourself, himself, herself, itself, ourselves, themselves**.\n"I did it **myself**."' }
    ],
    exemplo: 'This is my cat. Her name is Poponi. I love her, and she loves me. The cat is mine!',
    perguntas: [
      { p: 'Complete: ___ is my brother. (ele)', o: ['Him', 'He', 'His', 'Himself'], c: 1, e: 'Sujeito: he.' },
      { p: 'Complete: She loves ___. (ele)', o: ['he', 'him', 'his', 'it'], c: 1, e: 'Depois do verbo: pronome objeto, him.' },
      { p: 'Complete: This is ___ book. (meu)', o: ['me', 'mine', 'my', 'I'], c: 2, e: 'Antes do substantivo: adjetivo possessivo, my.' },
      { p: 'Complete: The book is ___. (meu)', o: ['my', 'mine', 'me', 'I'], c: 1, e: 'Sozinho, no fim: pronome possessivo, mine.' },
      { p: 'Pra coisas e animais usamos:', o: ['he', 'she', 'it', 'they (sempre)'], c: 2, e: 'It, no singular.' },
      { p: 'Complete: She did it ___. (ela mesma)', o: ['herself', 'himself', 'her', 'hers'], c: 0, e: 'Reflexivo de she: herself.' }
    ],
    cartoes: [
      { f: 'Pronomes sujeito', v: 'I, you, he, she, it, we, they' },
      { f: 'Pronomes objeto', v: 'me, you, him, her, it, us, them' },
      { f: 'Adjetivos possessivos', v: 'my, your, his, her, its, our, their' },
      { f: 'Pronomes possessivos', v: 'mine, yours, his, hers, ours, theirs' },
      { f: 'myself', v: 'eu mesmo(a)' }
    ]
  },

  'ing-continuous': {
    resumo: [
      { t: 'Quando usar', p: 'O **Present Continuous** fala de ações **acontecendo agora** ou num **período temporário**. Também serve pra **planos já combinados** ("I’m traveling tomorrow").' },
      { t: 'Como formar', p: '**am / is / are + verbo com -ing**.\n"I **am studying**." "She **is sleeping**." "They **are playing**."' },
      { t: 'Regrinhas do -ing', p: 'Termina em **e**: tira o e (make → **making**).\nConsoante-vogal-consoante: **dobra** a última (run → **running**, swim → **swimming**).\n**ie** vira **y** (lie → **lying**).' },
      { t: 'Negativa e pergunta', p: '"She **isn’t** working." "**Are** you listening?"' },
      { t: 'Palavras que avisam', p: '**now**, **right now**, **at the moment**, **Look!**, **Listen!**\nAtenção: verbos de estado (**know**, **like**, **want**, **love**) normalmente **não** vão pro -ing.' }
    ],
    exemplo: 'Look! Pãozinho is sleeping and Julia is studying Math right now.',
    perguntas: [
      { p: 'Complete: She ___ now.', o: ['sleep', 'sleeps', 'is sleeping', 'are sleeping'], c: 2, e: 'Ação acontecendo agora: is + -ing.' },
      { p: 'Qual é a forma -ing de "run"?', o: ['runing', 'running', 'runeing', 'runs'], c: 1, e: 'Consoante-vogal-consoante: dobra o n.' },
      { p: 'Qual é a forma -ing de "make"?', o: ['makeing', 'making', 'makking', 'maked'], c: 1, e: 'Termina em e: tira o e.' },
      { p: 'Complete: They ___ soccer at the moment.', o: ['is playing', 'are playing', 'plays', 'playing'], c: 1, e: 'They: are + -ing.' },
      { p: 'Qual frase está correta?', o: ['I am knowing the answer.', 'I know the answer.', 'I knowing the answer.', 'I am know the answer.'], c: 1, e: '"Know" é verbo de estado, não costuma ir pro -ing.' },
      { p: 'A pergunta correta é:', o: ['You are listening?', 'Are you listening?', 'Do you listening?', 'Listening you are?'], c: 1, e: 'O verbo to be vai pra frente.' }
    ],
    cartoes: [
      { f: 'Present Continuous', v: 'am/is/are + verbo-ing' },
      { f: 'Quando usar', v: 'Ação acontecendo agora.' },
      { f: 'make → ', v: 'making' },
      { f: 'swim →', v: 'swimming' },
      { f: 'Palavras que avisam', v: 'now, right now, at the moment' },
      { f: 'Verbos que não vão pro -ing', v: 'know, like, want, love' }
    ]
  },

  'ing-past': {
    resumo: [
      { t: 'Quando usar', p: 'O **Simple Past** fala de ações **terminadas no passado**, num tempo definido.' },
      { t: 'Verbos regulares', p: 'Ganham **-ed**: work → **worked**, play → **played**.\nTerminados em consoante + y: study → **studied**.\nConsoante-vogal-consoante: dobra (stop → **stopped**).' },
      { t: 'Verbos irregulares', p: 'Têm forma própria e precisam ser decorados: go → **went**, see → **saw**, eat → **ate**, have → **had**, do → **did**. (Tem uma lista em Materiais → Verbos irregulares.)' },
      { t: 'Negativa e pergunta', p: 'Usam **did**, e o verbo volta pra forma **normal**:\n"I **didn’t go**." (e não "didn’t went")\n"**Did** you **study**?"' },
      { t: 'Palavras que avisam', p: '**yesterday**, **last week**, **last year**, **two days ago**, **in 2010**.' }
    ],
    exemplo: 'Yesterday Julia studied for two hours. She didn’t watch TV. Did she sleep early? Yes, she did.',
    perguntas: [
      { p: 'Qual é o passado de "study"?', o: ['studyed', 'studied', 'studed', 'studing'], c: 1, e: 'Consoante + y vira -ied.' },
      { p: 'Qual é o passado de "go"?', o: ['goed', 'went', 'gone', 'goes'], c: 1, e: 'Go é irregular: went.' },
      { p: 'Qual frase está correta?', o: ['I didn’t went.', 'I didn’t go.', 'I don’t went.', 'I not went.'], c: 1, e: 'Depois do didn’t, o verbo fica na forma normal.' },
      { p: 'Complete: ___ you see the movie?', o: ['Do', 'Did', 'Does', 'Was'], c: 1, e: 'Pergunta no passado: Did.' },
      { p: 'Qual palavra indica Simple Past?', o: ['tomorrow', 'now', 'yesterday', 'always'], c: 2, e: 'Yesterday = ontem.' },
      { p: 'Qual é o passado de "stop"?', o: ['stoped', 'stopped', 'stopt', 'stops'], c: 1, e: 'Dobra o p.' }
    ],
    cartoes: [
      { f: 'Simple Past regular', v: 'verbo + -ed' },
      { f: 'study →', v: 'studied' },
      { f: 'go →', v: 'went' },
      { f: 'Negativa no passado', v: 'didn’t + verbo normal' },
      { f: 'Pergunta no passado', v: 'Did + sujeito + verbo normal?' },
      { f: 'ago', v: 'atrás (two days ago = dois dias atrás)' }
    ]
  },

  'ing-pastcont': {
    resumo: [
      { t: 'Quando usar', p: 'O **Past Continuous** fala de uma ação que **estava acontecendo** num momento do passado.' },
      { t: 'Como formar', p: '**was / were + verbo com -ing**.\n"I **was studying** at 8 p.m." "They **were sleeping**."' },
      { t: 'Ação interrompida', p: 'Muito usado com o Simple Past: uma ação longa **interrompida** por outra curta.\n"I **was studying** **when** the phone **rang**."' },
      { t: 'While', p: '**While** (enquanto) costuma vir com o Past Continuous: "**While** she **was cooking**, he **was reading**."' }
    ],
    exemplo: 'Julia was reading when Pãozinho jumped on the table.',
    perguntas: [
      { p: 'Complete: I ___ TV when you called.', o: ['watched', 'was watching', 'am watching', 'were watching'], c: 1, e: 'Ação em andamento interrompida: was + -ing.' },
      { p: 'Complete: They ___ at 10 p.m. yesterday.', o: ['was sleeping', 'were sleeping', 'sleeping', 'are sleeping'], c: 1, e: 'They: were + -ing.' },
      { p: 'O Past Continuous é formado por:', o: ['did + verbo', 'was/were + -ing', 'have + particípio', 'will + verbo'], c: 1, e: 'Was ou were + verbo-ing.' },
      { p: '"While" significa:', o: ['Quando', 'Enquanto', 'Depois', 'Porque'], c: 1, e: 'Enquanto.' },
      { p: 'Em "I was studying when the phone rang", a ação curta é:', o: ['was studying', 'rang', 'when', 'I'], c: 1, e: 'O telefone tocou (Simple Past) e interrompeu.' }
    ],
    cartoes: [
      { f: 'Past Continuous', v: 'was/were + verbo-ing' },
      { f: 'Quando usar', v: 'Ação em andamento no passado.' },
      { f: 'While', v: 'Enquanto.' },
      { f: 'Ação interrompida', v: 'Past Continuous + when + Simple Past.' },
      { f: 'I / he / she / it no Past Continuous', v: 'was + -ing' },
      { f: 'You / we / they no Past Continuous', v: 'were + -ing' }
    ]
  },

  'ing-future': {
    resumo: [
      { t: 'Will', p: 'Usado pra **decisões na hora**, **promessas** e **previsões sem evidência**.\n"I’m thirsty. I **will** (I’ll) get some water."\n"I **will** always love you."\nNegativa: **won’t** (will not).' },
      { t: 'Going to', p: 'Usado pra **planos já decididos** e **previsões com evidência**.\n"I’m **going to** study Medicine."\n"Look at those clouds! It’s **going to** rain."' },
      { t: 'Present Continuous pro futuro', p: 'Pra compromissos **já combinados**, com data e hora: "I’m **meeting** him tomorrow at 6."' },
      { t: 'Estrutura', p: '**will + verbo normal** (he will go, não "he wills go").\n**am/is/are + going to + verbo normal**.' }
    ],
    exemplo: 'Julia is going to take the test on Friday. Pãozinho says: "Don’t worry, you will do great!"',
    perguntas: [
      { p: 'O telefone toca e você diz: "I ___ answer it!" (decisão na hora)', o: ['am going to', 'will', 'won’t', 'was'], c: 1, e: 'Decisão tomada na hora: will.' },
      { p: 'Nuvens escuras no céu: "It’s ___ rain."', o: ['will', 'going to', 'go', 'goes'], c: 1, e: 'Previsão com evidência: going to.' },
      { p: '"Won’t" significa:', o: ['will not', 'want not', 'was not', 'went not'], c: 0, e: 'Won’t = will not.' },
      { p: 'Qual frase está correta?', o: ['She wills travel.', 'She will travels.', 'She will travel.', 'She will to travel.'], c: 2, e: 'Will + verbo na forma normal.' },
      { p: 'Pra um plano já decidido, usamos:', o: ['will', 'going to', 'did', 'was'], c: 1, e: '"I’m going to study Medicine."' }
    ],
    cartoes: [
      { f: 'Will', v: 'Decisão na hora, promessa, previsão sem evidência.' },
      { f: 'Going to', v: 'Plano decidido, previsão com evidência.' },
      { f: 'won’t', v: 'will not' },
      { f: 'Estrutura do will', v: 'will + verbo normal' },
      { f: 'Compromisso marcado', v: 'Present Continuous: I’m meeting him tomorrow.' }
    ]
  },

  'ing-comparativos': {
    resumo: [
      { t: 'Adjetivos curtos', p: 'Comparativo: **-er + than**. Superlativo: **the -est**.\ntall → **taller than** → **the tallest**\nbig → **bigger** → **the biggest** (dobra a consoante)\nhappy → **happier** → **the happiest** (y vira i)' },
      { t: 'Adjetivos longos', p: 'Usam **more** e **the most**:\nbeautiful → **more beautiful than** → **the most beautiful**' },
      { t: 'Irregulares', p: 'good → **better** → **the best**\nbad → **worse** → **the worst**\nfar → **farther / further** → **the farthest**' },
      { t: 'Igualdade', p: '**as ... as**: "She is **as tall as** her mother." (tão alta quanto)' }
    ],
    exemplo: 'Poponi is smaller than Pãozinho, but she is the cutest cat in the world!',
    perguntas: [
      { p: 'O comparativo de "tall" é:', o: ['more tall', 'taller', 'tallest', 'tall than'], c: 1, e: 'Adjetivo curto: -er.' },
      { p: 'O superlativo de "good" é:', o: ['the goodest', 'the best', 'the better', 'the most good'], c: 1, e: 'Irregular: good, better, the best.' },
      { p: 'O comparativo de "beautiful" é:', o: ['beautifuler', 'more beautiful', 'most beautiful', 'beautifullest'], c: 1, e: 'Adjetivo longo: more.' },
      { p: 'O comparativo de "big" é:', o: ['biger', 'bigger', 'more big', 'biggest'], c: 1, e: 'Dobra o g.' },
      { p: '"As tall as" expressa:', o: ['Superioridade', 'Igualdade', 'Inferioridade', 'Superlativo'], c: 1, e: 'Tão alto quanto.' },
      { p: 'O comparativo de "bad" é:', o: ['badder', 'worse', 'worst', 'more bad'], c: 1, e: 'Irregular: bad, worse, the worst.' }
    ],
    cartoes: [
      { f: 'Comparativo curto', v: 'adjetivo + -er + than' },
      { f: 'Superlativo curto', v: 'the + adjetivo + -est' },
      { f: 'Adjetivo longo', v: 'more / the most' },
      { f: 'good', v: 'better, the best' },
      { f: 'bad', v: 'worse, the worst' },
      { f: 'as ... as', v: 'tão ... quanto' }
    ]
  },

  'ing-perfect': {
    resumo: [
      { t: 'Como formar', p: '**have / has + particípio passado** (o "terceiro" verbo da lista).\n"I **have seen** it." "She **has finished**."' },
      { t: 'Experiências', p: 'Coisas que já aconteceram na vida, sem dizer quando. Com **ever** (alguma vez) e **never** (nunca):\n"**Have** you **ever been** to Rio?" "I **have never eaten** sushi."' },
      { t: 'Começou e continua', p: 'Com **for** (duração) e **since** (ponto de início):\n"I **have lived** here **for** 5 years." / "... **since** 2020."' },
      { t: 'Passado recente', p: 'Com **just** (acabou de), **already** (já) e **yet** (ainda, em negativas e perguntas):\n"She **has just** left." "Have you finished **yet**?"' },
      { t: 'Cuidado', p: 'Se o tempo é **definido** (yesterday, last year, in 2019), use o **Simple Past**: "I saw it yesterday" (e não "I have seen it yesterday").' }
    ],
    exemplo: 'Julia has studied every day since Monday. Poponi has already grown!',
    perguntas: [
      { p: 'Complete: I ___ never been to Paris.', o: ['has', 'have', 'had', 'am'], c: 1, e: 'I: have + particípio.' },
      { p: 'Complete: She ___ just arrived.', o: ['have', 'has', 'is', 'did'], c: 1, e: 'She: has.' },
      { p: '"I have lived here ___ 2020."', o: ['for', 'since', 'ago', 'yet'], c: 1, e: 'Ponto de início: since.' },
      { p: '"I have lived here ___ five years."', o: ['since', 'for', 'ago', 'already'], c: 1, e: 'Duração: for.' },
      { p: 'Qual frase está correta?', o: ['I have seen him yesterday.', 'I saw him yesterday.', 'I have saw him yesterday.', 'I seen him yesterday.'], c: 1, e: 'Com tempo definido (yesterday), use o Simple Past.' },
      { p: '"Have you ever...?" pergunta sobre:', o: ['Planos futuros', 'Experiências na vida', 'Ações agora', 'Ordens'], c: 1, e: 'Ever = alguma vez na vida.' }
    ],
    cartoes: [
      { f: 'Present Perfect', v: 'have/has + particípio' },
      { f: 'ever / never', v: 'alguma vez / nunca' },
      { f: 'for x since', v: 'duração x ponto de início' },
      { f: 'just', v: 'acabou de' },
      { f: 'yet', v: 'ainda (negativas e perguntas)' },
      { f: 'Tempo definido (yesterday)', v: 'Use Simple Past, não Present Perfect.' }
    ]
  },

  'ing-modais': {
    resumo: [
      { t: 'O que são', p: 'Verbos auxiliares que dão um "tom" ao verbo principal: habilidade, permissão, obrigação, conselho. Regras: **sem "to"** depois e **sem -s** na 3ª pessoa ("She **can swim**").' },
      { t: 'Can e could', p: '**Can**: habilidade e permissão ("I **can** swim", "**Can** I go?").\n**Could**: habilidade no passado ou pedido educado ("**Could** you help me?").' },
      { t: 'May e might', p: '**Possibilidade**: "It **may / might** rain."\n**May** também é permissão formal: "**May** I come in?"' },
      { t: 'Must e should', p: '**Must**: obrigação forte ou dedução ("You **must** stop", "He **must** be tired").\n**Mustn’t**: **proibição** ("You **mustn’t** smoke here").\n**Should**: **conselho** ("You **should** sleep more").' },
      { t: 'Cuidado!', p: '**Mustn’t** = é proibido. **Don’t have to** = não precisa (não é obrigatório).' }
    ],
    exemplo: 'You should drink water, you mustn’t study all night, and you can ask Pãozinho for help!',
    perguntas: [
      { p: 'Pra dar um conselho, usamos:', o: ['must', 'should', 'can', 'might'], c: 1, e: '"You should sleep more."' },
      { p: '"You mustn’t smoke here" significa:', o: ['Você não precisa fumar', 'É proibido fumar aqui', 'Você pode fumar', 'Você deveria fumar'], c: 1, e: 'Mustn’t = proibição.' },
      { p: '"You don’t have to come" significa:', o: ['É proibido vir', 'Você não precisa vir', 'Você deve vir', 'Você vem'], c: 1, e: 'Não é obrigatório.' },
      { p: 'Qual frase está correta?', o: ['She cans swim.', 'She can swims.', 'She can swim.', 'She can to swim.'], c: 2, e: 'Modal + verbo normal, sem -s e sem to.' },
      { p: 'Um pedido educado: "___ you help me, please?"', o: ['Must', 'Could', 'Should', 'Mustn’t'], c: 1, e: 'Could é educado.' },
      { p: '"It might rain" expressa:', o: ['Certeza', 'Possibilidade', 'Proibição', 'Habilidade'], c: 1, e: 'Might = talvez.' }
    ],
    cartoes: [
      { f: 'can', v: 'habilidade, permissão' },
      { f: 'could', v: 'passado de can; pedido educado' },
      { f: 'should', v: 'conselho' },
      { f: 'must', v: 'obrigação forte, dedução' },
      { f: 'mustn’t', v: 'proibição' },
      { f: 'don’t have to', v: 'não é obrigatório' }
    ]
  },

  'ing-condicionais': {
    resumo: [
      { t: 'Zero conditional', p: 'Fatos e verdades: **If + presente, presente**.\n"If you **heat** ice, it **melts**."' },
      { t: 'First conditional', p: 'Possibilidade **real** no futuro: **If + presente, will + verbo**.\n"If it **rains**, I **will stay** home."' },
      { t: 'Second conditional', p: 'Situação **imaginária** no presente: **If + passado, would + verbo**.\n"If I **had** money, I **would travel**."\nCom o verbo to be, usa-se **were** pra todos: "If I **were** you, I **would** study."' },
      { t: 'Third conditional', p: '**Arrependimento**, algo que não aconteceu no passado: **If + had + particípio, would have + particípio**.\n"If I **had studied**, I **would have passed**."' }
    ],
    exemplo: 'If Julia studies every day, Poponi will grow. If I were a cat, I would sleep all day!',
    perguntas: [
      { p: '"If you heat ice, it melts" é:', o: ['Zero conditional', 'First conditional', 'Second conditional', 'Third conditional'], c: 0, e: 'Um fato: presente + presente.' },
      { p: 'Complete: If it rains, I ___ home.', o: ['stay', 'will stay', 'would stay', 'stayed'], c: 1, e: 'First conditional: will + verbo.' },
      { p: 'Complete: If I had money, I ___ travel.', o: ['will', 'would', 'am', 'did'], c: 1, e: 'Second conditional: would + verbo.' },
      { p: 'Complete: If I ___ you, I would study.', o: ['am', 'was', 'were', 'be'], c: 2, e: 'No second conditional, "were" pra todos.' },
      { p: 'O third conditional expressa:', o: ['Fatos', 'Planos', 'Arrependimentos sobre o passado', 'Ordens'], c: 2, e: 'Algo que não aconteceu.' },
      { p: '"If I had studied, I would have passed" quer dizer que eu:', o: ['Estudei e passei', 'Não estudei e não passei', 'Vou estudar', 'Estou estudando'], c: 1, e: 'Situação que não aconteceu.' }
    ],
    cartoes: [
      { f: 'Zero conditional', v: 'If + presente, presente (fatos).' },
      { f: 'First conditional', v: 'If + presente, will + verbo.' },
      { f: 'Second conditional', v: 'If + passado, would + verbo.' },
      { f: 'If I were you...', v: 'Se eu fosse você... (second)' },
      { f: 'Third conditional', v: 'If + had + particípio, would have + particípio.' }
    ]
  },

  'ing-leitura': {
    resumo: [
      { t: 'Você não precisa saber tudo', p: 'Nas provas (como o ENEM), dá pra entender o texto **sem conhecer todas as palavras**. O segredo são as **estratégias de leitura**.' },
      { t: 'Skimming e scanning', p: '**Skimming**: leitura **rápida** pra pegar a **ideia geral**.\n**Scanning**: procurar uma **informação específica** (um nome, uma data, um número).' },
      { t: 'Cognatos', p: 'Palavras **parecidas com o português** e com o mesmo sentido: important, family, university, history.' },
      { t: 'Falsos cognatos', p: 'Parecem, mas **não são**!\n**pretend** = fingir · **actually** = na verdade · **push** = empurrar · **library** = biblioteca · **college** = faculdade · **parents** = pais · **exquisite** = requintado · **lunch** = almoço.' },
      { t: 'Outras pistas', p: '**Título**, **imagens**, **gênero do texto** (é propaganda? notícia? tirinha?), **contexto** e **prefixos e sufixos**: un- (não: unhappy), -less (sem: homeless), -ful (cheio de: helpful), -ly (advérbio: quickly).' }
    ],
    exemplo: 'Pra responder "Em que ano o museu foi aberto?", não leia tudo palavra por palavra: faça scanning procurando um número de 4 dígitos.',
    perguntas: [
      { p: 'Ler rapidamente pra entender a ideia geral é:', o: ['Scanning', 'Skimming', 'Translating', 'Spelling'], c: 1, e: 'Skimming = ideia geral.' },
      { p: 'Procurar uma informação específica no texto é:', o: ['Skimming', 'Scanning', 'Reading aloud', 'Writing'], c: 1, e: 'Scanning = caçar a informação.' },
      { p: '"Pretend" significa:', o: ['Pretender', 'Fingir', 'Prender', 'Prestar'], c: 1, e: 'É um falso cognato.' },
      { p: '"Library" significa:', o: ['Livraria', 'Biblioteca', 'Liberdade', 'Libra'], c: 1, e: 'Livraria é "bookstore".' },
      { p: '"Actually" significa:', o: ['Atualmente', 'Na verdade', 'Ativamente', 'Exatamente'], c: 1, e: 'Atualmente seria "nowadays".' },
      { p: 'Em "homeless", o sufixo "-less" indica:', o: ['Cheio de', 'Sem', 'Muito', 'Antes'], c: 1, e: 'Homeless = sem casa.' },
      { p: '"Parents" significa:', o: ['Parentes', 'Pais', 'Amigos', 'Vizinhos'], c: 1, e: 'Parentes seria "relatives".' }
    ],
    cartoes: [
      { f: 'Skimming', v: 'Leitura rápida: ideia geral.' },
      { f: 'Scanning', v: 'Busca de informação específica.' },
      { f: 'pretend', v: 'fingir' },
      { f: 'actually', v: 'na verdade' },
      { f: 'library', v: 'biblioteca' },
      { f: 'parents', v: 'pais' },
      { f: '-less', v: 'sem (homeless = sem casa)' }
    ]
  }
});
