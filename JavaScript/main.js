import { generarMatrizHTML, randomBarcos, reordenarBarcos } from "./barcos.js";
import {
  IniciarJuego,
  backToMenu,
  botonJuego,
  iniciarMovJugador,
  juego,
  settings,
  turnos,
  turnoActual
} from "./control.js";
import { iniciarTablero1 } from "./tableros.js";

// Tablero Jugador
let matrizJug1 = iniciarTablero1();

// Inicializar el botón jugar en el menú
settings();
botonJuego();
reordenarBarcos();
IniciarJuego();
juego();
backToMenu();
turnos();










