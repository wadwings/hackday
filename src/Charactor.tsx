import React from 'react';
import type { FC } from 'react';
import {component, color} from './Common';
import styled from '@emotion/styled';
import downArrow from './assets/downArrow.png';

const Charactor : FC = () => {
  const {Title, Header} = component;
  return (
    <Main>
      <Header>
        <Title>角色关系</Title>
        <DownButton>
          <DownArrowImg src={downArrow}></DownArrowImg>
        </DownButton>
      </Header>
    </Main>
  )
}

const Main = styled.div`
  position: relative;
  background: ${color.background};
`

const DownButton = styled.div`
  width: 4.6vmin;
  height: 4.6vmin;
  border-radius: 1vmin;
  background: ${color.btnBackground};
  display: flex;
  align-items:center;
  justify-content:center;
`

const DownArrowImg = styled.img`
  width: 32%;
  height: 16%;
`
export default Charactor;