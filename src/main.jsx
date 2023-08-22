import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header.jsx'
import Body from './components/body.jsx'
import Footer from './components/footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Body/>
    <Footer/>
  </React.StrictMode>,
)
