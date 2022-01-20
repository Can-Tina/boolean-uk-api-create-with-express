const db = require("../../utils/database");
const { buildAnimalDatabase } = require("../../utils/mockData");

function Pet() {
  function createTable() {
    const sql = `
      DROP TABLE IF EXISTS pets;

      CREATE TABLE IF NOT EXISTS pets (
        id        SERIAL        PRIMARY KEY,
        name      VARCHAR(255)   NOT NULL,
        age       INTEGER       NOT NULL,
        type      VARCHAR(255)   NOT NULL,
        breed     VARCHAR(255)   NOT NULL,
        microchip BOOLEAN       NOT NULL
      );
    `;

    return db
      .query(sql)
      .then((result) => console.log("[DB] Pet table ready."))
      .catch(console.error);
  }

  function mockData() {
    const createPet = `
      INSERT INTO pets
        (name, age, type, breed, microchip)
      VALUES
        ($1, $2, $3, $4, $5)
    `;

    const pets = buildAnimalDatabase();

    pets.forEach((pet) => {
      db.query(createPet, Object.values(pet));
    });
  }

  createTable().then(() => {
    console.log("\nCreating mock data for Pets...\n");

    mockData();
  });
}

async function createPet(petData) {
  const createOneSQL = `
    INSERT INTO pets 
      (name, age, type, breed, microchip) 
    VALUES 
      ($1,$2,$3,$4,$5) 
    RETURNING *;`;

  let createResult = {}

  await db
    .query(createOneSQL, [petData.name , petData.age, petData.type, petData.breed, new Boolean(petData.microchip)])
    .then(result => createResult = result.rows[0])
    .catch(error => {
      createResult = {
        error: {
          message: "DB error, could not create pet: " + error.message,
          petToCreate: petData,
          code: error.code
        }
      }
    });

  return createResult;
}


module.exports = {
  Pet,
  createPet
};
