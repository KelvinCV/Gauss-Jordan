# Gauss-Jordan
Biblioteca capaz de resolver sistemas lineares com o método de Gauss-Jordan.

O programa é capaz de ler um arquivo .m contendo uma matriz aumentada/estendia(exemplo: ex01.m-ext) retornando a própria matriz lida(Matrix in), a matriz/vetor resultado do sistema linear(Matrix out) e o tempo de execução total(runtime) em milissegundos da aplicação.

Além disso é possível criar uma ou mais matrizes passando seus parâmetros no console e ainda fazer diversas operações.

## Operações
-  transposição -> **transpose(a)**;
-  soma -> **sum(a, b)**;
-  Multiplicação elemento a elemento e multiplicação por um escalar -> **times(a, b)**;
-  Multiplicação de Matrizes -> **dot(a, b)**;

Operações Gaussianas  
-  Multiplicar uma linha por um constante não nula. -> **multRow(a, PivotRow, k)**;
-  Trocar duas linhas entre si -> **changeRows(a, rowX, rowY)**;
-  Somar uma constante vezes uma linha a outra linha -> **multSumRows(a, PivotRow, rowY, k)**;
-  Eliminação Gaussiana -> **gauss(a)**;
-  Resolver o Sistema -> **solve(a)**;

## Exemplos
- I) Lendo arquivo e obtendo o resultado ![GJex03](https://user-images.githubusercontent.com/58924692/137529802-35bd50ab-3e83-4061-97d7-c058a1d903c2.jpg)


- II) Passando parâmetros no console ![GJex02](https://user-images.githubusercontent.com/58924692/137529077-ac944660-af7e-4ee7-aa75-291672859b8d.jpg)
