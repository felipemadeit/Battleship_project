import 'https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.all.min.js';

import {
  iniciarTablero1,
  iniciarTablero2,
  iniciarTableroAtaque,
} from "./tableros.js";
import { juego } from './control.js';
import { alertIntentosRe } from './sweetAlert2.js';


const tabla = document.getElementById("matrixTable1");
const tabla1 = document.getElementById("matrixTable2");

// Inicialización de array con las coordenadas de los barcos del jugador 1
let coordOcupadas1 = [];
export {coordOcupadas1}
// Inicialización de array con las coordenadas de los barcos del jugador 2
let coordOcupadas2 = [];
export {coordOcupadas2};
// Tablero Jugador
let matrizJug1 = iniciarTablero1();
export { matrizJug1 };
// Tablero Maquina
let matrizJug2 = iniciarTablero2();
export { matrizJug2 };
// Tablero Ataque
let matrizAtaque = iniciarTableroAtaque();
export { matrizAtaque };




export function coordenadasB1J1(matrizJug1) {
  /**
   * Barco 1 Jugador 1
   *      Tamaño -> 3 celdas
   *      Posición -> Vertical
   */
  // Inicialización variables
  let fila1,
    columna1,
    fila1B1J1,
    columna1B1J1,
    fila2B1J1,
    columna2B1J1,
    fila3B1J1,
    columna3B1J1;
  let nuevaCord = [];

  // Array para coordenadas del barcoo
  let coordB1J1 = [];

  /**
   * Con una estructura for se generan pares de coordenadas
   * La variable i determina la cantidad de coordenadas
   */
  for (let i = 0; i < 1; i++) { 
    // Se genera una coordenada base y de esa se toman las otros puntos para el resto del barco
    /**
     * Dadas las dimensiones del barco y la posición se genera una fila
     * La fila tiene el rango de 1-6 para que tenga espacio para ubicar las dos celdas restantes
     */
    fila1 = Math.floor(Math.random() * 8) + 1; // Rango valido 1-8
    columna1 = Math.floor(Math.random() * 8) + 1; // Rango valido 1-8
    nuevaCord = [fila1, columna1];
    coordB1J1.push([fila1, columna1]);
  };

  // Se asignan a las variables los elementos del array de coordenadas
  fila1B1J1 = coordB1J1[0][0];
  columna1B1J1 = coordB1J1[0][1];
  fila2B1J1 = fila1B1J1 + 1;
  columna2B1J1 = columna1B1J1;
  fila3B1J1 = fila1B1J1 + 2;
  columna3B1J1 = columna1B1J1;

  // Se ingresan las coordenadas al array de las que ya estan ocupadas
  coordOcupadas1.push([fila1B1J1, columna1B1J1]);
  coordOcupadas1.push([fila2B1J1, columna2B1J1]);
  coordOcupadas1.push([fila3B1J1, columna3B1J1]);

  const celda = document.createElement("td");
  // Se asignan las coordenadas a la matriz
  matrizJug1[fila1B1J1][columna1B1J1] = "O";
  matrizJug1[fila2B1J1][columna2B1J1] = "O";
  matrizJug1[fila3B1J1][columna3B1J1] = "O";
};

// Función para generar coordenadas aleatorias del barco 2 Jugador 1

