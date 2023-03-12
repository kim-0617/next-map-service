import React from 'react';

function NoSSR() {
  return <div>화면 넓이 : {window.innerWidth}</div>;
}

export default NoSSR;
