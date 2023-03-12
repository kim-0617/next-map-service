import Header from '@/components/Header';
import Link from 'next/link';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import React from 'react';

function Home() {
  return (
    <>
      <Header
        rightElements={[
          <button
            key={'복사'}
            onClick={() => {
              alert('copy!');
            }}
            className="copy__btn"
          >
            <AiOutlineShareAlt size={20} />
          </button>,
          <Link href={'/feedback'} key="링크">
            <VscFeedback size={20} />
          </Link>,
        ]}
      />
    </>
  );
}

export default Home;
