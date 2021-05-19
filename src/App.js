import logo from './logo.svg';
import './App.css';
import HeaderTop from './components/menu/HeaderTop';
import Slider from './components/pages/main/Slider';
import * as Contants from './utils/Constants';

function App() {
    let result =
        <div className="App">
            <HeaderTop></HeaderTop>
            <Slider
                params={Contants.SliderOne}
            />
            <Slider
                params={Contants.SliderTwo}
            />
        </div>;
    return result;
}

export default App;
