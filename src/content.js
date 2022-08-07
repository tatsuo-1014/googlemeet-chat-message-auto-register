export {}
console.log('content')
console.log('content2')

chrome.storage.local.set({'test': 1}, function () {
});

chrome.storage.local.get(null, function(result){
    // func
    console.log(result)
});