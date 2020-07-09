import React from 'react';
import Link from 'next/link';

import { Wrapper, List, SearchIcon } from './style';

const VerticalBox = () => {
  return (
    <Wrapper>
      <List>
        <li key="home"><Link href="/">ホーム</Link></li>
      </List>
      <List>
        <Link href="/search"><SearchIcon> </SearchIcon></Link>
        <li key="movie"><Link href="/movie">映画</Link></li>
        <li key="about"><Link href="/about">その他</Link></li>
      </List>
    </Wrapper>
  );
};

export default VerticalBox;
