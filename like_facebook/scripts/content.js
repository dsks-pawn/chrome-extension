let classLike = "._18vj._6a-y._3l2t"
let classLikeUsed = "._3_16"
const countLike = () => {
    let allButtonLike = document.querySelectorAll(classLike + `:not(${classLikeUsed})`)
    return allButtonLike.length
}

const like = () => {
    let allButtonLike = document.querySelectorAll(classLike + `:not(${classLikeUsed})`);
    allButtonLike.forEach((btn) => {
        btn.click()
    })
}

var myVar = null

const autoLike = () => {
    myVar = setInterval(like, 1000);
}

const stopAutoLike = () => {
    clearInterval(myVar);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.fblike == "getlike") {
        let numberLike = countLike()
        sendResponse({ solike: numberLike })
    } else if (request.fblike == "like") {
        like()
        sendResponse({ solike: 1 })
    } else if (request.fblike == "autolike") {
        autoLike()
    } else if (request.fblike == "stoplike") {
        stopAutoLike()
    }
})

window.onscroll = () => { resetData() };
const resetData = () => {
    chrome.runtime.sendMessage("reset_count_like", response => { });
}