export function coordenadasB2J1(matrizJug1) {
  /**
   * Barco 2 Jugador 1
   *      Tamaño -> 4 celdas
   *      Posición -> Horizontal
   */
  //Inicialización variables
  let fila2,
    columna2,
    fila1B2J1,
    columna1B2J1,
    fila2B2J1,
    columna2B2J1,
    fila3B2J1,
    columna3B2J1,
    fila4B2J1,
    columna4B2J1;
  let nuevaCord2 = [];

  // Array para coordenadas del barco
  let coordB2J1 = [];
  /**
   * Con una estructura for se generan pares de coordenadas
   * La variable i determina la cantidad de coordenadas
   */
  for (let i = 0; i < 1; i++) {
    // Inicialización de una variable para saber si las coordenadas generadas no se superponen en el otro barco
    let coordenadasGeneradas = false;

    // Se genera una coordenada base y de esa se toman las otros puntos para el resto del barco
    /**
     * La columna tiene el rango de 1-5 para que tenga espacio para ubicar las 3 celdas restantes
     */

    // Se generan mientras la variable sea False
    while (!coordenadasGeneradas) {
      fila2 = Math.floor(Math.random() * 8) + 1;
      columna2 = Math.floor(Math.random() * 7) + 1; // Rango valido 1-5

      // Se valida que la coordenada base no este en las coordenadas ya usadas
      if (!coordOcupadas1.includes([fila2, columna2])) {
        coordB2J1.push([fila2, columna2]);
        coordOcupadas1.push([fila2, columna2]);

        // Se asignan las coordenadas a las variables correctas
        fila1B2J1 = coordB2J1[0][0];
        columna1B2J1 = coordB2J1[0][1];
        fila2B2J1 = fila1B2J1;
        columna2B2J1 = columna1B2J1 + 1;
        fila3B2J1 = fila1B2J1;
        columna3B2J1 = columna1B2J1 + 2;
        fila4B2J1 = fila1B2J1;
        columna4B2J1 = columna1B2J1 + 3;

        // Se valida que las demas coordenadas del barco no se ubiquen donde esta el barco anterior

        if (
          matrizJug1[fila1B2J1][columna1B2J1] != "L" &&
          matrizJug1[fila2B2J1][columna2B2J1] != "L" &&
          matrizJug1[fila3B2J1][columna3B2J1] != "L" &&
          matrizJug1[fila4B2J1][columna4B2J1] != "L"
        ) {
          // En caso de cumplirse la condición se ingresan a los arrays
          coordOcupadas1.push([fila2B2J1, columna2B2J1]);
          coordOcupadas1.push([fila3B2J1, columna3B2J1]);
          coordOcupadas1.push([fila4B2J1, columna4B2J1]);

          coordB2J1.push([fila2B2J1, columna2B2J1]);
          coordB2J1.push([fila3B2J1, columna3B2J1]);
          coordB2J1.push([fila4B2J1, columna4B2J1]);

          // Si la condición es valida se imprimen las coordenadas en la matriz
          matrizJug1[fila1B2J1][columna1B2J1] = "O";
          matrizJug1[fila2B2J1][columna2B2J1] = "O";
          matrizJug1[fila3B2J1][columna3B2J1] = "O";
          matrizJug1[fila4B2J1][columna4B2J1] = "O";
          // Se modifica el estado de la variable para que no se generen mas coordenadas
          coordenadasGeneradas = true;
          // En caso de no cumplirse la condición se eliminan las coordenadas base
        } else {
          coordB2J1.pop();
        };
      };
    };
  };
};

// Función para generar coordenadas aleatorias del barco 3 Jugador 1
export function coordenadasB3J1(matrizJug1) {
  /**
   * Barco 3 Jugador 1
   *      Tamaño -> 1 celda
   */

  // Inicialización variables
  let fila3, columna3, fila1B3J1, columna1B3J1;
  let coordB3J1 = [];

  /**
   * Con una estructura for se generan pares de coordenadas
   * La variable i determina la cantidad de coordenadas
   */
  for (let i = 0; i < 1; i++) {
    // Variable para determinar si el barco no se superpone encima de otros
    let coordenadasGeneradas = false;

    // Las coordenadas se generan hasta encontrar una posición adecuada dentro de la matriz
    while (!coordenadasGeneradas) {
      fila3 = Math.floor(Math.random() * 10) + 1; // Rango valido 1-8
      columna3 = Math.floor(Math.random() * 10) + 1; // Rango valido 1-8

      // Si la coordenada no esta ocupada por los otros barcos se ubica en esa posición
      if (
        matrizJug1[fila3][columna3] != "L" &&
        matrizJug1[fila3][columna3] != "Z"
      ) {
        coordB3J1.push([fila3, columna3]);
        fila1B3J1 = coordB3J1[0][0];
        columna1B3J1 = coordB3J1[0][1];
        matrizJug1[fila1B3J1][columna1B3J1] = "O";
        coordOcupadas1.push([fila1B3J1, columna1B3J1]);
        coordenadasGeneradas = true;
        // En caso de estar ocupada la posición se elimina del array y se vuelve a generar
      } else {
        coordB3J1.pop();
      };
    };
  };
};

