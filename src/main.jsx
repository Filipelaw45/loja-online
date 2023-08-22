import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Body/>
    <Footer/>
  </React.StrictMode>,
)
