import './App.css'
import { useState } from 'react'

function App() {
  const [ selectState, setSelectState ] = useState('en')

  const handleLenguage = (t, f) => {
    return selectState === 'en' ? t : f
  }

  return (
    <div>
      <select value={selectState} onChange={(e) => setSelectState(e.target.value)}>
        <option value="en">{handleLenguage('English', 'Ingles')}</option>
        <option value="es">{handleLenguage('Spanish', 'Español')}</option>
      </select>
      <h1>{handleLenguage('Animals', 'Animales')}</h1>

      <ul>
        <li>{handleLenguage('Pig', 'Cerdo')}</li>
        <li>{handleLenguage('Dog', 'Perro')}</li>
        <li>{handleLenguage('Cat', 'Gato')}</li>
        <li>{handleLenguage('Eagle', 'Aguila')}</li>
        <li>{handleLenguage('Bird', 'Ave')}</li>
        <li>{handleLenguage('Horse', 'Caballo')}</li>
      </ul>
    </div>
  )
}

export default App
