const express = require("express")
const { getApi } = require("./controllers/api")
const { getArticle, patchArticle, getArticles, getComments, postComment } = require("./controllers/articles")
const { deleteComment } = require("./controllers/comments")
const { getTopics } = require("./controllers/topics")
const { getUsers } = require("./controllers/users")
const { customError, standardError } = require("./errors/error-handling")


const app = express()
app.use(express.json())

app.get('/api', getApi)

app.get('/api/topics', getTopics)

app.get('/api/articles', getArticles)
app.get('/api/articles/:article_id', getArticle)
app.patch('/api/articles/:article_id', patchArticle)
app.get('/api/articles/:article_id/comments', getComments)
app.post('/api/articles/:article_id/comments', postComment)

app.get('/api/users', getUsers)

app.delete('/api/comments/:comment_id', deleteComment)


app.use(customError)
app.use(standardError)

module.exports = app