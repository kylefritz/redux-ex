import express from 'express'
import App from '../assets/js/App.jsx'
import React from 'react'

const router = express.Router()
export default router

/* Always render the same page! */
router.get('/', (req, res, next) => {
  res.render('layout', {
    title: 'My App',
    content: null,
    props: props
  })
})
