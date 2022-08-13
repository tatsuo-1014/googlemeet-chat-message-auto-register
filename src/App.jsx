/* global chrome */
import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Heading from './modules/atoms/Heading/index'
import Txt, {TxtInfo, TxtWarning} from "./modules/atoms/Txt";
import Header from "./modules/organisms/Header";
import List from "./modules/organisms/List"
import Lists from "./modules/organisms/Lists";
import Message from "./modules/organisms/Message";
import Arrow from "./modules/atoms/Arrow";

// const getSyncStorage = (key = null) => new Promise(resolve => {
//     chrome.storage.local.get(key, resolve);
// });

// getSyncStorage()
//     .then(({ all }) => {
//         console.log(all);
//     });


function App() {
    // const [count, setCount] = useState(0)
    const [meetHistories, setMeetHistories] = useState([])
    const [showMessage, setShowMessage] = useState(false)
    const [messageId,setMessageId]= useState(null)

    const sampleObj = {
        "meetId": [
            "tap-wxgf-qoq"
        ],
        "messageBlocks": [
            {
                "messages": [
                    "aaaa",
                    "ぬぬうぬん"
                ],
                "sender": "あなた",
                "timeStamp": "19:03"
            }
        ],
        "time": 1660384945543
    }
    //     [{
    //     "meetId": ["tap-wxgf-qoq"],
    //     "messageBlocks": [{"messages": ["aaaa", "ぬぬうぬん"], "sender": "あなた", "timeStamp": "19:03"}],
    //     "time": 1660384945543
    // }]
    //     [{
    //     "meetId": ["tap-wxgf-qoq"],
    //     "messageBlocks": [{"messages": ["aaaa", "ぬぬうぬん"], "sender": "あなた", "timeStamp": "19:03"}],
    //     "time": 1660384945543
    // }]
    // function addMeetHistories(obj) {
    //     setMeetHistories([...meetHistories,obj]);
    // }

    useEffect(() => {
        //sample
        //setMeetHistories([...meetHistories,sampleObj])
        chrome.storage.local.get(null, function (result) {
            // func
            // console.log(result)
            // addMeetHistories(result)
            // setMeetHistories(result)
            setMeetHistories(Object.values(result).reverse())
            // setMeetHistories(result.filter((item)=>"meetId" in item))
        });
        // console.log('useEffect')
    }, []);

    const onHandleClick = () => {
        setShowMessage(!showMessage)
        // alert("ok")
    }

    return (
        <div className="App">
            <Header></Header>

            {
                showMessage ?
                    <div className={"arrowWrap"}>
                        <Arrow onClick={() => {
                            onHandleClick()
                        }}></Arrow>
                    </div>
                    :
                    ""
            }

            {/*<ul className={"lists"}>*/}
            {/*    {*/}
            {/*        meetHistories.map((item)=>{*/}
            {/*            document.write(item.meetId + '<br>')*/}
            {/*            document.write(JSON.stringify(item.messageBlocks[0]) + '<br>')*/}
            {/*            // document.write(JSON.parse(item))*/}
            {/*        })*/}
            {/*    }*/}
            {/*</ul>*/}

            {
                showMessage ?
                    <Message meets={meetHistories} className={""} messageId={"jwv-xrgf-tyz"}></Message> :
                    <Lists meets={meetHistories} className={'lists'} onClick={() => {
                        onHandleClick()
                    }}></Lists>
            }


            {/*<div className={'lists'}>*/}
            {/*    <List></List>*/}
            {/*    <List></List>*/}
            {/*    <List></List>*/}
            {/*    <List></List>*/}
            {/*    <List></List>*/}
            {/*    <List></List>*/}
            {/*</div>*/}
            {/*<Message meets={meetHistories}></Message>*/}
        </div>
    )

}

export default App
