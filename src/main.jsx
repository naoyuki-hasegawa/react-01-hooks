import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const codeInfo = {
  name: "Taro",
  age: 50,
};

const codeContext = createContext(codeInfo)

ReactDOM.createRoot(document.getElementById('root')).render(
  <codeContext.Provider value={codeInfo}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </codeContext.Provider>
)

export default codeContext;