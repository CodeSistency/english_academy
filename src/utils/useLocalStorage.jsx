function useLocalStorage(key, initialValue) {
    const readValue = () => {
      if (typeof window === 'undefined') {
        return initialValue;
      }
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.warn(`Error reading localStorage key “${key}”:`, error);
        return initialValue;
      }
    };
  
    const [storedValue, setStoredValue] = useState(readValue);
  
    useEffect(() => {
      const stored = readValue();
      if (!stored) {
        setStoredValue(initialValue);
        window.localStorage.setItem(key, JSON.stringify(initialValue));
      }
    }, []);
  
    const setValue = (value) => {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    };
  
    return [storedValue, setValue];
  }
  
  export default useLocalStorage;
