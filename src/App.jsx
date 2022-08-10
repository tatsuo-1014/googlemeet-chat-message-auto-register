import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Heading from './modules/atoms/Heading/index'
import Txt, {TxtInfo,TxtWarning} from "./modules/atoms/Txt";
import Header from "./modules/organisms/Header";
import List from "./modules/organisms/List"

function App() {
    // const [count, setCount] = useState(0)
    return (
        <div className="App">
            <Header></Header>

            <div className={'lists'}>
                <List></List>
                <List></List>
                <List></List>
                <List></List>
                <List></List>
                <List></List>
            </div>


            {/*<Heading>test</Heading>*/}
        </div>
    )
}

export default App
