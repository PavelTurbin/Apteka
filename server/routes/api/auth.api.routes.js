const bcrypt = require("bcrypt");

// const router = require("express").Router();
// const { Registration } = require("../../db/models");
// const generateTokens = require("../../utils/generateTokens");
// const cookiesConfig = require("../../configs/cookiesConfig");

// router.post("/login", async (req, res) => {
//     const { email, password } = req.body; /// 111111
//     try {
//         const targetUser = await Registration.findOne({ where: { email} });
//         if (!targetUser) return res.status(401).json({ message: "Неверный email или пароль" });
        
//         const isValid = await bcrypt.compare(password, targetUser.password);
//         if (!isValid) return res.status(401).json({ message: "Неверный email или пароль" })
        
//         const user = targetUser.get();
//         delete user.password

    
//         const {accessToken, refreshToken} = generateTokens({user})
        
//         res
//         .cookie("refreshToken", refreshToken,cookiesConfig)
//         .json({accessToken, user});

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// })

// router.get("/logout", async (req, res) => {
//     res.clearCookie("refreshToken").json({ message: "OK" });
// })

// router.post("/registr", async (req, res) => {
//     const { login, password, email } = req.body;
//     try {
//       const reg = await Registration.create({ 
//       login, password, email});
//       console.log(reg);
//       res.json(reg);
//     } catch (error) {
//       res.status(418).json({ message: error.message });
//     }
//   });

module.exports = router;