// Función para generar coordenadas aleatorias del barco 4 Jugador 1
export function coordenadasB4J1(matrizJug1) {
  /**
   * Barco 4 Jugador 1
   *      Tamaño -> 1 celda
   */

  // Inicialización variables
  let fila4, columna4, fila1B4J1, columna1B4J1;
  let coordB4J1 = [];
  /**
   * Con una estructura for se generan pares de coordenadas
   * La variable i determina la cantidad de coordenadas
   */
  for (let i = 0; i < 1; i++) {
    // Variable para determinar si el barco no se superpone encima de otros barcos
    let coordenadasGeneradas = false;

    // Las coordenadas se generan hasta encontrar una posición adecuada dentro de la matriz
    while (!coordenadasGeneradas) {
      fila4 = Math.floor(Math.random() * 8) + 1; // Rango valido 1-8
      columna4 = Math.floor(Math.random() * 8) + 1; // Rango valido 1-8

      // Si la coordenada no esta ocupada por los otros barcos se ubica en esa posición
      if (
        matrizJug1[fila4][columna4] != "L" &&
        matrizJug1[fila4][columna4] != "Z" &&
        matrizJug1[fila4][columna4] != "B"
      ) {
        coordB4J1.push([fila4, columna4]);
        fila1B4J1 = coordB4J1[0][0];
        columna1B4J1 = coordB4J1[0][1];
        matrizJug1[fila1B4J1][columna1B4J1] = "O";
        coordOcupadas1.push([fila1B4J1, columna1B4J1]);
        coordenadasGeneradas = true;
        // En caso de estar ocupada la posición se elimina del array y se vuelve a generar
      } else {
        coordB4J1.pop();
      };
    };
  };
};

// Función para generar coordenadas aleatorias del barco 5 Jugador 1
export function coordenadasB5J1(matrizJug1) {
  /**
   * Barco 5 Jugador 1
   *      Tamaño -> 5 celdas
   *      posición -> Vertical
   */

  // Inicialización variables
  let fila5,
    columna5,
    fila1B5J1,
    columna1B5J1,
    fila2B5J1,
    columna2B5J1,
    fila3B5J1,
    columna3B5J1,
    fila4B5J1,
    columna4B5J1,
    fila5B5J1,
    columna5B5J1;
  let coordB5J1 = [];
  let nuevaCord25 = [];
  /**
   * Con una estructura for se generan pares de coordenadas
   * La variable i determina la cantidad de coordenadas
   */
  for (let i = 0; i < 1; i++) {
    // Variable para determinar si el barco no se superpone encima de otros barcos
    let coordenadasGeneradas = false;
    // Las coordenadas se generan hasta encontrar una posición adecuada dentro de la matriz
    /**
     * Dadas las dimensiones del barco y la posición se genera una fila
     * La fila tiene el rango de 1-6 para que tenga espacio para ubicar las 4 celdas restantes
     */
    while (!coordenadasGeneradas) {
      fila5 = Math.floor(Math.random() * 6) + 1; // Rango valido 1-4
      columna5 = Math.floor(Math.random() * 8) + 1; // Rango valido 1-8

      // Se verifica que la coordenada base no este ocupada
      if (!coordOcupadas1.includes([fila5, columna5])) {
        coordB5J1.push([fila5, columna5]);
        coordOcupadas1.push([fila5, columna5]);

        // Se asignan las coordenadas a las variables correctas
        fila1B5J1 = coordB5J1[0][0];
        columna1B5J1 = coordB5J1[0][1];
        fila2B5J1 = fila1B5J1 + 1;
        columna2B5J1 = columna1B5J1;
        fila3B5J1 = fila1B5J1 + 2;
        columna3B5J1 = columna1B5J1;
        fila4B5J1 = fila1B5J1 + 3;
        columna4B5J1 = columna1B5J1;
        fila5B5J1 = fila1B5J1 + 4;
        columna5B5J1 = columna1B5J1;

        // Si la coordenada no esta ocupada por los otros barcos se ubica en esa posición
        if (
          matrizJug1[fila1B5J1][columna1B5J1] != "L" &&
          matrizJug1[fila1B5J1][columna1B5J1] != "Z" &&
          matrizJug1[fila1B5J1][columna1B5J1] != "B" &&
          matrizJug1[fila1B5J1][columna1B5J1] != "D" &&
          // Verificar que la segunda coordenada no este ocupada por otro barco
          matrizJug1[fila2B5J1][columna2B5J1] != "L" &&
          matrizJug1[fila2B5J1][columna2B5J1] != "Z" &&
          matrizJug1[fila2B5J1][columna2B5J1] != "B" &&
          matrizJug1[fila2B5J1][columna2B5J1] != "D" &&
          // Verificar que la tercera coordenada no este ocupada por otro barco
          matrizJug1[fila3B5J1][columna3B5J1] != "L" &&
          matrizJug1[fila3B5J1][columna3B5J1] != "Z" &&
          matrizJug1[fila3B5J1][columna3B5J1] != "B" &&
          matrizJug1[fila3B5J1][columna3B5J1] != "D" &&
          // Verificar que la cuarta coordenada no este ocupada por otro barco
          matrizJug1[fila4B5J1][columna4B5J1] != "L" &&
          matrizJug1[fila4B5J1][columna4B5J1] != "Z" &&
          matrizJug1[fila4B5J1][columna4B5J1] != "B" &&
          matrizJug1[fila4B5J1][columna4B5J1] != "D" &&
          // Verificar que la quinta coordenada no este ocupada por otro barco
          matrizJug1[fila5B5J1][columna5B5J1] != "L" &&
          matrizJug1[fila5B5J1][columna5B5J1] != "Z" &&
          matrizJug1[fila5B5J1][columna5B5J1] != "B" &&
          matrizJug1[fila5B5J1][columna5B5J1] != "D"
        ) {
          // En cado de cumplir la condición se ingresan las cooordenadas a los arrays
          coordB5J1.push([fila1B5J1, columna1B5J1]);
          coordB5J1.push([fila2B5J1, columna2B5J1]);
          coordB5J1.push([fila3B5J1, columna3B5J1]);
          coordB5J1.push([fila4B5J1, columna4B5J1]);
          coordB5J1.push([fila5B5J1, columna5B5J1]);

          coordOcupadas1.push([fila2B5J1, columna2B5J1]);
          coordOcupadas1.push([fila3B5J1, columna3B5J1]);
          coordOcupadas1.push([fila4B5J1, columna4B5J1]);
          coordOcupadas1.push([fila5B5J1, columna5B5J1]);

          // Se posiciona el barco en la matriz
          matrizJug1[fila1B5J1][columna1B5J1] = "O";
          matrizJug1[fila2B5J1][columna2B5J1] = "O";
          matrizJug1[fila3B5J1][columna3B5J1] = "O";
          matrizJug1[fila4B5J1][columna4B5J1] = "O";
          matrizJug1[fila5B5J1][columna5B5J1] = "O";

          coordenadasGeneradas = true;
        } else {
          coordB5J1.pop();
        };
      };
    };
  };
};

