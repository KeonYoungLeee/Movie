import React from 'react';
import Link from 'next/link';

import { Wrapper, List } from './style';

const VerticalBox = () => {
  return (
    <Wrapper>
      <List>
        <li key="home"><Link href="/">ホーム</Link></li>
        <li key="movie"><Link href="/movie">映画</Link></li>
      </List>
      <List>
        <li key="search">
          <input text="text" />
          {/* <InputSearch.Search enterButton style={{ verticalAlign: 'middle' }} /> */}
        </li>
      </List>
      <List>
        <li key="about"><Link href="/about">その他</Link></li>
      </List>
    </Wrapper>
  );
};

export default VerticalBox;
