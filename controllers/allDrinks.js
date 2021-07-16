const Drink = require("../models/Drink");

const getAllDrinks = async (req, res) => {
  const drinks = await Drink.find({}, { name: true, price: true });
  res.json(drinks);
};

const getInStockDrinks = async (req, res) => {
  const drinks = await Drink.find({
    available: true,
  });
  res.json(drinks);
};

const getDrinkById = async (req, res) => {
  const drink = await Drink.findById(req.params.id);
  res.json(drink);
};

const postDrink = async (req, res) => {
  try {
    const drink = await new Drink({
      name: req.body.name,
      price: req.body.price,
      available: req.body.available,
      caffeine: req.body.caffeine,
      volume: req.body.volume,
      description: req.body.description,
    });
    drink.save();
    res.json("Напиток добавлен");
  } catch (e) {
    console.log(e.message);
  }
};

const patchDrink = async (req, res) => {
  try {
    const drink = await Drink.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    await drink.save();
    res.json("Внесены изменения");
  } catch (e) {
    console.log(e.message);
  }
};

const deleteDrink = async (req, res) => {
  try {
    const drink = await Drink.findById(req.params.id);
    drink.delete();
    res.json("Напиток удален");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getAllDrinks,
  getInStockDrinks,
  getDrinkById,
  postDrink,
  patchDrink,
  deleteDrink,
};
