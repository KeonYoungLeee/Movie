import React, { useState, useEffect, useCallback } from 'react';
import { Wrapper, Container, Background } from './style';
import VerticalBox from './VerticalBox';
import HorizonBox from './HorizonBox';

const Header = () => {

  const [isRealSize, setIsRealSize] = useState(false);

  const onRealSize = useCallback(() => {
    setIsRealSize(window.innerWidth < 560);
  }, [isRealSize]);

  useEffect(() => {
    onRealSize();
    window.addEventListener('resize', onRealSize);
    return () => {
      window.removeEventListener('resize', onRealSize);
    }
  }, [onRealSize]);

  return (
    <Background>
      <Wrapper>
          { isRealSize ? <HorizonBox /> : <VerticalBox /> }
      </Wrapper>
    </Background>
  );
};

export default Header;
