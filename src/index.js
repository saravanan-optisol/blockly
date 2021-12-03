import React from "react";
import ReactDOM from "react-dom";
import Blockly from "node-blockly/browser";

import Main from "./Main";
import BlocklyDrawer, { Block, Category } from "react-blockly-drawer";
import Styled from 'styled-components'

ReactDOM.render(
 <Main />
,
  document.getElementById("root")
);
