import React from 'react'
import ReactDOM from 'react-dom/client'
import Sec01 from './component/sec01'
import Sec02 from './component/sec02'

function App(){
  return (
    <div>
      <Sec01 />
      <Sec02 />
    </div>
  )
}

const root = document.querySelector('#root')
ReactDOM.createRoot(root).render(
<React.StrictMode>
  <App />
</React.StrictMode>
)