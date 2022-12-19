//Matrices de prueba
let matrizA = [1, 3, 6, 5, 2, 4, 8, 9, 10, 7];
let matrizB = [14, 12, 8, 5, 3, 15, 11, 13, 6, 7, 4, 2, 1, 10, 9];
let matrizC = [3, 7, 4, 5, 1, 6, 2];
let matrizD = [8, 6, 5, 0, 15, -3, 4, -1, 11, -6, 3];

function swap(matriz, i, j) {
    let temp = matriz[i];
    matriz[i] = matriz[j];
    matriz[j] = temp;
}

function particion(matriz, inicio, fin) {

    //Simplicidad el pivote es el primer elemento
    let pivote = matriz[inicio];

    // console.log(`Inicio ${inicio} y fin = ${fin}`);
    // console.log(`Posicion pivote ${pivote} y valor pivote = ${matriz[pivote]}`);

    i = inicio;
    j = fin;

    //Repetir el swap hasta que i == j
    while (true) {
        while (true) {
            //Si hay un numero mayor al pivote o estamos en la misma posicion que el pivote
            if (matriz[i] >= pivote) {
                break;
            }
            i++;
        }

        while (true) {
            //Si hay un numero menor al pivote o estamos en la misma posicion que el pivote
            if (matriz[j] <= pivote) {
                break;
            }
            j--;
        }

        // console.log(`Valor i : ${i} -> ${matriz[i]} \n Valor j: ${j} -> ${matriz[j]}`);

        //Retornar siempre la posicion del pivote cuando i == j
        if (i == j) {
            return j;
        }
        
        //Intercambiar los valores cuando i != j
        swap(matriz, i, j);
    }

}

function quicksort(matriz, inicio, fin) {

    //Si tiene dos elementos o mas puede ser una lista desordenada esto se traduce que el inicio es menor al final
    //Si tiene 2 elementos el inicio es 0 y el final es 1, 0 es menor a 1
    if (inicio < fin) {
        //Ordenar segun el pivote y obtener la posicion del mismo para ordenar a izq y a derecha
        let pivote = particion(matriz, inicio, fin)

        //Ordenar a la izquierda del pivote
        quicksort(matriz, inicio, pivote - 1);

        //Ordenar a la derecha del pivote
        quicksort(matriz, pivote + 1, fin);
    }
}

quicksort(matrizA, 0, matrizA.length - 1);
console.log("Matriz A: " + matrizA);

quicksort(matrizB, 0, matrizB.length - 1);
console.log("Matriz B: " + matrizB);

quicksort(matrizC, 0, matrizC.length - 1);
console.log("Matriz C: " + matrizC);

quicksort(matrizD, 0, matrizD.length - 1);
console.log("Matriz D: " + matrizD);