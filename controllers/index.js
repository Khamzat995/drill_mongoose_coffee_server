const { getAllDrinks,
  getInStockDrinks,
  getDrinkById,
  postDrink,
  patchDrink,
  deleteDrink} = require("./allDrinks");

module.exports = {
  getDrinkById,
  getInStockDrinks,
  getAllDrinks,
  deleteDrink,
  postDrink,
  patchDrink,
};
