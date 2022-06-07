import {useState, useCallback} from "react";

export const useHttpHooks = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>(null)

    const request = useCallback (async (url, method='GET', body=null, headers={'Content-Type': 'Application/json'}) => {
        setLoading(true)

        try {
            const response = await fetch(url, {method, body, headers})

            if (!response.ok) {
                throw new Error(`Couldn't fetch ${url}, status: ${response.status}`)
            }

            const data = await response.json()
            setLoading(false)
            return data
        } catch (err) {
            setLoading(false)
            if (err instanceof Error) {
                setError(err.message)
            }
            throw err
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return {loading, error, request, clearError}

}