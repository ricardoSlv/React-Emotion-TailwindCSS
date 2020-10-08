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
  const Wrapper = tw.div`max-w-sm m-auto relative flex flex-row p-6 bg-white rounded-lg shadow-xl`

  return (
    <Wrapper>
      <div tw="flex-shrink-0">
        <img tw="h-24 w-24" src={logo} alt="ChitChat Logo" />
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
  return (
    <div css={tw`text-gray-300 rounded hover:bg-gray-600 transition duration-300 ease-in-out cursor-pointer bg-gray-800 m-2 px-2 py-2 grid place-items-center`}>
      {props.children}
    </div>
  )
}

export default App;
