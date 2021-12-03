import React, { Component } from 'react'

class Block extends Component {
    render() {
        
        return (
            <div>
                <div id="editor"></div>
  <xml id="toolbox">
    <category name="category1">
        <nav>
            <block type="text" id="node" class="node"></block>
        </nav>
        <block type="text" id="node" class="node"></block>
        <block type="controls_if"></block>
        <block type="controls_repeat_ext"></block>
        <block type="logic_compare" onclick="func()"></block>
        <block type="math_number"></block>
        <block type="math_arithmetic"></block>
        <block type="text"></block>
        <block type="text_print"></block>
    </category> 
  </xml>
            </div>
        )
    }
}

export default Block
