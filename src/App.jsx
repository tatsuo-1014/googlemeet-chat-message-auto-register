import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Heading from './modules/atoms/Heading/index'
import Label from "./modules/atoms/Label";

function App() {
    // const [count, setCount] = useState(0)
    return (
        <div className="App">
            {/*<Label children={"labels"}/>*/}
            <Heading tag={"h1"} visualLevel={2} className={'test'}>visualLevel2</Heading>
            <Heading>test</Heading>
        </div>
    )
}

export default App
