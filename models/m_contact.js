const mysql             = require('mysql2')
const config_database   = require('../config/database')
const db                = config_database.db
const eksekusi          = config_database.eksekusi

module.exports = 
{
    getSemua : function() {
        let sqlSyntax = mysql.format (
            `select * from contact`
        )
        return eksekusi(sqlSyntax)
    },

    insert: function(req,res ) {
        let sqlData = {
            firtsName       : req.body.form_name,
            lastnNme        : req.body.form_lastname,
            email           : req.body.form_email,
            Message         : req.body.form_message,
            created_at      : moment().format('YYYY-MM-DD HH:mm:ss'),
            created_by      : req.session.user[0].id,
        }
        let sqlSyntax = mysql.format(
            `INSERT INTO contact SET ?`,
            [sqlData]
        )
        return eksekusi( sqlSyntax )
    },
}