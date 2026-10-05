// Português — 1º, 2º e 3º ano
window.AULAS = window.AULAS || {};
Object.assign(window.AULAS, {
  'por-classes': {
    resumo: [
      { t: 'As 10 classes', p: 'Toda palavra do português se encaixa em uma de **10 classes gramaticais**. Seis **variam** (mudam de forma) e quatro **não variam**.' },
      { t: 'As que variam', p: '**Substantivo**: dá nome (casa, Julia, amor).\n**Adjetivo**: dá característica (bonita, cansado).\n**Artigo**: acompanha o substantivo (o, a, um, uma).\n**Numeral**: número ou ordem (dois, primeiro).\n**Pronome**: substitui ou acompanha o nome (ela, meu, isso).\n**Verbo**: ação, estado ou fenômeno (correr, ser, chover).' },
      { t: 'As que não variam', p: '**Advérbio**: modifica verbo, adjetivo ou outro advérbio, mostrando circunstância (rapidamente, ontem, muito, não).\n**Preposição**: liga palavras (de, em, para, com, por).\n**Conjunção**: liga orações (e, mas, porque, quando).\n**Interjeição**: expressa emoção (Ufa! Ai! Nossa!).' },
      { t: 'A mesma palavra, classes diferentes', p: 'A classe depende do **uso** na frase. "O **jantar** está pronto" (substantivo) x "Vamos **jantar**" (verbo). "Ela é **muito** linda" (advérbio) x "Tenho **muitos** livros" (pronome).' }
    ],
    exemplo: '"Ontem (advérbio) a (artigo) Julia (substantivo) estudou (verbo) muito (advérbio) e (conjunção) ficou (verbo) feliz (adjetivo)."',
    perguntas: [
      { p: 'Em "Ela correu rapidamente", "rapidamente" é:', o: ['Adjetivo', 'Advérbio', 'Verbo', 'Preposição'], c: 1, e: 'Modifica o verbo "correu", mostrando o modo: advérbio.' },
      { p: 'Em "uma casa bonita", "bonita" é:', o: ['Substantivo', 'Advérbio', 'Adjetivo', 'Pronome'], c: 2, e: 'Dá característica ao substantivo "casa": adjetivo.' },
      { p: '"Ufa!" é um exemplo de:', o: ['Interjeição', 'Conjunção', 'Preposição', 'Advérbio'], c: 0, e: 'Expressa emoção (alívio): interjeição.' },
      { p: 'Em "Estudei, mas não passei", "mas" é:', o: ['Preposição', 'Advérbio', 'Conjunção', 'Artigo'], c: 2, e: 'Liga duas orações com ideia de oposição: conjunção.' },
      { p: 'Em "Copo de vidro", "de" é:', o: ['Preposição', 'Conjunção', 'Artigo', 'Pronome'], c: 0, e: 'Liga duas palavras: preposição.' },
      { p: 'Quantas são as classes gramaticais?', o: ['6', '8', '10', '12'], c: 2, e: 'São 10: seis variáveis e quatro invariáveis.' },
      { p: 'Qual destas classes é invariável?', o: ['Adjetivo', 'Verbo', 'Advérbio', 'Pronome'], c: 2, e: 'Advérbio, preposição, conjunção e interjeição não variam.' },
      { p: 'Em "O jantar está pronto", "jantar" é:', o: ['Verbo', 'Substantivo', 'Adjetivo', 'Advérbio'], c: 1, e: 'Com o artigo "o" na frente, virou o nome de algo: substantivo.' }
    ],
    cartoes: [
      { f: 'Substantivo', v: 'Dá nome: casa, Julia, amor.' },
      { f: 'Adjetivo', v: 'Dá característica: bonita, cansado.' },
      { f: 'Advérbio', v: 'Modifica verbo, adjetivo ou advérbio: ontem, muito, rapidamente.' },
      { f: 'Preposição', v: 'Liga palavras: de, em, para, com.' },
      { f: 'Conjunção', v: 'Liga orações: e, mas, porque.' },
      { f: 'Classes invariáveis', v: 'Advérbio, preposição, conjunção e interjeição.' },
      { f: 'Interjeição', v: 'Expressa emoção: Ufa! Nossa!' }
    ]
  },

  'por-ortografia': {
    resumo: [
      { t: 'Letra x fonema', p: '**Letra** é o que se escreve; **fonema** é o som. Nem sempre batem: "carro" tem 5 letras e 4 fonemas, porque o **rr** faz um som só.' },
      { t: 'Dígrafo e encontro consonantal', p: '**Dígrafo**: duas letras, **um som**: ch, lh, nh, rr, ss, qu e gu (antes de e/i), sc, xc.\n**Encontro consonantal**: duas consoantes com **dois sons**: pr, bl, tr (prato, bloco).' },
      { t: 'Ditongo, tritongo e hiato', p: '**Ditongo**: vogal + semivogal na mesma sílaba (pai, céu).\n**Tritongo**: semivogal + vogal + semivogal (Pa-ra-guai).\n**Hiato**: vogais em sílabas separadas (sa-ú-de, po-e-ma).' },
      { t: 'Regras de acento', p: '**Proparoxítonas**: todas têm acento (lâmpada, médico).\n**Oxítonas**: terminadas em a, e, o, em (e plurais): sofá, café, avó, também.\n**Paroxítonas**: terminadas em l, n, r, x, ps, i(s), us, um, ã(s), ão(s) e ditongo: fácil, açúcar, lápis, vírus, órfão, história.' },
      { t: 'Novo Acordo Ortográfico', p: 'Perderam o acento: os ditongos abertos **ei** e **oi** em paroxítonas (**ideia**, **heroico**), o **voo** e o **leem**. E o **trema** acabou (linguiça).' },
      { t: 'Os porquês', p: '**Por que**: pergunta ou "pelo qual" (Por que você faltou?).\n**Por quê**: no fim da frase (Faltou por quê?).\n**Porque**: resposta, explicação (Faltei porque choveu).\n**Porquê**: substantivo, vem com artigo (Não sei o porquê).' }
    ],
    exemplo: '"Chuva" tem o dígrafo CH. "Saúde" tem hiato (sa-ú-de). "Ideia" não tem mais acento.',
    perguntas: [
      { p: 'Qual palavra tem dígrafo?', o: ['Prato', 'Chuva', 'Bloco', 'Pai'], c: 1, e: 'Em "chuva", CH são duas letras com um som só.' },
      { p: 'Em "saúde" há:', o: ['Ditongo', 'Tritongo', 'Hiato', 'Dígrafo'], c: 2, e: 'Sa-ú-de: o A e o U ficam em sílabas separadas.' },
      { p: 'Qual regra é verdadeira?', o: ['Toda oxítona tem acento', 'Toda proparoxítona tem acento', 'Toda paroxítona tem acento', 'Nenhuma oxítona tem acento'], c: 1, e: 'Proparoxítonas são sempre acentuadas.' },
      { p: 'Pelo Novo Acordo, qual está escrita certo?', o: ['idéia', 'ideia', 'idèia', 'idêia'], c: 1, e: 'Ditongo aberto "ei" em paroxítona perdeu o acento: ideia.' },
      { p: 'Complete: "___ você não veio?"', o: ['Porque', 'Por quê', 'Por que', 'Porquê'], c: 2, e: 'Pergunta no começo da frase: "por que", separado e sem acento.' },
      { p: 'Complete: "Não vim ___ estava doente."', o: ['por que', 'porque', 'por quê', 'porquê'], c: 1, e: 'É uma explicação: "porque", junto e sem acento.' },
      { p: 'Quantos fonemas tem a palavra "carro"?', o: ['5', '4', '3', '6'], c: 1, e: 'São 5 letras, mas o RR faz um som só: c-a-rr-o = 4 fonemas.' }
    ],
    cartoes: [
      { f: 'Dígrafo', v: 'Duas letras, um som: ch, lh, nh, rr, ss, qu.' },
      { f: 'Hiato', v: 'Vogais em sílabas separadas: sa-ú-de.' },
      { f: 'Proparoxítonas', v: 'Todas são acentuadas.' },
      { f: '"Por que" separado sem acento', v: 'Pergunta: Por que você faltou?' },
      { f: '"Porque" junto', v: 'Resposta ou explicação.' },
      { f: '"Ideia" tem acento?', v: 'Não, desde o Novo Acordo.' }
    ]
  },

  'por-interpretacao': {
    resumo: [
      { t: 'Compreender x interpretar', p: '**Compreender** é entender o que está **escrito**. **Interpretar** é tirar conclusões a partir do texto, o que está **nas entrelinhas**. As provas pedem os dois.' },
      { t: 'Tema e ideia principal', p: 'O **tema** é o assunto geral. A **ideia principal** é o que o autor quer dizer sobre esse assunto. O título nem sempre é o tema.' },
      { t: 'Inferência', p: 'É a conclusão que você tira juntando as **pistas do texto**. Ela precisa ter base no texto, não na sua opinião.' },
      { t: 'Pressuposto e subentendido', p: '**Pressuposto**: informação garantida pelas palavras. "Pedro **parou** de fumar" pressupõe que ele fumava.\n**Subentendido**: insinuação. "Que calor, hein?" pode querer dizer "abre a janela".' },
      { t: 'Coesão e coerência', p: '**Coesão**: a ligação entre as partes (conectivos, pronomes, sinônimos).\n**Coerência**: o texto faz sentido, sem contradições.' },
      { t: 'Dicas de prova', p: 'Leia a **pergunta antes** do texto. Sublinhe palavras-chave. Cuidado com respostas que **extrapolam** (dizem mais que o texto) ou **reduzem** demais.' }
    ],
    exemplo: '"Ainda bem que dessa vez ela chegou na hora." Subentende-se que ela costuma se atrasar.',
    perguntas: [
      { p: '"Pedro parou de fumar." Essa frase pressupõe que:', o: ['Pedro nunca fumou', 'Pedro fumava antes', 'Pedro vai voltar a fumar', 'Pedro é médico'], c: 1, e: '"Parar" só é possível pra quem fazia aquilo antes.' },
      { p: 'Inferência é:', o: ['Copiar uma frase do texto', 'Dar a sua opinião', 'Uma conclusão tirada das pistas do texto', 'O título do texto'], c: 2, e: 'Inferir é concluir com base no que o texto dá.' },
      { p: 'Coesão está ligada a:', o: ['Sentido geral', 'Ligação entre as partes do texto', 'Tamanho do texto', 'Ortografia'], c: 1, e: 'Coesão é a "costura": conectivos, pronomes, retomadas.' },
      { p: '"Extrapolar" numa questão de interpretação significa:', o: ['Ir além do que o texto diz', 'Resumir bem', 'Achar o tema', 'Ler devagar'], c: 0, e: 'É afirmar coisas que o texto não sustenta. É a armadilha mais comum.' },
      { p: '"Que frio aqui, né?" pode significar "fecha a janela". Isso é um:', o: ['Pressuposto', 'Subentendido', 'Erro de coesão', 'Tema'], c: 1, e: 'É uma insinuação, depende do contexto: subentendido.' },
      { p: 'Um texto sem contradições e que faz sentido tem:', o: ['Coerência', 'Rima', 'Coesão apenas', 'Inferência'], c: 0, e: 'Coerência é o sentido lógico do texto.' }
    ],
    cartoes: [
      { f: 'Compreensão', v: 'Entender o que está escrito.' },
      { f: 'Interpretação', v: 'Tirar conclusões das entrelinhas.' },
      { f: 'Pressuposto', v: 'Informação garantida pelas palavras.' },
      { f: 'Subentendido', v: 'Insinuação que depende do contexto.' },
      { f: 'Coesão', v: 'Ligação entre as partes do texto.' },
      { f: 'Coerência', v: 'O texto faz sentido, sem contradição.' }
    ]
  },

  'por-generos': {
    resumo: [
      { t: 'Tipo x gênero', p: '**Tipos textuais** são poucos, é o "jeito" do texto: narrar, descrever, argumentar, expor e instruir (injuntivo).\n**Gêneros** são infinitos, são os textos do dia a dia: notícia, crônica, receita, propaganda...' },
      { t: 'Notícia', p: 'Relata um **fato recente**, com linguagem objetiva e imparcial. O primeiro parágrafo (o **lide**) responde: o quê, quem, quando, onde, como e por quê.' },
      { t: 'Crônica', p: 'Texto curto sobre o **cotidiano**, com linguagem leve, às vezes com humor ou reflexão.' },
      { t: 'Artigo de opinião e editorial', p: '**Artigo de opinião**: **assinado** por alguém, defende um ponto de vista com argumentos.\n**Editorial**: a opinião do **próprio jornal**, sem assinatura.' },
      { t: 'Charge e tirinha', p: '**Charge**: desenho com humor crítico sobre um **fato atual**.\n**Tirinha**: história curta em quadrinhos, com personagens fixos.' },
      { t: 'Outros', p: '**Resenha**: resume e **avalia** uma obra.\n**Propaganda**: quer **convencer** a comprar ou aderir.\n**Receita e manual**: **instruem** (injuntivos), com verbos no imperativo.' }
    ],
    exemplo: 'Uma receita de bolo é do gênero "receita" e do tipo injuntivo: "Misture os ovos, adicione a farinha..."',
    perguntas: [
      { p: 'Qual é um TIPO textual (e não gênero)?', o: ['Notícia', 'Narração', 'Crônica', 'Receita'], c: 1, e: 'Tipos são poucos: narração, descrição, dissertação, exposição e injunção.' },
      { p: 'O texto que relata um fato recente de forma objetiva é a:', o: ['Crônica', 'Notícia', 'Charge', 'Resenha'], c: 1, e: 'A notícia informa fatos atuais com imparcialidade.' },
      { p: 'Qual gênero mostra a opinião do próprio jornal, sem assinatura?', o: ['Artigo de opinião', 'Editorial', 'Crônica', 'Reportagem'], c: 1, e: 'O editorial representa a posição do veículo.' },
      { p: 'Um desenho com humor crítico sobre um fato atual é uma:', o: ['Tirinha', 'Charge', 'Propaganda', 'Crônica'], c: 1, e: 'A charge comenta fatos do momento com crítica e humor.' },
      { p: 'Uma receita de bolo é um texto do tipo:', o: ['Narrativo', 'Descritivo', 'Injuntivo', 'Argumentativo'], c: 2, e: 'Ela dá instruções, com verbos no imperativo: injuntivo.' },
      { p: 'O texto que resume e avalia um filme ou livro é a:', o: ['Resenha', 'Notícia', 'Editorial', 'Biografia'], c: 0, e: 'A resenha descreve a obra e dá uma opinião sobre ela.' },
      { p: 'A crônica costuma falar de:', o: ['Leis', 'Fatos do cotidiano', 'Instruções', 'Fórmulas'], c: 1, e: 'É um texto leve sobre situações do dia a dia.' }
    ],
    cartoes: [
      { f: 'Tipos textuais', v: 'Narração, descrição, dissertação, exposição e injunção.' },
      { f: 'Lide da notícia', v: 'Responde: o quê, quem, quando, onde, como e por quê.' },
      { f: 'Editorial', v: 'Opinião do jornal, sem assinatura.' },
      { f: 'Artigo de opinião', v: 'Assinado; defende um ponto de vista.' },
      { f: 'Charge', v: 'Humor crítico sobre fato atual.' },
      { f: 'Texto injuntivo', v: 'Dá instruções: receita, manual.' }
    ]
  },

  'por-verbos': {
    resumo: [
      { t: 'O que o verbo indica', p: 'Ação (correr), estado (ser, estar) ou fenômeno da natureza (chover). Ele muda de forma pra indicar **pessoa, número, tempo e modo**.' },
      { t: 'Conjugações', p: '**1ª**: -ar (cantar). **2ª**: -er (vender). **3ª**: -ir (partir).\nO verbo **pôr** (e derivados, como compor) é da **2ª conjugação**.' },
      { t: 'Modos', p: '**Indicativo**: certeza (eu estudo).\n**Subjuntivo**: dúvida, desejo, hipótese (se eu estudasse, que eu estude).\n**Imperativo**: ordem, pedido (estude!).' },
      { t: 'Tempos do indicativo', p: '**Presente**: canto. **Pretérito perfeito**: cantei (ação acabada).\n**Imperfeito**: cantava (ação habitual no passado). **Mais-que-perfeito**: cantara (passado anterior a outro passado).\n**Futuro do presente**: cantarei. **Futuro do pretérito**: cantaria.' },
      { t: 'Formas nominais', p: '**Infinitivo**: cantar. **Gerúndio**: cantando. **Particípio**: cantado.' },
      { t: 'Vozes', p: '**Ativa**: o sujeito faz (A avó fez o bolo).\n**Passiva analítica**: o sujeito sofre, com ser + particípio (O bolo foi feito pela avó).\n**Passiva sintética**: com "se" (Vendem-se casas).\n**Reflexiva**: faz e sofre (Ela se penteou).' }
    ],
    exemplo: '"Se eu estudasse mais, passaria" → estudasse = pretérito imperfeito do subjuntivo; passaria = futuro do pretérito.',
    perguntas: [
      { p: 'Em "Se eu estudasse", o verbo está no modo:', o: ['Indicativo', 'Subjuntivo', 'Imperativo', 'Infinitivo'], c: 1, e: 'Expressa hipótese: subjuntivo (pretérito imperfeito).' },
      { p: '"Estude!" está no modo:', o: ['Indicativo', 'Subjuntivo', 'Imperativo', 'Gerúndio'], c: 2, e: 'É uma ordem ou conselho: imperativo.' },
      { p: '"Cantando" é:', o: ['Infinitivo', 'Gerúndio', 'Particípio', 'Futuro'], c: 1, e: 'Terminação -ndo: gerúndio.' },
      { p: 'O verbo "pôr" pertence a qual conjugação?', o: ['1ª', '2ª', '3ª', 'Nenhuma'], c: 1, e: 'Vem do antigo "poer": é da 2ª conjugação.' },
      { p: '"O bolo foi feito pela avó" está na voz:', o: ['Ativa', 'Passiva analítica', 'Passiva sintética', 'Reflexiva'], c: 1, e: 'Ser + particípio, e o sujeito (o bolo) sofre a ação: passiva analítica.' },
      { p: '"Eu cantaria" está no:', o: ['Futuro do presente', 'Futuro do pretérito', 'Pretérito perfeito', 'Presente'], c: 1, e: 'Terminação -ria: futuro do pretérito.' },
      { p: '"Vendem-se casas" está na voz:', o: ['Ativa', 'Passiva sintética', 'Reflexiva', 'Passiva analítica'], c: 1, e: 'Verbo + "se" com sentido passivo (casas são vendidas): passiva sintética.' },
      { p: '"Quando criança, eu brincava na rua." O verbo está no:', o: ['Pretérito perfeito', 'Pretérito imperfeito', 'Mais-que-perfeito', 'Futuro'], c: 1, e: 'Ação habitual no passado: pretérito imperfeito.' }
    ],
    cartoes: [
      { f: 'Modo subjuntivo', v: 'Dúvida, desejo, hipótese: se eu estudasse.' },
      { f: 'Modo imperativo', v: 'Ordem ou pedido: estude!' },
      { f: 'Pretérito imperfeito', v: 'Ação habitual no passado: cantava.' },
      { f: 'Futuro do pretérito', v: 'cantaria' },
      { f: 'Formas nominais', v: 'Infinitivo, gerúndio e particípio.' },
      { f: 'Voz passiva analítica', v: 'Ser + particípio: foi feito.' },
      { f: '"Pôr" é de qual conjugação?', v: '2ª' }
    ]
  },

  'por-termos': {
    resumo: [
      { t: 'Sujeito', p: 'É **de quem** se fala. Tipos:\n**Simples**: um núcleo (A **menina** saiu).\n**Composto**: dois ou mais (**Ana** e **Pedro** saíram).\n**Oculto**: dá pra saber pela terminação (Estudamos = nós).\n**Indeterminado**: não se sabe quem (Falaram de você).' },
      { t: 'Oração sem sujeito', p: 'Acontece com **fenômenos da natureza** (Choveu muito), **haver** no sentido de existir (Havia dez pessoas) e **fazer** indicando tempo (Faz dois anos). Esses verbos ficam **no singular**.' },
      { t: 'Predicado', p: 'É **o que se diz** do sujeito.\n**Verbal**: núcleo é um verbo de ação (Ela correu).\n**Nominal**: verbo de ligação + característica (Ela **está cansada**).\n**Verbo-nominal**: ação + característica (Ela chegou **cansada**).' },
      { t: 'Verbos de ligação', p: 'Ser, estar, parecer, ficar, permanecer, continuar. Eles ligam o sujeito a uma característica, o **predicativo do sujeito**.' },
      { t: 'Objetos', p: '**Objeto direto**: completa o verbo **sem preposição** (Comprei **um livro**).\n**Objeto indireto**: completa **com preposição** (Gosto **de chocolate**).' },
      { t: 'Outros termos', p: '**Adjunto adverbial**: circunstância (Saí **ontem**).\n**Adjunto adnominal**: acompanha o substantivo (**O meu** livro **novo**).\n**Aposto**: explica um termo (Pedro, **meu primo**, chegou).\n**Vocativo**: chamamento (**Julia**, vem cá!).' }
    ],
    exemplo: '"Ontem, a Julia comprou um livro de Química." Sujeito: a Julia. Objeto direto: um livro de Química. Adjunto adverbial: ontem.',
    perguntas: [
      { p: '"Choveu muito ontem." O sujeito é:', o: ['Simples', 'Oculto', 'Indeterminado', 'Não há sujeito'], c: 3, e: 'Fenômeno da natureza: oração sem sujeito.' },
      { p: '"Joana e Pedro saíram cedo." O sujeito é:', o: ['Simples', 'Composto', 'Oculto', 'Indeterminado'], c: 1, e: 'Dois núcleos (Joana e Pedro): composto.' },
      { p: '"Estudamos a tarde inteira." O sujeito é:', o: ['Oculto (nós)', 'Indeterminado', 'Inexistente', 'Composto'], c: 0, e: 'A terminação -mos mostra que é "nós": sujeito oculto.' },
      { p: '"Ela está cansada." O predicado é:', o: ['Verbal', 'Nominal', 'Verbo-nominal', 'Não tem'], c: 1, e: 'Verbo de ligação (está) + característica (cansada): nominal.' },
      { p: 'Em "Comprei um livro", "um livro" é:', o: ['Objeto direto', 'Objeto indireto', 'Sujeito', 'Adjunto adverbial'], c: 0, e: 'Completa o verbo sem preposição: objeto direto.' },
      { p: 'Em "Gosto de chocolate", "de chocolate" é:', o: ['Objeto direto', 'Objeto indireto', 'Adjunto adnominal', 'Aposto'], c: 1, e: 'Completa o verbo com preposição (de): objeto indireto.' },
      { p: 'Em "Maria, venha cá!", "Maria" é:', o: ['Sujeito', 'Aposto', 'Vocativo', 'Objeto'], c: 2, e: 'É um chamamento: vocativo.' },
      { p: 'Qual está de acordo com a norma-padrão?', o: ['Haviam muitas pessoas', 'Havia muitas pessoas', 'Houveram problemas', 'Fazem dois anos'], c: 1, e: '"Haver" no sentido de existir não tem sujeito e fica no singular.' }
    ],
    cartoes: [
      { f: 'Sujeito oculto', v: 'Descoberto pela terminação do verbo: estudamos (nós).' },
      { f: 'Oração sem sujeito', v: 'Fenômenos da natureza, haver = existir, fazer (tempo).' },
      { f: 'Predicado nominal', v: 'Verbo de ligação + característica.' },
      { f: 'Objeto direto', v: 'Completa o verbo sem preposição.' },
      { f: 'Objeto indireto', v: 'Completa o verbo com preposição.' },
      { f: 'Vocativo', v: 'Chamamento: Julia, vem cá!' },
      { f: 'Aposto', v: 'Explica um termo: Pedro, meu primo, chegou.' }
    ]
  },

  'por-concordancia': {
    resumo: [
      { t: 'Concordância verbal', p: 'O verbo concorda com o **sujeito** em pessoa e número, mesmo que o sujeito venha **depois**: "Chegaram as encomendas."' },
      { t: 'Casos especiais do verbo', p: '**Sujeito composto**: plural (Ana e Pedro saíram). Se vier depois do verbo, pode concordar com o mais próximo.\n**Haver = existir**: singular (Houve muitos problemas).\n**Fazer (tempo)**: singular (Faz dois anos).\n**"A maioria de..."**: singular ou plural (A maioria dos alunos saiu/saíram).' },
      { t: 'Concordância nominal', p: 'O adjetivo concorda com o **substantivo** em gênero e número: blusas **novas**, menino **cansado**.' },
      { t: 'Palavras traiçoeiras', p: '**Meio**: como advérbio ("um pouco") **não muda**: Ela está **meio** cansada. Como numeral muda: **meia** hora.\n**Anexo, obrigado, mesmo**: concordam: Seguem **anexas** as fotos. Ela disse "**obrigada**".\n**Bastante**: adjetivo varia (bastantes livros); advérbio não (estudou bastante).' },
      { t: 'É proibido / É proibida', p: 'Sem artigo, fica no masculino: "É **proibido** entrada". Com artigo, concorda: "É **proibida a** entrada".' }
    ],
    exemplo: '"Faz três meses que houve aquelas provas, e ela ficou meio nervosa." Faz e houve no singular, meio sem variar.',
    perguntas: [
      { p: 'Qual frase está correta?', o: ['Fazem dois anos que mudei', 'Faz dois anos que mudei', 'Fizeram dois anos', 'Fazemos dois anos'], c: 1, e: '"Fazer" indicando tempo não tem sujeito e fica no singular.' },
      { p: 'Qual frase está correta?', o: ['Houveram muitos problemas', 'Houve muitos problemas', 'Haviam problemas', 'Houveram problema'], c: 1, e: '"Haver" no sentido de existir fica no singular.' },
      { p: 'Complete: "Ela ficou ___ triste."', o: ['meia', 'meio', 'meias', 'meios'], c: 1, e: 'Significa "um pouco": é advérbio e não varia.' },
      { p: 'Complete: "Seguem ___ as fotos."', o: ['anexo', 'anexas', 'anexa', 'anexos'], c: 1, e: '"Anexo" concorda com o substantivo: as fotos anexas.' },
      { p: 'Qual frase está correta?', o: ['É proibida entrada', 'É proibido a entrada', 'É proibida a entrada', 'São proibido a entrada'], c: 2, e: 'Com o artigo "a", o adjetivo concorda: proibida a entrada.' },
      { p: 'Complete: "___ as encomendas ontem."', o: ['Chegou', 'Chegaram', 'Chegamos', 'Chega'], c: 1, e: 'O sujeito "as encomendas" é plural, mesmo vindo depois do verbo.' },
      { p: 'Uma moça agradece dizendo:', o: ['Obrigado', 'Obrigada', 'Obrigados', 'Tanto faz pela norma'], c: 1, e: '"Obrigado" concorda com quem fala: a moça diz "obrigada".' }
    ],
    cartoes: [
      { f: 'Verbo concorda com...', v: 'O sujeito, mesmo se vier depois.' },
      { f: 'Haver = existir', v: 'Singular: houve problemas.' },
      { f: 'Fazer (tempo)', v: 'Singular: faz dois anos.' },
      { f: '"Meio" = um pouco', v: 'Não varia: meio cansada.' },
      { f: 'Anexo', v: 'Concorda: fotos anexas.' },
      { f: 'É proibido x é proibida a', v: 'Sem artigo: proibido. Com artigo: proibida a.' }
    ]
  },

  'por-regencia': {
    resumo: [
      { t: 'Regência', p: 'É a relação entre um verbo (ou nome) e seu complemento: se pede **preposição** e qual.' },
      { t: 'Verbos que confundem', p: '**Assistir** (ver) pede "a": assisti **ao** filme.\n**Obedecer** pede "a": obedeça **aos** pais.\n**Preferir** algo **a** outra coisa (sem "mais" e sem "do que"): prefiro chá **a** café.\n**Ir / chegar** pedem "a": vou **ao** cinema, cheguei **à** escola.\n**Namorar** não pede preposição: namoro **alguém**.\n**Implicar** (acarretar) também não: isso implica **mudanças**.' },
      { t: 'Crase', p: 'Crase é a junção da preposição **a** com o artigo **a**: a + a = **à**. Só acontece antes de palavra **feminina** quando o termo anterior pede "a".' },
      { t: 'O truque do masculino', p: 'Troque a palavra feminina por uma masculina. Se virar **"ao"**, tem crase. Vou **à** escola → vou **ao** colégio. Logo, crase!' },
      { t: 'Quando NÃO tem crase', p: 'Antes de **masculino** (a pé), de **verbo** (a partir), de **pronome pessoal** (a ela), entre **palavras repetidas** (cara a cara), e antes de **casa** (lar) e **terra** (chão) sem especificar.' },
      { t: 'Quando SEMPRE tem crase', p: '**Horas exatas**: às 8h. **Locuções femininas**: à noite, às vezes, à toa, à vista.' }
    ],
    exemplo: '"Fui à farmácia às 19h e voltei a pé." Farmácia → ao mercado (crase); horas exatas (crase); "pé" é masculino (sem crase).',
    perguntas: [
      { p: 'Qual frase segue a norma-padrão?', o: ['Assisti o filme', 'Assisti ao filme', 'Assisti no filme', 'Assisti do filme'], c: 1, e: '"Assistir" no sentido de ver pede a preposição "a".' },
      { p: 'Qual frase está certa?', o: ['Prefiro mais chá do que café', 'Prefiro chá a café', 'Prefiro chá do que café', 'Prefiro mais chá que café'], c: 1, e: 'Prefere-se algo A outra coisa, sem "mais" e sem "do que".' },
      { p: 'Em qual frase deve haver crase?', o: ['Fui a pé', 'Vou a escola', 'Comecei a estudar', 'Falei a ela'], c: 1, e: 'Vou à escola → vou ao colégio. Nas outras: masculino, verbo e pronome.' },
      { p: 'Complete: "A reunião será ___ 15h."', o: ['a', 'as', 'às', 'à'], c: 2, e: 'Horas exatas levam crase: às 15h.' },
      { p: 'Qual frase NÃO tem crase?', o: ['Saí à noite', 'Fiquei frente a frente com ela', 'Fui à praia', 'Às vezes estudo'], c: 1, e: 'Entre palavras repetidas (frente a frente) não há crase.' },
      { p: 'Qual frase segue a norma-padrão?', o: ['Vou no cinema', 'Vou ao cinema', 'Vou pro cinema no sábado', 'Vou em o cinema'], c: 1, e: 'Na norma-padrão, "ir" pede a preposição "a": vou ao cinema.' },
      { p: 'Qual está correta?', o: ['Ela namora com o Pedro', 'Ela namora o Pedro', 'Ela namora ao Pedro', 'Ela namora do Pedro'], c: 1, e: '"Namorar" não pede preposição na norma-padrão.' }
    ],
    cartoes: [
      { f: 'Assistir (ver)', v: 'Pede "a": assisti ao filme.' },
      { f: 'Preferir', v: 'Prefiro X a Y (sem "mais" e sem "do que").' },
      { f: 'O que é crase?', v: 'Preposição a + artigo a = à.' },
      { f: 'Truque da crase', v: 'Troca por masculino: se virar "ao", tem crase.' },
      { f: 'Crase antes de horas', v: 'Sim, nas horas exatas: às 8h.' },
      { f: 'Crase antes de verbo', v: 'Nunca: comecei a estudar.' }
    ]
  },

  'por-periodo': {
    resumo: [
      { t: 'Período simples e composto', p: 'Cada verbo forma uma **oração**. Uma oração = período simples. Duas ou mais = **período composto**, que pode ser por **coordenação** ou **subordinação**.' },
      { t: 'Coordenação', p: 'Orações **independentes**, cada uma tem sentido sozinha:\n**Aditivas**: e, nem.\n**Adversativas**: mas, porém, contudo, todavia, entretanto.\n**Alternativas**: ou... ou.\n**Conclusivas**: logo, portanto, então.\n**Explicativas**: porque, pois (antes do verbo).' },
      { t: 'Subordinação', p: 'Uma oração **depende** da outra (a principal). Podem ser **substantivas** (fazem papel de substantivo: "Quero **que você venha**"), **adjetivas** ou **adverbiais**.' },
      { t: 'Adjetivas', p: 'Começam com pronome relativo (que, o qual, onde).\n**Restritiva** (sem vírgula): limita. "Os alunos que estudaram passaram" (só esses).\n**Explicativa** (com vírgula): generaliza. "Os alunos, que estudaram, passaram" (todos estudaram).' },
      { t: 'Adverbiais', p: '**Causais**: porque, já que, como.\n**Concessivas**: embora, ainda que, mesmo que.\n**Condicionais**: se, caso.\n**Temporais**: quando, assim que.\n**Finais**: para que.\n**Consecutivas**: tão... que.\n**Conformativas**: conforme.\n**Proporcionais**: à medida que.' }
    ],
    exemplo: '"Embora estivesse cansada, a Julia estudou, pois a prova era no dia seguinte." Embora = concessiva; pois = explicativa.',
    perguntas: [
      { p: 'Em "Estudei, mas não passei", a oração com "mas" é:', o: ['Aditiva', 'Adversativa', 'Conclusiva', 'Explicativa'], c: 1, e: '"Mas" indica oposição: adversativa.' },
      { p: 'Em "Estudou muito, portanto passou", "portanto" indica:', o: ['Conclusão', 'Oposição', 'Causa', 'Tempo'], c: 0, e: '"Portanto" introduz uma conclusão.' },
      { p: '"Embora chovesse, saímos." A oração com "embora" é:', o: ['Causal', 'Concessiva', 'Condicional', 'Temporal'], c: 1, e: 'Indica um fato contrário que não impede o outro: concessiva.' },
      { p: '"Se você estudar, vai passar." A oração com "se" é:', o: ['Condicional', 'Final', 'Causal', 'Concessiva'], c: 0, e: '"Se" indica condição.' },
      { p: '"Os alunos, que estudaram, passaram." A oração adjetiva é:', o: ['Restritiva', 'Explicativa', 'Substantiva', 'Adverbial'], c: 1, e: 'Entre vírgulas, ela vale pra todos: explicativa.' },
      { p: '"Falou tão alto que todos acordaram." A segunda oração é:', o: ['Consecutiva', 'Comparativa', 'Final', 'Concessiva'], c: 0, e: '"Tão... que" mostra consequência: consecutiva.' },
      { p: 'Orações coordenadas são:', o: ['Dependentes', 'Independentes', 'Sempre adverbiais', 'Sem verbo'], c: 1, e: 'Na coordenação, cada oração tem sentido sozinha.' }
    ],
    cartoes: [
      { f: 'Adversativas', v: 'mas, porém, contudo, todavia, entretanto' },
      { f: 'Conclusivas', v: 'logo, portanto, então' },
      { f: 'Concessivas', v: 'embora, ainda que, mesmo que' },
      { f: 'Adjetiva restritiva', v: 'Sem vírgula: limita o sentido.' },
      { f: 'Adjetiva explicativa', v: 'Com vírgula: vale pra todos.' },
      { f: 'Consecutiva', v: 'tão... que (consequência)' },
      { f: 'Coordenação x subordinação', v: 'Independentes x dependentes.' }
    ]
  },

  'por-pontuacao': {
    resumo: [
      { t: 'A regra de ouro da vírgula', p: '**Não** se separa o **sujeito do verbo** nem o **verbo do complemento**. "Os alunos, foram à escola" está errado.' },
      { t: 'Quando usar vírgula', p: 'Pra separar **itens** de uma lista; isolar o **vocativo** (Julia, vem cá); isolar o **aposto** (Pedro, meu primo, chegou); antes de **mas, porém, pois**; isolar **orações explicativas**; e marcar **adjunto adverbial deslocado** (Ontem, choveu).' },
      { t: 'Ponto e vírgula e dois-pontos', p: '**Ponto e vírgula**: separa partes longas ou itens que já têm vírgula.\n**Dois-pontos**: antes de enumeração, citação ou explicação ("Comprei: arroz, feijão e ovos").' },
      { t: 'Outros sinais', p: '**Travessão**: fala de personagem ou destaque.\n**Aspas**: citação, ironia ou palavra estrangeira.\n**Reticências**: pausa, dúvida, frase incompleta.\n**Exclamação**: emoção. **Interrogação**: pergunta direta.' }
    ],
    exemplo: '"Julia, minha namorada, estuda Química; eu, Física." Vocativo? Não: "minha namorada" é aposto. O ponto e vírgula separa as duas partes.',
    perguntas: [
      { p: 'Qual frase tem erro de pontuação?', o: ['Os alunos foram à escola.', 'Os alunos, foram à escola.', 'Ontem, os alunos foram à escola.', 'Os alunos foram, ontem, à escola.'], c: 1, e: 'Não se separa o sujeito (os alunos) do verbo (foram).' },
      { p: 'Em "Julia, venha aqui", a vírgula isola o:', o: ['Sujeito', 'Aposto', 'Vocativo', 'Objeto'], c: 2, e: 'É um chamamento: vocativo, sempre com vírgula.' },
      { p: 'Em "Pedro, meu primo, chegou", as vírgulas isolam o:', o: ['Vocativo', 'Aposto', 'Sujeito', 'Predicado'], c: 1, e: '"Meu primo" explica quem é Pedro: aposto.' },
      { p: 'O sinal usado antes de uma enumeração é:', o: ['Ponto e vírgula', 'Dois-pontos', 'Travessão', 'Reticências'], c: 1, e: 'Dois-pontos anunciam a lista: "Comprei: arroz, feijão".' },
      { p: 'Qual frase está bem pontuada?', o: ['Estudei muito mas, não passei.', 'Estudei muito, mas não passei.', 'Estudei, muito mas não passei.', 'Estudei muito mas não, passei.'], c: 1, e: 'A vírgula vem antes do "mas".' },
      { p: 'O travessão em diálogos indica:', o: ['Fim do texto', 'Fala de personagem', 'Pergunta', 'Citação de livro'], c: 1, e: 'Em narrativas, o travessão marca a fala.' }
    ],
    cartoes: [
      { f: 'Vírgula proibida', v: 'Entre sujeito e verbo, e entre verbo e complemento.' },
      { f: 'Vocativo', v: 'Sempre isolado por vírgula.' },
      { f: 'Antes de "mas"', v: 'Vírgula.' },
      { f: 'Dois-pontos', v: 'Antes de enumeração, citação ou explicação.' },
      { f: 'Ponto e vírgula', v: 'Separa partes longas ou itens com vírgula.' },
      { f: 'Reticências', v: 'Pausa, dúvida ou frase incompleta.' }
    ]
  },

  'por-colocacao': {
    resumo: [
      { t: 'Quais pronomes', p: 'É sobre a posição dos **pronomes oblíquos átonos**: me, te, se, o, a, lhe, nos, vos.' },
      { t: 'Próclise (antes do verbo)', p: 'Obrigatória quando há uma **palavra atrativa** antes do verbo: negação (não, nunca), advérbios, pronomes relativos (que), indefinidos (alguém, tudo), demonstrativos e conjunções subordinativas.\nEx.: "**Não me** ligue." "Alguém **te** chamou."' },
      { t: 'Ênclise (depois do verbo)', p: 'Usada no **início da frase** e no **imperativo afirmativo**, quando não há palavra atrativa.\nEx.: "**Empreste-me** o livro." "**Disseram-me** a verdade."' },
      { t: 'Mesóclise (no meio do verbo)', p: 'Só com **futuro do presente** e **futuro do pretérito**, sem palavra atrativa: "**Dar-te-ei** um presente." "**Far-se-ia** a festa."' },
      { t: 'Norma x fala', p: 'Na norma-padrão **não se começa frase com pronome oblíquo** ("Me empresta" é da fala informal). Em textos formais, como a redação, use a ênclise: "Empresta-me".' }
    ],
    exemplo: '"Não te esquecerei" (próclise, por causa do não). Sem o "não": "Esquecer-te-ei" (mesóclise).',
    perguntas: [
      { p: 'Na norma-padrão, qual está correta?', o: ['Me empresta o livro.', 'Empresta-me o livro.', 'Empresta o livro me.', 'Me-empresta o livro.'], c: 1, e: 'Não se começa frase com pronome oblíquo: ênclise.' },
      { p: 'Qual está correta?', o: ['Não chame-me.', 'Não me chame.', 'Não chame me.', 'Chame-me não.'], c: 1, e: 'A negação "não" atrai o pronome: próclise.' },
      { p: '"Dar-te-ei um presente" é um caso de:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Erro'], c: 2, e: 'Pronome no meio do verbo no futuro: mesóclise.' },
      { p: 'A mesóclise só acontece com o:', o: ['Presente', 'Pretérito perfeito', 'Futuro do presente e do pretérito', 'Imperativo'], c: 2, e: 'Só nos dois futuros, e sem palavra atrativa.' },
      { p: 'Qual está correta?', o: ['Alguém chamou-te.', 'Alguém te chamou.', 'Alguém chamou te.', 'Te alguém chamou.'], c: 1, e: '"Alguém" (pronome indefinido) atrai o pronome: próclise.' },
      { p: 'Pronomes oblíquos átonos são:', o: ['eu, tu, ele', 'me, te, se, o, a, lhe', 'meu, teu, seu', 'mim, ti, si'], c: 1, e: 'São os oblíquos átonos que mudam de posição.' }
    ],
    cartoes: [
      { f: 'Próclise', v: 'Pronome antes do verbo: não me ligue.' },
      { f: 'Ênclise', v: 'Pronome depois: empresta-me.' },
      { f: 'Mesóclise', v: 'No meio, só nos futuros: dar-te-ei.' },
      { f: 'Palavras atrativas', v: 'Negação, advérbios, que, alguém, conjunções subordinativas.' },
      { f: 'Começar frase com "me"?', v: 'Não na norma-padrão.' }
    ]
  },

  'por-variacao': {
    resumo: [
      { t: 'A língua muda', p: 'Não existe um único jeito de falar português. A língua **varia** conforme o lugar, o grupo, a situação e a época. O que existe é **adequação**: cada jeito serve pra uma situação.' },
      { t: 'Variação regional (diatópica)', p: 'Muda com o **lugar**. Ex.: mandioca, aipim e macaxeira são a mesma coisa. Os sotaques também.' },
      { t: 'Variação social (diastrática)', p: 'Muda com o **grupo social**: idade, profissão, escolaridade. Inclui **gírias** (dos jovens) e **jargões** (de profissões, como o "juridiquês").' },
      { t: 'Variação situacional (diafásica)', p: 'Muda com a **situação**. Ninguém fala numa entrevista de emprego como fala com os amigos. É o **registro formal x informal**.' },
      { t: 'Variação histórica (diacrônica)', p: 'Muda com o **tempo**. "Vossa mercê" virou "vosmecê", depois "você", e hoje "cê".' },
      { t: 'Preconceito linguístico', p: 'É julgar alguém pelo jeito que fala. A **norma-padrão** é importante em situações formais (como a redação do ENEM), mas as outras variedades **não são erradas**, são diferentes.' }
    ],
    exemplo: 'Um nordestino diz "macaxeira", um carioca diz "aipim" e um paulista diz "mandioca": variação regional.',
    perguntas: [
      { p: '"Mandioca", "aipim" e "macaxeira" são exemplo de variação:', o: ['Histórica', 'Regional', 'Situacional', 'Social'], c: 1, e: 'A palavra muda conforme o lugar: regional.' },
      { p: 'A transformação de "vossa mercê" em "você" é variação:', o: ['Regional', 'Social', 'Histórica', 'Situacional'], c: 2, e: 'Aconteceu ao longo do tempo: histórica (diacrônica).' },
      { p: 'Falar de um jeito numa entrevista e de outro com amigos é variação:', o: ['Situacional', 'Regional', 'Histórica', 'Errada'], c: 0, e: 'Depende da situação: formal x informal.' },
      { p: 'Gírias de jovens e jargões de médicos são variação:', o: ['Histórica', 'Social', 'Regional', 'Geográfica'], c: 1, e: 'Dependem do grupo social: variação social (diastrática).' },
      { p: 'Julgar alguém pelo jeito que fala é:', o: ['Norma-padrão', 'Preconceito linguístico', 'Variação histórica', 'Adequação'], c: 1, e: 'Todas as variedades são legítimas; julgar é preconceito.' },
      { p: 'Segundo a ideia de adequação, a norma-padrão deve ser usada:', o: ['Sempre, em qualquer lugar', 'Em situações formais', 'Nunca', 'Só na fala'], c: 1, e: 'Cada variedade combina com uma situação. A formal pede a norma-padrão.' }
    ],
    cartoes: [
      { f: 'Variação regional', v: 'Muda com o lugar: aipim x macaxeira.' },
      { f: 'Variação social', v: 'Muda com o grupo: gírias, jargões.' },
      { f: 'Variação situacional', v: 'Formal x informal.' },
      { f: 'Variação histórica', v: 'Muda com o tempo: vossa mercê → você.' },
      { f: 'Preconceito linguístico', v: 'Julgar alguém pelo jeito que fala.' },
      { f: 'Adequação', v: 'Usar a variedade certa pra cada situação.' }
    ]
  }
});
