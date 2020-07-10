import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Container, ResultDisplay } from './style';
import { SEARCH_MOIVES_REQUEST } from '../../reducer/Movie/searchMovie';

const SearchPost = () => {

  const dispatch = useDispatch();
  const { searchResults, id, title } = useSelector(state => state.movieData.Search);

  const [inputValue, setInputValue] = useState('');
  const [blankCheck, setBlankCheck] = useState(false);

  const onChangeInputValue = useCallback(e => {
    setInputValue(e.target.value);
  });

  const settimeoutRef = useRef();
  const timeoutID = () => {
    if (inputValue === '') {
      setBlankCheck(false);
    } else {
      setBlankCheck(true);
      dispatch({
        type: SEARCH_MOIVES_REQUEST,
        title: inputValue,
      });
    }
  }

  useEffect(() => {
    settimeoutRef.current = setTimeout(timeoutID, 500);
    return () => {
      clearTimeout(settimeoutRef.current);
    };
  }, [inputValue]);

  return (
    <>
      <Wrapper>
        <Container>
          <input type="text" placeholder="映画名を検索してください！"　value={inputValue} onChange={onChangeInputValue} />
          <ResultDisplay>
            {searchResults.map((itmes) => {
              return (
                <Link 
                  href={{ pathname: '/detail', query: { movieId: parseInt(itmes.id, 10) } }} 
                  as={ `/detail/${parseInt(id, 10)}` }
                ><a>{blankCheck && itmes.title}</a></Link>
              
              );
            })}
          </ResultDisplay>
        </Container>
      </Wrapper>
    </>
  )
};

export default SearchPost;
