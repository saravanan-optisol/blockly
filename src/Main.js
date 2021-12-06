import React, { Component} from 'react'
import Styled from 'styled-components'
import Blockly from "node-blockly/browser";
import BlocklyDrawer, { Block, Category } from "react-blockly-drawer";
import './App.css'

class Main extends Component {
    state = {
        data: '',
        name: '',
        id: ''
    }

    componentDidUpdate(){
        console.log(this.state.data)
        console.log(this.state.data.inputList)
    }
    render() {
        const onclickHandeler = (nodedata, id,name) =>{
            this.setState({
                data: nodedata,
                id: id,
                name: name
            })
        }

        Blockly.Blocks['text'] = {
            init: function () {
                this.appendValueInput("text")
                    .setCheck("String")
                    .appendField("Hello");
                this.setColour(20);
                this.setTooltip('Returns number of letters in the provided text.');
                this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
            },
            onchange: function (event, id = '001', name = 'blueblock', description='asdfadsfdasfdd') {
                if (event.type === 'ui') {
                    console.log('onclick', this, name, id);
                    onclickHandeler(this, id, name);
                }
            } 
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

        Blockly.Blocks['blueblock'] = {
            init: function() {
            this.jsonInit(blockdata);
            },
            onchange: function (event, id = '002', name = 'greeblock', description='qerqwerqwer') {
                if (event.type === 'ui') {
                    console.log('onclick', this, name, id);
                    onclickHandeler(this, id, name);
                }
            }
        };
        
        Blockly.JavaScript['text'] = function (block) {
            // TODO: Assemble JavaScript into code variable.
            var code = '...;\n';
            return code;
        };

        Blockly.JavaScript['blueblock'] = function(block) {
            // TODO: Assemble JavaScript into code variable.
            var code = '...;\n';
            return code;
        };

        function onFirstComment(event) {
            if (event.type == Blockly.Events.BLOCK_CHANGE &&
                event.element == 'comment' &&
                !event.oldValue && event.newValue) {
                alert('Congratulations on creating your first comment!')
                workspace.removeChangeListener(onFirstComment);
            }
        }

        workspace.addChangeListener(onFirstComment);

        var flyoutWorkspace = yourWorkspace.getFlyout().getWorkspace();
        flyoutWorkspace.addChangeListener(onFirstComment);

    return (
        <HomeDiv className='main-div'>
            <BlocklyDiv className='blockly-drawer'>
                <Category name="Category 1">
                    <Block type="text" />
                    <Block type="math_number" />
                </Category>
                <Category name="Category 2">
                    <Block type="blueblock" />
                    <Block type="colour_picker" />
                </Category>
            </BlocklyDiv>
            <PropertyDiv className='property-panel'>
                <h3>Property Panel</h3>
                {
                    this.state.data && (
                        <div>
                            <p><b>Id: </b><span>{this.state.id}</span></p>
{/*                             {
                                this.state.data.inputList.map((data) =>(
                                    <p><b>Name: </b><span>{data.name}</span></p>
                            ))} */}
                            <p><b>Name: </b><span>{this.state.name}</span></p>
                            <p><b>Tool Tip: </b><span>{this.state.data.tooltip}</span></p>
                            <p><b>Help Url: </b><span>{this.state.data.helpUrl}</span></p>
                            <p><b>Color: </b><span>{this.state.data.style.colourPrimary}</span></p>
                            <p><b>Height: </b><span>{this.state.data.height}</span></p>
                            
                        </div>
                        )
                }
            </PropertyDiv>
        </HomeDiv>
        )
    }
}

export default Main;


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