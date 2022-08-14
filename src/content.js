const MESSAGE_PARENTS_CLASS = 'GDhqjd'
const MESSAGE_CHILDREN_CLASS = 'oIy2qc'
let time = new Date().getTime();
const meetId = window.location.href.split('/').pop().match(/[^\?]+/)
let messageBlocks = []

// // 変更を監視するノードを選択
// const targetNode = document.getElementsByClassName('ME4pNd')[0];

// (変更を監視する) オブザーバーのオプション
const config = {
    attributes: true,
    subtree: true,
    childList: true,
    characterData: true
};



// 変更が発見されたときに実行されるコールバック関数
const callback = function(mutationsList, observer) {
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

const observer = new MutationObserver(callback);


// chrome.storage.local.set({'test': 1}, function () {
//
// });

chrome.storage.local.get(null, function (result) {
    // func
    console.log(result)
});


const updateChromeStorage = (messageBlocks) => {
    let obj = {}
        obj[time] = {
        meetId:meetId,
        time:time,
        messageBlocks:messageBlocks
    }
    chrome.storage.local.set(obj, function () {
        console.log('messageBlocksを更新しました。')
    });
}

const interval = setInterval(() => {
    const chatDom = document.getElementsByClassName("z38b6")[0];
    if (chatDom) {
        console.log('chatのdomが生成されました。')
        observer.observe(chatDom, config);
        clearInterval(interval);
    }
}, 300)


/**
 * google カレンダー内での処理
 * @type {NodeListOf<Element>}
 */

let calenderPanels = undefined
let meetTitle = String

const setCalenderPanelNode = () => {
     calenderPanels = document.querySelectorAll(".NlL62b")
}
setCalenderPanelNode()


const updateCalenderPanel = () =>{
    for (let i = 0; i < calenderPanels.length; i++) {
        console.log(calenderPanels[i])
        calenderPanels[i].addEventListener('click',()=>{
            setTimeout(()=>{
                const popUpBlock__meetBtn = document.getElementsByClassName("w1OTme")[0]
                if(popUpBlock__meetBtn){
                    console.log(document.getElementById("rAECCd"))
                    //ポップアップ内のmeetのボタンがあればその中のテキストをmeetTitleに使用する。
                    popUpBlock__meetBtn.addEventListener('click',()=>{
                        alert("okok!!")
                    })
                }
            },800)
        })
    }
}

updateCalenderPanel()
//s
const stateChangeBtn = document.querySelectorAll(".U26fgb")
for (let i=0;i < stateChangeBtn.length;i++){
    stateChangeBtn[i].addEventListener('click',()=>{
        setCalenderPanelNode()
        updateCalenderPanel()
    })
}







