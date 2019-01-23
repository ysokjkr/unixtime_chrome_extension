document.addEventListener('mouseup', function(){
    const selectionText = window.getSelection().toString(); // 選択範囲(selectionオブジェクト)の取得
    isUnixtime = selectionText && selectionText.length === 10 && !isNaN(Number(selectionText));
    if(isUnixtime) {
        const strJst = timeConverter(Number(selectionText));
        console.log(strJst);
    }
  }, false);



function timeConverter(UNIX_timestamp){
    const a = new Date(UNIX_timestamp * 1000);
    const year = a.getFullYear();
    const month = a.getMonth() + 1;
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}
