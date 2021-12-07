import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Blockly from 'node-blockly/browser'; 

import BlocklyDrawer, { Block, Category } from 'react-blockly-drawer';
class BlockCom extends Component {
    render() {
        const helloWorld =  {
            name: 'HelloWorld',
            category: 'Demo',
            block: {
              init: function () {
                this.jsonInit({
                  message0: 'Hello %1',
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
            },
            generator: (block) => {
              const message = `'${block.getFieldValue('NAME')}'` || '\'\'';
              const code = `console.log('Hello ${message}')`;
              return [code, Blockly.JavaScript.ORDER_MEMBER];
            },
          };

          function onFirstComment(event) {
            if (event.type == Blockly.Events.BLOCK_CHANGE &&
                event.element == 'comment' &&
                !event.oldValue && event.newValue) {
              alert('Congratulations on creating your first comment!')
            }
          }
        return (
            <div>
                <BlocklyDrawer
      /* tools={[helloWorld]}
      onChange={(code, workspace) => {
        console.log(code, workspace);
        workspace.addChangeListener(onFirstComment);
      }}
      language={Blockly.JavaScript}
      appearance={
        {
          categories: {
            Demo: {
              colour: '270'
            },
          },
        }
      } */
    >
      <Category name="Variables" custom="VARIABLE" />
      <Category name="Values">
        <Block type="math_number" />
        <Block type="text" />
      </Category>
    </BlocklyDrawer>
            </div>
        )
    }
}

export default BlockCom;