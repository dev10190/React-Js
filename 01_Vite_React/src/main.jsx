import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Hello world</h1>
  )
}

const anotherElement = (
  <a href='https://google.com' targer='_blank'>Visit google</a>
)

const anotherone = 'chai aur code'

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click me to visit google',
  anotherone
)

createRoot(document.getElementById('root')).render(
  // <MyApp />
  // anotherElement
  // reactElement
  <App />
)
