const auth = require('routes/auth.js')

//Code si-dessous pris sur un article et modifié (à comprendre)
app.post("/login", async (req, res) => {
    try {
     const user = await user.findOne({ email: req.body.email });
     const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
     );
     if (comparePassword) {
      const token = generateToken(user);
      res.status(200).json({
       token,
       emailAddress: user.email,
       password: user.password,
      });
     }
    } catch (err) {
     res.status(500).json({
      message: ('User doesn\'t exist. Please sign up')
     });
    }
   });