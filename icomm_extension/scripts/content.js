
const addHtml = () => {
    let element = $(".video-settings")
    let html = `<li class="video-settings-button" onclick="redirectUrl(0)">
                    <span class="glyphicon glyphicon-cog"></span> Config Camera
                </li>
                <li class="video-settings-button" onclick="redirectUrl(1)">
                    <span class="glyphicon glyphicon-cog"></span> Profiling log
                </li>
                <li class="video-settings-button" onclick="redirectUrl(2)">
                     <span class="glyphicon glyphicon-cog"></span> Tracking log
                </li>`
    element.append(html);
}

$(document).ready(() => {
    addHtml()
});


const getCamHash = () => {
    let hashUrl = location.hash
    let cameraHash = hashUrl.replace("#/view/", "")
    return cameraHash
}

const redirectUrl = (check) => {
    let cameraHash = getCamHash()
    let promiseInfoCamHash = getInfoByCamHash(cameraHash)
    promiseInfoCamHash.done(data => {
        let promiseSendDataCms = sendDataToCms(data, cameraHash)
        promiseSendDataCms.done(res => {
            if (res.s) {
                let baseUrl
                switch (check) {
                    case 0:
                        baseUrl = configExtension.url.pageConfig
                        break;
                    case y:
                        baseUrl = configExtension.url.pageLogProfiling
                        break;
                    default:
                        baseUrl = configExtension.url.pageLogTracking
                }
                let url = baseUrl + cameraHash
                $(location).attr('href', url)
            }
        })
    });
}

const getInfoByCamHash = (cameraHash) => {
    let urlGetInfoCamera = `${configExtension.url.infoCamHash}${cameraHash}`
    return $.ajax({
        url: urlGetInfoCamera,
        type: "GET",
        username: configExtension.account.username,
        password: configExtension.account.password,
        dataType: "json"
    })
}

const sendDataToCms = (data, cameraHash) => {
    let dataSend = {
        url: data[0].url,
        cameraHash: cameraHash
    }
    let urlUpdate = configExtension.url.sendDataCms
    return $.ajax({
        url: urlUpdate,
        type: "POST",
        dataType: "json",
        data: dataSend
    })
}