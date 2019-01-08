const getCountLike = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { fblike: "getlike" }, (response) => {
            document.getElementById("text_content").innerHTML = `Tìm thấy <b id="number_like"> ${response.solike} </b>mục có thể like`
        })
    })
}
getCountLike()

const like = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { fblike: "like" }, (response) => {
            document.getElementById("text_content").innerHTML = "Đã like toàn bộ mục có thể like"
        })
    })
}

const autoLike = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { fblike: "autolike" }, (response) => {
            document.getElementById("auto-like").innerHTML = "<b>Like like like like</b>"
        })
    })
}

const stopAutoLike = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { fblike: "stoplike" }, (response) => {
            document.getElementById("auto-like").innerHTML = "<b>Stop auto like</b>"
        })
    })
}

window.onload = function () {
    document.getElementById("btn-like").addEventListener("click", like);
    document.getElementById("btn-auto-like").addEventListener("click", autoLike);
    document.getElementById("btn-stop-like").addEventListener("click", stopAutoLike);
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message == "reset_count_like") {
        getCountLike()
    }
});