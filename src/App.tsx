import React from 'react';
import logo from './logo.svg';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import tw from 'twin.macro';

function App() {
  return (
    <div tw="bg-gray-300 p-4">
      <Card />
      <CellFlex>
        <Cell>Hello</Cell>
        <Cell>Hello</Cell>
        <Cell>Hello</Cell>
        <Cell>Hello</Cell>
        <Cell>Hello</Cell>
      </CellFlex>
    </div>
  );
}

function Card() {
  const Wrapper = tw.div`max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl`

  const complexSelector = css({
    background: ['red', 'linear-gradient(#e66465, #9198e5)'],
    '&>*': tw`text-gray-300 font-bold py-2`,
    '&>p:nth-of-type(3)': css({ backgroundColor: 'green' }),
    '*:first-of-type':tw`bg-red-700`,
    '&>p': css({ backgroundColor: 'blue' }, tw`pl-4`),
    
    // '&:nth-child(2)': tw`bg-red-700`,
    // '&:first-child': tw`bg-red-100`,
    //Console erros on child selectore warning they unsafe for SSR, 
    //Docs say they can be worked around but encourage  nth-of-type(), first-of-type() instead
  }
    , tw`text-center rounded  overflow-hidden mb-2`
  )

  const ComplexSelectorDiv = styled.div({
    background: ['red', 'linear-gradient(#e66465, #9198e5)'],
    '*:first-of-type':tw`bg-red-700`,
    '>*': tw`text-gray-300 font-bold py-2`,
    '>p:nth-of-type(3)': css({ backgroundColor: 'green' }),
    '>p': css({ backgroundColor: 'blue' }, tw`pl-4`),
  }
    , tw`text-center rounded overflow-hidden`
  )

  
  

  return (
    <Wrapper>
      <div tw="flex-shrink-0">
        <img tw="h-12 w-12" src={logo} alt="ChitChat Logo" />
      </div>
      <div tw="ml-2 pt-1 flex" >
        <h4 tw="text-xl text-gray-900 leading-tight" >ChitChat</h4>
        <p tw="text-base text-gray-600 leading-normal" >You have a new message!</p>
        <div css={complexSelector}>
          <p>Hey1</p>
          <p>Hey2</p>
          <p>Hey3</p>
          <p>Hey4</p>
        </div>
        <ComplexSelectorDiv>
          <p>Hey1</p>
          <p>Hey2</p>
          <p>Hey3</p>
          <p>Hey4</p>
        </ComplexSelectorDiv>
      </div>
    </Wrapper>
  )
}


function CellFlex(props: { children: React.ReactNode }) {

  const Wrapper = tw.div`
    w-64
    mx-auto my-4 rounded 
    flex flex-row flex-wrap align-middle justify-center
  `

  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

function Cell(props: { children: React.ReactNode }) {

  const Wrapper = tw.div`
    grid place-items-center
    m-2 p-2 rounded
    text-gray-300 
    cursor-pointer   
    bg-gray-800 hover:bg-gray-600 
    transition duration-300 ease-in-out 
  `

  return (
    <Wrapper >
      {props.children}
    </Wrapper>
  )
}

export default App;
