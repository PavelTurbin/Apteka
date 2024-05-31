const router = require("express").Router();
const { User } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
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
    const user = await User.findByPk(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, login, email, password } = req.body;
  try {
    const user = await User.update(
      {
        name,
        login,
        email,
        password,
      },
      { where: { id } }
    );
    res.json(user);
  } catch (error) {
    res.status(418).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { name, login, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({
      name,
      login,
      email,
      password: hash,
    });
    res.json(user);
  } catch (error) {
    res.status(418).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.destroy({ where: { id } });
    res.json(user);
  } catch (error) {
    res.status(418).json({ message: error.message });
  }
});

module.exports = router;
