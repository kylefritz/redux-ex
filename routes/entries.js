import express from 'express'
const router = express.Router()
export default router

/* GET home page. */
router.get('/entries', (req, res, next) => {
  // todo look up from db
  res.json({entries: [
    {name: "make a rhyme"},
    {name: "sing a song"}
    ]})
})

router.post('/entries', (req, res, next) => {
  // todo create entry
  console.log('update', req.body.name)
  res.json({entry: {}})
})
