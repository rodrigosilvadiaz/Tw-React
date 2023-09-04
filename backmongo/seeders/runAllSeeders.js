/**

 * 👉 npm run seeders
 *
 */

require("dotenv").config();

async function runAllSeeders() {
  /**
   * Opcional. Si se quiere borrar toda la base de datos antes ejecutar los
   * seeders, descomentar las siguientes dos (2) líneas de código.
   *
   * PD: El método `dropDatabase` de Mongoose elimina toda la base de datos.
   */
  const { mongoose } = require("../dbInitialSetup");
  /* await mongoose.connection.dropDatabase(); */

  await require("./userSeeder")();
  await require("./tweetSeeder")();

  /**
   * Aquí se pueden ejectuar otros seeders que hayan en el sistema.
   * Por ejemplo, si se tuviesen seeders para los artículos y para los
   * comentarios, habría que ejectuar:
   *
   * await require("./articleSeeder")();
   * await require("./commentSeeder")();
   */

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
  console.log("[Twitts] ¡Los datos de prueba fueron insertados!");
  process.exit();
}

runAllSeeders();