// Reune todas las funciones para ubicar los barcos del jugador 1
export function randomBarcos() {

  coordenadasB1J1(matrizJug1);
  coordenadasB2J1(matrizJug1);
  coordenadasB3J1(matrizJug1);
  coordenadasB4J1(matrizJug1);
  coordenadasB5J1(matrizJug1);
};

// Función para generar coordenadas aleatorias del barco 1 Jugador 2
export function coordenadasB1J2(matrizJug2) {
  /**
   * Barco 1 Jugador 2
   *      Tamaño -> 3 celdas
   *      Posición -> Vertical
   */

  // Inicialización variables
  // Inicialización variables
  let fila1,
    columna1,
    fila1B1J2,
    columna1B1J2,
    fila2B1J2,
    columna2B1J2,
    fila3B1J2,
    columna3B1J2;
  let nuevaCord = [];

  // Array para coordenadas del barco
  let coordB1J2 = [];

  /**
   * Con una estructura for se generan pares de coordenadas
   * La variable i determina la cantidad de coordenadas
   */
  for (let i = 0; i < 1; i++) {
    // Se genera una coordenada base y de esa se toman las otros puntos para el resto del barco

    /**
     * Dadas las dimensiones del barco y la posición se genera una fila
     * La fila tiene el rango de 1-8 para que tenga espacio para ubicar las dos celdas restantes
     */
    fila1 = Math.floor(Math.random() * 8) + 1; // Rango valido 1-8
    columna1 = Math.floor(Math.random() * 8) + 1; // Rango valido 1-8
    coordB1J2.push([fila1, columna1]);
  }

  // Se asignan las coordenadas a las variables correctas
  fila1B1J2 = coordB1J2[0][0];
  columna1B1J2 = coordB1J2[0][1];
  fila2B1J2 = fila1B1J2 + 1;
  columna2B1J2 = columna1B1J2;
  fila3B1J2 = fila1B1J2 + 2;
  columna3B1J2 = columna1B1J2;

  // Se ingresan las coordenadas al array de las que ya estan ocupadas
  coordOcupadas2.push([fila1B1J2, columna1B1J2]);
  coordOcupadas2.push([fila2B1J2, columna2B1J2]);
  coordOcupadas2.push([fila3B1J2, columna3B1J2]);

  // Se asignan las coordenadas a la matriz
  matrizJug2[fila1B1J2][columna1B1J2] = "L";
  matrizJug2[fila2B1J2][columna2B1J2] = "L";
  matrizJug2[fila3B1J2][columna3B1J2] = "L";
};

