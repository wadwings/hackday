import React, { useState, useEffect } from 'react';
import type { FC } from 'react'
import styled from '@emotion/styled'
import Feature from './Feature'
import Charactor from './Charactor'
import FrontPage from './FrontPage'

const App: FC = () => {
  // Create the count state.
  const [activeArr, setActiveArr] = useState<number[]>([]);
  const onclick = () => {
    activeArr.length && setActiveArr([]);
  }
  console.log(activeArr)
  // Return the App component.
  return (
    
    <>
      <Main onClick={onclick}>
        <Feature></Feature>
        <Charactor activeArr={activeArr}></Charactor>
      </Main>
      <FrontPage></FrontPage>
    </>
  );
}

const Main = styled.div`
  position: fixed;
  top: 0;
  display: grid;
  grid-template-columns: 38% 62%;
  height: 100vh;
  width: 100vw;
`

export default App;
