let classLike = "._18vj._6a-y._3l2t"
let classLikeUsed = "_3_16"
const countLike = () => {
    let allButtonLike = document.querySelectorAll(classLike + `:not([class="${classLikeUsed}"])`);
    console.debug('allButtonLike :', allButtonLike);
    return allButtonLike.length
}

// const like = () => {
//     let allButtonLike = document.querySelectorAll(classLike + `:not([class="${classLikeUsed}"])`);
//     allButtonLike.forEach((btn) => {
//         btn.click()
//     })

// }
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.fblike == "getlike") {
        let numberLike = countLike()
        sendResponse({ solike: numberLike })
    }
    // if (request.fblike == "like") {
    //     like()
    //     sendResponse({solike: 1})
    // }
})