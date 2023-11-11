const { json } = require('express')
const express = require('express')
const app = express()
const port = 8082

var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/revenue',  (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const revenue =  [
    { month: 'Jan', revenue: 2000 },
    { month: 'Feb', revenue: 1800 },
    { month: 'Mar', revenue: 2200 },
    { month: 'Apr', revenue: 2500 },
    { month: 'May', revenue: 2300 },
    { month: 'Jun', revenue: 3200 },
    { month: 'Jul', revenue: 3500 },
    { month: 'Aug', revenue: 3700 },
    { month: 'Sep', revenue: 2500 },
    { month: 'Oct', revenue: 2800 },
    { month: 'Nov', revenue: 3000 },
    { month: 'Dec', revenue: 4800 },
  ];
  res.json(revenue);
})

app.post('/authorizations', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  const datas = {
    message: 'ok',
    data: {
    token: '77ab2620-9543-4def-8bbb-c7d6c9efdec2'
    }
  }
  res.json(datas);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})