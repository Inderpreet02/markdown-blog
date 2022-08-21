const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

// mongoose.connect('mongodb://localhost/blog')

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const article = [
        {
        title: 'Test Article',
        createdAt: new Date(),
        desc: 'This is a test description'
        },
        {
        title: 'Test Article',
        createdAt: new Date(),
        desc: 'This is a test description'
        },
    ]
    res.render('articles/index', {articles : article})
})

app.listen(5000, () => {
    console.log("Server is up");
}); 