// Función para generar coordenadas aleatorias del barco 2 Jugador 2
export function coordenadasB2J2(matrizJug2) {
  /**
   * Barco 2 Jugador 2
   *      Tamaño -> 4 celdas
   *      Posición -> Horizontal
   */

  //Inicialización variables
  let fila2,
    columna2,
    fila1B2J2,
    columna1B2J2,
    fila2B2J2,
    columna2B2J2,
    fila3B2J2,
    columna3B2J2,
    fila4B2J2,
    columna4B2J2;
  let nuevaCord2 = [];

  // Array para coordenadas del barco
  let coordB2J2 = [];
  /**
   * Con una estructura for se generan pares de coordenadas
   * La variable i determina la cantidad de coordenadas
   */
  for (let i = 0; i < 1; i++) {
    // Inicialización de una variable para saber si las coordenadas generadas no se superponen en el otro barco
    let coordenadasGeneradas = false;

    // Se genera una coordenada base y de esa se toman las otros puntos para el resto del barco

    /**
     * La columna tiene el rango de 1-7 para que tenga espacio para ubicar las 3 celdas restantes
     */

    // Se generan mientras la variable sea False
    while (!coordenadasGeneradas) {
      fila2 = Math.floor(Math.random() * 8) + 1;
      columna2 = Math.floor(Math.random() * 7) + 1; // Rango valido 1-5

      // Se valida que la coordenada base no este en las coordenadas ya usadas
      if (!coordOcupadas1.includes([fila2, columna2])) {
        coordB2J2.push([fila2, columna2]);
        coordOcupadas2.push([fila2, columna2]);

        // Se asignan las coordenadas a las variables correctas
        fila1B2J2 = coordB2J2[0][0];
        columna1B2J2 = coordB2J2[0][1];
        fila2B2J2 = fila1B2J2;
        columna2B2J2 = columna1B2J2 + 1;
        fila3B2J2 = fila1B2J2;
        columna3B2J2 = columna1B2J2 + 2;
        fila4B2J2 = fila1B2J2;
        columna4B2J2 = columna1B2J2 + 3;

        if (
          matrizJug2[fila1B2J2][columna1B2J2] != "L" &&
          matrizJug2[fila2B2J2][columna2B2J2] != "L" &&
          matrizJug2[fila3B2J2][columna3B2J2] != "L" &&
          matrizJug2[fila4B2J2][columna4B2J2] != "L"
        ) {
          // En caso de cumplirse la condición se ingresan a los arrays
          coordOcupadas2.push([fila2B2J2, columna2B2J2]);
          coordOcupadas2.push([fila3B2J2, columna3B2J2]);
          coordOcupadas2.push([fila4B2J2, columna4B2J2]);

          coordB2J2.push([fila2B2J2, columna2B2J2]);
          coordB2J2.push([fila3B2J2, columna3B2J2]);
          coordB2J2.push([fila4B2J2, columna4B2J2]);

          // Si la condición es valida se imprimen las coordenadas en la matriz
          matrizJug2[fila1B2J2][columna1B2J2] = "Z";
          matrizJug2[fila2B2J2][columna2B2J2] = "Z";
          matrizJug2[fila3B2J2][columna3B2J2] = "Z";
          matrizJug2[fila4B2J2][columna4B2J2] = "Z";

          // Se modifica el estado de la variable para que no se generen mas coordenadas
          coordenadasGeneradas = true;
          // En caso de no cumplirse la condición se eliminan las coordenadas base
        } else {
          coordB2J2.pop();
        };
      };
    };
  };
};

// Función para generar coordenadas aleatorias del barco 2 Jugador 2
export function coordenadasB3J2(matrizJug2) {
  /**
   * Barco 3 Jugador 2
   *      Tamaño -> 1 celda
   */

  // Inicialización variables
  let fila1B3J2, columna1B3J2;
  let coordB3J2 = [];

  /**
   * Con una estructura for se generan pares de coordenadas
   * La variable i determina la cantidad de coordenadas
   */
  for (let i = 0; i < 1; i++) {
    // Variable para determinar si el barco no se superpone encima de otros
    let coordenadasGeneradas = false;

    // Las coordenadas se generan hasta encontrar una posición adecuada dentro de la matriz
    while (!coordenadasGeneradas) {
      fila1B3J2 = Math.floor(Math.random() * 8) + 1; // Rango valido 1-8
      columna1B3J2 = Math.floor(Math.random() * 8) + 1; // Rango valido 1-8

      // Si la coordenada no esta ocupada por los otros barcos se ubica en esa posición
      if (
        matrizJug2[fila1B3J2][columna1B3J2] != "L" &&
        matrizJug2[fila1B3J2][columna1B3J2] != "Z"
      ) {
        coordB3J2.push([fila1B3J2, columna1B3J2]);
        matrizJug2[fila1B3J2][columna1B3J2] = "B";
        coordOcupadas2.push([fila1B3J2, columna1B3J2]);
        coordenadasGeneradas = true;
        // En caso de estar ocupada la posición se elimina del array y se vuelve a generar
      } else {
        coordB3J2.pop();
      };
    };
  };
};

