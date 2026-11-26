
const API_URL = import.meta.env.VITE_API_URL

export async function checkBackendHealth(): Promise<boolean> {
    const response = await fetch(`${API_URL}/actuator/health`)

    if (!response.ok) {
        throw new Error('Backend request failed')
    }

    const data = await response.json()

    return data.status === 'UP'
}
