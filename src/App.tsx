import React, { useState, useEffect } from 'react';
import type { FC } from 'react'
import styled from '@emotion/styled'
import Feature from './Feature'
import Charactor from './Charactor'

const App: FC = () => {
  // Create the count state.

  // Return the App component.
  return (
    <Main>
      <Feature></Feature>
      <Charactor></Charactor>
    </Main>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 38% 62%;
  height: 100vh;
`

export default App;
