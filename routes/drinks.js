const { Router } = require('express');
const Drink = require('../models/Drink');
const router = Router();

const {
  getAllDrinks,
  getInStockDrinks,
  getDrinkById,
  postDrink,
  deleteDrink,
  patchDrink
} = require('../controllers/index')

router.get("/drinks", getAllDrinks);
router.get("/drinks/in-stock", getInStockDrinks);
router.get("/drinks/:id", getDrinkById);
router.post("/drinks", postDrink);
router.delete("/drinks/:id", deleteDrink);
router.patch("/drinks/:id", patchDrink);

module.exports = router;