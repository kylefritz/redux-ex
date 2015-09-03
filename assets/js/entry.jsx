import "../css/style.css"
import React from 'react'
import App from './App'

window.onload = function() {
  React.render(<App {...props}/>, document.getElementById('container'))
}
