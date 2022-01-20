const express = require("express");

const { createPet, getAllPetTypes, getPetByType, getPetByTypeAndBreed, getNoMicrochip, getPetByTypeAndMicrochip } = require("./controller");

const router = express.Router();

router.post("/", createPet);

router.get("/types", getAllPetTypes)

router.get("/microchip=false", getNoMicrochip)

router.get("/:type/breed=:breed", getPetByTypeAndBreed)

router.get("/:type/microchip=false", getPetByTypeAndMicrochip)

router.get("/:type", getPetByType)


module.exports = router;
