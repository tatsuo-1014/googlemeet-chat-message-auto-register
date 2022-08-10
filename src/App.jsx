import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Heading from './modules/atoms/Heading/index'
import Txt, {TxtInfo,TxtWarning} from "./modules/atoms/Txt";
//import Label from "./modules/atoms/Label";

function App() {
    // const [count, setCount] = useState(0)
    return (
        <div className="App">
            {/*<Label children={"labels"}/>*/}
            <TxtWarning size={'l'}>test</TxtWarning>
            <Heading tag={"h1"} visualLevel={4} className={''}>visualLevel2</Heading>
            {/*<Heading>test</Heading>*/}
        </div>
    )
}

export default App
