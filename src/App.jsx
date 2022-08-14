/* global chrome */
import {useState, useEffect} from 'react'
import './App.css'
import Heading from './modules/atoms/Heading/index'
import Txt, {TxtInfo, TxtWarning} from "./modules/atoms/Txt";
import Header from "./modules/organisms/Header";
import Lists from "./modules/organisms/Lists";
import Message from "./modules/organisms/Message";
import Arrow from "./modules/atoms/Arrow";

function App() {
    // const [count, setCount] = useState(0)
    const [meetHistories, setMeetHistories] = useState([])
    const [showDetailMessage, setShowMessage] = useState(false)
    // const [messageId, setMessageId] = useState(String)
    const [meetTime, setMeetTime] = useState(Number)

    useEffect(() => {
        chrome.storage.local.get(null, function (result) {
            // func
            /**
             * googleカレンダーからのmeetTitleを受け渡す用のobjは削除してstateにセットする。
             * @param obj
             * @returns {Pick<*, Exclude<keyof *, "meetTitle">>}
             */
            const removeMeetTitleObj = (obj) => {
                const {meetTitle, ...res} = obj
                return res
            }
            result = removeMeetTitleObj(result)
            setMeetHistories(Object.values(result).reverse())
        });
        // console.log('useEffect')
    }, []);

    const onHandleClick = () => {
        setShowMessage(!showDetailMessage)
        // alert(this.messageId)
    }

    // const getMeetId = (meetId) => {
    //     setMessageId(meetId.toString())
    //     // alert(meetId.toString())
    // }

    const getMeetTime = (meetTime) => {
        setMeetTime(meetTime)
    }

    return (
        <div className="App">
            <Header></Header>
            {
                showDetailMessage ?
                    <div className={"arrowWrap"}>
                        <Arrow onClick={() => {
                            onHandleClick()
                        }}></Arrow>
                    </div>
                    :
                    ""
            }
            {
                showDetailMessage ?
                    <Message meets={meetHistories} className={""} meetTime={meetTime}></Message>
                    :
                    <Lists meets={meetHistories} className={'lists'} onClick={() => {
                        onHandleClick()
                    }} getData={getMeetTime}></Lists>
            }
        </div>
    )

}

export default App
