import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
    <Route path="/player/:id" element={<SinglePlayer />}></Route>
    <Route path="/" element={<AllPlayers />}>
    </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
