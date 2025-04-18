module.exports ={
    
    home_first: function(req,res) {
        res.render('homepage')
    },

    contact: function(req,res) {
        console.log()
        res.render('v_tab_home/contact')
    },

    mycareer: function(req,res) {
        res.render('v_tab_home/mycareer')
    },

}