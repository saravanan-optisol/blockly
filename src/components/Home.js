import React, { Component } from 'react'
import BlocklyDrawer, { Block, Category } from 'react-blockly-drawer';
import Blockly from 'node-blockly/browser'; 
import Styled from 'styled-components'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: ''
        }
      }

      onChangeHandeler(workspace){
        console.log(workspace)
        this.setState({
          data: workspace
        })
      }

      componentDidUpdate(){
          console.log(this.state)
          const blo = document.querySelectorAll('#blockPath');      
          console.log(blo)
      }

      componentDidMount(){
       /*  setTimeout(() =>{
          const node = document.querySelectorAll('.blocklyPath')
        console.log(node)

           node.forEach((node) =>{
             node.onClick(() =>{
               console.log('clicked')
             })
           })
        },3000)   */

        const cat = document.querySelectorAll('.blocklyTreeLabel')

        cat.forEach((cat) =>{
          cat.addEventListener('click', () =>{
            console.log('kkjkjck')
              const node = document.querySelectorAll('.blocklyPath')
              console.log(node)
              node.forEach((node) =>{
                console.log('eahc')
                node.addEventListener('click', ()=>{
                  console.log('click node')
                })
              })
          })
        })
      }
    render() {

        const helloWorld =  {
            name: 'HelloWorld',
            category: 'Category',
            block: {

              
              init: function () { 
                this.jsonInit({
                  message0: 'Helllo %1',
                  args0: [
                    {
                      type: 'field_input',
                      name: 'NAME',
                      check: 'String',
                    },
                  ],
                  output: 'String',
                  colour: 160,
                  tooltip: 'Says Hello',
                });
              },
              onchange: () =>{
                console.log('onchagne')
              }
            },
            generator: (block) => {
              const message = `'${block.getFieldValue('NAME')}'` || '\'\'';
              const code = `console.log('Hello ${message}')`;
              return [code, Blockly.JavaScript.ORDER_MEMBER];
            },
          };

          return (
        <HomeDiv>
            <BlocklyDiv tools={[helloWorld]}
              /* onChange={(code, workspace) => {
                // this.onChangeHandeler(workspace)
                /* this.setState({
                  data: workspace
                }) 
              }} */
              language={Blockly.JavaScript}
              appearance={
                {
                  categories: {
                    Demo1: {
                      colour: '123'
                    }
                  },
                }
              }>
              <Category name="Category1">
                <BlockDiv type="text" />
                <Block type="math_number" />
              </Category>
              <Category name="Category2">
                <Block type="math_number" onClick={() =>this.onChangeHandeler()}/>
                <Block type='text'></Block> 
              </Category>
              <Category name="Examples">
                <Block type="math_number" />  
                <Block type='text'></Block> 
              </Category>
            </BlocklyDiv>
            <PropertyDiv>
                <h3>Property Panel</h3>
                {
                  this.state.data && (
                    <p>{this.state.data}</p>
                  )
                }
            </PropertyDiv>
            </HomeDiv>
        )
    }
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