// Función para generar coordenadas aleatorias del barco 2 Jugador 2
export function coordenadasB4J2(matrizJug2) {
  /**
   * Barco 4 Jugador 2
   *      Tamaño -> 1 celda
   */

  // Inicialización variables
  let fila1B4J2, columna1B4J2;
  let coordB4J2 = [];
  /**
   * Con una estructura for se generan pares de coordenadas
   * La variable i determina la cantidad de coordenadas
   */
  for (let i = 0; i < 1; i++) {
    // Variable para determinar si el barco no se superpone encima de otros barcos
    let coordenadasGeneradas = false;

    // Las coordenadas se generan hasta encontrar una posición adecuada dentro de la matriz
    while (!coordenadasGeneradas) {
      fila1B4J2 = Math.floor(Math.random() * 8) + 1; // Rango valido 1-8
      columna1B4J2 = Math.floor(Math.random() * 8) + 1; // Rango valido 1-8

      // Si la coordenada no esta ocupada por los otros barcos se ubica en esa posición
      if (
        matrizJug2[fila1B4J2][columna1B4J2] != "L" &&
        matrizJug2[fila1B4J2][columna1B4J2] != "Z" &&
        matrizJug2[fila1B4J2][columna1B4J2] != "B"
      ) {
        coordOcupadas2.push([fila1B4J2, columna1B4J2]);
        coordB4J2.push([fila1B4J2, columna1B4J2]);
        matrizJug2[fila1B4J2][columna1B4J2] = "D";
        coordenadasGeneradas = true;
        // En caso de estar ocupada la posición se elimina del array y se vuelve a generar
      } else {
        coordB4J2.pop();
      };
    };
  };
};

