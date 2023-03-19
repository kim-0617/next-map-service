import useMap from '@/hooks/useMap';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  onClickLogo?: () => void;
  rightElements?: React.ReactElement[];
}

function Header({ rightElements, onClickLogo }: Props) {
  const { resetMapOptions, getMapOptions } = useMap();

  const router = useRouter();

  return (
    <header className="header">
      <div className="flexItem">
        <Link
          href={'/'}
          onClick={onClickLogo}
          className="box"
          aria-label="홈으로 이동"
        >
          <Image
            src="https://lecture-1.vercel.app/inflearn.png"
            alt="logo"
            width={110}
            height={20}
            priority
          />
        </Link>
      </div>
      {rightElements && <div className="flexItem">{rightElements}</div>}
    </header>
  );
}

export default Header;
