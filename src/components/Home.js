import React, { Component } from 'react'
import Blockly from "node-blockly/browser";
import BlocklyDrawer, { Block, Category} from "react-blockly-drawer";
import Styled from 'styled-components'
import Main from '../Main';
import Property from './Property'
import { Provider } from 'react-redux';
import store from '../store';

const Home = () =>{
  return (
      <Provider store={store}>
        <HomeDiv>
          <Main Blockdata={Blockly, BlocklyDrawer, Block, Category}/>
          <Property />
        </HomeDiv>
      </Provider>
  )
}

export default Home;

const HomeDiv  = Styled.div`
  display: flex;
  height: 90vh;
`
const BlockDiv  = Styled(Block)`
  background-color: red;
  cursor: pointer;
`

const BlocklyDiv = Styled(BlocklyDrawer)`
  width: 70%;
  height: 100%;
`

const PropertyDiv = Styled.div`
width: 30%;
height: 100%;

`