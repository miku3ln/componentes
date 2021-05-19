import React, {Component} from 'react';

const Bloque = ({name, lastName}) => {
    const result =
        <div className="information-people">
            <div className='information-people__attribute-one'>
                <h1 className="information-people__name">Name:{name}</h1>

            </div>
            <div className='information-people__attribute-two'>
                <h2 className="information-people__last_name">Last Name{lastName}</h2>

            </div>

        </div>
    return result;

}

export default Bloque;