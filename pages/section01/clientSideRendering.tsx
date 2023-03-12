import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

// 서버에는 window나 document와 같은 속성이 없기 때문에 (browser에만 있기 때문에)
// dynamic import => ssr = false로 지정해서 해결할 수 있다.
const NoSSR = dynamic(() => import('./NoSSR'), {
  ssr: false,
});

function Example() {
  const [data, setData] = useState<number>(0);

  useEffect(() => {
    const delaySeconds = 2000;

    new Promise((res, rej) => {
      setTimeout(() => {
        res(Math.random());
      }, delaySeconds);
    }).then((res) => setData(res as number));
  }, []);

  return (
    <div>
      <h1>Client-side data fetching</h1>
      <p>값 : {data}</p>

      <NoSSR />
    </div>
  );
}

export default Example;
