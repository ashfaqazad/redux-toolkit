// import { useState } from 'react'
import './App.css'
// import { decrement, increment } from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/Navbar'
// import { increment } from './counter/counterSlice'
import { decrement, increment } from './counter/counterSlice'





function App() {
  // const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  const count = useSelector((state) => state.counter.value)


  return (
    <>
    <Navbar />
        <div>
          <button>-</button>
         Currently count is {count}
         <button onClick={() =>dispatch(increment())}>+</button>
        </div>
    </>
  )
}

export default App
