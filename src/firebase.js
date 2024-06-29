import { getDatabase } from "firebase/database";
import app from "./firebaseConfig";

const db = getDatabase(app); // Obtener la instancia de la base de datos con la app inicializada

export { db };