// Función para generar coordenadas aleatorias del barco 5 Jugador 2
export function coordenadasB5J2(matrizJug2) {
  /**
   * Barco 5 Jugador 2
   *      Tamaño -> 5 celdas
   *      posición -> Vertical
   */

  // Inicialización variables
  let fila5,
    columna5,
    fila1B5J2,
    columna1B5J2,
    fila2B5J2,
    columna2B5J2,
    fila3B5J2,
    columna3B5J2,
    fila4B5J2,
    columna4B5J2,
    fila5B5J2,
    columna5B5J2;
  let coordB5J2 = [];
  let nuevaCord5 = [];
  /**
   * Con una estructura for se generan pares de coordenadas
   * La variable i determina la cantidad de coordenadas
   */
  for (let i = 0; i < 1; i++) {
    // Variable para determinar si el barco no se superpone encima de otros barcos
    let coordenadasGeneradas = false;
    // Las coordenadas se generan hasta encontrar una posición adecuada dentro de la matriz
    /**
     * Dadas las dimensiones del barco y la posición se genera una fila
     * La fila tiene el rango de 1-6 para que tenga espacio para ubicar las 4 celdas restantes
     */
    while (!coordenadasGeneradas) {
      fila5 = Math.floor(Math.random() * 6) + 1; // Rango valido 1-6
      columna5 = Math.floor(Math.random() * 8) + 1; // Rango valido 1-8

      // Se verifica que la coordenada base no este ocupada
      if (!coordOcupadas1.includes([fila5, columna5])) {
        coordB5J2.push([fila5, columna5]);
        coordOcupadas2.push([fila5, columna5]);

        // Se asignan las coordenadas a las variables correctas
        fila1B5J2 = coordB5J2[0][0];
        columna1B5J2 = coordB5J2[0][1];
        fila2B5J2 = fila1B5J2 + 1;
        columna2B5J2 = columna1B5J2;
        fila3B5J2 = fila1B5J2 + 2;
        columna3B5J2 = columna1B5J2;
        fila4B5J2 = fila1B5J2 + 3;
        columna4B5J2 = columna1B5J2;
        fila5B5J2 = fila1B5J2 + 4;
        columna5B5J2 = columna1B5J2;

        // Si la coordenada no esta ocupada por los otros barcos se ubica en esa posición
        if (
          matrizJug2[fila1B5J2][columna1B5J2] != "L" &&
          matrizJug2[fila1B5J2][columna1B5J2] != "Z" &&
          matrizJug2[fila1B5J2][columna1B5J2] != "B" &&
          matrizJug2[fila1B5J2][columna1B5J2] != "D" &&
          // Verificar que la segunda coordenada no este ocupada por otro barco
          matrizJug2[fila2B5J2][columna2B5J2] != "L" &&
          matrizJug2[fila2B5J2][columna2B5J2] != "Z" &&
          matrizJug2[fila2B5J2][columna2B5J2] != "B" &&
          matrizJug2[fila2B5J2][columna2B5J2] != "D" &&
          // Verificar que la tercera coordenada no este ocupada por otro barco
          matrizJug2[fila3B5J2][columna3B5J2] != "L" &&
          matrizJug2[fila3B5J2][columna3B5J2] != "Z" &&
          matrizJug2[fila3B5J2][columna3B5J2] != "B" &&
          matrizJug2[fila3B5J2][columna3B5J2] != "D" &&
          // Verificar que la cuarta coordenada no este ocupada por otro barco
          matrizJug2[fila4B5J2][columna4B5J2] != "L" &&
          matrizJug2[fila4B5J2][columna4B5J2] != "Z" &&
          matrizJug2[fila4B5J2][columna4B5J2] != "B" &&
          matrizJug2[fila4B5J2][columna4B5J2] != "D" &&
          // Verificar que la quinta coordenada no este ocupada por otro barco
          matrizJug2[fila5B5J2][columna5B5J2] != "L" &&
          matrizJug2[fila5B5J2][columna5B5J2] != "Z" &&
          matrizJug2[fila5B5J2][columna5B5J2] != "B" &&
          matrizJug2[fila5B5J2][columna5B5J2] != "D"
        ) {
          // En cado de cumplir la condición se ingresan las cooordenadas a los arrays
          coordB5J2.push([fila1B5J2, columna1B5J2]);
          coordB5J2.push([fila2B5J2, columna2B5J2]);
          coordB5J2.push([fila3B5J2, columna3B5J2]);
          coordB5J2.push([fila4B5J2, columna4B5J2]);
          coordB5J2.push([fila5B5J2, columna5B5J2]);

          coordOcupadas2.push([fila2B5J2, columna2B5J2]);
          coordOcupadas2.push([fila3B5J2, columna3B5J2]);
          coordOcupadas2.push([fila4B5J2, columna4B5J2]);
          coordOcupadas2.push([fila5B5J2, columna5B5J2]);

          // Se posiciona el barco en la matriz
          matrizJug2[fila1B5J2][columna1B5J2] = "A";
          matrizJug2[fila2B5J2][columna2B5J2] = "A";
          matrizJug2[fila3B5J2][columna3B5J2] = "A";
          matrizJug2[fila4B5J2][columna4B5J2] = "A";
          matrizJug2[fila5B5J2][columna5B5J2] = "A";

          coordenadasGeneradas = true;
        } else {
          coordB5J2.pop();
        };
      };
    };
  };
};

export function randomBarcos2() {
  coordenadasB1J2(matrizJug2);
  coordenadasB2J2(matrizJug2);
  coordenadasB3J2(matrizJug2);
  coordenadasB4J2(matrizJug2);
};

export function generarMatrizHTML(matrizJug1) {
  // Accede al div en el HTML usando su ID
  const matrizDiv = document.getElementById("matrizDiv");

  // Crea una tabla para representar la matriz
  const tabla = document.createElement("table");

  // Elimina la tabla anterior, si existe
  while (matrizDiv.firstChild) {
    matrizDiv.removeChild(matrizDiv.firstChild);
  };

  // Recorre la matriz y crea filas y celdas en la tabla
  for (let i = 0; i < matrizJug1.length; i++) {
    const fila = document.createElement("tr");
    fila.classList.add("filas"); // Agrega la clase "fila" a la fila

    for (let j = 0; j < matrizJug1[i].length; j++) {
      const celda = document.createElement("td");
      celda.classList.add("celdas"); // Agrega la clase "celda" a la celda
      celda.textContent = matrizJug1[i][j];

      fila.appendChild(celda);

      if (i === 0) {
        celda.classList.add("primera-fila");
      };

      if (j === 0) {
        celda.classList.add("primera-columna");
      };
    };

    tabla.appendChild(fila);
  };

  // Agrega la nueva tabla al div en el HTML
  matrizDiv.appendChild(tabla);
};

