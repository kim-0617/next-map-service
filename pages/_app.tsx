import '@/scss/style.scss';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title={'naver 지도 서비스'}
        description="naver 지도 서비스 메인 페이지"
        canonical={`https://localhost:3000`}
        openGraph={{
          url: `https://localhost:3000`,
        }}
      />
      <Component {...pageProps} />;
    </>
  );
}
