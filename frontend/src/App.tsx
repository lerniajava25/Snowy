
import { useEffect, useState } from 'react'
import { checkBackendHealth } from './services/api'

function App() {
    const [status, setStatus] = useState('Connecting...')

    useEffect(() => {
        checkBackendHealth()
            .then((healthy) => {
                setStatus(healthy ? 'Connected' : 'Unavailable')
            })
            .catch(() => {
                setStatus('Disconnected')
            })
    }, [])

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
            <span className="text-6xl">❄️</span>

            <h1 className="text-5xl font-bold">
                Snowy
            </h1>

            <p className="mt-4 text-slate-400">
                Smart winter road reporting
            </p>

            <div className="mt-8 flex items-center gap-2">
        <span
            className={`h-3 w-3 rounded-full ${
                status === 'Connected'
                    ? 'bg-green-500'
                    : 'bg-red-500'
            }`}
        />

                <span>Backend: {status}</span>
            </div>
        </main>
    )
}

export default App
