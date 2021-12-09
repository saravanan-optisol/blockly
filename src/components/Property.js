import React, { useState } from 'react'
import Styled from 'styled-components';
import {connect} from 'react-redux'
import { updateProperty } from '../actions/property';
import PropTypes from 'prop-types'

const Property = ({property, updateProperty}) => {


    console.log(property)
    const [edit, setEdit] = useState(false)
    const [updateValue, setUpdateValue] = useState({
        id: property.data.id,
        name: property.data.name,
        description: property.data.description,
        fieldValue: ''
    })
    console.log(updateValue)

    const updatePro = () =>{
        console.log('udatajk')
        updateProperty(updateValue);
    }
    
    
  const onChange = (e) => {
    setUpdateValue({ ...updateValue, [e.target.name]: e.target.value });
  };
    return (    
            <PropertyDiv>
                {
                    Property && edit === false? (
                        (
                            <div>
                                <p><b>Id: </b><span>{property.data.id}</span></p>
                                <p><b>Name: </b><span>{property.data.name}</span></p>
                                <p><b>Description: </b><span>{property.data.description}</span></p>
                                <button onClick={() => setEdit(true)}>edit</button>
                            </div>
                        )
                    ): (
                        (
                            <div>
                                <p><b>Id: </b><input value={updateValue.id} name='id' onChange={(e) => onChange(e)} /></p>
                                <p><b>Name: </b><input value={updateValue.name} name='name' onChange={(e) => onChange(e)} /></p>
                                <p><b>Description: </b><input value={updateValue.description} name='description' onChange={(e) => onChange(e)} /></p>
                                <button onClick={() => updatePro()}>update</button>
                                <button onClick={() => setEdit(false)}>cancel</button>
                                <button onClick={() => setEdit(false)}>close</button>
                            </div>
                        )
                    )
                }
            </PropertyDiv>
    )
}

const mapStateToProps = (state) => ({
    property: state.property,
  });
  
Property.protoType = {
    updateProperty: PropTypes.func.isRequired,
  };  


export default connect(mapStateToProps, {updateProperty}) (Property);

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