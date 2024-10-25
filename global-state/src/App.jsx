import { CounterProvider } from './Components/CounterContext';
import CounterButtons from "./Components/CounterButtons"
import CounterDisplay from "./Components/CounterDisplay"


function App() {

  return (
    <>
      <CounterProvider>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <CounterDisplay/>
          <CounterButtons/>
        </div>
      </CounterProvider>
    </>
  )
}

export default App
