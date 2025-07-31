import React, { useState, useMemo } from 'react';

function factorial(n) {
  console.log('Calculating factorial...'); // This will show when the function runs
  if (n < 0) return -1;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

export default function FactorialCalculator() {
  const [number, setNumber] = useState(1);
  const [incrementor, setIncrementor] = useState(0);

  const memoizedFactorial = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>
        Factorial of {number} is: {memoizedFactorial}
      </p>
      <button onClick={() => setIncrementor(incrementor + 1)}>
        Re-render component ({incrementor})
      </button>
      <p>
        This text updates without re-calculating factorial if number is same.
      </p>
    </div>
  );
}
