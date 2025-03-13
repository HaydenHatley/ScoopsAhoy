import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'

function Counter () {
    const [count, setCount] = useState(0)
    return (
        <>
            <h2>Counter</h2>
            <article>
                <h3></h3>
                <p></p>
                <div>
                    <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Scoops Ahoy</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                    </button>
                    <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </article>
        </>
    )
}
export default Counter;