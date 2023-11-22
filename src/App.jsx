import './App.css'
import Toggle from './components/Toggle';
import Button from './components/Button';
import Checkbox from './components/Checkbox';

function App() {
  

  return (
    <div className='to_remove'>
      <Button buttonClass='button-primery' nameButton='Apply now'/>
      <Toggle />
      <Checkbox />
    </div>
  )
}

export default App
