const mysql             = require('mysql2')
const config_database   = require('../config/database')
const db                = config_database.db
const eksekusi          = config_database.eksekusi

module.exports = {

    contactpage: function(req,res) {
        console.log()
        res.render('v_tab_home/contact')
    },
    
    addmessage: async function (req,res) {
  
       let listMessage = {
            firstName   : req.body.firstName,
            lastName    : req.body.lastName,
            email       : req.body.email,
            subject     : req.body.subject,
            message     : req.body.message,
        
        }
        let sqlSyntax = mysql.format(
            `INSERT INTO contact SET ?`,
            [listMessage]
        )
       
        try {
            await eksekusi(sqlSyntax); // asumsi ini promise
    
            // Setelah data disimpan, render halaman dengan notifikasi
            res.render('v_tab_home/contact', {
                notifikasi: 'Pesan berhasil dikirim!',
                listMessage: {} // kosongkan form kalau perlu
            });
    
        } catch (error) {
            console.error(error);
            res.render('v_tab_home/contact', {
                notifikasi: 'Terjadi kesalahan saat mengirim pesan!',
                listMessage: listMessage // isi ulang form dengan data sebelumnya
            });
        }
    },



}
    