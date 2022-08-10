
import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Heading from './modules/atoms/Heading/index'
import Txt, {TxtInfo, TxtWarning} from "./modules/atoms/Txt";
import Header from "./modules/organisms/Header";
import List from "./modules/organisms/List"
import Message from "./modules/organisms/Message";

function App() {
    // const [count, setCount] = useState(0)
    const [meetHistories, setMeetHistories] = useState([])
    useEffect(() => {
        // chrome.storage.local.get(null, (all) => {
        //     console.log(all)
        //     // setChats(Object.values(all).reverse() as Chat[]);
        // });
        // chrome.storage.local.get('meetHistories', function (result) {
        //     // func
        //     console.log(result)
        // });
        // console.log('useEffect')
    }, []);

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
            {/*<Message></Message>*/}
        </div>
    )
}

export default App
