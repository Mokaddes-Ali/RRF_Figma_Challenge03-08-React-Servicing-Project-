import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-4xl font-bold text-blue-600">Vite + React + Tailwind CSS</h1>
          <button onClick={() => setCount((count) => count + 1)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            count is {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
