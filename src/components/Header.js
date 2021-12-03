import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Styled from 'styled-components'

class Header extends Component {
    render() {
        console.log('home')
        return (
            <Div>
                <Link to='/' >Home</Link>
                <Link to='/devtools' >Devtools</Link>
            </Div>
        )
    }
}

export default Header;

const Div = Styled.div`
  margin: 0.5em 1em;

  a{
      color: blue;
      margin: 0 .3em;
  }
`