
// document.body.insertAdjacentHTML('afterbegin','<input type="button" value="JST" onclick="convertToStrTime()" style="display: inline-block; text-decoration: none; color: #67c5ff; border: solid 2px #67c5ff; border-radius: 3px; transition: .4s">');
//  convertToStrTimeのイベントをダブルクリックで実行していく。
document.body.addEventListener('dblclick', function() {
    convertToStrTime()
});

function convertToStrTime(){
    const rowgroupLength = document.querySelectorAll('div[role="rowgroup"]').length;
    if(!rowgroupLength) {
        return;
    }
    const rowList = document.querySelectorAll('div[role="rowgroup"]')[rowgroupLength -1].children;
    for (let i = 0; i < rowList.length; i++) {
        const element = rowList[i];
        const targetText = rowList[i].innerText.trim();
        isUnixtime = targetText && targetText.length === 10 && targetText.slice(0,2) === '15' && !isNaN(Number(targetText));
        if(isUnixtime) {
            const strTime = timeConverter(Number(targetText));
            element.innerText = strTime;
        }
    }
}

function timeConverter(UNIX_timestamp){
    const d = new Date(UNIX_timestamp * 1000);
    const year = d.getFullYear();
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const date = ('0' + d.getDate()).slice(-2);
    const hour = ('0' + d.getHours()).slice(-2);
    const min = ('0' + d.getMinutes()).slice(-2);
    const sec = ('0' + d.getSeconds()).slice(-2);
    return year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;
}