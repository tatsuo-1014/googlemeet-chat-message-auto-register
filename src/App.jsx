import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Heading from './modules/atoms/Heading/index'
import Txt, {TxtInfo,TxtWarning} from "./modules/atoms/Txt";
import Header from "./modules/organisms/Header";
//import Label from "./modules/atoms/Label";

function App() {
    // const [count, setCount] = useState(0)
    return (
        <div className="App">
            {/*<Label children={"labels"}/>*/}
            <Header></Header>
            <TxtWarning size={'l'}>txtWarning</TxtWarning>
            <Heading tag={"h1"} visualLevel={4} className={''}>visualLevel2</Heading>
            {/*<Heading>test</Heading>*/}
        </div>
    )
}

export default App
