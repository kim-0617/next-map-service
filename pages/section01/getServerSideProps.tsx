import { GetServerSideProps } from 'next';
import React from 'react';

function Example({ data }: { data: number }) {
  return (
    <div>
      <h1>getServerSideProps</h1>
      <p>값 : {data}</p>
    </div>
  );
}

// serversideprops는 프리렌더링이 아니라 페이지에 들어올 때 마다 렌더링 된다.
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // preRendering 개념
  res.setHeader(
    'Cache-Control',
    'pubilc, s-maxage=5, stale-while-revalidate=10'
  );

  const delaySeconds = 2000;

  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, delaySeconds);
  });

  return { props: { data } };
};

export default Example;
