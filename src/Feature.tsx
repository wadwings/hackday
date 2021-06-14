import React from 'react';
import type {FC} from 'react';
import styled from '@emotion/styled';
import {component} from './Common'

const Feature : FC = () => {
  const {Title, Header} = component;
  return (
    <Main>
      <Header>
        <Title>群体特征</Title>
      </Header>
    </Main>
  )
}

const Main = styled.div`
  position: relative;
`


export default Feature;