const data = require('./customers')
const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()

app.use(express.static('public'))
app.engine('mst', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mst')

app.listen(3000, () => {
  console.log("Let's do this!")
})
app.get('/', (req, res) => {
  res.render('index', data)
})
app.get('/customers/:username', (req, res) => {
  console.log(req.params.username)
  function findUser(user) {
    return user.login.username === req.params.username
  }
  const oneUser = data.results.find(findUser)
  res.render('customers', oneUser)
})
