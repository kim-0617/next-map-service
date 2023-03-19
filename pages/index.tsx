import Header from '@/components/Header';
import Link from 'next/link';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import React, { useEffect, useCallback } from 'react';
import MapSection from '@/components/MapSection';
import { Store } from '@/types/store';
import useStores from '@/hooks/useStores';
import useMap from '@/hooks/useMap';
import { useRouter } from 'next/router';
import copy from 'copy-to-clipboard';
import DetailSection from '@/components/DetailSection';

function Home({ stores }: { stores: Store[] }) {
  const { initializeStores } = useStores();
  const { resetMapOptions, getMapOptions } = useMap();
  const router = useRouter();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  const replaceAndCopyUrl = useCallback(() => {
    const mapOptions = getMapOptions();
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;

    router.replace(query);
    copy(location.origin + query);
  }, [router, getMapOptions]);

  return (
    <>
      <Header
        onClickLogo={resetMapOptions}
        rightElements={[
          <button
            key="복사"
            onClick={replaceAndCopyUrl}
            className="box"
            aria-label="현재위치 클립보드 복사"
          >
            <AiOutlineShareAlt size={20} />
          </button>,

          <Link
            href={'/feedback'}
            key="링크"
            className="box"
            aria-label="피드백 페이지로 이동"
          >
            <VscFeedback size={20} />
          </Link>,
        ]}
      />

      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
        <DetailSection />
      </main>
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const stores = (await import('../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
