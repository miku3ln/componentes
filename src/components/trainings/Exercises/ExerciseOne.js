import React, {Component} from 'react';

const ExerciseOne = ({name, lastName,styles}) => {
    const result =
        <div className="container-exercise-one" style={styles.container_main}>
            <div className='container-exercise-one__subcontainer' style={styles.sub_container}>
                <h1 style={styles.title}>My Name is: {name}</h1>
            </div>
        </div>
    return result;

}

export default ExerciseOne;