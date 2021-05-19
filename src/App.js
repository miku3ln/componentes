import logo from './logo.svg';
import './App.css';
import HeaderTop from './components/menu/HeaderTop';
import SectionOne from './components/pages/main/SectionOne';
function App() {
    const others = {msg: 'Bola'};

    let result =
        <div className="App">
            <HeaderTop></HeaderTop>

            <SectionOne
                title='iPhone 12'
                subtitle="Morado. Soñado."
                description="Muy pronto disponible en morado"
                link="https://www.apple.com/la/?fbclid=IwAR11YGlVQ6bDVNffp-g2MoDVFcZQhBvcr--VANFOpAFh3J8rJNI6yAW7OVo"
            ></SectionOne>
           <div>hola</div>
        </div>;
    return result;
}

export default App;
