import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>This is react</h2>
      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default App
