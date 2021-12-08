import React, { Component } from 'react'
import Styled from 'styled-components';
import {connect} from 'react-redux'
import { updateProperty } from '../actions/property';
import PropTypes from 'prop-types';

const Property = ({property}) => {
    return (    
            <PropertyDiv>
                {
                    property && (
                        <div>
                            <p><b>Id: </b><span>{property.data.id}</span></p>
                            <p><b>Name: </b><span>{property.data.name}</span></p>
                            <p><b>Description: </b><span>{property.data.description}</span></p>
                        </div>
                    )
                }
            </PropertyDiv>
    )
}

const mapStateToProps = (state) => ({
    property: state.property
  });
  
export default connect(mapStateToProps) (Property);

const PropertyDiv = Styled.div`
width: 30%;
height: 100%;

`
/* 
<PropertyDiv className='property-panel'>
<h3>Property Panel</h3>
{
    this.state.data && (
        <div>
            <p><b>Id: </b><span>{this.state.id}</span></p>
{/*                             {
                this.state.data.inputList.map((data) =>(
                    <p><b>Name: </b><span>{data.name}</span></p>
            ))} /}
            <p><b>Name: </b><span>{this.state.name}</span></p>
            <p><b>Tool Tip: </b><span>{this.state.data.tooltip}</span></p>
            <p><b>Help Url: </b><span>{this.state.data.helpUrl}</span></p>
            <p><b>Color: </b><span>{this.state.data.style.colourPrimary}</span></p>
            <p><b>Height: </b><span>{this.state.data.height}</span></p>
        </div>
        )
}
</PropertyDiv> */