'use client';

import { useEffect, useState } from 'react';

function DateTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <span>
      {date.toLocaleString('en-BD', {
        dateStyle: 'long',
        timeStyle: 'short',
      })}
    </span>
  );
}

export default DateTime;
