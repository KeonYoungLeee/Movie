import React from 'react';
import { Input } from 'antd';
import Link from 'next/link';
import { Wrapper, Container, Background } from './style';

const Header = () => {

  return (
    <Background>
      <Wrapper>
        <Container>
          <ul>
            <li key="home"><Link href="/">ホーム</Link></li>
            <li key="movie"><Link href="/movie">映画</Link></li>
          </ul>
          <ul>
            <li key="search">
              <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
            </li>
          </ul>
          <ul>
            <li key="about"><Link href="/about">その他</Link></li>
          </ul>
        </Container>
      </Wrapper>
    </Background>
  );
};

export default Header;
