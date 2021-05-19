import React, {Component} from 'react';

const Contador = ({contador}) => {
    const result =
        <div style={{backgroundColor:'red',height:50,width:50}}>

Contador: {contador}
        </div>
    return result;

}

export default Contador;