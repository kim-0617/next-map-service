import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  rightElements?: React.ReactElement[];
}

function Header({ rightElements }: Props) {
  return (
    <header>
      <div className="logo">
        <Link href={'/'}>
          <Image
            src="https://lecture-1.vercel.app/inflearn.png"
            alt="logo"
            width={110}
            height={20}
          />
        </Link>
      </div>
      {rightElements && <div className="icons">{rightElements}</div>}
    </header>
  );
}

export default Header;
