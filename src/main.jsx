import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { GifApp } from './GifApp'
import { store } from './store'
import './index.css'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <HashRouter hashType="noslash" >
        <GifApp />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
