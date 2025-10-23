import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>hello World</h1>
    <button onClick={() => {console.log('hi')}}>click me</button>
  </StrictMode>,
)
