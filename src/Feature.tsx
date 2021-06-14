import React, {useEffect} from 'react';
import type {FC} from 'react';
import styled from '@emotion/styled';
import {component} from './Common'

interface FeatureProps{
  setIndice: () => void
}

const Feature : FC<FeatureProps> = () => {
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