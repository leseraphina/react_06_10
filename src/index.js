import React from 'react'
import ReactDOM from 'react-dom/client'
// import Effec01 from './effect/effect01'
// import Effec02 from './effect/effect02'
import Effec03 from './effect/effect03'


function App(){
  return (
    <div>
      <Effec03 title="welcome" />
    </div>
  )
}

const root = document.querySelector('#root')
ReactDOM.createRoot(root).render(
<React.StrictMode>
  <App />
</React.StrictMode>
)