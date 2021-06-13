import React, {useState, MouseEvent} from 'react';
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
        <DownButton/>
      </Header>
    </Main>
  )
}

const Main = styled.div`
  position: relative;
  background: ${color.background};
`

const DownButton : FC = () => {
  const [showExample, setShowExample] = useState(false);
  return (
    <DownButtonBlock onClick={() => setShowExample(!showExample)}>
      <DownArrowImg src={downArrow} isDown={!showExample}></DownArrowImg>
      <Example />
    </DownButtonBlock>
  )
}

const DownButtonBlock = styled.div`
  width: 4.6vmin;
  height: 4.6vmin;
  border-radius: 1vmin;
  background: ${color.btnBackground};
  display: flex;
  align-items:center;
  justify-content:center;
  cursor: pointer;
  position: relative;
`

const DownArrowImg = styled.img<{isDown : boolean}>`
  width: 32%;
  height: 16%;
  transition: 0.5s;
  transform: ${({isDown}) => isDown ? 'none' : 'rotate(180deg)'};
`

const Example : FC = () => {
  const preventDefault = (e : MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }
  const data = [
    {
      text: '年级[大一-大四]',
    }
  ]
  return(
    <ExampleLayout onClick={preventDefault}>

    </ExampleLayout>
  )
}

const ExampleLayout = styled.div`
  position: absolute;
  min-width: 100px;
  min-height: 100px;
  bottom: 0;
  right: 0;
  width: 26.7vw;
  padding: 4.5vh 2.9vh;
  background: white;
  transform: translateY(calc(100% + 2.6vh));
  border-radius: 24px;
  cursor: default;
  display: flex;
  flex-direction: column;
`

const ExampleBlock = styled.div`
  height: 5.7vh;
  margin-top: 2.2vh;
  :first-of-type{
    margin-top: 0;
  }
  display: flex;
`

const ExampleText = styled.div`
  width: 65%;
`

export default Charactor;