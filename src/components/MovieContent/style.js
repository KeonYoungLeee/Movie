import styled from 'styled-components';
import { Card } from 'antd';
import { StarFilled } from '@ant-design/icons'

export const CardStyle = styled(Card)`
  position: relative;
  flex-basis: 100%;
  height: 15vw;
  margin-bottom: 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 3px 0px;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  ${ (props) => props.path
    ?
    `background: url(https://image.tmdb.org/t/p/original/${props.path}) center center / cover no-repeat;` 
    :
    `background: url();`
  }

  @media (max-width: 766px) {
    height: 40vw;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const Title = styled.p`
  position: relative;
  z-index: 1;
  color : white;
  font-size : 1.3em;
  margin-bottom: 0.3rem;
  text-align: center;
`;

export const Vote = styled.p`
  position: relative;
  margin-bottom: 0.5rem;
  z-index: 1;
  color : white;
  font-size : 1.3em;
  margin-left: 0.7rem;
  text-align: center;
`;

export const VoteContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.3rem;
`;

export const Star = styled(StarFilled)`
  & svg {
    color: yellow;
  }
`;

