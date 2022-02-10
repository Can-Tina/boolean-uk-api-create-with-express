const Pet = require("./model");

Pet().init();

async function createPet(req, res) {
  const petToCreate = {
    ...req.body
  };

  const createPet = Pet().createOnePet;
  const thisRes = await createPet(petToCreate.name, res);
  return res.json({ data: thisRes });
}

module.exports = {
  createPet,
};