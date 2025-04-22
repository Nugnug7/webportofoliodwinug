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

    insertMessage = (firstName, lastName, email, subject, message) => {
        return db.promise().query(
          'INSERT INTO messages (firstName, lastName, email, subject, message) VALUES (?, ?, ?, ?, ?)',
          [firstName, lastName, email, subject, message]
        );
      };
}