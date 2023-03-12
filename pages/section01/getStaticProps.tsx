import React from 'react';

function Example({ data }: { data: number }) {
  return (
    <div>
      <h1>getStaticProps</h1>
      <p>값 : {data}</p>
    </div>
  );
}

// SSG 구현하는 법 => 정적 페이지 생성
// 미리 페이지를 준비한다.
export async function getStaticProps() {
  const delaySeconds = 2000;

  // 서버에서 데이터를 받는다고 가정하고 2초후 데이터 return
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, delaySeconds);
  });

  // 컴포넌트의 props 아래에 들어가게 된다.
  // ISR을 구현하기 위해 revalidate : seconds 를 주면 쉽게 구현 가능
  // 5초마다 페이지 다시 생성 => 점진적 페이지 재구성
  return { props: { data }, revalidate: 5 };
}

export default Example;
