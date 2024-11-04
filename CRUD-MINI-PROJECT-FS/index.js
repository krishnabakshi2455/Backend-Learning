const express = require('express')
const server = express()
const ejs = require('ejs')
const fs = require('fs')
const json = require('express-json');


server.set('view engine', 'ejs')
server.use(express.urlencoded({ extended: true }))









// =============================================THIS IS CREATE =========================
server.get('/', (req, res) => {
    res.render('create')
    // console.log(req.query.addfiledata, req.query.createfile);
    fs.writeFile(`${req.query.createfile}`, `${req.query.addfiledata}`, (err) => {
        if (err) {
            console.log("this is writeFile error ", err);
        } else if (req.query.createfile && req.query.addfiledata == undefined || null) {
            console.log("File cannot be created");
        }
        else {
            console.log('File created writefile')
        }
    })

    fs.mkdir(`${req.query.createfolder}`, (err) => {
        if (err) {
            console.log("this is writeFile error ", err);
        } else if (req.query.createfile && req.query.addfiledata == undefined || null) {
            console.log("File cannot be created");
        }
        else {
            console.log('File created writefile')
        }
    })
})

// ================================THIS IS UPDATE======================

server.get('/update', (req, res) => {
    res.render('update')

    fs.appendFile(`${req.query.updatefile}`, `${req.query.appenddata}`, (err) => {
        if (err) {
            console.log("this is appendfile error", err);
        }
        else {
            console.log('File updated');
        }
    })
})

//=====================================THIS IS EDIT================================

server.get('/edit', (req, res) => {
    res.render('edit')
    fs.rename(`${req.query.editfile}`, `${req.query.newnamefile}`, (err, data) => {
        if (err) {
            console.log("this is edit error", err);
        }
        else {
            console.log('File Edited');
        }
    })

})

// =======================================THIS IS DELETE ========================================

server.get('/delete', (req, res) => {
    res.render('delete')
    fs.unlink(`${req.query.deletefile}`, (err, data) => {
        if (err) {
            console.log("this is delete file error", err);
        }
        else {
            console.log('File read');
            // console.log(data.toString());
            // res.send(data.toString());
        }
    })

    fs.rmdir(`${req.query.deletefolder}`, (err, data) => {
        if (err) {
            console.log("this is delete folder error", err);
        }
        else {
            console.log(' Deleted');
            // console.log(data.toString());
            // res.send(data.toString());
        }
    })

})

// ====================================THIS IS READ===============================================

server.get('/read', (req, res) => {
    res.render('read')
    fs.readFile(`${req.query.readfile}`,"utf-8", (err, data) => {
        if (err) {
            console.log("this is edit error", err);
        }
        else {
            // console.log('Reading',data);
            console.log(data.toString());
            res.send(data.toString());
        }
    })

})






    server.get('*', (req, res) => {
        res.send("404 PAGE NOT FOUND")
    })
    server.listen(1254)