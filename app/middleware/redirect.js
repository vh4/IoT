module.exports = {
    redirect:(req,res,next)=>{
        if(req.isAuthenticated()){
            return next()
        }else{
            return res.redirect('/')
        }
    },
    back:(req,res,next)=>{
        if(req.isAuthenticated()){
            return res.redirect('/home')
        }else{
            return next()
        }
    }
}

