import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { BtnClick, PageCover, CloseMenu, OpenedMenu, Wrapper, Container, Background } from './style';
import { Input } from 'antd';

const Header = () => {

  const [classToggle, setClassToggle] = useState(false);

  const onChangeClassToggle = useCallback((e) => {
    setNow(e.target.value);
  });

  const onClickClassToggle = useCallback(() => {

  }, []);


  return (
    <Background>
    {/* Link페이지 : https://codepen.io/biggerbig/pen/QNayZw */}
      <Wrapper>
        {/* <BtnClick value={classToggle} onChange={onChangeClassToggle} onClick={onClickClassToggle} class={}/>
        <PageCover />
        <OpenedMenu>
          <CloseMenu />
        </OpenedMenu>
        */}

        
        <Container>
          <ul>
            <li key="home"><Link href="/">ホーム</Link></li>
            <li key="movie"><Link href="/movie">映画</Link></li>
            <li key="tv"><Link href="/tv">テレビ</Link></li>
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