// Función para generar matriz para atacar
export function generarMatriz2Html(matrizAtaque) {
  // Accede al div en el HTML usando su ID
  const matriz2Div = document.getElementById("matriz2Div");
  // Crea una tabla para representar la matriz
  const tabla2 = document.createElement("table");
  // Recorre la matriz y crea filas y celdas en la tabla
  for (let i = 0; i < matrizAtaque.length; i++) {
    let fila = document.createElement("tr");
    fila.classList.add("filas"); // Agrega la clase "fila" a la fila
    for (let j = 0; j < matrizAtaque[i].length; j++) {
      let celda = document.createElement("td");
      celda.classList.add("celdas"); // Agrega la clase "celda" a la celda
      celda.textContent = matrizAtaque[i][j];
      fila.appendChild(celda);

      if (i === 0) {
        celda.classList.add("primera-fila");
      };

      if (j === 0) {
        celda.classList.add("primera-columna");
      };
    };

    tabla2.appendChild(fila);
  }
  // Agrega la nueva tabla al div en el HTML
  randomBarcos2();
  matriz2Div.appendChild(tabla2);
};

export function reordenarBarcos() {
  let contadorReordenar = 0;
  const reordenarBoton = document.getElementById("reordenar");
  randomBarcos();
  generarMatrizHTML(matrizJug1);

  reordenarBoton.addEventListener("click", function () {
    if (contadorReordenar < 3) {
      // Reorganiza los barcos aleatoriamente
      limpiarMatriz(matrizJug1);
      randomBarcos();
      contadorReordenar += 1;
      // Limpia la matriz

      // Genera y muestra la matriz en el div actualizada
      generarMatrizHTML(matrizJug1);
    } else {
       // Si se han agotado los intentos, muestra la alerta
      alertIntentosRe();
    };
  });
};

// Funcion para limpiar matriz 
export function limpiarMatriz(matrizJug1) {
  for (let i = 1; i < matrizJug1.length; i++) {
    for (let j = 1; j < matrizJug1[i].length; j++) {
      if (matrizJug1[i][j] !== "-") {
        matrizJug1[i][j] = "-"; // Reemplaza el valor con "-"
      };
    };
  };
};

export function generarMatrizJug1Def(matrizJug1) {
  // Div de el HTML
  const matriz1Div = document.getElementById("matriz1Div");
  // Crea una tabla para la matriz
  const tabla3 = document.createElement("table");
  // Recorre la matriz y crea filas y celdas en la tabla
  for (let i = 0; i < matrizJug1.length; i++) {
    const fila = document.createElement("tr");
    fila.classList.add("filas"); // Agrega la clase "fila" a la fila

    for (let j = 0; j < matrizJug1[i].length; j++) {
      const celda = document.createElement("td");
      // celda.attr('data-x', 1);
      celda.classList.add("celdas"); // Agrega la clase "celda" a la celda
      celda.textContent = matrizJug1[i][j];

      fila.appendChild(celda);

      if (i === 0) {
        celda.classList.add("primera-fila");
      }

      if (j === 0) {
        celda.classList.add("primera-columna");
      }
    }

    tabla3.appendChild(fila);
  }
  // Agrega la nueva tabla al div en el HTML
  matriz1Div.appendChild(tabla3);
}

const user = document.getElementById("textUser");

user.addEventListener("keyup", (e) => {
  e.preventDefault();
  const nameUser = user.value;
  document.querySelector(".yBoard").innerHTML = nameUser;
});

const barra = document.getElementById("barra");
const mute = document.getElementById("mute");

barra.addEventListener(
  "change",
  function (ev) {
    const v = document.getElementById("audioPlayer");
    v.volume = ev.currentTarget.value;

    if (v.volume != 0) {
      mute.checked = false;
    } else if (v.volume === 0) {
      mute.checked = true;
    };
  },
  true
);

mute.addEventListener(
  "change",
  function (ev) {
    const v = document.getElementById("audioPlayer");

    if (ev.target.checked) {
      v.volume = 0;
      barra.value = 0;
    } else {
      v.volume = ev.currentTarget.value;
      barra.value = ev.currentTarget.value;
    } 
  },
  true
);  

