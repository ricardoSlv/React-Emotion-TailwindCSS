import React from 'react';
import logo from './logo.svg';

/** @jsx jsx */
import { jsx } from '@emotion/core'
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

  return (
    <Wrapper>
      <div tw="flex-shrink-0">
        <img tw="h-12 w-12" src={logo} alt="ChitChat Logo" />
      </div>
      <div tw="ml-2 pt-1" >
        <h4 tw="text-xl text-gray-900 leading-tight" >ChitChat</h4>
        <p tw="text-base text-gray-600 leading-normal" >You have a new message!</p>
      </div>
    </Wrapper>
  )
}


function CellFlex(props: { children: React.ReactNode }) {

  const Wrapper = tw.div`mx-auto my-4 rounded flex flex-row flex-wrap align-middle justify-center w-64`

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
