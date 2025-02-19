import { useState } from 'react'
import Button from './components/Button';
function App() {
  const [color, setColor] = useState("olive")
  let colors = ["black", "red", "green", "yellow", "orange", "blue"]

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <Button props={colors} setColor={setColor} />
      </div>
    </>
  )
}

export default App
