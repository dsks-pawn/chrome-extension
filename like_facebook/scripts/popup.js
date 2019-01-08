const countLike = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { fblike: "getlike" }, (response) => {
            document.getElementById("text_content").innerHTML = `Tìm thấy <b id="number_like"> ${response.solike} </b>mục có thể like`
        })
    })
}
countLike()

const like = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { fblike: "like" }, (response) => {
            document.getElementById("text_content").innerHTML = "Đã like toàn bộ mục có thể like"
        })
    })
}

window.onload = function () {
    document.getElementById("btn-like").addEventListener("click", like);
};