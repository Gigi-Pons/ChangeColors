import Input from './Input'
import Circle from './Circle'
import { useState } from 'react'

function App() {
  const [firstColor, setFirstColor] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)
  const [secondColor, setSecondColor] = useState('')
  return (
    <div className="App">
      <Circle 
      firstColor={firstColor}
      isDarkText={isDarkText}
      secondColor={secondColor}
      />
      <Input
        firstColor={firstColor}
        setFirstColor={setFirstColor}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
        secondColor={secondColor}
        setSecondColor={setSecondColor}
      />
    </div>
  );
}

export default App;
