/*global chrome*/
const MESSAGE_PARENTS_CLASS = 'GDhqjd'
const MESSAGE_CHILDREN_CLASS = 'oIy2qc'
let time = new Date().getTime();
const meetId = window.location.href.split('/').pop().match(/[^\?]+/)
let messageBlocks = []
let meetTitle = String
const referrer = document.referrer;
const host = location.host

// 変更を監視するノードを選択
// const targetNode = document.getElementsByClassName('ME4pNd')[0];

// (変更を監視する) オブザーバーのオプション
const config = {
    attributes: true,
    subtree: true,
    childList: true,
    characterData: true
};

// chrome.storage.local.set({'test': 1}, function () {
//
// });

// chrome.storage.local.get(null, function (result) {
//     // func
//     console.log(result)
// });

const updateChromeStorage = (messageBlocks) => {
    let obj = {}
        obj[time] = {
        meetTitle:meetTitle ?? meetId,
        meetId:meetId,
        time:time,
        messageBlocks:messageBlocks
    }
    chrome.storage.local.set(obj, function () {
        console.log('messageBlocksを更新しました。')
    });
}

// 変更が発見されたときに実行されるコールバック関数
const mutationObserverCallback = function(mutationsList, observer) {
    mutationsList.filter((mutation) => mutation.type == "childList").forEach((mutation) => {
        if (mutation.addedNodes.length === 0) return;
        const addedNode = mutation.addedNodes[0];
        // console.log(mutation.addedNodes.length)
        // if (mutation.target && [...mutation.addedNodes].length) {
        //     console.log(`A child node ${mutation.target} has been added!`, mutation.target);
        //     console.log([...mutation.addedNodes][0].dataset.timestamp)
        // }
        if(
            addedNode.dataset.formattedTimestamp != "" &&
            addedNode.className === MESSAGE_PARENTS_CLASS
        ){
            console.log('MESSAGE_PARENTS_elm')
            messageBlocks.push({
                sender: addedNode.dataset.senderName ?? "no_name",
                timeStamp: addedNode.dataset.formattedTimestamp ?? "",
                messages: [addedNode.childNodes[1].innerText]
            })
            console.log(messageBlocks)
            updateChromeStorage(messageBlocks)
        }else if(
            addedNode.dataset.formattedTimestamp != "" &&
            addedNode.className === MESSAGE_CHILDREN_CLASS )
        {
            console.log('MESSAGE_CHILDREN_elm')
            messageBlocks[messageBlocks.length - 1].messages.push(
                addedNode.innerText
            );
            console.log(messageBlocks)
            updateChromeStorage(messageBlocks)
        }
    })
    // Use traditional 'for loops' for IE 11
    // for(const mutation of mutationsList) {
    //     if (mutation.type === 'childList') {
    //
    //     }
    //     // else if (mutation.type === 'attributes') {
    //     //     console.log('The ' + mutation.attributeName + ' attribute was modified.');
    //     // }
    // }
};

if(host==='meet.google.com'){

    chrome.storage.local.get("meetTitle", function (result) {
        // console.log("referrer",referrer)
        const meetTitleSavedInChromeStorage = result.meetTitle
        if(referrer === "https://calendar.google.com/"){
            //googleカレンダーからきたユーザーの場合chrome.storage.localに保存されている値を代入
            meetTitle = meetTitleSavedInChromeStorage
        }else{
            //直接URLを叩いてmeetにきたユーザーにはmeetIdを代入するようにする。
            meetTitle = null
        }
    });

    const observer = new MutationObserver(mutationObserverCallback);

    const interval = setInterval(() => {
        const chatDom = document.getElementsByClassName("z38b6")[0];
        if (chatDom) {
            console.log('chatのdomが生成されました。')
            observer.observe(chatDom, config);
            clearInterval(interval);
        }
    }, 300)
}

/**
 * google カレンダー内での処理
 * クリックしたパネルのmeetのタイトルをmeetTitleオブジェクトに格納してchrome.storage.localに保存する。
 * @type {NodeListOf<Element>}
 */

let calenderPanels = undefined

const setCalenderPanelNode = () => {
     calenderPanels = document.querySelectorAll(".NlL62b")
}

const updateCalenderPanel = () =>{
    let meetTitle = String
    for (let i = 0; i < calenderPanels.length; i++) {
        // console.log(calenderPanels[i])
        calenderPanels[i].addEventListener('click',()=>{
            setTimeout(()=>{
                const popUpBlock__meetBtn = document.getElementsByClassName("w1OTme")[0]
                if(popUpBlock__meetBtn){
                    //console.log(document.getElementById("rAECCd").textContent)
                    //ポップアップ内のmeetのボタンがあればその中のテキストをmeetTitleに使用する。
                    const popUpBlock__meetBtn__txt = document.getElementById("rAECCd").textContent
                    popUpBlock__meetBtn.addEventListener('click',()=>{
                        meetTitle = popUpBlock__meetBtn__txt
                        chrome.storage.local.set({"meetTitle":meetTitle})
                        // console.log(meetTitle)
                    })
                }
            },800)
        })
    }
}

const initCalendar =()=>{
    setTimeout(()=>{
        setCalenderPanelNode()
        updateCalenderPanel()
    },300)
}

if(host==="calendar.google.com"){
    initCalendar()
    const stateChangeBtn = document.querySelectorAll(".U26fgb")
    for (let i=0;i < stateChangeBtn.length;i++){
        stateChangeBtn[i].addEventListener('click',()=>{
            initCalendar()
        })
    }
}