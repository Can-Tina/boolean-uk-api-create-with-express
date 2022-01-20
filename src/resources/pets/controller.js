const Pet = require("./model");

//Pet().init();

async function createPet(req, res) {
  const petToCreate = {
    ...req.body
  };

  const createPet = Pet.createPet;
  const thisRes = await createPet(petToCreate, res);
  return res.json({ data: thisRes });
}

module.exports = {
  createPet,
};