```javascript
import {useEffect, useState} from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct solution: The state update is outside useEffect
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}
```