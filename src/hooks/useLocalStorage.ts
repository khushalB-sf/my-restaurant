import { useCallback, useState } from 'react'

function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [storedValue, setStoredValueState] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue !== null) {
      try {
        return JSON.parse(jsonValue) as T
      } catch (e) {
        console.warn(`Invalid JSON in localStorage for key: ${key}`, e)
      }
    }
    return initialValue instanceof Function ? initialValue() : initialValue
  })

  const setStoredValue = useCallback(
    (newState: T | (() => T)) => {
      const valueToStore = newState instanceof Function ? newState() : newState
      setStoredValueState(valueToStore)
      localStorage.setItem(key, JSON.stringify(valueToStore))
    },
    [key]
  )

  return [storedValue, setStoredValue] as const
}

export default useLocalStorage
