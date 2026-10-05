// Conteúdo das matérias do Miaula.
// Tópico com "resumo" = aula pronta. Tópico só com "titulo" = aparece como "em breve".
// Negrito no texto: **assim**.

window.MATERIAS = [
  {
    id: 'mat', nome: 'Matemática',
    anos: {
      1: [
        {
          id: 'mat-conjuntos', titulo: 'Conjuntos numéricos',
          resumo: [
            { t: 'Os números em família', p: 'Os números são organizados em grupos chamados **conjuntos**. Cada conjunto novo "engole" o anterior e acrescenta números que faltavam.' },
            { t: 'Naturais (ℕ)', p: 'São os números de contar: **0, 1, 2, 3, 4...** Não têm sinal de menos nem vírgula.' },
            { t: 'Inteiros (ℤ)', p: 'São os naturais mais os negativos: **..., −3, −2, −1, 0, 1, 2, 3...** Servem pra coisas como temperatura abaixo de zero ou saldo devedor.' },
            { t: 'Racionais (ℚ)', p: 'Todo número que pode ser escrito como **fração a/b** (com b diferente de zero). Entram aqui os decimais que terminam, como 0,25 = 1/4, e as **dízimas periódicas**, como 0,333... = 1/3.' },
            { t: 'Irracionais', p: 'Números com infinitas casas decimais **sem repetição**. Não dá pra escrever como fração. Exemplos famosos: **√2 = 1,4142...** e **π = 3,1415...**' },
            { t: 'Reais (ℝ)', p: 'É a junção de racionais e irracionais. Resumindo: **ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ** (o símbolo ⊂ quer dizer "está dentro de").' },
            { t: 'Operações com conjuntos', p: '**União (A ∪ B)**: junta tudo dos dois, sem repetir.\n**Interseção (A ∩ B)**: só o que aparece nos dois ao mesmo tempo.\n**Diferença (A − B)**: o que está em A mas não está em B.' }
          ],
          exemplo: 'A = {1, 2, 3, 4} e B = {3, 4, 5}. Então A ∪ B = {1, 2, 3, 4, 5}, A ∩ B = {3, 4} e A − B = {1, 2}.',
          perguntas: [
            { p: 'Qual destes números é irracional?', o: ['0,25', '√9', '√2', '1/3'], c: 2, e: '√9 = 3, que é inteiro. Já √2 = 1,4142... tem infinitas casas sem repetir, então é irracional.' },
            { p: 'O número −5 pertence a qual destes conjuntos (o menor possível)?', o: ['Naturais (ℕ)', 'Inteiros (ℤ)', 'Só aos reais', 'Irracionais'], c: 1, e: 'Os naturais não têm negativos. O primeiro conjunto que tem o −5 é o dos inteiros.' },
            { p: 'O número 0,777... (o 7 repete pra sempre) é:', o: ['Irracional', 'Racional', 'Natural', 'Inteiro'], c: 1, e: 'É uma dízima periódica, e toda dízima periódica é racional. Nesse caso, 0,777... = 7/9.' },
            { p: 'Se A = {1, 2, 3, 4} e B = {3, 4, 5}, quanto é A ∩ B?', o: ['{3, 4}', '{1, 2, 3, 4, 5}', '{1, 2}', '{5}'], c: 0, e: 'Interseção é o que está nos dois ao mesmo tempo: só o 3 e o 4.' },
            { p: 'Com os mesmos A = {1, 2, 3, 4} e B = {3, 4, 5}, quanto é A ∪ B?', o: ['{3, 4}', '{1, 2, 5}', '{1, 2, 3, 4, 5}', '{1, 2}'], c: 2, e: 'União junta tudo dos dois conjuntos, sem repetir: {1, 2, 3, 4, 5}.' },
            { p: 'Ainda com A = {1, 2, 3, 4} e B = {3, 4, 5}, quanto é A − B?', o: ['{5}', '{1, 2}', '{3, 4}', '{1, 2, 5}'], c: 1, e: 'A − B é o que está em A e não está em B. Tirando o 3 e o 4, sobram 1 e 2.' },
            { p: 'Qual frase é verdadeira?', o: ['Todo inteiro é natural', 'Todo natural é inteiro', 'Todo real é racional', 'π é racional'], c: 1, e: 'Os naturais estão dentro dos inteiros (ℕ ⊂ ℤ). O contrário não vale: −1 é inteiro, mas não é natural.' },
            { p: 'Qual fração representa 0,5?', o: ['1/5', '5/1', '1/2', '2/5'], c: 2, e: '0,5 é metade, ou seja, 1/2.' }
          ],
          cartoes: [
            { f: 'Naturais (ℕ)', v: '0, 1, 2, 3, 4... Os números de contar.' },
            { f: 'Inteiros (ℤ)', v: 'Naturais + negativos: ..., −2, −1, 0, 1, 2...' },
            { f: 'Racionais (ℚ)', v: 'Podem virar fração a/b (b ≠ 0). Inclui dízimas periódicas.' },
            { f: 'Irracionais', v: 'Infinitas casas sem repetir. Ex.: √2 e π.' },
            { f: 'A ∪ B (união)', v: 'Tudo que está em A ou em B, sem repetir.' },
            { f: 'A ∩ B (interseção)', v: 'Só o que está em A e em B ao mesmo tempo.' },
            { f: 'A − B (diferença)', v: 'O que está em A e não está em B.' },
            { f: '0,333... vira qual fração?', v: '1/3' }
          ]
        },
        {
          id: 'mat-funcoes', titulo: 'Introdução às funções',
          resumo: [
            { t: 'O que é uma função', p: 'Função é uma regra que pega um número de entrada (**x**) e devolve **um único** número de saída (**y**). É como uma máquina: entra 2, sai 7. Entra 3, sai 10.' },
            { t: 'Como se escreve', p: 'Usamos **f(x)**, que se lê "f de x". Em **f(x) = 3x + 1**, a regra é: multiplica por 3 e soma 1.' },
            { t: 'Calcular um valor', p: 'É só trocar o x pelo número. Em f(x) = 3x + 1: **f(2) = 3·2 + 1 = 7**.' },
            { t: 'Domínio e imagem', p: '**Domínio**: todos os valores de x que podem entrar.\n**Contradomínio**: onde os resultados podem cair.\n**Imagem**: os valores de y que realmente saem.' },
            { t: 'O gráfico', p: 'Cada par (x, y) vira um ponto no **plano cartesiano**: x é a posição pro lado, y é a altura. Dica: se uma linha vertical cortar o desenho em dois pontos, aquilo **não é** função.' },
            { t: 'Os quadrantes', p: 'O plano é dividido em 4 partes. **1º**: x e y positivos. **2º**: x negativo e y positivo. **3º**: os dois negativos. **4º**: x positivo e y negativo.' }
          ],
          exemplo: 'Uma loja cobra R$ 5 por item mais R$ 10 de entrega. O preço é P(n) = 5n + 10. Com 4 itens: P(4) = 5·4 + 10 = R$ 30.',
          perguntas: [
            { p: 'Se f(x) = 3x + 1, quanto vale f(2)?', o: ['6', '7', '5', '9'], c: 1, e: 'Troca o x por 2: 3·2 + 1 = 6 + 1 = 7.' },
            { p: 'Se f(x) = x² − 4, quanto vale f(−2)?', o: ['−8', '8', '0', '−4'], c: 2, e: '(−2)² = 4, porque menos vezes menos dá mais. Então 4 − 4 = 0.' },
            { p: 'Pra uma relação ser função, cada x do domínio precisa ter:', o: ['Nenhuma imagem', 'Exatamente uma imagem', 'Duas imagens', 'Quantas quiser'], c: 1, e: 'Em uma função, cada entrada tem uma única saída.' },
            { p: 'O domínio de uma função é:', o: ['Os valores de x que podem entrar', 'Os valores de y que saem', 'O desenho do gráfico', 'O maior valor da função'], c: 0, e: 'Domínio são as entradas possíveis. As saídas formam a imagem.' },
            { p: 'Se g(x) = 2x − 5, pra qual x temos g(x) = 7?', o: ['1', '6', '12', '9'], c: 1, e: '2x − 5 = 7 → 2x = 12 → x = 6.' },
            { p: 'O ponto (3, −2) fica em qual quadrante?', o: ['1º', '2º', '3º', '4º'], c: 3, e: 'x positivo (3) e y negativo (−2): é o 4º quadrante.' },
            { p: 'Uma loja cobra R$ 5 por item e R$ 10 de entrega. Qual função dá o preço de n itens?', o: ['P(n) = 10n + 5', 'P(n) = 5n + 10', 'P(n) = 15n', 'P(n) = 5n − 10'], c: 1, e: 'Cada item custa 5 (5n) e a entrega é fixa (+10).' },
            { p: 'A imagem de uma função é:', o: ['Os valores de y que realmente saem', 'Os valores de x que entram', 'Só o valor zero', 'O nome da função'], c: 0, e: 'Imagem é o conjunto dos resultados que a função realmente produz.' }
          ],
          cartoes: [
            { f: 'O que é uma função?', v: 'Uma regra em que cada x tem exatamente um y.' },
            { f: 'Como calcular f(2)?', v: 'Troca o x por 2 na regra e faz a conta.' },
            { f: 'Domínio', v: 'Os valores de x que podem entrar.' },
            { f: 'Imagem', v: 'Os valores de y que realmente saem.' },
            { f: 'Teste da reta vertical', v: 'Se uma linha vertical corta o gráfico em 2 pontos, não é função.' },
            { f: '4º quadrante', v: 'x positivo e y negativo.' },
            { f: '2º quadrante', v: 'x negativo e y positivo.' }
          ]
        },
        {
          id: 'mat-afim', titulo: 'Função do 1º grau',
          resumo: [
            { t: 'A cara dela', p: 'A função do 1º grau (ou **função afim**) tem a forma **f(x) = ax + b**, com **a diferente de zero**. O gráfico é sempre uma **reta**.' },
            { t: 'O número a (coeficiente angular)', p: 'Diz a inclinação da reta. Se **a > 0**, a reta **sobe** (função crescente). Se **a < 0**, a reta **desce** (função decrescente).' },
            { t: 'O número b (coeficiente linear)', p: 'É onde a reta **corta o eixo y**, no ponto **(0, b)**.' },
            { t: 'A raiz', p: 'Raiz (ou zero) é o valor de x que faz **f(x) = 0**. É onde a reta corta o eixo x. Pra achar, resolve **ax + b = 0**, que dá **x = −b/a**.' },
            { t: 'Função linear', p: 'Quando **b = 0**, fica f(x) = ax. A reta passa pela origem (0, 0).' },
            { t: 'Achando a função por dois pontos', p: 'Com dois pontos da reta: **a = (y₂ − y₁) / (x₂ − x₁)**. Depois troca um ponto na fórmula pra achar o b.' }
          ],
          exemplo: 'Em f(x) = 2x − 6: a = 2 (sobe), b = −6 (corta o eixo y em −6). Raiz: 2x − 6 = 0 → x = 3.',
          perguntas: [
            { p: 'Qual é a raiz de f(x) = 2x − 6?', o: ['x = 2', 'x = 3', 'x = −3', 'x = 6'], c: 1, e: 'A raiz é onde f(x) vale zero: 2x − 6 = 0, então 2x = 6 e x = 3.' },
            { p: 'A função f(x) = −3x + 4 é:', o: ['Crescente', 'Decrescente', 'Constante', 'Não é do 1º grau'], c: 1, e: 'O número que acompanha o x (a = −3) é negativo, então a reta desce.' },
            { p: 'Onde f(x) = 5x + 2 corta o eixo y?', o: ['(0, 5)', '(2, 0)', '(0, 2)', '(5, 2)'], c: 2, e: 'A reta corta o eixo y no ponto (0, b). Aqui b = 2.' },
            { p: 'Qual é a raiz de f(x) = 4x + 8?', o: ['x = 2', 'x = −2', 'x = 8', 'x = −4'], c: 1, e: '4x + 8 = 0 → 4x = −8 → x = −2.' },
            { p: 'Um táxi cobra R$ 6 fixos mais R$ 2,50 por km. Quanto custa uma corrida de 10 km?', o: ['R$ 25', 'R$ 31', 'R$ 16', 'R$ 36'], c: 1, e: 'f(x) = 2,5x + 6. Com x = 10: 25 + 6 = R$ 31.' },
            { p: 'Qual é o coeficiente angular de f(x) = 7 − 2x?', o: ['7', '2', '−2', '−7'], c: 2, e: 'O coeficiente angular é o número que multiplica o x. Aqui é −2 (a ordem não importa).' },
            { p: 'Uma reta passa por (0, 1) e (2, 5). Qual é a função?', o: ['f(x) = 2x + 1', 'f(x) = x + 2', 'f(x) = 3x + 1', 'f(x) = 2x + 5'], c: 0, e: 'a = (5 − 1)/(2 − 0) = 2. Ela corta o eixo y em 1, então b = 1. Fica f(x) = 2x + 1.' },
            { p: 'Uma função do 1º grau é chamada de linear quando:', o: ['a = 0', 'b = 0', 'a = b', 'a = 1'], c: 1, e: 'Quando b = 0, a função fica f(x) = ax e a reta passa pela origem.' }
          ],
          cartoes: [
            { f: 'Forma da função do 1º grau', v: 'f(x) = ax + b, com a ≠ 0' },
            { f: 'a > 0', v: 'Reta sobe: função crescente.' },
            { f: 'a < 0', v: 'Reta desce: função decrescente.' },
            { f: 'O que o b mostra?', v: 'Onde a reta corta o eixo y: ponto (0, b).' },
            { f: 'Como achar a raiz?', v: 'Faz ax + b = 0. Dá x = −b/a.' },
            { f: 'Função linear', v: 'Quando b = 0. A reta passa por (0, 0).' },
            { f: 'a usando dois pontos', v: 'a = (y₂ − y₁) / (x₂ − x₁)' },
            { f: 'Gráfico da função do 1º grau', v: 'Sempre uma reta.' }
          ]
        },
        {
          id: 'mat-quadratica', titulo: 'Função do 2º grau',
          resumo: [
            { t: 'A cara dela', p: 'A função do 2º grau (ou **quadrática**) tem a forma **f(x) = ax² + bx + c**, com **a diferente de zero**. O gráfico é uma curva chamada **parábola**.' },
            { t: 'Pra onde a boca vira', p: 'Se **a > 0**, a parábola tem a **boca pra cima** e um ponto mais baixo (mínimo). Se **a < 0**, a **boca é pra baixo** e tem um ponto mais alto (máximo).' },
            { t: 'Fórmula de Bhaskara', p: 'Pra achar as raízes: primeiro **Δ = b² − 4ac**. Depois **x = (−b ± √Δ) / 2a**.' },
            { t: 'O que o Δ (delta) conta', p: '**Δ > 0**: duas raízes diferentes.\n**Δ = 0**: uma raiz só (as duas são iguais).\n**Δ < 0**: nenhuma raiz real (a parábola não toca o eixo x).' },
            { t: 'O vértice', p: 'É o ponto da "virada" da parábola: **xv = −b / 2a** e **yv = −Δ / 4a**. Ele é o máximo ou o mínimo da função.' },
            { t: 'Atalhos úteis', p: 'O **c** é onde a parábola corta o eixo y. **Soma das raízes = −b/a** e **produto das raízes = c/a**.' }
          ],
          exemplo: 'x² − 5x + 6 = 0 → Δ = 25 − 24 = 1 → x = (5 ± 1)/2 → raízes 3 e 2.',
          perguntas: [
            { p: 'Quais são as raízes de x² − 5x + 6 = 0?', o: ['1 e 6', '2 e 3', '−2 e −3', '5 e 6'], c: 1, e: 'Δ = 25 − 24 = 1. x = (5 ± 1)/2, então x = 3 ou x = 2. Confere: soma 5 e produto 6.' },
            { p: 'A equação x² + 2x + 5 = 0 tem quantas raízes reais?', o: ['Duas', 'Uma', 'Nenhuma', 'Infinitas'], c: 2, e: 'Δ = 4 − 20 = −16. Delta negativo: nenhuma raiz real.' },
            { p: 'A parábola de f(x) = −x² + 4x tem a boca virada pra:', o: ['Cima', 'Baixo', 'Direita', 'Esquerda'], c: 1, e: 'a = −1 é negativo, então a boca é pra baixo.' },
            { p: 'Qual é o vértice de f(x) = x² − 4x + 3?', o: ['(2, −1)', '(−2, 15)', '(4, 3)', '(1, 0)'], c: 0, e: 'xv = −(−4)/2 = 2. f(2) = 4 − 8 + 3 = −1. Vértice (2, −1).' },
            { p: 'Onde f(x) = 2x² − 3x + 7 corta o eixo y?', o: ['Em 2', 'Em −3', 'Em 7', 'Em 0'], c: 2, e: 'No eixo y, x = 0. Sobra só o c = 7.' },
            { p: 'Quais são as raízes de x² − 9 = 0?', o: ['3 e −3', 'Só 3', '9 e −9', 'Nenhuma'], c: 0, e: 'x² = 9, então x = 3 ou x = −3, porque os dois ao quadrado dão 9.' },
            { p: 'Qual é a soma das raízes de x² − 7x + 10 = 0?', o: ['10', '−7', '7', '3'], c: 2, e: 'Soma = −b/a = −(−7)/1 = 7. As raízes são 2 e 5.' },
            { p: 'Uma bola sobe com altura h(t) = −5t² + 20t (metros). Qual a altura máxima?', o: ['10 m', '15 m', '20 m', '40 m'], c: 2, e: 'O máximo está no vértice: t = −20/(2·(−5)) = 2. h(2) = −20 + 40 = 20 m.' }
          ],
          cartoes: [
            { f: 'Forma da função do 2º grau', v: 'f(x) = ax² + bx + c, com a ≠ 0' },
            { f: 'Fórmula do Δ (delta)', v: 'Δ = b² − 4ac' },
            { f: 'Fórmula de Bhaskara', v: 'x = (−b ± √Δ) / 2a' },
            { f: 'Δ < 0', v: 'Nenhuma raiz real.' },
            { f: 'Δ = 0', v: 'Uma raiz (duas iguais).' },
            { f: 'a > 0', v: 'Boca pra cima, tem ponto mínimo.' },
            { f: 'x do vértice', v: 'xv = −b / 2a' },
            { f: 'Soma e produto das raízes', v: 'Soma = −b/a. Produto = c/a.' }
          ]
        },
        {
          id: 'mat-exponencial', titulo: 'Função exponencial',
          resumo: [
            { t: 'A cara dela', p: 'A função exponencial tem o x **no expoente**: **f(x) = aˣ**, com **a > 0** e **a ≠ 1**.' },
            { t: 'Sobe ou desce', p: 'Se **a > 1**, ela é **crescente** (cresce cada vez mais rápido). Se **0 < a < 1**, é **decrescente**.' },
            { t: 'Detalhes do gráfico', p: 'Sempre passa pelo ponto **(0, 1)**, porque todo número elevado a zero dá 1. E **nunca encosta no eixo x**: o resultado é sempre positivo.' },
            { t: 'Regras das potências', p: '**aᵐ · aⁿ = aᵐ⁺ⁿ**\n**aᵐ ÷ aⁿ = aᵐ⁻ⁿ**\n**(aᵐ)ⁿ = aᵐ·ⁿ**\n**a⁰ = 1**\n**a⁻ⁿ = 1/aⁿ**' },
            { t: 'Equação exponencial', p: 'O truque é **deixar as duas bases iguais** e igualar os expoentes. Ex.: 2ˣ = 32 → 2ˣ = 2⁵ → **x = 5**.' },
            { t: 'Onde aparece', p: 'Bactérias que dobram, juros compostos e epidemias. Juros compostos: **M = C · (1 + i)ᵗ**.' }
          ],
          exemplo: 'Bactérias que dobram a cada hora, começando com 100: N(t) = 100 · 2ᵗ. Depois de 3 horas: 100 · 8 = 800.',
          perguntas: [
            { p: 'Resolva 2ˣ = 64.', o: ['x = 5', 'x = 6', 'x = 8', 'x = 32'], c: 1, e: '64 = 2⁶. Bases iguais, então x = 6.' },
            { p: 'Resolva 3ˣ⁺¹ = 27.', o: ['x = 2', 'x = 3', 'x = 1', 'x = 9'], c: 0, e: '27 = 3³. Então x + 1 = 3, e x = 2.' },
            { p: 'A função f(x) = (1/2)ˣ é:', o: ['Crescente', 'Decrescente', 'Constante', 'Sempre negativa'], c: 1, e: 'A base 1/2 está entre 0 e 1, então a função é decrescente.' },
            { p: 'Se f(x) = 5ˣ, quanto vale f(0)?', o: ['0', '5', '1', '−5'], c: 2, e: 'Todo número (diferente de zero) elevado a zero dá 1.' },
            { p: 'Quanto é 2⁻³?', o: ['−8', '−6', '1/8', '1/6'], c: 2, e: 'Expoente negativo vira fração: 2⁻³ = 1/2³ = 1/8.' },
            { p: 'Bactérias dobram a cada hora, começando com 100. Quantas existem depois de 3 horas?', o: ['300', '600', '800', '900'], c: 2, e: '100 → 200 → 400 → 800. Ou seja, 100 · 2³ = 800.' },
            { p: 'Resolva 4ˣ = 8.', o: ['x = 2', 'x = 3/2', 'x = 2/3', 'x = 4'], c: 1, e: '4 = 2², então 4ˣ = 2²ˣ. E 8 = 2³. Logo 2x = 3 e x = 3/2.' },
            { p: 'R$ 1.000 a juros compostos de 10% ao mês. Quanto vira em 2 meses?', o: ['R$ 1.200', 'R$ 1.210', 'R$ 1.100', 'R$ 1.020'], c: 1, e: 'M = 1000 · 1,1² = 1000 · 1,21 = R$ 1.210.' }
          ],
          cartoes: [
            { f: 'Forma da função exponencial', v: 'f(x) = aˣ, com a > 0 e a ≠ 1' },
            { f: 'a > 1', v: 'Crescente.' },
            { f: '0 < a < 1', v: 'Decrescente.' },
            { f: 'Ponto onde toda exponencial passa', v: '(0, 1)' },
            { f: 'a⁰', v: '1' },
            { f: 'a⁻ⁿ', v: '1/aⁿ' },
            { f: 'aᵐ · aⁿ', v: 'aᵐ⁺ⁿ (soma os expoentes)' },
            { f: 'Juros compostos', v: 'M = C · (1 + i)ᵗ' }
          ]
        },
        {
          id: 'mat-log', titulo: 'Logaritmos',
          resumo: [
            { t: 'O que é', p: 'Logaritmo responde a pergunta: **"elevo a base a quanto pra chegar no número?"** Escreve-se **logₐ b = x**, que significa **aˣ = b**.' },
            { t: 'Exemplos', p: '**log₂ 8 = 3**, porque 2³ = 8.\n**log 100 = 2**, porque 10² = 100. Quando a base não aparece, ela é **10**.' },
            { t: 'Condições', p: 'A base precisa ser **positiva e diferente de 1**, e o número (logaritmando) precisa ser **positivo**.' },
            { t: 'Valores que você já sabe', p: '**logₐ 1 = 0** (porque a⁰ = 1)\n**logₐ a = 1** (porque a¹ = a)' },
            { t: 'Propriedades', p: '**log (b · c) = log b + log c**\n**log (b ÷ c) = log b − log c**\n**log bⁿ = n · log b**' },
            { t: 'Mudança de base', p: '**logₐ b = log b / log a**. Serve pra usar a calculadora, que costuma ter só base 10.' }
          ],
          exemplo: 'Sabendo que log 2 ≈ 0,30: log 8 = log 2³ = 3 · log 2 ≈ 0,90.',
          perguntas: [
            { p: 'Quanto é log₂ 32?', o: ['4', '5', '16', '6'], c: 1, e: '2 elevado a 5 dá 32, então log₂ 32 = 5.' },
            { p: 'Quanto é log 1000?', o: ['2', '3', '100', '10'], c: 1, e: 'Sem base escrita, a base é 10. 10³ = 1000, então o log é 3.' },
            { p: 'Quanto é log₃ 1?', o: ['1', '3', '0', 'Não existe'], c: 2, e: 'Todo número elevado a zero dá 1, então o log de 1 é sempre 0.' },
            { p: 'Quanto é log₅ 25 + log₅ 5?', o: ['2', '3', '30', '5'], c: 1, e: 'log₅ 25 = 2 e log₅ 5 = 1. Somando: 3.' },
            { p: 'Se log 2 ≈ 0,30, quanto vale log 8?', o: ['0,60', '0,90', '2,40', '0,80'], c: 1, e: 'log 8 = log 2³ = 3 · log 2 ≈ 3 · 0,30 = 0,90.' },
            { p: 'Pra logₐ b existir, é preciso que:', o: ['b > 0, a > 0 e a ≠ 1', 'b pode ser negativo', 'a = 1', 'a seja negativo'], c: 0, e: 'Base positiva e diferente de 1, e número positivo.' },
            { p: 'Quanto é log₂ (1/4)?', o: ['2', '−2', '1/2', '−1/2'], c: 1, e: '1/4 = 2⁻², então log₂ (1/4) = −2.' },
            { p: 'Se log 2 ≈ 0,30 e log 3 ≈ 0,48, quanto vale log 6?', o: ['0,78', '0,18', '1,44', '0,90'], c: 0, e: 'log 6 = log (2 · 3) = log 2 + log 3 ≈ 0,78.' }
          ],
          cartoes: [
            { f: 'logₐ b = x significa...', v: 'aˣ = b' },
            { f: 'log sem base escrita', v: 'Base 10.' },
            { f: 'logₐ 1', v: '0' },
            { f: 'logₐ a', v: '1' },
            { f: 'log (b · c)', v: 'log b + log c' },
            { f: 'log (b ÷ c)', v: 'log b − log c' },
            { f: 'log bⁿ', v: 'n · log b' },
            { f: 'Mudança de base', v: 'logₐ b = log b / log a' }
          ]
        },
        {
          id: 'mat-progressoes', titulo: 'Progressões (PA e PG)',
          resumo: [
            { t: 'Progressão aritmética (PA)', p: 'Uma sequência em que você **soma sempre o mesmo número**, chamado **razão (r)**. Ex.: 2, 5, 8, 11... (r = 3).' },
            { t: 'Fórmulas da PA', p: 'Termo geral: **aₙ = a₁ + (n − 1) · r**\nSoma dos n primeiros: **Sₙ = (a₁ + aₙ) · n / 2**' },
            { t: 'Progressão geométrica (PG)', p: 'Uma sequência em que você **multiplica sempre pelo mesmo número**, a **razão (q)**. Ex.: 3, 6, 12, 24... (q = 2).' },
            { t: 'Fórmulas da PG', p: 'Termo geral: **aₙ = a₁ · qⁿ⁻¹**\nSoma dos n primeiros: **Sₙ = a₁ · (qⁿ − 1) / (q − 1)**' },
            { t: 'PG infinita', p: 'Se a razão estiver entre −1 e 1, a soma de infinitos termos dá um número certinho: **S = a₁ / (1 − q)**.' },
            { t: 'Como descobrir a razão', p: 'Na PA: **r = a₂ − a₁** (subtrai). Na PG: **q = a₂ ÷ a₁** (divide).' }
          ],
          exemplo: 'PA (2, 5, 8, ...): o 10º termo é a₁₀ = 2 + 9 · 3 = 29.',
          perguntas: [
            { p: 'Qual é a razão da PA (2, 5, 8, ...)?', o: ['2', '3', '5', '8'], c: 1, e: 'r = 5 − 2 = 3.' },
            { p: 'Qual é o 10º termo da PA (2, 5, 8, ...)?', o: ['27', '29', '30', '32'], c: 1, e: 'a₁₀ = 2 + (10 − 1) · 3 = 2 + 27 = 29.' },
            { p: 'Qual é a razão da PG (3, 6, 12, ...)?', o: ['3', '2', '6', '9'], c: 1, e: 'q = 6 ÷ 3 = 2.' },
            { p: 'Qual é o 5º termo da PG (3, 6, 12, ...)?', o: ['24', '36', '48', '96'], c: 2, e: 'a₅ = 3 · 2⁴ = 3 · 16 = 48.' },
            { p: 'Quanto é 1 + 2 + 3 + ... + 10?', o: ['45', '50', '55', '100'], c: 2, e: 'S = (1 + 10) · 10 / 2 = 55.' },
            { p: 'A sequência (5, 5, 5, ...) é:', o: ['Só PA de razão 0', 'Só PG de razão 1', 'PA de razão 0 e PG de razão 1', 'Nenhuma das duas'], c: 2, e: 'Somando 0 ou multiplicando por 1, o número não muda. Então é as duas coisas.' },
            { p: 'Quanto é 1 + 1/2 + 1/4 + 1/8 + ... (pra sempre)?', o: ['1', '2', 'Infinito', '1,5'], c: 1, e: 'PG infinita com a₁ = 1 e q = 1/2: S = 1 / (1 − 1/2) = 2.' },
            { p: 'Julia guarda R$ 10 no 1º mês e R$ 5 a mais a cada mês. Quanto ela guarda no 12º mês?', o: ['R$ 60', 'R$ 65', 'R$ 70', 'R$ 55'], c: 1, e: 'É uma PA: a₁₂ = 10 + 11 · 5 = R$ 65.' }
          ],
          cartoes: [
            { f: 'PA', v: 'Soma sempre a mesma razão r.' },
            { f: 'PG', v: 'Multiplica sempre pela mesma razão q.' },
            { f: 'Termo geral da PA', v: 'aₙ = a₁ + (n − 1) · r' },
            { f: 'Soma da PA', v: 'Sₙ = (a₁ + aₙ) · n / 2' },
            { f: 'Termo geral da PG', v: 'aₙ = a₁ · qⁿ⁻¹' },
            { f: 'Soma da PG infinita', v: 'S = a₁ / (1 − q), com −1 < q < 1' },
            { f: 'Razão da PA', v: 'r = a₂ − a₁' },
            { f: 'Razão da PG', v: 'q = a₂ ÷ a₁' }
          ]
        },
        {
          id: 'mat-trigo', titulo: 'Trigonometria no triângulo retângulo',
          resumo: [
            { t: 'As partes do triângulo', p: 'O triângulo retângulo tem um ângulo de **90°**. O lado oposto a ele é a **hipotenusa** (o maior lado). Os outros dois são os **catetos**.' },
            { t: 'Teorema de Pitágoras', p: '**hipotenusa² = cateto² + cateto²**. Ex.: catetos 3 e 4 → hipotenusa 5, porque 9 + 16 = 25.' },
            { t: 'Seno, cosseno e tangente', p: 'Olhando de um ângulo:\n**sen = cateto oposto / hipotenusa**\n**cos = cateto adjacente / hipotenusa**\n**tan = cateto oposto / cateto adjacente**' },
            { t: 'Os ângulos notáveis', p: '**30°**: sen 1/2, cos √3/2, tan √3/3\n**45°**: sen √2/2, cos √2/2, tan 1\n**60°**: sen √3/2, cos 1/2, tan √3' },
            { t: 'Dica pra lembrar', p: 'Os senos de 30°, 45° e 60° são **1/2, √2/2, √3/2** (vai subindo 1, 2, 3 dentro da raiz). O cosseno é o **mesmo, de trás pra frente**.' }
          ],
          exemplo: 'Uma escada de 10 m apoiada na parede faz 60° com o chão. A altura que ela alcança é 10 · sen 60° = 10 · √3/2 ≈ 8,66 m.',
          perguntas: [
            { p: 'Um triângulo retângulo tem catetos 3 e 4. Quanto mede a hipotenusa?', o: ['5', '6', '7', '12'], c: 0, e: 'h² = 3² + 4² = 9 + 16 = 25, então h = 5.' },
            { p: 'Quanto vale sen 30°?', o: ['1/2', '√3/2', '√2/2', '1'], c: 0, e: 'sen 30° = 1/2. É o valor mais simples da tabela.' },
            { p: 'Quanto vale tan 45°?', o: ['0', '1/2', '1', '√3'], c: 2, e: 'Em 45° os dois catetos são iguais, então oposto ÷ adjacente = 1.' },
            { p: 'Uma escada de 10 m faz 60° com o chão. Que altura ela alcança na parede?', o: ['5 m', 'cerca de 8,66 m', '10 m', 'cerca de 7,07 m'], c: 1, e: 'A altura é o cateto oposto ao ângulo: 10 · sen 60° = 10 · √3/2 ≈ 8,66 m.' },
            { p: 'Hipotenusa 13 e um cateto 5. Quanto mede o outro cateto?', o: ['8', '12', '18', '10'], c: 1, e: '13² = 5² + c² → 169 = 25 + c² → c² = 144 → c = 12.' },
            { p: 'O cosseno de um ângulo é:', o: ['Oposto / hipotenusa', 'Adjacente / hipotenusa', 'Oposto / adjacente', 'Hipotenusa / oposto'], c: 1, e: 'Cosseno = cateto adjacente (o que encosta no ângulo) dividido pela hipotenusa.' },
            { p: 'Cateto oposto 6 e hipotenusa 12. Qual é o ângulo?', o: ['30°', '45°', '60°', '90°'], c: 0, e: 'sen = 6/12 = 1/2. O ângulo com seno 1/2 é 30°.' },
            { p: 'Quanto vale cos 60°?', o: ['√3/2', '1/2', '1', '√2/2'], c: 1, e: 'cos 60° = 1/2, o mesmo valor do sen 30°.' }
          ],
          cartoes: [
            { f: 'Hipotenusa', v: 'O lado oposto ao ângulo de 90°. É o maior lado.' },
            { f: 'Teorema de Pitágoras', v: 'hip² = cat² + cat²' },
            { f: 'Seno', v: 'cateto oposto / hipotenusa' },
            { f: 'Cosseno', v: 'cateto adjacente / hipotenusa' },
            { f: 'Tangente', v: 'cateto oposto / cateto adjacente' },
            { f: 'sen 30°', v: '1/2' },
            { f: 'sen 60°', v: '√3/2' },
            { f: 'tan 45°', v: '1' }
          ]
        }
      ],
      2: [
        { id: 'mat-trigociclo', titulo: 'Trigonometria no ciclo' },
        { id: 'mat-matrizes', titulo: 'Matrizes e determinantes' },
        { id: 'mat-sistemas', titulo: 'Sistemas lineares' },
        { id: 'mat-combinatoria', titulo: 'Análise combinatória' },
        { id: 'mat-probabilidade', titulo: 'Probabilidade' },
        { id: 'mat-espacial', titulo: 'Geometria espacial' }
      ],
      3: [
        { id: 'mat-analitica', titulo: 'Geometria analítica' },
        { id: 'mat-circunferencia', titulo: 'Circunferência' },
        { id: 'mat-complexos', titulo: 'Números complexos' },
        { id: 'mat-polinomios', titulo: 'Polinômios' },
        { id: 'mat-estatistica', titulo: 'Estatística' },
        { id: 'mat-financeira', titulo: 'Matemática financeira' }
      ]
    }
  },

  {
    id: 'por', nome: 'Português',
    anos: {
      1: [
        {
          id: 'por-figuras', titulo: 'Figuras de linguagem',
          resumo: [
            { t: 'Pra que servem', p: 'Figuras de linguagem são jeitos de usar as palavras fora do sentido comum pra deixar a frase **mais expressiva**. Caem muito em prova de interpretação.' },
            { t: 'Comparação e metáfora', p: '**Comparação**: compara com uma palavra de ligação (como, igual a, feito). "Ela é forte **como** um touro."\n**Metáfora**: compara direto, sem a palavrinha. "Ela é uma flor."' },
            { t: 'Metonímia', p: 'Troca uma palavra por outra que tem ligação com ela. "Li **Machado de Assis**" (o autor no lugar da obra). "Bebi um **copo** de água" (o recipiente no lugar do conteúdo).' },
            { t: 'Hipérbole e eufemismo', p: '**Hipérbole**: exagero. "Chorei rios de lágrimas."\n**Eufemismo**: suaviza algo pesado. "Ele partiu desta pra melhor" (no lugar de "morreu").' },
            { t: 'Personificação e ironia', p: '**Personificação (prosopopeia)**: dá atitude de gente a coisas ou animais. "O vento sussurrava."\n**Ironia**: diz o contrário do que quer dizer. "Que nota linda, hein? Zero!"' },
            { t: 'Antítese e paradoxo', p: '**Antítese**: ideias opostas lado a lado. "Nasce o sol, e não dura mais que um dia."\n**Paradoxo**: ideias opostas que parecem impossíveis juntas. "Amor é fogo que arde sem se ver" (Camões).' },
            { t: 'Sons', p: '**Onomatopeia**: imita um som. "O relógio fazia tique-taque."\n**Aliteração**: repete sons de consoantes. "O rato roeu a roupa do rei de Roma."' }
          ],
          exemplo: '"Meu coração é um balde despejado" (metáfora). "Já te disse um milhão de vezes" (hipérbole).',
          perguntas: [
            { p: '"Ela é forte como um touro." Qual é a figura?', o: ['Metáfora', 'Comparação', 'Hipérbole', 'Ironia'], c: 1, e: 'Tem a palavra "como" ligando os dois termos: é comparação.' },
            { p: '"Ela é uma flor." Qual é a figura?', o: ['Comparação', 'Metáfora', 'Metonímia', 'Eufemismo'], c: 1, e: 'Compara direto, sem "como": é metáfora.' },
            { p: '"Li Machado de Assis nas férias." Qual é a figura?', o: ['Metonímia', 'Personificação', 'Antítese', 'Hipérbole'], c: 0, e: 'O nome do autor está no lugar da obra dele: é metonímia.' },
            { p: '"Chorei rios de lágrimas." Qual é a figura?', o: ['Eufemismo', 'Hipérbole', 'Paradoxo', 'Onomatopeia'], c: 1, e: 'É um exagero proposital: hipérbole.' },
            { p: '"O vento sussurrava segredos." Qual é a figura?', o: ['Personificação', 'Metonímia', 'Ironia', 'Comparação'], c: 0, e: 'Sussurrar é coisa de gente, e foi dado ao vento: personificação.' },
            { p: '"Ele partiu desta para melhor." Qual é a figura?', o: ['Hipérbole', 'Ironia', 'Eufemismo', 'Antítese'], c: 2, e: 'Suaviza a ideia de morrer: eufemismo.' },
            { p: '"Que bela nota, hein? Tirou zero!" Qual é a figura?', o: ['Ironia', 'Metáfora', 'Paradoxo', 'Aliteração'], c: 0, e: 'Diz "bela" querendo dizer o contrário: ironia.' },
            { p: '"É dor que desatina sem doer" (Camões). Qual é a figura?', o: ['Comparação', 'Paradoxo', 'Onomatopeia', 'Metonímia'], c: 1, e: 'Uma dor que não dói junta ideias opostas que parecem impossíveis: paradoxo.' }
          ],
          cartoes: [
            { f: 'Comparação', v: 'Compara usando "como", "igual a"... Ex.: forte como um touro.' },
            { f: 'Metáfora', v: 'Compara direto, sem "como". Ex.: ela é uma flor.' },
            { f: 'Metonímia', v: 'Troca por algo ligado. Ex.: li Machado de Assis.' },
            { f: 'Hipérbole', v: 'Exagero. Ex.: chorei rios de lágrimas.' },
            { f: 'Eufemismo', v: 'Suaviza algo pesado. Ex.: partiu desta pra melhor.' },
            { f: 'Personificação', v: 'Coisa ou bicho agindo como gente. Ex.: o vento sussurrava.' },
            { f: 'Antítese x paradoxo', v: 'Antítese: opostos lado a lado. Paradoxo: opostos que parecem impossíveis juntos.' },
            { f: 'Onomatopeia', v: 'Palavra que imita som. Ex.: tique-taque.' }
          ]
        },
        { id: 'por-classes', titulo: 'Classes de palavras' },
        { id: 'por-ortografia', titulo: 'Fonética e ortografia' },
        { id: 'por-interpretacao', titulo: 'Interpretação de texto' },
        { id: 'por-generos', titulo: 'Gêneros textuais' }
      ],
      2: [
        { id: 'por-verbos', titulo: 'Verbos' },
        { id: 'por-termos', titulo: 'Termos da oração' },
        { id: 'por-concordancia', titulo: 'Concordância verbal e nominal' },
        { id: 'por-regencia', titulo: 'Regência e crase' }
      ],
      3: [
        { id: 'por-periodo', titulo: 'Período composto' },
        { id: 'por-pontuacao', titulo: 'Pontuação' },
        { id: 'por-colocacao', titulo: 'Colocação pronominal' },
        { id: 'por-variacao', titulo: 'Variação linguística' }
      ]
    }
  },

  {
    id: 'lit', nome: 'Literatura',
    anos: {
      1: [
        { id: 'lit-intro', titulo: 'Introdução à literatura' },
        { id: 'lit-trovadorismo', titulo: 'Trovadorismo' },
        { id: 'lit-classicismo', titulo: 'Humanismo e Classicismo' },
        { id: 'lit-quinhentismo', titulo: 'Quinhentismo' },
        {
          id: 'lit-barroco', titulo: 'Barroco',
          resumo: [
            { t: 'Quando e onde', p: 'O Barroco foi o estilo do **século XVII**. No Brasil, começa em **1601** com o poema **"Prosopopeia", de Bento Teixeira**.' },
            { t: 'O contexto', p: 'A Europa vivia a **Contrarreforma**: a Igreja Católica reagindo à Reforma Protestante. As pessoas ficavam divididas entre a **fé** e os **prazeres da vida**, entre o **céu** e a **terra**.' },
            { t: 'A cara do Barroco', p: 'Tudo é **conflito e exagero**: muitas **antíteses** e **paradoxos**, sentimento de culpa, a vida passando rápido (efemeridade) e linguagem rebuscada.' },
            { t: 'Cultismo e conceptismo', p: '**Cultismo (gongorismo)**: jogo de **palavras e imagens**, muito enfeite.\n**Conceptismo (quevedismo)**: jogo de **ideias**, raciocínio e argumentação.' },
            { t: 'Gregório de Matos', p: 'O principal poeta barroco no Brasil, apelidado de **"Boca do Inferno"** pelas **sátiras** que criticavam a sociedade da Bahia. Também escreveu poesia lírica (amorosa) e religiosa.' },
            { t: 'Padre Antônio Vieira', p: 'O grande nome da prosa barroca, famoso pelos **sermões**, como o **"Sermão da Sexagésima"**. Usava muito o **conceptismo**, convencendo com argumentos.' }
          ],
          exemplo: 'Gregório de Matos: "Nasce o Sol, e não dura mais que um dia, / Depois da Luz se segue a noite escura". Repara na antítese (luz e noite) e na vida passando rápido.',
          perguntas: [
            { p: 'Qual obra marca o início do Barroco no Brasil?', o: ['Os Lusíadas', 'Prosopopeia', 'Iracema', 'Marília de Dirceu'], c: 1, e: '"Prosopopeia", de Bento Teixeira (1601), é o marco inicial.' },
            { p: 'Quem ficou conhecido como "Boca do Inferno"?', o: ['Padre Antônio Vieira', 'Gregório de Matos', 'Camões', 'Bento Teixeira'], c: 1, e: 'Gregório de Matos ganhou o apelido por causa das sátiras ferinas contra a sociedade baiana.' },
            { p: 'O jogo de ideias e argumentos no Barroco se chama:', o: ['Cultismo', 'Conceptismo', 'Arcadismo', 'Humanismo'], c: 1, e: 'Conceptismo é o jogo de ideias. Cultismo é o jogo de palavras e imagens.' },
            { p: 'O Barroco aconteceu em qual contexto religioso?', o: ['Contrarreforma', 'Iluminismo', 'Revolução Francesa', 'Renascimento'], c: 0, e: 'A Igreja reagia à Reforma Protestante: era a Contrarreforma.' },
            { p: 'Qual figura de linguagem é mais típica do Barroco?', o: ['Onomatopeia', 'Antítese', 'Eufemismo', 'Metonímia'], c: 1, e: 'O Barroco vive de opostos (céu e terra, fé e prazer), então a antítese aparece demais.' },
            { p: 'Padre Antônio Vieira ficou famoso por escrever:', o: ['Sonetos de amor', 'Sermões', 'Romances', 'Peças de teatro'], c: 1, e: 'Vieira é o grande autor dos sermões, como o "Sermão da Sexagésima".' }
          ],
          cartoes: [
            { f: 'Século do Barroco', v: 'Século XVII (1600s).' },
            { f: 'Marco inicial do Barroco no Brasil', v: '"Prosopopeia", de Bento Teixeira (1601).' },
            { f: 'Cultismo', v: 'Jogo de palavras e imagens (gongorismo).' },
            { f: 'Conceptismo', v: 'Jogo de ideias e argumentos (quevedismo).' },
            { f: '"Boca do Inferno"', v: 'Gregório de Matos, poeta satírico da Bahia.' },
            { f: 'Padre Antônio Vieira', v: 'Autor dos sermões, como o "Sermão da Sexagésima".' },
            { f: 'Tema central do Barroco', v: 'Conflito: fé x prazer, céu x terra, vida passando rápido.' }
          ]
        },
        { id: 'lit-arcadismo', titulo: 'Arcadismo' }
      ],
      2: [
        { id: 'lit-romantismo', titulo: 'Romantismo' },
        { id: 'lit-realismo', titulo: 'Realismo e Naturalismo' },
        { id: 'lit-parnasianismo', titulo: 'Parnasianismo' },
        { id: 'lit-simbolismo', titulo: 'Simbolismo' }
      ],
      3: [
        { id: 'lit-premodernismo', titulo: 'Pré-Modernismo' },
        { id: 'lit-modernismo1', titulo: 'Semana de 22 e 1ª fase modernista' },
        { id: 'lit-modernismo2', titulo: '2ª fase modernista' },
        { id: 'lit-contemporanea', titulo: 'Geração de 45 e literatura atual' }
      ]
    }
  },

  { id: 'red', nome: 'Redação', especial: 'redacao', anos: { 1: [], 2: [], 3: [] } },

  {
    id: 'fis', nome: 'Física',
    anos: {
      1: [
        { id: 'fis-grandezas', titulo: 'Grandezas e unidades' },
        {
          id: 'fis-mru', titulo: 'Velocidade média e MRU',
          resumo: [
            { t: 'Velocidade média', p: 'É quanto você andou dividido pelo tempo que levou: **vm = Δs / Δt**. O **Δ** (delta) quer dizer "variação": posição final menos posição inicial.' },
            { t: 'Unidades', p: 'No Sistema Internacional, velocidade é em **m/s**. No dia a dia, usamos **km/h**.\n**km/h → m/s**: divide por **3,6**\n**m/s → km/h**: multiplica por **3,6**' },
            { t: 'MRU', p: '**Movimento Retilíneo Uniforme**: em linha reta e com **velocidade constante**. A cada segundo, o objeto anda a mesma distância.' },
            { t: 'Função horária', p: '**s = s₀ + v · t**\n**s** = posição no instante t\n**s₀** = posição inicial\n**v** = velocidade\n**t** = tempo' },
            { t: 'Progressivo ou retrógrado', p: '**Progressivo**: anda a favor da trajetória (v positiva).\n**Retrógrado**: anda contra a trajetória (v negativa).' }
          ],
          exemplo: 'Um carro anda 120 km em 2 h: vm = 120 / 2 = 60 km/h. Em m/s: 60 ÷ 3,6 ≈ 16,7 m/s.',
          perguntas: [
            { p: 'Um carro percorre 120 km em 2 horas. Qual a velocidade média?', o: ['240 km/h', '60 km/h', '122 km/h', '30 km/h'], c: 1, e: 'vm = 120 ÷ 2 = 60 km/h.' },
            { p: 'Quanto é 72 km/h em m/s?', o: ['20 m/s', '72 m/s', '259,2 m/s', '7,2 m/s'], c: 0, e: 'De km/h pra m/s divide por 3,6: 72 ÷ 3,6 = 20 m/s.' },
            { p: 'Na função s = 10 + 5t (SI), qual a posição em t = 4 s?', o: ['20 m', '30 m', '15 m', '50 m'], c: 1, e: 's = 10 + 5 · 4 = 10 + 20 = 30 m.' },
            { p: 'Na função s = 10 + 5t, qual é a velocidade?', o: ['10 m/s', '5 m/s', '15 m/s', '2 m/s'], c: 1, e: 'Na forma s = s₀ + vt, o número que multiplica o t é a velocidade: 5 m/s.' },
            { p: 'A 90 km/h, quanto tempo leva pra andar 45 km?', o: ['2 h', '30 minutos', '45 minutos', '1 h'], c: 1, e: 't = Δs ÷ v = 45 ÷ 90 = 0,5 h = 30 minutos.' },
            { p: 'Quanto é 20 m/s em km/h?', o: ['72 km/h', '5,5 km/h', '20 km/h', '36 km/h'], c: 0, e: 'De m/s pra km/h multiplica por 3,6: 20 · 3,6 = 72 km/h.' },
            { p: 'No MRU, a velocidade é:', o: ['Sempre aumentando', 'Constante', 'Sempre zero', 'Diminuindo'], c: 1, e: 'Uniforme quer dizer velocidade constante.' }
          ],
          cartoes: [
            { f: 'Velocidade média', v: 'vm = Δs / Δt' },
            { f: 'km/h → m/s', v: 'Divide por 3,6.' },
            { f: 'm/s → km/h', v: 'Multiplica por 3,6.' },
            { f: 'MRU', v: 'Linha reta e velocidade constante.' },
            { f: 'Função horária do MRU', v: 's = s₀ + v · t' },
            { f: 'Movimento retrógrado', v: 'Contra a trajetória (v negativa).' }
          ]
        },
        { id: 'fis-muv', titulo: 'Movimento variado (MUV)' },
        { id: 'fis-queda', titulo: 'Queda livre' },
        { id: 'fis-newton', titulo: 'Leis de Newton' },
        { id: 'fis-energia', titulo: 'Trabalho e energia' }
      ],
      2: [
        { id: 'fis-termologia', titulo: 'Termologia' },
        { id: 'fis-calorimetria', titulo: 'Calorimetria' },
        { id: 'fis-optica', titulo: 'Óptica' },
        { id: 'fis-ondas', titulo: 'Ondas' }
      ],
      3: [
        { id: 'fis-eletrostatica', titulo: 'Eletrostática' },
        { id: 'fis-corrente', titulo: 'Corrente elétrica' },
        { id: 'fis-circuitos', titulo: 'Circuitos elétricos' },
        { id: 'fis-magnetismo', titulo: 'Magnetismo' }
      ]
    }
  },

  {
    id: 'qui', nome: 'Química',
    anos: {
      1: [
        { id: 'qui-materia', titulo: 'Matéria e suas propriedades' },
        {
          id: 'qui-modelos', titulo: 'Modelos atômicos',
          resumo: [
            { t: 'Por que tantos modelos', p: 'Ninguém consegue ver um átomo a olho nu. Então os cientistas criaram **modelos**, e cada novo experimento foi melhorando o anterior.' },
            { t: 'Dalton (1808)', p: 'Átomo como uma **bolinha maciça e indivisível**, tipo uma **bola de bilhar**.' },
            { t: 'Thomson (1897)', p: 'Descobriu o **elétron**. O átomo seria uma massa positiva com elétrons espalhados, o famoso **"pudim de passas"**.' },
            { t: 'Rutherford (1911)', p: 'Com o experimento da **folha de ouro**, viu que o átomo é quase todo **vazio**, com um **núcleo pequeno, denso e positivo** e os elétrons girando em volta: o **modelo planetário**.' },
            { t: 'Bohr (1913)', p: 'Os elétrons ficam em **camadas (níveis de energia)**. Quando um elétron pula pra uma camada mais baixa, ele **solta energia em forma de luz**.' },
            { t: 'As partículas', p: '**Próton**: carga positiva, no núcleo.\n**Nêutron**: sem carga, no núcleo.\n**Elétron**: carga negativa, na eletrosfera.' },
            { t: 'Número atômico e de massa', p: '**Z (número atômico)** = número de prótons.\n**A (número de massa)** = prótons + nêutrons.\nNo átomo neutro, **elétrons = prótons**.' }
          ],
          exemplo: 'Sódio: Z = 11 e A = 23. Prótons = 11, nêutrons = 23 − 11 = 12, elétrons = 11.',
          perguntas: [
            { p: 'Um átomo tem Z = 11 e A = 23. Quantos nêutrons ele tem?', o: ['11', '12', '23', '34'], c: 1, e: 'Nêutrons = A − Z = 23 − 11 = 12.' },
            { p: 'Qual cientista propôs o modelo do "pudim de passas"?', o: ['Dalton', 'Thomson', 'Rutherford', 'Bohr'], c: 1, e: 'Thomson, depois de descobrir o elétron.' },
            { p: 'O experimento da folha de ouro mostrou que o átomo tem um núcleo pequeno e denso. Quem fez?', o: ['Rutherford', 'Dalton', 'Bohr', 'Thomson'], c: 0, e: 'Rutherford concluiu que o átomo é quase todo vazio, com um núcleo central.' },
            { p: 'Em qual modelo o elétron libera luz ao pular de camada?', o: ['Dalton', 'Thomson', 'Rutherford', 'Bohr'], c: 3, e: 'Bohr explicou os níveis de energia e a emissão de luz.' },
            { p: 'Pra Dalton, o átomo era:', o: ['Uma esfera maciça e indivisível', 'Um pudim de passas', 'Um sistema planetário', 'Feito de camadas'], c: 0, e: 'O modelo de Dalton é a "bola de bilhar".' },
            { p: 'Um átomo neutro tem 17 prótons. Quantos elétrons ele tem?', o: ['17', '18', '34', '0'], c: 0, e: 'Átomo neutro tem o mesmo número de prótons e elétrons.' },
            { p: 'Qual partícula fica na eletrosfera?', o: ['Próton', 'Nêutron', 'Elétron', 'Núcleo'], c: 2, e: 'O elétron fica em volta do núcleo, na eletrosfera.' }
          ],
          cartoes: [
            { f: 'Modelo de Dalton', v: 'Bola de bilhar: maciço e indivisível.' },
            { f: 'Modelo de Thomson', v: 'Pudim de passas. Descobriu o elétron.' },
            { f: 'Modelo de Rutherford', v: 'Planetário: núcleo pequeno e denso, átomo quase vazio.' },
            { f: 'Modelo de Bohr', v: 'Elétrons em camadas. Pular de camada libera luz.' },
            { f: 'Z (número atômico)', v: 'Número de prótons.' },
            { f: 'A (número de massa)', v: 'Prótons + nêutrons.' },
            { f: 'Carga do nêutron', v: 'Nenhuma (neutra).' }
          ]
        },
        { id: 'qui-tabela', titulo: 'Tabela periódica' },
        { id: 'qui-ligacoes', titulo: 'Ligações químicas' },
        { id: 'qui-inorganicas', titulo: 'Funções inorgânicas' },
        { id: 'qui-reacoes', titulo: 'Reações químicas' }
      ],
      2: [
        { id: 'qui-solucoes', titulo: 'Soluções' },
        { id: 'qui-termoquimica', titulo: 'Termoquímica' },
        { id: 'qui-cinetica', titulo: 'Cinética química' },
        { id: 'qui-equilibrio', titulo: 'Equilíbrio químico' },
        { id: 'qui-eletroquimica', titulo: 'Eletroquímica' }
      ],
      3: [
        { id: 'qui-organica', titulo: 'Introdução à química orgânica' },
        { id: 'qui-funcoesorg', titulo: 'Funções orgânicas' },
        { id: 'qui-isomeria', titulo: 'Isomeria' },
        { id: 'qui-reacoesorg', titulo: 'Reações orgânicas' }
      ]
    }
  },

  {
    id: 'bio', nome: 'Biologia',
    anos: {
      1: [
        { id: 'bio-origem', titulo: 'Origem da vida' },
        { id: 'bio-bioquimica', titulo: 'Bioquímica celular' },
        {
          id: 'bio-citologia', titulo: 'Citologia (a célula)',
          resumo: [
            { t: 'A célula', p: 'A célula é a **menor unidade da vida**. Todo ser vivo é feito de uma ou de muitas células (vírus são a exceção, porque não têm células).' },
            { t: 'Procarionte x eucarionte', p: '**Procarionte**: sem núcleo organizado, o DNA fica solto no citoplasma. Ex.: **bactérias**.\n**Eucarionte**: tem **núcleo** com membrana (carioteca). Ex.: animais, plantas e fungos.' },
            { t: 'As três partes básicas', p: '**Membrana plasmática**: controla o que entra e sai (permeabilidade seletiva).\n**Citoplasma**: o "recheio", onde ficam as organelas.\n**Núcleo**: guarda o **DNA** e comanda a célula.' },
            { t: 'Organelas de energia e produção', p: '**Mitocôndria**: faz a **respiração celular** e produz energia (ATP).\n**Ribossomo**: fabrica **proteínas**.\n**Retículo endoplasmático**: o rugoso ajuda a fazer proteínas, o liso faz lipídios.' },
            { t: 'Organelas de entrega e limpeza', p: '**Complexo golgiense**: empacota e envia substâncias.\n**Lisossomo**: faz a **digestão** dentro da célula.' },
            { t: 'Só na célula vegetal', p: '**Cloroplasto**: faz a **fotossíntese**.\n**Parede celular** de **celulose**: dá rigidez.\n**Vacúolo** grande: guarda água.' }
          ],
          exemplo: 'Uma célula da folha tem cloroplastos (fotossíntese) e também mitocôndrias (respiração). Planta respira, sim!',
          perguntas: [
            { p: 'Qual organela produz energia por meio da respiração celular?', o: ['Ribossomo', 'Mitocôndria', 'Lisossomo', 'Complexo golgiense'], c: 1, e: 'A mitocôndria faz a respiração celular e produz ATP.' },
            { p: 'Bactérias são exemplos de células:', o: ['Eucariontes', 'Procariontes', 'Vegetais', 'Animais'], c: 1, e: 'Bactérias não têm núcleo organizado: são procariontes.' },
            { p: 'Qual organela fabrica proteínas?', o: ['Ribossomo', 'Cloroplasto', 'Vacúolo', 'Lisossomo'], c: 0, e: 'Os ribossomos montam as proteínas.' },
            { p: 'O que existe na célula vegetal e não existe na animal?', o: ['Mitocôndria', 'Núcleo', 'Cloroplasto', 'Ribossomo'], c: 2, e: 'O cloroplasto (fotossíntese) é exclusivo de plantas e algas. Mitocôndria as duas têm.' },
            { p: 'A digestão dentro da célula é feita pelo:', o: ['Lisossomo', 'Núcleo', 'Ribossomo', 'Centríolo'], c: 0, e: 'O lisossomo tem enzimas que digerem substâncias.' },
            { p: 'A membrana plasmática tem a função de:', o: ['Fazer fotossíntese', 'Controlar o que entra e sai da célula', 'Guardar o DNA', 'Produzir proteínas'], c: 1, e: 'Ela é seletiva: escolhe o que entra e o que sai.' },
            { p: 'Onde fica o DNA numa célula eucarionte?', o: ['No núcleo', 'Na parede celular', 'No vacúolo', 'No lisossomo'], c: 0, e: 'Nos eucariontes, o DNA fica protegido dentro do núcleo.' }
          ],
          cartoes: [
            { f: 'Mitocôndria', v: 'Respiração celular: produz energia (ATP).' },
            { f: 'Ribossomo', v: 'Fabrica proteínas.' },
            { f: 'Lisossomo', v: 'Digestão dentro da célula.' },
            { f: 'Complexo golgiense', v: 'Empacota e envia substâncias.' },
            { f: 'Cloroplasto', v: 'Fotossíntese. Só em plantas e algas.' },
            { f: 'Procarionte', v: 'Sem núcleo organizado. Ex.: bactéria.' },
            { f: 'Eucarionte', v: 'Com núcleo. Ex.: animais, plantas, fungos.' },
            { f: 'Membrana plasmática', v: 'Controla o que entra e sai da célula.' }
          ]
        },
        { id: 'bio-divisao', titulo: 'Divisão celular' },
        { id: 'bio-histologia', titulo: 'Histologia (tecidos)' }
      ],
      2: [
        { id: 'bio-classificacao', titulo: 'Classificação dos seres vivos' },
        { id: 'bio-botanica', titulo: 'Botânica' },
        { id: 'bio-zoologia', titulo: 'Zoologia' },
        { id: 'bio-fisiologia', titulo: 'Fisiologia humana' }
      ],
      3: [
        { id: 'bio-genetica', titulo: 'Genética' },
        { id: 'bio-evolucao', titulo: 'Evolução' },
        { id: 'bio-ecologia', titulo: 'Ecologia' }
      ]
    }
  },

  {
    id: 'his', nome: 'História',
    anos: {
      1: [
        { id: 'his-prehistoria', titulo: 'Pré-história' },
        { id: 'his-antiguidade', titulo: 'Mesopotâmia e Egito' },
        {
          id: 'his-grecia', titulo: 'Grécia Antiga',
          resumo: [
            { t: 'As cidades-Estado', p: 'A Grécia Antiga não era um país único. Era formada por várias **pólis (cidades-Estado)** independentes, cada uma com governo e leis próprias. As mais famosas: **Atenas** e **Esparta**.' },
            { t: 'Atenas e a democracia', p: 'Atenas criou a **democracia** (poder do povo), com reformas de **Clístenes** no século VI a.C. Era **direta**: os cidadãos votavam nas assembleias. Mas só era cidadão o **homem adulto, livre e filho de atenienses**. Mulheres, escravizados e estrangeiros (**metecos**) ficavam de fora.' },
            { t: 'Esparta', p: 'Cidade **militarista**: os meninos treinavam pra guerra desde cedo. O governo era uma **oligarquia** (poder de poucos), com **dois reis** (diarquia).' },
            { t: 'Guerras', p: '**Guerras Médicas**: gregos contra o Império **Persa**, e os gregos venceram.\n**Guerra do Peloponeso** (431 a 404 a.C.): **Atenas contra Esparta**, e Esparta venceu. A guerra enfraqueceu toda a Grécia.' },
            { t: 'Período Helenístico', p: '**Alexandre, o Grande**, rei da Macedônia, conquistou um império enorme e espalhou a cultura grega por ele. Essa mistura de culturas é o **helenismo**.' },
            { t: 'O que ficou pra nós', p: '**Democracia**, **filosofia** (Sócrates, Platão, Aristóteles), **teatro** (tragédia e comédia), **Jogos Olímpicos** e muita base da matemática e da ciência.' }
          ],
          exemplo: 'Num ditado de prova: "Democracia direta em Atenas" quer dizer que o próprio cidadão votava na assembleia, sem eleger representantes.',
          perguntas: [
            { p: 'Como eram chamadas as cidades-Estado gregas?', o: ['Feudos', 'Pólis', 'Províncias', 'Capitanias'], c: 1, e: 'Cada pólis era independente, com governo próprio.' },
            { p: 'Quem podia votar na democracia de Atenas?', o: ['Todos os moradores', 'Homens adultos livres, filhos de atenienses', 'Mulheres e homens livres', 'Estrangeiros ricos'], c: 1, e: 'Só os cidadãos: homens adultos, livres e filhos de atenienses.' },
            { p: 'Esparta era conhecida por ser:', o: ['Democrática', 'Militarista', 'Comerciante', 'Filosófica'], c: 1, e: 'Esparta treinava os meninos pra guerra desde cedo.' },
            { p: 'A Guerra do Peloponeso foi entre:', o: ['Gregos e persas', 'Atenas e Esparta', 'Roma e Grécia', 'Esparta e Macedônia'], c: 1, e: 'Atenas e Esparta disputaram o domínio da Grécia, e Esparta venceu.' },
            { p: 'Quem espalhou a cultura grega pelo Oriente, criando o helenismo?', o: ['Péricles', 'Alexandre, o Grande', 'Júlio César', 'Sócrates'], c: 1, e: 'Alexandre, rei da Macedônia, levou a cultura grega por todo o seu império.' },
            { p: 'Na democracia ateniense, os metecos eram:', o: ['Os reis', 'Os estrangeiros', 'Os soldados', 'Os filósofos'], c: 1, e: 'Metecos eram estrangeiros que moravam em Atenas e não votavam.' }
          ],
          cartoes: [
            { f: 'Pólis', v: 'Cidade-Estado grega, independente.' },
            { f: 'Democracia ateniense', v: 'Direta, mas só pra homens adultos, livres e filhos de atenienses.' },
            { f: 'Esparta', v: 'Militarista, oligarquia com dois reis.' },
            { f: 'Guerras Médicas', v: 'Gregos x persas. Gregos venceram.' },
            { f: 'Guerra do Peloponeso', v: 'Atenas x Esparta (431–404 a.C.). Esparta venceu.' },
            { f: 'Helenismo', v: 'Mistura da cultura grega com a oriental, espalhada por Alexandre, o Grande.' },
            { f: 'Metecos', v: 'Estrangeiros em Atenas, sem direito a voto.' }
          ]
        },
        { id: 'his-roma', titulo: 'Roma Antiga' },
        { id: 'his-medieval', titulo: 'Idade Média' },
        { id: 'his-renascimento', titulo: 'Renascimento e Reforma' }
      ],
      2: [
        { id: 'his-navegacoes', titulo: 'Grandes Navegações' },
        { id: 'his-colonia', titulo: 'Brasil Colônia' },
        { id: 'his-iluminismo', titulo: 'Iluminismo e revoluções' },
        { id: 'his-independencia', titulo: 'Independência do Brasil' },
        { id: 'his-imperio', titulo: 'Brasil Império' }
      ],
      3: [
        { id: 'his-republica', titulo: 'República Velha' },
        { id: 'his-guerra1', titulo: 'Primeira Guerra Mundial' },
        { id: 'his-vargas', titulo: 'Era Vargas' },
        { id: 'his-guerra2', titulo: 'Segunda Guerra Mundial' },
        { id: 'his-guerrafria', titulo: 'Guerra Fria' },
        { id: 'his-ditadura', titulo: 'Ditadura Militar no Brasil' }
      ]
    }
  },

  {
    id: 'geo', nome: 'Geografia',
    anos: {
      1: [
        {
          id: 'geo-cartografia', titulo: 'Cartografia',
          resumo: [
            { t: 'Pontos cardeais', p: '**Cardeais**: Norte (N), Sul (S), Leste (L) e Oeste (O).\n**Colaterais** ficam no meio: Nordeste (NE), Sudeste (SE), Sudoeste (SO) e Noroeste (NO).' },
            { t: 'Latitude', p: 'É a distância até a **linha do Equador**, medida em graus. Vai de **0° a 90°**, pro **Norte** ou pro **Sul**. O Equador divide a Terra nos hemisférios Norte e Sul.' },
            { t: 'Longitude', p: 'É a distância até o **Meridiano de Greenwich** (Londres). Vai de **0° a 180°**, pro **Leste** ou pro **Oeste**.' },
            { t: 'Escala', p: 'Mostra quantas vezes o lugar real foi reduzido. Na escala **1:100.000**, **1 cm no mapa = 100.000 cm no real = 1 km**.\nDica: pra virar cm em km, corta **cinco zeros**.' },
            { t: 'Projeções', p: 'Passar a Terra redonda pro papel sempre distorce algo.\n**Cilíndrica (Mercator)**: boa pra navegar, mas aumenta as áreas perto dos polos (a Groenlândia parece gigante).\n**Cônica** e **azimutal (plana)** são outros tipos.' },
            { t: 'Fusos horários', p: 'A Terra tem **24 fusos**, cada um com **15°** (360 ÷ 24). Indo pro **Leste**, a hora fica **adiantada**. Brasília é **UTC−3** (3 horas a menos que Greenwich).' }
          ],
          exemplo: 'Mapa na escala 1:50.000: 4 cm no mapa = 200.000 cm = 2 km no real.',
          perguntas: [
            { p: 'Num mapa de escala 1:50.000, 4 cm valem quanto no real?', o: ['200 m', '2 km', '20 km', '50 km'], c: 1, e: '4 · 50.000 = 200.000 cm. Cortando cinco zeros: 2 km.' },
            { p: 'Qual linha divide a Terra em hemisférios Norte e Sul?', o: ['Greenwich', 'Equador', 'Trópico de Capricórnio', 'Círculo Polar'], c: 1, e: 'A linha do Equador separa Norte e Sul.' },
            { p: 'O Meridiano de Greenwich é a referência pra:', o: ['Latitude', 'Longitude', 'Altitude', 'Escala'], c: 1, e: 'A longitude é medida a partir de Greenwich, pra Leste ou Oeste.' },
            { p: 'Qual é a latitude máxima?', o: ['45°', '90°', '180°', '360°'], c: 1, e: 'Latitude vai até 90°, nos polos.' },
            { p: 'Na projeção de Mercator, o que fica distorcido?', o: ['Nada', 'As áreas perto dos polos parecem maiores', 'Só o oceano', 'A linha do Equador'], c: 1, e: 'Mercator aumenta as áreas longe do Equador. Por isso a Groenlândia parece enorme.' },
            { p: 'Quantos graus tem cada fuso horário?', o: ['10°', '15°', '24°', '30°'], c: 1, e: '360° ÷ 24 fusos = 15° cada.' },
            { p: 'Quais são os pontos colaterais?', o: ['N, S, L, O', 'NE, SE, SO, NO', 'Equador e Greenwich', 'Trópicos'], c: 1, e: 'Colaterais ficam entre os cardeais: Nordeste, Sudeste, Sudoeste e Noroeste.' }
          ],
          cartoes: [
            { f: 'Latitude', v: 'Distância até o Equador. 0° a 90° N ou S.' },
            { f: 'Longitude', v: 'Distância até Greenwich. 0° a 180° L ou O.' },
            { f: 'Escala 1:100.000', v: '1 cm no mapa = 1 km no real.' },
            { f: 'Projeção de Mercator', v: 'Cilíndrica. Aumenta as áreas perto dos polos.' },
            { f: 'Quantos fusos horários?', v: '24, cada um com 15°.' },
            { f: 'Fuso de Brasília', v: 'UTC−3 (3 horas a menos que Greenwich).' },
            { f: 'Pontos colaterais', v: 'NE, SE, SO, NO.' }
          ]
        },
        { id: 'geo-relevo', titulo: 'Estrutura da Terra e relevo' },
        { id: 'geo-clima', titulo: 'Clima' },
        { id: 'geo-hidrografia', titulo: 'Hidrografia' },
        { id: 'geo-biomas', titulo: 'Biomas brasileiros' }
      ],
      2: [
        { id: 'geo-populacao', titulo: 'População' },
        { id: 'geo-urbanizacao', titulo: 'Urbanização' },
        { id: 'geo-industria', titulo: 'Industrialização' },
        { id: 'geo-agro', titulo: 'Agropecuária' },
        { id: 'geo-energia', titulo: 'Fontes de energia' }
      ],
      3: [
        { id: 'geo-globalizacao', titulo: 'Globalização' },
        { id: 'geo-geopolitica', titulo: 'Geopolítica mundial' },
        { id: 'geo-blocos', titulo: 'Blocos econômicos' },
        { id: 'geo-ambiente', titulo: 'Questões ambientais' }
      ]
    }
  },

  {
    id: 'fil', nome: 'Filosofia',
    anos: {
      1: [
        {
          id: 'fil-origem', titulo: 'O nascimento da filosofia',
          resumo: [
            { t: 'Do mito ao logos', p: 'Antes, os gregos explicavam o mundo por **mitos** (histórias de deuses). Por volta do **século VI a.C.**, alguns começaram a buscar explicações pela **razão** (o **logos**). Assim nasceu a filosofia.' },
            { t: 'Os pré-socráticos', p: 'Os primeiros filósofos queriam achar a **arché**: o **princípio** de onde tudo vem.\n**Tales**: a água.\n**Anaxímenes**: o ar.\n**Heráclito**: o fogo.\n**Pitágoras**: os números.\n**Demócrito**: os **átomos**.' },
            { t: 'Heráclito x Parmênides', p: '**Heráclito**: tudo muda o tempo todo. "Ninguém se banha duas vezes no mesmo rio."\n**Parmênides**: a mudança é ilusão; o ser é **imutável**.' },
            { t: 'Os sofistas', p: 'Professores que **cobravam** pra ensinar **retórica** (a arte de convencer). Diziam que a verdade depende de cada um.' },
            { t: 'Sócrates', p: 'Não deixou nada escrito; conhecemos ele por **Platão**. Frases: **"Só sei que nada sei"** e **"Conhece-te a ti mesmo"**.\nMétodo: a **ironia** (mostrar que a pessoa não sabe o que acha que sabe) e a **maiêutica** ("parto das ideias": fazer perguntas até a pessoa chegar à verdade).' }
          ],
          exemplo: 'Quando alguém te faz perguntas até você perceber sozinha a resposta, isso é bem parecido com a maiêutica de Sócrates.',
          perguntas: [
            { p: 'A passagem do mito para o logos significa:', o: ['Trocar a razão pela fé', 'Explicar o mundo pela razão', 'Criar novos deuses', 'Abandonar a escrita'], c: 1, e: 'Logos é razão. A filosofia nasce ao explicar o mundo racionalmente.' },
            { p: 'Para Tales de Mileto, a arché (princípio de tudo) era:', o: ['O fogo', 'A água', 'O ar', 'O número'], c: 1, e: 'Tales dizia que tudo vem da água.' },
            { p: '"Ninguém se banha duas vezes no mesmo rio" é uma ideia de:', o: ['Parmênides', 'Heráclito', 'Sócrates', 'Demócrito'], c: 1, e: 'Heráclito defendia que tudo está em constante mudança.' },
            { p: 'Quem ensinava retórica em troca de pagamento?', o: ['Os sofistas', 'Os pré-socráticos', 'Os estoicos', 'Os monges'], c: 0, e: 'Os sofistas cobravam pra ensinar a arte de convencer.' },
            { p: 'A maiêutica de Sócrates consiste em:', o: ['Decorar textos', 'Fazer perguntas até a pessoa chegar à verdade', 'Escrever livros', 'Estudar os astros'], c: 1, e: 'É o "parto das ideias": perguntar até a verdade nascer na pessoa.' },
            { p: 'Qual filósofo disse que tudo é feito de átomos?', o: ['Tales', 'Pitágoras', 'Demócrito', 'Heráclito'], c: 2, e: 'Demócrito dizia que tudo é formado por partículas indivisíveis, os átomos.' }
          ],
          cartoes: [
            { f: 'Logos', v: 'Razão. A filosofia explica o mundo por ela.' },
            { f: 'Arché', v: 'O princípio de onde tudo vem.' },
            { f: 'Tales', v: 'Arché = água.' },
            { f: 'Heráclito', v: 'Tudo muda. "Ninguém se banha duas vezes no mesmo rio."' },
            { f: 'Parmênides', v: 'O ser é imutável; a mudança é ilusão.' },
            { f: 'Sofistas', v: 'Ensinavam retórica e cobravam por isso.' },
            { f: 'Maiêutica', v: 'Método de Sócrates: perguntas que fazem a verdade "nascer".' }
          ]
        },
        { id: 'fil-platao', titulo: 'Platão e Aristóteles' },
        { id: 'fil-medieval', titulo: 'Filosofia medieval' }
      ],
      2: [
        { id: 'fil-moderna', titulo: 'Filosofia moderna' },
        { id: 'fil-kant', titulo: 'Iluminismo e Kant' },
        { id: 'fil-etica', titulo: 'Ética' }
      ],
      3: [
        { id: 'fil-politica', titulo: 'Filosofia política' },
        { id: 'fil-existencialismo', titulo: 'Existencialismo' },
        { id: 'fil-contemporanea', titulo: 'Filosofia contemporânea' }
      ]
    }
  },

  {
    id: 'soc', nome: 'Sociologia',
    anos: {
      1: [
        {
          id: 'soc-classicos', titulo: 'Os clássicos da sociologia',
          resumo: [
            { t: 'Como nasceu', p: 'A sociologia surgiu no **século XIX**, depois da **Revolução Industrial**, quando as cidades cresceram rápido e apareceram muitos problemas sociais novos. **Auguste Comte** criou o nome "sociologia" e o **positivismo**.' },
            { t: 'Émile Durkheim', p: 'Estudou o **fato social**: jeitos de agir e pensar que vêm de fora da pessoa e se impõem a ela. O fato social é **exterior**, **coercitivo** (pressiona) e **geral** (vale pra muita gente). Ex.: regras de etiqueta, idioma.' },
            { t: 'Max Weber', p: 'Estudou a **ação social**: o que as pessoas fazem pensando nos outros. Tipos de ação: **racional com relação a fins**, **racional com relação a valores**, **afetiva** e **tradicional**.' },
            { t: 'Karl Marx', p: 'Via a história como **luta de classes**. No capitalismo: **burguesia** (dona dos meios de produção) contra **proletariado** (vende a força de trabalho). O lucro vem da **mais-valia**: o valor que o trabalhador produz e não recebe.' }
          ],
          exemplo: 'Usar uniforme na escola porque é regra, mesmo sem querer, é um exemplo de fato social (Durkheim).',
          perguntas: [
            { p: 'Quem criou o termo "sociologia"?', o: ['Karl Marx', 'Auguste Comte', 'Max Weber', 'Durkheim'], c: 1, e: 'Auguste Comte, o pai do positivismo.' },
            { p: 'O conceito de fato social é de:', o: ['Durkheim', 'Weber', 'Marx', 'Comte'], c: 0, e: 'Durkheim definiu o fato social como exterior, coercitivo e geral.' },
            { p: 'Para Marx, o motor da história é:', o: ['A fé', 'A luta de classes', 'A tecnologia', 'O clima'], c: 1, e: 'Marx dizia que a história é movida pelo conflito entre classes.' },
            { p: 'Mais-valia, para Marx, é:', o: ['O salário do trabalhador', 'O valor produzido pelo trabalhador que ele não recebe', 'Um imposto', 'O preço do produto'], c: 1, e: 'É a diferença entre o que o trabalhador produz e o que recebe; vira lucro do patrão.' },
            { p: 'O sociólogo que estudou a ação social foi:', o: ['Weber', 'Durkheim', 'Comte', 'Marx'], c: 0, e: 'Max Weber focou no sentido que as pessoas dão às suas ações.' },
            { p: 'A sociologia surgiu no contexto de qual acontecimento?', o: ['Revolução Industrial', 'Descobrimento do Brasil', 'Queda de Roma', 'Guerra Fria'], c: 0, e: 'As mudanças da Revolução Industrial fizeram nascer a sociologia no século XIX.' }
          ],
          cartoes: [
            { f: 'Auguste Comte', v: 'Criou o nome "sociologia" e o positivismo.' },
            { f: 'Fato social (Durkheim)', v: 'Exterior, coercitivo e geral.' },
            { f: 'Ação social (Weber)', v: 'Ação feita levando os outros em conta.' },
            { f: 'Luta de classes (Marx)', v: 'Burguesia x proletariado.' },
            { f: 'Mais-valia', v: 'Valor produzido pelo trabalhador que vira lucro do patrão.' },
            { f: 'Quando nasceu a sociologia?', v: 'Século XIX, depois da Revolução Industrial.' }
          ]
        },
        { id: 'soc-individuo', titulo: 'Indivíduo e sociedade' },
        { id: 'soc-cultura', titulo: 'Cultura e identidade' }
      ],
      2: [
        { id: 'soc-trabalho', titulo: 'Trabalho e sociedade' },
        { id: 'soc-desigualdade', titulo: 'Desigualdade social' },
        { id: 'soc-movimentos', titulo: 'Movimentos sociais' }
      ],
      3: [
        { id: 'soc-estado', titulo: 'Estado e poder' },
        { id: 'soc-cidadania', titulo: 'Cidadania e direitos' },
        { id: 'soc-globalizacao', titulo: 'Globalização e cultura' }
      ]
    }
  },

  {
    id: 'ing', nome: 'Inglês',
    anos: {
      1: [
        { id: 'ing-tobe', titulo: 'Verb to be' },
        {
          id: 'ing-present', titulo: 'Simple Present',
          resumo: [
            { t: 'Quando usar', p: 'O **Simple Present** fala de **hábitos, rotinas e verdades**. Ex.: "I **study** every day" (eu estudo todo dia). "Water **boils** at 100 °C."' },
            { t: 'Afirmativa', p: 'Com **I, you, we, they**, o verbo fica normal: "They **work**".\nCom **he, she, it**, ganha **-s**: "She **works**".' },
            { t: 'Regrinhas do -s', p: 'Verbos terminados em **-o, -ch, -sh, -ss, -x** ganham **-es**: go → **goes**, watch → **watches**.\nConsoante + **y** vira **-ies**: study → **studies**.\nE **have** vira **has**.' },
            { t: 'Negativa', p: 'Usa **don\'t** (I, you, we, they) ou **doesn\'t** (he, she, it) + verbo **sem -s**.\n"She **doesn\'t like** coffee." (o -s já foi pro doesn\'t)' },
            { t: 'Pergunta', p: 'Começa com **Do** ou **Does** + pessoa + verbo **sem -s**.\n"**Do** you **speak** English?"\n"**Does** he **play** soccer?"' },
            { t: 'Palavras que avisam', p: 'Palavras de frequência combinam com o Simple Present: **always** (sempre), **usually** (geralmente), **sometimes** (às vezes), **never** (nunca), **every day** (todo dia).' }
          ],
          exemplo: 'Julia studies every night. She doesn\'t sleep late. Does she like math? Yes, she does!',
          perguntas: [
            { p: 'Complete: She ___ to school every day.', o: ['go', 'goes', 'going', 'gos'], c: 1, e: 'Com she, o verbo ganha -s. Go termina em -o, então vira goes.' },
            { p: 'Complete: They ___ English.', o: ['speaks', 'speak', 'speakes', 'speaking'], c: 1, e: 'Com they, o verbo fica sem -s.' },
            { p: 'Qual é a forma correta de study com he?', o: ['studys', 'studyes', 'studies', 'study'], c: 2, e: 'Consoante + y vira -ies: studies.' },
            { p: 'Complete a negativa: He ___ like pizza.', o: ["don't", "doesn't", 'not', "isn't"], c: 1, e: "Com he, she, it, a negativa usa doesn't, e o verbo fica sem -s." },
            { p: 'Qual pergunta está certa?', o: ['Does she plays guitar?', 'Do she play guitar?', 'Does she play guitar?', 'She does play guitar?'], c: 2, e: 'Does + she + verbo sem -s: "Does she play guitar?"' },
            { p: 'Qual é a forma de have com she?', o: ['haves', 'has', 'have', 'hasn'], c: 1, e: 'Have é irregular: com he, she, it vira has.' },
            { p: 'O Simple Present é usado principalmente para:', o: ['Ações acontecendo agora', 'Hábitos e rotinas', 'Ações no passado', 'Planos futuros'], c: 1, e: 'Simple Present = hábitos, rotinas e verdades.' }
          ],
          cartoes: [
            { f: 'Quando usar o Simple Present?', v: 'Hábitos, rotinas e verdades.' },
            { f: 'He / she / it na afirmativa', v: 'Verbo ganha -s: she works.' },
            { f: 'go, watch com she', v: 'goes, watches (-es)' },
            { f: 'study com he', v: 'studies' },
            { f: 'Negativa com he/she/it', v: "doesn't + verbo sem -s" },
            { f: 'Pergunta com you', v: 'Do you + verbo? Ex.: Do you speak English?' },
            { f: 'always / never', v: 'sempre / nunca' }
          ]
        },
        { id: 'ing-pronomes', titulo: 'Pronomes' },
        { id: 'ing-continuous', titulo: 'Present Continuous' }
      ],
      2: [
        { id: 'ing-past', titulo: 'Simple Past' },
        { id: 'ing-pastcont', titulo: 'Past Continuous' },
        { id: 'ing-future', titulo: 'Future (will / going to)' },
        { id: 'ing-comparativos', titulo: 'Comparativos e superlativos' }
      ],
      3: [
        { id: 'ing-perfect', titulo: 'Present Perfect' },
        { id: 'ing-modais', titulo: 'Modal verbs' },
        { id: 'ing-condicionais', titulo: 'Conditionals' },
        { id: 'ing-leitura', titulo: 'Estratégias de leitura' }
      ]
    }
  }
];
