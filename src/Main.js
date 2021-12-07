import React, { Component} from 'react'
import Styled from 'styled-components'
import Blockly from "node-blockly/browser";
import BlocklyDrawer, { Block, Category } from "react-blockly-drawer";
import './App.css'
import Property from './components/Property'
import { updateProperty } from './actions/property';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Main = ({updateProperty}) => {
        
        const onclickHandeler = (data) =>{
            console.log('click handler')
            updateProperty(data);
        }

        Blockly.Blocks['text_1'] = {
            data: JSON.stringify({ id: `0001`, name: `text_1`, description: `text_1 block type text` }),
            init: function () {
                this.appendValueInput("text")
                    .setCheck("String")
                    .appendField("Hello");
                this.setColour(20);
                this.setTooltip('Returns number of letters in the provided text.');
                this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
                 this.setOnChange((changeEvent) =>{
                     console.log(changeEvent.type)
                     console.log(changeEvent.element)
                    if(changeEvent.type === 'ui' && changeEvent.element === 'click'){
                        console.log(changeEvent.type, changeEvent.element)
                        console.log(this)
                        const data = JSON.parse(this.data)
                        onclickHandeler(data)
                    }   
                }) 
            },
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
            this.setOnChange((changeEvent) =>{
                if(changeEvent.type === 'ui' && changeEvent.element === 'click'){
                    console.log(this)
                    console.log(this.data)
                    const data = JSON.parse(this.data)
                    onclickHandeler(data)
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
            this.setOnChange((changeEvent) =>{
                if(changeEvent.type === 'ui' && changeEvent.element === 'click'){
                    console.log(this)
                    console.log(this.data)
                    const data = JSON.parse(this.data)
                    onclickHandeler(data)
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
                    <Block type='text' />
                    <Block type="text_1" />
                    <Block type="text_2" />
                </Category>
                <Category name="Category 2">
                    <Block type="text_3" />
                    <Block type="text_1" />
                    <Block type="text_2" />
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

const PropertyDiv = Styled.div`
width: 30%;
height: 100%
`
