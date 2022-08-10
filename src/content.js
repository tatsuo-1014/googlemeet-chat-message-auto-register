export {}

const MESSAGE_PARENTS_CLASS = 'GDhqjd'
const MESSAGE_CHILDREN_CLASS = 'oIy2qc'
const time = new Date().getTime();
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

const observer = new MutationObserver(callback);

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


// chrome.storage.local.set({'test': 1}, function () {
//
// });
//
// chrome.storage.local.get('meetHistories', function (result) {
//     // func
//     console.log(result)
// });


const updateChromeStorage = (messageBlocks) => {
    const obj = {
        meetId:meetId,
        time:time,
        messageBlocks:messageBlocks
    }
    chrome.storage.local.set({'meetHistories': obj}, function () {
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
