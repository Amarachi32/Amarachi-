import express from 'express'
import bodyparser from 'body-parser'
import usersroute from './routes/users.js'
const app = express();

app.use(bodyparser.json())
app.use('/users', usersroute)

app.get('/', (req, res )=> {
    console.log('hy')
   res.send('this is home page')
})
app.listen(3000, ()=> console.log('server is on'))