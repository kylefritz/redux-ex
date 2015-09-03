import express from 'express'
import React from 'react'

const router = express.Router()
export default router

/* Always render the same page! */
router.get('/', (req, res, next) => {
  res.render('layout', {
    title: 'My App',
    content: null,
  })
})
