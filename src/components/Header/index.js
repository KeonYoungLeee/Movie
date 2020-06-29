import React, { useState, useEffect, useCallback } from 'react';
import { Wrapper, Container, Background } from './style';
import VerticalBox from './VerticalBox';

const Header = () => {

  const [isRealSize, setIsRealSize] = useState(false);

  const onRealSize = useCallback(() => {
    setIsRealSize(window.innerWidth < 450);
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
        <Container>
          { isRealSize ? <HorizonBox /> : <VerticalBox /> }
        </Container>
      </Wrapper>
    </Background>
  );
};

export default Header;
