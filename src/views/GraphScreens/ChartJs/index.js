import React, {useState, useEffect} from 'react';
import {LineChart} from 'react-native-webview-charts';

export default function() {
  const [data, setData] = useState([1, 2, 3, 6, 2, 3, 45, 6, 7]);

  useEffect(() => {
    const intervalIdentifier = setInterval(() => {
      const count = ~~(Math.random() * 30);
      setData([...Array(count)].map(e => ~~(Math.random() * count)));
    }, 2000);
    return () => {
      clearInterval(intervalIdentifier);
    };
  });

  return <LineChart data={data} />;
}
