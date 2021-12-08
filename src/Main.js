import React, {useEffect, Component} from 'react'
import Styled from 'styled-components'
import Blockly from "node-blockly/browser";
import BlocklyDrawer, { Block, Category} from "react-blockly-drawer";
import './App.css'
import  blocksdata  from './blockdata/blocks';
import { updateProperty } from './actions/property';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Main = ({updateProperty}) => {
        const onclickHandeler = (data) =>{
            console.log('onclidk')
            updateProperty(data)
        }

        const imgclick = (e) =>{
            console.log('imgclick')
            updateProperty(e);
        }

        const text_1 = blocksdata.text_1
        const text_2 = blocksdata.text_2
        const text_3 = blocksdata.text_3
        // const text_2 = JSON.stringify({ id: `0002`, name: `text_2`,description: `text_2 block type text` })
        // const text_3 = JSON.stringify({ id: `0003`, name: `text_3`, description: `text_3 block type text` })

        Blockly.Blocks['text_1'] = {
            data: text_1,
            init: function () {
                this.appendValueInput("text")
                    .setCheck("String")
                    .appendField("Hello");
                this.setColour(20);
                this.setTooltip('Returns number of letters in the provided text.');
                this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
                this.appendDummyInput()
                    .appendField(new Blockly.FieldImage(
                    "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                    15,
                    14,
                    "",
                    imgclick(text_1)));
                 this.setOnChange((changeEvent) =>{
                    if(changeEvent.type === 'ui' && changeEvent.element === 'click'){
                        // const data = JSON.parse(this.data)
                        onclickHandeler(text_1)
                    }   
                }) 
            },
            iconClick: function (e) {
                console.log('clicks')
            }
            /* onchange: function (event) {
                 if(Blockly.Events.move === event.type) {
                    console.log(this)   
                } 
                console.log(this)
                console.log(event.type, event.element); 
            }   */
        }

        const blockdata = {
        "name": "blueblock",
        "type": "blueblock",
        "lastDummyAlign0": "RIGHT",
        "message0": "bluely",
        "inputsInline": false,
        "previousStatement": "Number",
        "nextStatement": "String",
        "comment": "adsfdsfss",
        "id":"00001",
        "colour": 160,
        "tooltip": "adsfdeewrwerdsdsfadfeedfdeesddfdfd",
        "helpUrl": "http://www.example.com/"
        }

        Blockly.Blocks['text_2'] = {
            data: JSON.stringify({ id: `0002`, name: `text_2`,description: `text_2 block type text` }),
            init: function() {
            this.jsonInit(blockdata);
            this.appendDummyInput()
                    .appendField(new Blockly.FieldImage(
                    "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                    15,
                    15,
                    "*",
                    imgclick(text_2)));
            this.setOnChange((changeEvent) =>{
                if(changeEvent.type === 'ui' && changeEvent.element === 'click'){
                    // const data = JSON.parse(this.data)
                    onclickHandeler(text_2)
                }   
            }) 
            },/* 
            onchange: function (event) {
                console.log('event')
                console.log(event.type)
                if(Blockly.Events.move === event.type) {
                    console.log(this)   
                }
            } */
        };
        
        Blockly.Blocks['text_3'] = {
            data: JSON.stringify({ id: `0003`, name: `text_3`, description: `text_3 block type text` }),
            init: function () {
            this.appendValueInput("hello")
            .setCheck("String")
            .appendField("Hello");
            this.setColour(20);
            this.setTooltip('Returns number of letters in the provided text.');
            this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
            this.appendDummyInput()
                    .appendField(new Blockly.FieldImage(
                    "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                    15,
                    16,
                    "*",
                    imgclick(text_3)));
            this.setOnChange((changeEvent) =>{
                if(changeEvent.type === 'ui' && changeEvent.element === 'click'){
                    // const data = JSON.parse(this.data)
                    onclickHandeler(text_3)
                }   
            }) 
            }, /* 
            onchange: function (event) {/* 
                if(Blockly.Events.move === event.type) {
                    console.log(this)   
                } /
    
            // Blockly.workspace.addChangeListener(onFirstComment);
            }  */
            }

        Blockly.JavaScript['text_1'] = function (block) {
            // TODO: Assemble JavaScript into code variable.
            var code = '...;\n';
            return code;
        };

        Blockly.JavaScript['text_2'] = function(block) {
            // TODO: Assemble JavaScript into code variable.
            var code = '...;\n';
            return code;
        };

        Blockly.JavaScript['text_3'] = function(block) {
            // TODO: Assemble JavaScript into code variable.
            var code = '...;\n';
            return code;
        };

    return (
            <BlocklyDiv className='blockly-drawer'>
                <Category name="Category 1">
                    <Block type="text_1" />
                    <Block type="text_2" />
                </Category>
                <Category name="Category 2">
                    <Block type="text_3" />
                </Category>
            </BlocklyDiv>
        )
}


Main.protoType = {
    updateProperty: PropTypes.func.isRequired,
  };

export default connect(null, { updateProperty })(Main);


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
const MainDiv = Styled(BlocklyDrawer)`
  width: 70%;
  height: 100%;
`

const PropertyDiv = Styled.div`
width: 30%;
height: 100%
`
