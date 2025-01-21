```javascript
import {useEffect, useState} from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because it updates the state
    // within the useEffect dependency.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```