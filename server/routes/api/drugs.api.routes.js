const router = require("express").Router();
const { Drug} = require("../../db/models");

router.get("/", async (req, res) => {
    try {
      const drug = await Drug.findAll();
      res.json(drug);
    } catch (error) {
      res.status(418).json({ message: error.message });
    }
  });

  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    if (isNaN(+id)) {
      return res.status(400).json({ message: "Id не число" });
    }
    try {
      const drug = await Drug.findByPk(id);
      res.json(drug);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, price, priceDiscount,img }  = req.body; 
    try {
      const drug = await Drug.update({ 
        name, price, priceDiscount,img}, { where: { id } });
      res.json(drug);
    } catch (error) {
      res.status(418).json({ message: error.message });
    }
  });
  
  router.post("/", async (req, res) => {
    const { name, price, priceDiscount,img } = req.body;
    try {
      const drug = await Drug.create({ 
        name, price, priceDiscount,img});
      res.json(drug);
    } catch (error) {
      res.status(418).json({ message: error.message });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    const { id } = req.params;  
    try {
      const drug = await Drug.destroy({ where: { id } });
      res.json(drug);
    } catch (error) {
      res.status(418).json({ message: error.message });
    }
  });

  module.exports = router;