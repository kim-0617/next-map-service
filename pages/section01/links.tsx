import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function Links() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/section01/getStaticProps');
  };

  // prefetch 구현
  useEffect(() => {
    router.prefetch('/section01/getStaticProps');
  }, [router]);

  return (
    <>
      {/* 13버전의 next/link는 a태그를 완전히 대체합니다. 따라서 style도 줄 수 있고 태그 내부에 */}
      {/* a태그를 삽입하는 것은 lacacybehavior로써 오류를 유발합니다. */}
      {/* 중요한 특징은 링크 태그가 화면에서 보이면 그때 prefetch를 실행하여서 링크 href 속성에 해당하는 페이지를 prefetch 합니다. */}
      {/* <h1>links</h1> */}
      {/* <Link href={'/section01/getStaticProps'}>getStaticProps</Link> */}

      {/* useRouter훅은 link와 마찬가지로 CSR 방식으로 동작하며 */}
      {/* link를 대채할 수 있습니다. 그러나 link처럼 prefetch를 하지 않기 때문에 useEffect 훅을 사용하여 개발자가 직접 구현 해야합니다. */}
      <h1>Links</h1>
      <button onClick={handleClick}>getStaticProps</button>
    </>
  );
}

export default Links;
