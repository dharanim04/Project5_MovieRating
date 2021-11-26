module.exports.redirectToLogin = (req, res, next) => {
    if(!req.session.userId) {
      res.clearCookie('project5_sid')
      console.log("hello")
      res.redirect('/login')
    }else{
      next()
    }
  }
  
  module.exports.redirectToHome = (req, res, next) => {
    if(req.session.userId) {
      res.render('/')
    }else{
      next()
    }
  }