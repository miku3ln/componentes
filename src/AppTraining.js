import logo from './logo.svg';
import './App.css';
import HeaderTop from './components/menu/HeaderTop';
import SectionOne from './components/pages/main/SectionOne';
import Bloque from './components/trainings/Classrom/Bloque';
import Contador from './components/trainings/Classrom/Contador';

import ExerciseOne from './components/trainings/Exercises/ExerciseOne';
import React,{useState} from "react";

function App() {
    const changeColor = () => {
        setClassCambio('a');
    };
    const changeCount = (counter) => {

        setClassContador(counter);

    };
    const [classCambio, setClassCambio] = useState('nombre1');
    const [contador, setClassContador] = useState(1);

    const others = {msg: 'Bola'};
    const people = {
        name: 'Alex', lastName: 'Alba'
    }
    const stylesExerciseOne = {
        container_main: {
            backgroundColor: 'yellow'

        },
        sub_container: {
            backgroundColor: 'red'
        },
        title: {
            color: 'blue'
        }
    };
    const stylesExerciseTwo = {
        container_main: {
            backgroundColor: 'yellow'

        },
        sub_container: {
            backgroundColor: 'yellow'
        },
        title: {
            color: 'red'
        }
    };
    let result =
        <div className="App">
            <Bloque name={people.name} lastName={people.lastName}></Bloque>
            <ExerciseOne name={people.name} lastName={people.lastName} styles={stylesExerciseOne}></ExerciseOne>
            <ExerciseOne name='Alex' lastName='Alba' styles={stylesExerciseTwo}></ExerciseOne>
            <button onClick={()=>changeColor()}>
                Hola
            </button>
            <Contador contador={contador} />

            <button onClick={()=>changeCount(contador+1)}>
                contar
            </button>
        </div>;
    return result;
}

export default App;
