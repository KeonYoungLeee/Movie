import React, { useState, useRef, useCallback, useEffect } from 'react';
import Router from 'next/router'
import Link from 'next/link';

import { Wrapper, Container, BackIcon, SearchScreen, SearchForm, SearchInput, SearchCloseBtn, SearchIcon, Menu, CloseBtn, List, HambugerMenu } from './style';

const HorizonBox = () => {

  const [toggle, setToggle] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);
  const currentRef = useRef(null);

  const onClickToogle = useCallback(() => {
    setToggle(toggle === false ? true : false);
  }, [toggle]);

  const onSearchToggle = useCallback(() => {
    setSearchToggle(searchToggle === false ? true : false);
  }, [searchToggle]);

  const onLinkClick = useCallback(() => {
    setToggle(false)
  }, [toggle])

  const onChangeSearchInput = useCallback((event) => {
    setSearchInput(event.target.value);
  });

  const onPreviousPage = () => {
    Router.back();
  }

  useEffect(() => {
    const eventListener = (event) => {
      if ( currentRef.current && event.target && currentRef.current.contains(event.target) ) {
        return;
      }
      setToggle(false);
    }
    document.addEventListener('mousedown', eventListener);
    return () => {
      document.removeEventListener('mousedown', eventListener);
    }
  }, [currentRef, onClickToogle]);

  return (
    <Wrapper>
      <Container>
        <div style={{ display: "flex"}}>
          <BackIcon onClick={onPreviousPage} />
          { searchToggle ? (
              <SearchScreen>
                <SearchForm>
                  <h2>Search</h2>
                  <div style={{ display: "flex", justifyContent: "center"}}>
                    <SearchInput 
                      text="text"
                      value={searchInput}
                      onChange={onChangeSearchInput}
                    />
                    <SearchCloseBtn onClick={onSearchToggle} />
                  </div>
                </SearchForm>
              </SearchScreen>
            ) : (
              <SearchIcon onClick={onSearchToggle} />
            )}
        </div>
        { toggle ? (
          <Menu ref={currentRef} open={toggle}>
            <CloseBtn onClick={onClickToogle} />
            <List hoverEvent>
              <li key="home" onClick={onLinkClick} ><Link href="/">ホーム</Link></li>
              <li key="movie" onClick={onLinkClick} ><Link href="/movie">映画</Link></li>
              <li key="about" onClick={onLinkClick} ><Link href="/about">その他</Link></li>
            </List>
          </Menu>
        ) : (
          <HambugerMenu onClick={onClickToogle} open={toggle} />
        )}
      </Container>
    </Wrapper>
  );
};

export default HorizonBox;
