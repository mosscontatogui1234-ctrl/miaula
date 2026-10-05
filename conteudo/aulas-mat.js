// Matemática — 2º e 3º ano
window.AULAS = window.AULAS || {};
Object.assign(window.AULAS, {
  'mat-trigociclo': {
    resumo: [
      { t: 'Graus e radianos', p: 'Ângulos também se medem em **radianos**. A regra de ouro: **π rad = 180°**.\nPra converter graus em radianos, multiplica por π/180. Ex.: 60° = **π/3**.' },
      { t: 'O ciclo trigonométrico', p: 'É uma circunferência de **raio 1** com centro na origem. Os ângulos são medidos a partir do eixo x, girando no **sentido anti-horário**.' },
      { t: 'Onde ficam seno e cosseno', p: 'Pra um ângulo no ciclo, o **cosseno** é a coordenada **x** do ponto e o **seno** é a coordenada **y**. Por isso os dois sempre ficam entre −1 e 1.' },
      { t: 'Sinais por quadrante', p: '**1º**: seno + e cosseno +\n**2º**: seno + e cosseno −\n**3º**: seno − e cosseno −\n**4º**: seno − e cosseno +' },
      { t: 'Relação fundamental', p: '**sen²x + cos²x = 1**, sempre.\nE a tangente: **tan x = sen x / cos x**.' },
      { t: 'Redução ao 1º quadrante', p: 'Ângulos maiores "copiam" um ângulo do 1º quadrante e só mudam o sinal. Ex.: sen 150° = sen 30° = 1/2, e cos 120° = −cos 60° = −1/2.' }
    ],
    exemplo: 'sen x = 3/5 no 1º quadrante → cos²x = 1 − 9/25 = 16/25 → cos x = 4/5.',
    perguntas: [
      { p: 'Quanto é 60° em radianos?', o: ['π/6', 'π/3', 'π/2', '2π/3'], c: 1, e: '60 · π/180 = π/3.' },
      { p: 'Quanto é 3π/4 rad em graus?', o: ['45°', '120°', '135°', '270°'], c: 2, e: 'Troca π por 180°: 3 · 180 / 4 = 135°.' },
      { p: 'Quanto vale sen 90°?', o: ['0', '1', '−1', '1/2'], c: 1, e: 'Em 90° o ponto fica no topo do ciclo, (0, 1). O seno é o y: 1.' },
      { p: 'Quanto vale cos 180°?', o: ['1', '0', '−1', '1/2'], c: 2, e: 'Em 180° o ponto fica em (−1, 0). O cosseno é o x: −1.' },
      { p: 'Em qual quadrante o seno é positivo e o cosseno negativo?', o: ['1º', '2º', '3º', '4º'], c: 1, e: 'No 2º quadrante o y é positivo e o x é negativo.' },
      { p: 'Se sen x = 3/5 e x está no 1º quadrante, quanto vale cos x?', o: ['2/5', '4/5', '5/3', '3/4'], c: 1, e: 'cos²x = 1 − (3/5)² = 16/25. No 1º quadrante o cosseno é positivo: 4/5.' },
      { p: 'Quanto vale sen 150°?', o: ['−1/2', '√3/2', '1/2', '−√3/2'], c: 2, e: '150° fica no 2º quadrante e "copia" o 30°. Lá o seno é positivo: 1/2.' },
      { p: 'Quanto vale cos 120°?', o: ['1/2', '−1/2', '√3/2', '−√3/2'], c: 1, e: '120° copia o 60°, mas está no 2º quadrante, onde o cosseno é negativo: −1/2.' }
    ],
    cartoes: [
      { f: 'π rad equivale a...', v: '180°' },
      { f: 'Seno no ciclo', v: 'A coordenada y do ponto.' },
      { f: 'Cosseno no ciclo', v: 'A coordenada x do ponto.' },
      { f: 'Relação fundamental', v: 'sen²x + cos²x = 1' },
      { f: 'Sinais no 3º quadrante', v: 'Seno − e cosseno −.' },
      { f: 'cos 0°', v: '1' },
      { f: 'sen 270°', v: '−1' }
    ]
  },

  'mat-matrizes': {
    resumo: [
      { t: 'O que é matriz', p: 'É uma tabela de números em **linhas e colunas**. Uma matriz **m × n** tem m linhas e n colunas. O elemento da linha i e coluna j se chama **aᵢⱼ**.' },
      { t: 'Tipos importantes', p: '**Quadrada**: linhas = colunas.\n**Identidade (I)**: 1 na diagonal principal e 0 no resto.\n**Nula**: tudo zero.\n**Transposta (Aᵗ)**: troca linhas por colunas.' },
      { t: 'Soma', p: 'Só dá pra somar matrizes do **mesmo tamanho**. Soma cada elemento com o que está na mesma posição.' },
      { t: 'Multiplicação', p: 'A (m × n) vezes B (n × p) só funciona se as colunas de A forem iguais às linhas de B. O resultado é **m × p**, e cada elemento é **linha de A vezes coluna de B**. Atenção: A·B normalmente é diferente de B·A.' },
      { t: 'Determinante', p: 'É um número que sai de uma matriz quadrada.\n**2 × 2**: det = **a·d − b·c** (diagonal principal menos a secundária).\n**3 × 3**: usa a **regra de Sarrus**.' },
      { t: 'Propriedades', p: 'Uma linha toda de zeros, ou duas linhas iguais, deixa o **det = 0**.\n**det(A·B) = det A · det B**.\nA matriz tem **inversa** só se **det ≠ 0**.' }
    ],
    exemplo: 'det [2 3 / 1 4] = 2·4 − 3·1 = 8 − 3 = 5.',
    perguntas: [
      { p: 'Quantos elementos tem uma matriz 2 × 3?', o: ['5', '6', '8', '9'], c: 1, e: '2 linhas vezes 3 colunas = 6 elementos.' },
      { p: 'Qual o determinante de [2 3 / 1 4]?', o: ['5', '11', '8', '−5'], c: 0, e: '2·4 − 3·1 = 8 − 3 = 5.' },
      { p: 'A é 2 × 3 e B é 3 × 4. Qual o tamanho de A·B?', o: ['3 × 3', '2 × 4', '4 × 2', 'Não dá pra multiplicar'], c: 1, e: 'As colunas de A (3) batem com as linhas de B (3). O resultado tem as linhas de A e as colunas de B: 2 × 4.' },
      { p: 'Uma matriz com uma linha inteira de zeros tem determinante:', o: ['1', 'Igual à diagonal', '0', 'Negativo'], c: 2, e: 'Linha de zeros sempre deixa o determinante igual a zero.' },
      { p: 'A transposta de uma matriz 2 × 3 é:', o: ['2 × 3', '3 × 2', '3 × 3', '2 × 2'], c: 1, e: 'Transpor troca linhas por colunas.' },
      { p: 'Uma matriz quadrada tem inversa quando:', o: ['det = 0', 'det ≠ 0', 'É 2 × 2', 'Tem zeros'], c: 1, e: 'Só existe inversa se o determinante for diferente de zero.' },
      { p: 'Qual o determinante de [1 2 / 3 6]?', o: ['12', '0', '−6', '6'], c: 1, e: '1·6 − 2·3 = 6 − 6 = 0. A segunda linha é o triplo da primeira.' },
      { p: 'Em A = [1 2 / 3 4], qual é o elemento a₂₁?', o: ['2', '3', '4', '1'], c: 1, e: 'a₂₁ = linha 2, coluna 1 = 3.' }
    ],
    cartoes: [
      { f: 'Matriz m × n', v: 'm linhas e n colunas.' },
      { f: 'aᵢⱼ', v: 'Elemento da linha i e coluna j.' },
      { f: 'Matriz identidade', v: '1 na diagonal principal, 0 no resto.' },
      { f: 'Quando dá pra multiplicar A·B?', v: 'Colunas de A = linhas de B.' },
      { f: 'Determinante 2 × 2', v: 'a·d − b·c' },
      { f: 'Quando existe a inversa?', v: 'Quando det ≠ 0.' },
      { f: 'Regra de Sarrus', v: 'Jeito de calcular o determinante 3 × 3.' }
    ]
  },

  'mat-sistemas': {
    resumo: [
      { t: 'O que é', p: 'Um **sistema linear** é um grupo de equações do 1º grau que precisam ser verdade **ao mesmo tempo**. A solução é o valor de cada letra que serve pra todas.' },
      { t: 'Método da substituição', p: 'Isola uma letra numa equação e **substitui** na outra. Ex.: x = 2 e 2x + y = 7 → 4 + y = 7 → y = 3.' },
      { t: 'Método da adição', p: 'Soma (ou subtrai) as equações pra **sumir com uma letra**. Ex.: x + y = 10 e x − y = 2 → somando: 2x = 12 → x = 6 → y = 4.' },
      { t: 'Classificação', p: '**SPD** (possível e determinado): uma única solução. Retas que se cruzam.\n**SPI** (possível e indeterminado): infinitas soluções. Retas iguais.\n**SI** (impossível): nenhuma solução. Retas paralelas.' },
      { t: 'Regra de Cramer', p: 'Usa determinantes: **x = Dx / D** e **y = Dy / D**. Se **D ≠ 0**, o sistema é SPD.' }
    ],
    exemplo: '20 bichos entre galinhas e coelhos, com 56 patas: g + c = 20 e 2g + 4c = 56. Dobrando a 1ª: 2g + 2c = 40. Subtraindo: 2c = 16 → c = 8 coelhos e 12 galinhas.',
    perguntas: [
      { p: 'Resolva: x + y = 10 e x − y = 2.', o: ['x = 6, y = 4', 'x = 4, y = 6', 'x = 5, y = 5', 'x = 8, y = 2'], c: 0, e: 'Somando: 2x = 12, então x = 6 e y = 4.' },
      { p: 'Se 2x + y = 7 e x = 2, quanto vale y?', o: ['5', '3', '2', '1'], c: 1, e: '2·2 + y = 7 → y = 3.' },
      { p: 'O sistema x + y = 3 e 2x + 2y = 6 é:', o: ['SPD', 'SPI', 'SI', 'Não é sistema'], c: 1, e: 'A segunda é a primeira multiplicada por 2. São a mesma reta: infinitas soluções.' },
      { p: 'O sistema x + y = 3 e x + y = 5 é:', o: ['SPD', 'SPI', 'SI', 'Tem 2 soluções'], c: 2, e: 'A mesma soma não pode dar 3 e 5 ao mesmo tempo: impossível.' },
      { p: 'SPD significa:', o: ['Nenhuma solução', 'Uma única solução', 'Infinitas soluções', 'Duas soluções'], c: 1, e: 'Possível e determinado: dá pra achar uma solução só.' },
      { p: '20 galinhas e coelhos têm 56 patas. Quantos são coelhos?', o: ['6', '8', '10', '12'], c: 1, e: 'g + c = 20 e 2g + 4c = 56 → 2c = 16 → c = 8.' },
      { p: 'Pela regra de Cramer, se D ≠ 0 o sistema é:', o: ['SI', 'SPI', 'SPD', 'Não dá pra saber'], c: 2, e: 'Determinante principal diferente de zero garante solução única.' }
    ],
    cartoes: [
      { f: 'Sistema linear', v: 'Equações do 1º grau que valem ao mesmo tempo.' },
      { f: 'SPD', v: 'Uma única solução (retas se cruzam).' },
      { f: 'SPI', v: 'Infinitas soluções (retas iguais).' },
      { f: 'SI', v: 'Nenhuma solução (retas paralelas).' },
      { f: 'Método da adição', v: 'Soma as equações pra sumir uma letra.' },
      { f: 'Regra de Cramer', v: 'x = Dx / D, y = Dy / D' }
    ]
  },

  'mat-combinatoria': {
    resumo: [
      { t: 'Princípio fundamental da contagem', p: 'Se uma escolha tem **a** jeitos e outra tem **b** jeitos, juntas têm **a · b** jeitos. Ex.: 3 camisas e 4 calças = 12 looks.' },
      { t: 'Fatorial', p: '**n! = n · (n − 1) · ... · 1**. Ex.: 5! = 120. Atenção: **0! = 1**.' },
      { t: 'Permutação', p: 'Reorganizar **todos** os elementos: **Pₙ = n!**. Ex.: anagramas de AMOR = 4! = 24.\nCom letras repetidas, divide pelos fatoriais das repetições: ARARA = 5! / (3! · 2!) = 10.' },
      { t: 'Arranjo (a ordem importa)', p: 'Escolher p de n **em ordem**: **A = n! / (n − p)!**. Ex.: pódio com 8 corredores = 8 · 7 · 6 = 336.' },
      { t: 'Combinação (a ordem não importa)', p: 'Escolher p de n **sem ordem**: **C = n! / (p! · (n − p)!)**. Ex.: comissão de 2 pessoas entre 5 = 10.' },
      { t: 'Dica pra decidir', p: 'Pergunta: **trocar a ordem muda o resultado?** Se muda (senha, pódio), é arranjo. Se não muda (grupo, comissão, salada), é combinação.' }
    ],
    exemplo: 'Senha de 3 dígitos (0 a 9, pode repetir): 10 · 10 · 10 = 1000 senhas.',
    perguntas: [
      { p: 'Com 3 camisas e 4 calças, quantos looks diferentes dá pra montar?', o: ['7', '12', '34', '24'], c: 1, e: 'Princípio da contagem: 3 · 4 = 12.' },
      { p: 'Quanto é 5!?', o: ['25', '60', '120', '720'], c: 2, e: '5 · 4 · 3 · 2 · 1 = 120.' },
      { p: 'Quantos anagramas tem a palavra AMOR?', o: ['12', '16', '24', '4'], c: 2, e: '4 letras diferentes: 4! = 24.' },
      { p: 'Quantos anagramas tem a palavra ARARA?', o: ['120', '10', '20', '60'], c: 1, e: '5! / (3! · 2!) = 120 / 12 = 10. O A repete 3 vezes e o R, 2.' },
      { p: '8 corredores disputam ouro, prata e bronze. Quantos pódios são possíveis?', o: ['24', '56', '336', '512'], c: 2, e: 'A ordem importa: 8 · 7 · 6 = 336.' },
      { p: 'De 5 pessoas, quantas comissões de 2 dá pra formar?', o: ['10', '20', '25', '7'], c: 0, e: 'A ordem não importa: C = 5! / (2! · 3!) = 10.' },
      { p: 'Quantas senhas de 3 dígitos (0 a 9, pode repetir) existem?', o: ['30', '720', '999', '1000'], c: 3, e: '10 · 10 · 10 = 1000.' },
      { p: 'Quando a ordem NÃO importa, usamos:', o: ['Arranjo', 'Permutação', 'Combinação', 'Fatorial'], c: 2, e: 'Combinação é pra escolher grupos, sem ordem.' }
    ],
    cartoes: [
      { f: 'Princípio da contagem', v: 'Multiplica as possibilidades de cada etapa.' },
      { f: '0!', v: '1' },
      { f: 'Permutação', v: 'Pₙ = n!' },
      { f: 'Arranjo', v: 'n! / (n − p)!  (ordem importa)' },
      { f: 'Combinação', v: 'n! / (p! · (n − p)!)  (ordem não importa)' },
      { f: 'Anagrama com letras repetidas', v: 'Divide pelos fatoriais das repetições.' }
    ]
  },

  'mat-probabilidade': {
    resumo: [
      { t: 'A ideia', p: 'Probabilidade mede a chance de algo acontecer: **P = casos favoráveis / casos possíveis**. Vai de **0** (impossível) a **1** (certeza), ou de 0% a 100%.' },
      { t: 'Evento complementar', p: 'A chance de **não** acontecer: **P(não A) = 1 − P(A)**. Se a chance de chover é 0,3, a de não chover é 0,7.' },
      { t: '"Ou" (união)', p: '**P(A ou B) = P(A) + P(B) − P(A e B)**. Tira a parte repetida pra não contar duas vezes.' },
      { t: '"E" com eventos independentes', p: 'Quando um não interfere no outro, multiplica: **P(A e B) = P(A) · P(B)**. Ex.: duas caras em duas moedas = 1/2 · 1/2 = 1/4.' },
      { t: 'Probabilidade condicional', p: 'A chance de A sabendo que B aconteceu: **P(A | B) = P(A e B) / P(B)**. O "espaço" encolhe pro que já se sabe.' }
    ],
    exemplo: 'Dois dados: 36 resultados possíveis. Soma 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos. P = 6/36 = 1/6.',
    perguntas: [
      { p: 'Num dado, qual a chance de sair número par?', o: ['1/6', '1/3', '1/2', '2/3'], c: 2, e: 'Pares: 2, 4, 6 = 3 casos de 6. P = 3/6 = 1/2.' },
      { p: 'Jogando uma moeda duas vezes, qual a chance de dar duas caras?', o: ['1/2', '1/4', '1/3', '2/4'], c: 1, e: 'Independentes: 1/2 · 1/2 = 1/4.' },
      { p: 'Uma urna tem 3 bolas vermelhas e 7 azuis. Qual a chance de tirar vermelha?', o: ['3/7', '3/10', '7/10', '1/3'], c: 1, e: '3 vermelhas de 10 bolas: 3/10.' },
      { p: 'Se a chance de chover é 0,3, qual a chance de não chover?', o: ['0,3', '0,7', '1,3', '0'], c: 1, e: 'Complementar: 1 − 0,3 = 0,7.' },
      { p: 'Num baralho de 52 cartas, qual a chance de tirar uma carta de copas?', o: ['1/13', '1/4', '1/52', '1/2'], c: 1, e: 'São 13 cartas de copas: 13/52 = 1/4.' },
      { p: 'Num dado, qual a chance de sair um número maior que 4?', o: ['1/6', '1/3', '1/2', '2/3'], c: 1, e: 'Maiores que 4: 5 e 6. P = 2/6 = 1/3.' },
      { p: 'Jogando dois dados, qual a chance da soma dar 7?', o: ['1/12', '1/6', '7/36', '1/36'], c: 1, e: 'São 6 combinações de 36: 6/36 = 1/6.' },
      { p: 'A probabilidade de um evento impossível é:', o: ['1', '0,5', '0', '−1'], c: 2, e: 'Impossível = 0. Certeza = 1.' }
    ],
    cartoes: [
      { f: 'Fórmula da probabilidade', v: 'P = favoráveis / possíveis' },
      { f: 'Evento complementar', v: 'P(não A) = 1 − P(A)' },
      { f: 'Independentes (A e B)', v: 'P(A) · P(B)' },
      { f: 'P(A ou B)', v: 'P(A) + P(B) − P(A e B)' },
      { f: 'Condicional', v: 'P(A | B) = P(A e B) / P(B)' },
      { f: 'Resultados de 2 dados', v: '36' }
    ]
  },

  'mat-espacial': {
    resumo: [
      { t: 'Prismas', p: 'Volume de todo prisma: **V = área da base · altura**.\n**Cubo** de aresta a: V = a³, área total = 6a², diagonal = a√3.\n**Paralelepípedo** a × b × c: V = a · b · c, diagonal = √(a² + b² + c²).' },
      { t: 'Cilindro', p: '**V = π · r² · h**. Área lateral = 2πr · h (é um retângulo enrolado).' },
      { t: 'Pirâmide e cone', p: 'São "pontudos", então o volume é **um terço** do prisma ou cilindro de mesma base e altura.\n**Pirâmide**: V = área da base · h / 3.\n**Cone**: V = π · r² · h / 3.' },
      { t: 'Esfera', p: '**V = (4/3) · π · r³**\n**Área = 4 · π · r²**' },
      { t: 'Relação de Euler', p: 'Pra poliedros convexos: **V − A + F = 2** (vértices − arestas + faces). Ex.: o cubo tem 8 − 12 + 6 = 2.' }
    ],
    exemplo: 'Cone de raio 3 e altura 4: V = π · 9 · 4 / 3 = 12π.',
    perguntas: [
      { p: 'Qual o volume de um cubo de aresta 3?', o: ['9', '18', '27', '54'], c: 2, e: 'V = 3³ = 27.' },
      { p: 'Qual o volume de uma caixa 2 × 3 × 4?', o: ['9', '24', '26', '12'], c: 1, e: 'V = 2 · 3 · 4 = 24.' },
      { p: 'Qual o volume de um cilindro de raio 2 e altura 5?', o: ['10π', '20π', '25π', '40π'], c: 1, e: 'V = π · 2² · 5 = 20π.' },
      { p: 'Qual o volume de um cone de raio 3 e altura 4?', o: ['12π', '36π', '9π', '48π'], c: 0, e: 'V = π · 9 · 4 / 3 = 12π.' },
      { p: 'Qual o volume de uma esfera de raio 3?', o: ['12π', '27π', '36π', '108π'], c: 2, e: 'V = (4/3) · π · 27 = 36π.' },
      { p: 'Um poliedro tem 8 vértices e 12 arestas. Quantas faces?', o: ['4', '6', '8', '10'], c: 1, e: 'V − A + F = 2 → 8 − 12 + F = 2 → F = 6.' },
      { p: 'Pirâmide de base quadrada de lado 6 e altura 5. Volume?', o: ['180', '60', '90', '30'], c: 1, e: 'Base = 36. V = 36 · 5 / 3 = 60.' },
      { p: 'Qual a diagonal de um cubo de aresta 2?', o: ['2√2', '2√3', '4', '√6'], c: 1, e: 'Diagonal do cubo = a√3 = 2√3.' }
    ],
    cartoes: [
      { f: 'Volume do prisma', v: 'Área da base · altura' },
      { f: 'Volume do cilindro', v: 'π · r² · h' },
      { f: 'Volume do cone', v: 'π · r² · h / 3' },
      { f: 'Volume da esfera', v: '(4/3) · π · r³' },
      { f: 'Área da esfera', v: '4 · π · r²' },
      { f: 'Relação de Euler', v: 'V − A + F = 2' },
      { f: 'Diagonal do cubo', v: 'a√3' }
    ]
  },

  'mat-analitica': {
    resumo: [
      { t: 'Distância entre dois pontos', p: '**d = √((x₂ − x₁)² + (y₂ − y₁)²)**. É o Pitágoras disfarçado. Ex.: de (0, 0) a (3, 4) a distância é 5.' },
      { t: 'Ponto médio', p: 'É a média das coordenadas: **M = ((x₁ + x₂)/2, (y₁ + y₂)/2)**.' },
      { t: 'Coeficiente angular', p: 'A inclinação da reta: **m = (y₂ − y₁) / (x₂ − x₁)**.' },
      { t: 'Equação da reta', p: 'Com um ponto (x₀, y₀) e a inclinação m: **y − y₀ = m(x − x₀)**.\nForma reduzida: **y = mx + n**, onde n é onde a reta corta o eixo y.' },
      { t: 'Paralelas e perpendiculares', p: '**Paralelas**: mesmo m.\n**Perpendiculares**: **m₁ · m₂ = −1** (um é o "inverso com sinal trocado" do outro).' }
    ],
    exemplo: 'Reta por (1, 2) e (3, 6): m = (6 − 2)/(3 − 1) = 2. Então y − 2 = 2(x − 1) → y = 2x.',
    perguntas: [
      { p: 'Qual a distância entre (0, 0) e (3, 4)?', o: ['5', '7', '12', '25'], c: 0, e: 'd = √(9 + 16) = √25 = 5.' },
      { p: 'Qual o ponto médio entre (2, 4) e (6, 8)?', o: ['(4, 6)', '(8, 12)', '(3, 5)', '(4, 4)'], c: 0, e: '((2 + 6)/2, (4 + 8)/2) = (4, 6).' },
      { p: 'Qual o coeficiente angular da reta que passa por (1, 2) e (3, 6)?', o: ['1', '2', '4', '1/2'], c: 1, e: 'm = (6 − 2)/(3 − 1) = 4/2 = 2.' },
      { p: 'Qual reta é paralela a y = 3x + 1?', o: ['y = −3x + 1', 'y = 3x − 5', 'y = x/3', 'y = −x/3'], c: 1, e: 'Paralelas têm o mesmo coeficiente angular: 3.' },
      { p: 'Uma reta perpendicular a y = 2x tem coeficiente angular:', o: ['2', '−2', '1/2', '−1/2'], c: 3, e: 'm₁ · m₂ = −1 → 2 · m = −1 → m = −1/2.' },
      { p: 'Qual a reta com m = 2 que passa por (0, 3)?', o: ['y = 3x + 2', 'y = 2x + 3', 'y = 2x − 3', 'y = x + 3'], c: 1, e: 'Corta o eixo y em 3 e tem inclinação 2: y = 2x + 3.' },
      { p: 'Onde a reta y = 2x − 4 corta o eixo x?', o: ['x = −4', 'x = 2', 'x = 4', 'x = −2'], c: 1, e: 'No eixo x, y = 0: 2x − 4 = 0 → x = 2.' }
    ],
    cartoes: [
      { f: 'Distância entre pontos', v: '√((x₂ − x₁)² + (y₂ − y₁)²)' },
      { f: 'Ponto médio', v: 'Média das coordenadas.' },
      { f: 'Coeficiente angular', v: 'm = Δy / Δx' },
      { f: 'Equação da reta (ponto e m)', v: 'y − y₀ = m(x − x₀)' },
      { f: 'Retas paralelas', v: 'Mesmo m.' },
      { f: 'Retas perpendiculares', v: 'm₁ · m₂ = −1' }
    ]
  },

  'mat-circunferencia': {
    resumo: [
      { t: 'Equação reduzida', p: 'Circunferência de centro **(a, b)** e raio **r**: **(x − a)² + (y − b)² = r²**. Atenção ao sinal: (x − 2) quer dizer centro com x = 2; (y + 1) quer dizer y = −1.' },
      { t: 'Equação geral', p: 'É a reduzida com tudo aberto: x² + y² − 2ax − 2by + (a² + b² − r²) = 0. Pra achar centro e raio, **completa quadrados** ou usa: centro = (metade do coeficiente de x com sinal trocado, idem pra y).' },
      { t: 'Posição de um ponto', p: 'Compara a distância do ponto ao centro com o raio:\n**menor**: dentro.\n**igual**: em cima.\n**maior**: fora.' },
      { t: 'Posição de uma reta', p: 'Compara a distância do centro até a reta com o raio:\n**menor**: secante (corta em 2 pontos).\n**igual**: tangente (encosta em 1 ponto).\n**maior**: não encosta.' }
    ],
    exemplo: 'x² + y² − 4x − 6y + 4 = 0 → centro (2, 3). r² = 4 + 9 − 4 = 9 → raio 3.',
    perguntas: [
      { p: 'Centro e raio de (x − 2)² + (y + 1)² = 9?', o: ['(2, −1) e 3', '(−2, 1) e 3', '(2, 1) e 9', '(2, −1) e 9'], c: 0, e: 'x − 2 → x = 2. y + 1 → y = −1. r² = 9 → r = 3.' },
      { p: 'Equação da circunferência de centro (0, 0) e raio 5?', o: ['x² + y² = 5', 'x² + y² = 25', 'x + y = 25', '(x − 5)² + y² = 0'], c: 1, e: 'Centro na origem: x² + y² = r² = 25.' },
      { p: 'O ponto (3, 4) em relação a x² + y² = 25 está:', o: ['Dentro', 'Em cima', 'Fora', 'No centro'], c: 1, e: '3² + 4² = 25 = r². Fica exatamente em cima.' },
      { p: 'O ponto (1, 1) em relação a x² + y² = 25 está:', o: ['Dentro', 'Em cima', 'Fora', 'Não dá pra saber'], c: 0, e: '1 + 1 = 2, menor que 25: está dentro.' },
      { p: 'Qual o raio de x² + y² − 4x − 6y + 4 = 0?', o: ['2', '3', '4', '9'], c: 1, e: 'Centro (2, 3). r² = 2² + 3² − 4 = 9 → r = 3.' },
      { p: 'Uma reta tangente à circunferência tem quantos pontos em comum com ela?', o: ['0', '1', '2', 'Infinitos'], c: 1, e: 'Tangente só encosta em um ponto.' }
    ],
    cartoes: [
      { f: 'Equação reduzida', v: '(x − a)² + (y − b)² = r²' },
      { f: 'Ponto dentro da circunferência', v: 'Distância ao centro < raio.' },
      { f: 'Reta secante', v: 'Corta em 2 pontos.' },
      { f: 'Reta tangente', v: 'Encosta em 1 ponto.' },
      { f: 'Centro de (x + 3)² + (y − 1)² = 4', v: '(−3, 1), raio 2' }
    ]
  },

  'mat-complexos': {
    resumo: [
      { t: 'O número i', p: 'Os complexos nasceram pra resolver raízes de números negativos. A base de tudo: **i² = −1**.' },
      { t: 'Forma algébrica', p: '**z = a + bi**. O **a** é a parte real e o **b** é a parte imaginária. Se a = 0, z é **imaginário puro**.' },
      { t: 'Contas', p: '**Soma**: junta real com real e imaginário com imaginário.\n**Multiplicação**: faz a distributiva e troca i² por −1.\n**Conjugado**: z̄ = a − bi. E **z · z̄ = a² + b²**.\n**Divisão**: multiplica em cima e embaixo pelo conjugado de baixo.' },
      { t: 'Potências de i', p: 'Repetem a cada 4: **i⁰ = 1, i¹ = i, i² = −1, i³ = −i**. Pra iⁿ, divide n por 4 e usa o **resto**.' },
      { t: 'Módulo e plano', p: 'Cada complexo é um ponto (a, b) no **plano de Argand-Gauss**. A distância até a origem é o **módulo**: **|z| = √(a² + b²)**.' }
    ],
    exemplo: '(1 + i)² = 1 + 2i + i² = 1 + 2i − 1 = 2i.',
    perguntas: [
      { p: 'Quanto vale i²?', o: ['1', '−1', 'i', '−i'], c: 1, e: 'É a definição: i² = −1.' },
      { p: 'Quanto é (2 + 3i) + (1 − i)?', o: ['3 + 2i', '3 + 4i', '1 + 4i', '2 + 2i'], c: 0, e: 'Real: 2 + 1 = 3. Imaginária: 3i − i = 2i.' },
      { p: 'Quanto é (1 + i)(1 − i)?', o: ['0', '2', '1 − i²', '2i'], c: 1, e: '1 − i² = 1 − (−1) = 2.' },
      { p: 'Quanto vale i⁷?', o: ['i', '−1', '−i', '1'], c: 2, e: '7 ÷ 4 deixa resto 3, e i³ = −i.' },
      { p: 'Qual o módulo de 3 + 4i?', o: ['5', '7', '25', '1'], c: 0, e: '√(9 + 16) = √25 = 5.' },
      { p: 'Qual o conjugado de 5 − 2i?', o: ['−5 + 2i', '5 + 2i', '−5 − 2i', '2 − 5i'], c: 1, e: 'Conjugado troca só o sinal da parte imaginária.' },
      { p: 'Quais as raízes de x² + 4 = 0?', o: ['±2', '±2i', '±4i', 'Não existem'], c: 1, e: 'x² = −4 → x = ±√(−4) = ±2i.' },
      { p: 'Quanto é (1 + i)²?', o: ['2', '2i', '1 + i²', '0'], c: 1, e: '1 + 2i + i² = 1 + 2i − 1 = 2i.' }
    ],
    cartoes: [
      { f: 'i²', v: '−1' },
      { f: 'Forma algébrica', v: 'z = a + bi' },
      { f: 'Conjugado de a + bi', v: 'a − bi' },
      { f: 'Potências de i', v: 'Repetem a cada 4: 1, i, −1, −i' },
      { f: 'Módulo de z', v: '√(a² + b²)' },
      { f: 'Como dividir complexos?', v: 'Multiplica pelo conjugado do denominador.' }
    ]
  },

  'mat-polinomios': {
    resumo: [
      { t: 'O que é', p: 'Polinômio é uma soma de termos com x: P(x) = aₙxⁿ + ... + a₁x + a₀. O **grau** é o maior expoente (com coeficiente diferente de zero).' },
      { t: 'Valor numérico e raiz', p: 'Trocar x por um número dá o **valor numérico**. Se P(r) = 0, **r é raiz**.\nTruque: **P(1) = soma dos coeficientes**.' },
      { t: 'Teorema do resto', p: 'O resto da divisão de P(x) por **(x − a)** é **P(a)**. Se P(a) = 0, a divisão é exata.' },
      { t: 'Briot-Ruffini', p: 'É o "dispositivo prático" pra dividir por (x − a) rapidinho, usando só os coeficientes.' },
      { t: 'Quantas raízes', p: '**Teorema fundamental da álgebra**: um polinômio de grau n tem **exatamente n raízes complexas** (contando repetidas).' },
      { t: 'Relações de Girard (grau 3)', p: 'Pra ax³ + bx² + cx + d:\n**Soma das raízes = −b/a**\n**Produto das raízes = −d/a**' }
    ],
    exemplo: 'Resto de x³ + 2x − 5 por (x − 1): P(1) = 1 + 2 − 5 = −2.',
    perguntas: [
      { p: 'Qual o grau de 3x⁴ − 2x + 1?', o: ['1', '3', '4', '6'], c: 2, e: 'O maior expoente é 4.' },
      { p: 'Se P(x) = x² − 3x + 2, quanto é P(2)?', o: ['0', '2', '4', '−2'], c: 0, e: '4 − 6 + 2 = 0. Então 2 é raiz.' },
      { p: 'Qual o resto da divisão de x³ + 2x − 5 por (x − 1)?', o: ['−2', '0', '2', '−5'], c: 0, e: 'Teorema do resto: P(1) = 1 + 2 − 5 = −2.' },
      { p: 'Qual a soma dos coeficientes de P(x) = 2x³ − x² + 4x − 1?', o: ['4', '6', '8', '2'], c: 0, e: 'P(1) = 2 − 1 + 4 − 1 = 4.' },
      { p: 'Quantas raízes complexas tem um polinômio de grau 5?', o: ['1', '4', '5', 'Infinitas'], c: 2, e: 'Teorema fundamental: grau n, n raízes.' },
      { p: 'Qual a soma das raízes de x³ − 6x² + 11x − 6?', o: ['−6', '6', '11', '1'], c: 1, e: 'Girard: −b/a = −(−6)/1 = 6. (As raízes são 1, 2 e 3.)' },
      { p: 'Se 2 é raiz de P(x), então P(x) é divisível por:', o: ['(x + 2)', '(x − 2)', '(2x)', '(x² − 2)'], c: 1, e: 'Raiz a significa que (x − a) divide o polinômio.' }
    ],
    cartoes: [
      { f: 'Grau do polinômio', v: 'O maior expoente de x.' },
      { f: 'r é raiz quando...', v: 'P(r) = 0' },
      { f: 'Teorema do resto', v: 'Resto da divisão por (x − a) = P(a)' },
      { f: 'Soma dos coeficientes', v: 'P(1)' },
      { f: 'Grau n tem quantas raízes?', v: 'n raízes complexas.' },
      { f: 'Soma das raízes (Girard)', v: '−b/a' }
    ]
  },

  'mat-estatistica': {
    resumo: [
      { t: 'Média', p: '**Aritmética**: soma tudo e divide pela quantidade.\n**Ponderada**: cada valor tem um peso. Multiplica cada um pelo peso, soma e divide pela soma dos pesos.' },
      { t: 'Mediana', p: 'O valor **do meio**, com os dados **em ordem**. Se a quantidade for par, é a média dos dois do meio.' },
      { t: 'Moda', p: 'O valor que **mais aparece**. Pode ter mais de uma moda, ou nenhuma.' },
      { t: 'Dispersão', p: '**Amplitude**: maior − menor.\n**Variância**: média dos quadrados das distâncias até a média.\n**Desvio padrão**: raiz da variância. **Pequeno** = dados parecidos; **grande** = dados espalhados.' },
      { t: 'Gráficos', p: '**Barras**: comparar categorias.\n**Setores (pizza)**: partes de um todo.\n**Linhas**: mudança ao longo do tempo.\n**Histograma**: frequência em faixas de valores.' }
    ],
    exemplo: 'Notas 6 (peso 2) e 9 (peso 1): média ponderada = (6·2 + 9·1)/3 = 21/3 = 7.',
    perguntas: [
      { p: 'Qual a média de 4, 6 e 8?', o: ['5', '6', '7', '18'], c: 1, e: '(4 + 6 + 8) / 3 = 18 / 3 = 6.' },
      { p: 'Qual a mediana de 3, 7, 1, 9, 5?', o: ['3', '5', '7', '9'], c: 1, e: 'Em ordem: 1, 3, 5, 7, 9. O do meio é 5.' },
      { p: 'Qual a moda de 2, 3, 3, 5, 7?', o: ['2', '3', '4', '5'], c: 1, e: 'O 3 aparece duas vezes, mais que os outros.' },
      { p: 'Qual a mediana de 2, 4, 6, 8?', o: ['4', '5', '6', '20'], c: 1, e: 'Quantidade par: média dos do meio, (4 + 6)/2 = 5.' },
      { p: 'Notas 6 (peso 2) e 9 (peso 1). Qual a média ponderada?', o: ['7,5', '7', '6,5', '8'], c: 1, e: '(12 + 9) / 3 = 7.' },
      { p: 'Qual a amplitude de 3, 10 e 7?', o: ['7', '10', '3', '20'], c: 0, e: 'Maior menos menor: 10 − 3 = 7.' },
      { p: 'Um desvio padrão pequeno indica que os dados estão:', o: ['Espalhados', 'Próximos da média', 'Errados', 'Em ordem'], c: 1, e: 'Pouca dispersão: os valores ficam perto da média.' }
    ],
    cartoes: [
      { f: 'Média aritmética', v: 'Soma tudo e divide pela quantidade.' },
      { f: 'Mediana', v: 'O valor do meio, com os dados em ordem.' },
      { f: 'Moda', v: 'O valor que mais aparece.' },
      { f: 'Amplitude', v: 'Maior − menor.' },
      { f: 'Desvio padrão', v: 'Raiz da variância. Mede o quanto os dados se espalham.' },
      { f: 'Gráfico de setores', v: 'Mostra partes de um todo (pizza).' }
    ]
  },

  'mat-financeira': {
    resumo: [
      { t: 'Porcentagem', p: '**x%** é x partes de 100. 20% de 150 = 0,20 · 150 = 30.' },
      { t: 'Aumento e desconto', p: 'Aumento de i%: multiplica por **(1 + i)**. Ex.: +10% → · 1,10.\nDesconto de i%: multiplica por **(1 − i)**. Ex.: −15% → · 0,85.' },
      { t: 'Aumentos seguidos', p: 'Não soma as porcentagens, **multiplica os fatores**. Dois aumentos de 10%: 1,1 · 1,1 = 1,21 → **21%**.\nAumento de 20% e depois desconto de 20%: 1,2 · 0,8 = 0,96 → **perde 4%**.' },
      { t: 'Juros simples', p: 'Os juros são sempre sobre o valor inicial: **J = C · i · t** e **M = C + J**.' },
      { t: 'Juros compostos', p: 'Juros sobre juros: **M = C · (1 + i)ᵗ**. É o que bancos e cartões usam, por isso a dívida cresce rápido.' }
    ],
    exemplo: 'R$ 1.000 a 2% ao mês por 5 meses. Simples: J = 1000 · 0,02 · 5 = R$ 100. Compostos: M = 1000 · 1,02⁵ ≈ R$ 1.104,08.',
    perguntas: [
      { p: 'Quanto é 20% de 150?', o: ['20', '30', '15', '35'], c: 1, e: '0,20 · 150 = 30.' },
      { p: 'Um produto de R$ 200 com 15% de desconto sai por:', o: ['R$ 185', 'R$ 170', 'R$ 175', 'R$ 30'], c: 1, e: '200 · 0,85 = 170.' },
      { p: 'Dois aumentos seguidos de 10% dão um aumento total de:', o: ['20%', '21%', '11%', '100%'], c: 1, e: '1,1 · 1,1 = 1,21 → 21%.' },
      { p: 'Juros simples: R$ 1.000 a 2% ao mês por 5 meses. Quanto de juros?', o: ['R$ 10', 'R$ 100', 'R$ 1.100', 'R$ 50'], c: 1, e: 'J = 1000 · 0,02 · 5 = 100.' },
      { p: 'Juros compostos: R$ 1.000 a 10% ao ano por 2 anos. Montante?', o: ['R$ 1.200', 'R$ 1.210', 'R$ 1.100', 'R$ 1.021'], c: 1, e: '1000 · 1,1² = 1000 · 1,21 = 1210.' },
      { p: 'O preço subiu de R$ 50 pra R$ 60. Foi um aumento de:', o: ['10%', '20%', '16,6%', '60%'], c: 1, e: 'Subiu 10 em cima de 50: 10/50 = 20%.' },
      { p: 'Um aumento de 20% seguido de um desconto de 20%:', o: ['Volta ao preço original', 'Fica 4% mais barato', 'Fica 4% mais caro', 'Fica 40% mais barato'], c: 1, e: '1,2 · 0,8 = 0,96: o preço final é 96% do original.' }
    ],
    cartoes: [
      { f: 'Aumento de i%', v: 'Multiplica por (1 + i).' },
      { f: 'Desconto de i%', v: 'Multiplica por (1 − i).' },
      { f: 'Aumentos sucessivos', v: 'Multiplica os fatores, não soma.' },
      { f: 'Juros simples', v: 'J = C · i · t' },
      { f: 'Juros compostos', v: 'M = C · (1 + i)ᵗ' },
      { f: '+20% e depois −20%', v: 'Fica 4% mais barato (· 0,96).' }
    ]
  }
});
