document.addEventListener('DOMContentLoaded', (event) => {
    let openurl = new URL(window.location.href);
    let params = openurl.searchParams;
    if(!params.get('id')){
        return;
    }
    var line = params.get('id');
    var button = document.getElementById('button');
    button.classList.add('disabled');
    button.setAttribute('value', 'ちょっと待っててね');
    document.getElementById('loading').style.display = "block";
    var resultarea = document.getElementById('result');
    const url =
        "https://script.google.com/macros/s/AKfycbwb2SS8YewgaMBf3RbJTFqkZZKzwyCPqe5HzsoCQ5WlNJ6l5vDTfWbfe2pLwEIbdVYWzQ/exec?sheetName=tvs_neo&line=" + line;
    const options = {
    method: "GET",
    headers: {
        "Content-Type": "text/plain",
    },
    };
    async function fetchData() {
        const data = await fetch(url, options);
        const res = await data.json();
        var htmlData = "<li class='d-flex justify-content-between align-items-center'>"
        + "<div class='card'><div class='card-header'>" + res['date'].substr(0, 16) + " ID:" + res['linenumber'] + "</div>"
        + "<div class='card-body'><p class='card-title'>"
        + res['title'] + "</p>"
        + "<p class='card-text'>" + res['description'].replace(/出演.+/, "")
        + "<br>出演：" + res['person'] + "</p></div></div></li>";
        resultarea.innerHTML = htmlData;
        resultarea.style.display = "block";
        var tweetUrl = "https://twitter.com/intent/tweet?text=" + 
            encodeURIComponent(res['title'] + " - ISLAND TV SUPER SEARCH NEO\n#ITSS_NEO\n") + 
            "&url=" + encodeURIComponent(window.location.href);
            //ツイートボタン作成
        document.getElementById("tweet").innerHTML = '<a href="' + tweetUrl + 
            '" class="twitter-share-button data-lang="ja" data-show-count="false" target="_brank">' + 
            '<button type="button" class="btn btn-info">結果をスクショして画像添付でポストしよう</button></a>' +
            '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
        button.setAttribute('value', 'ランダムに2022年10月半ばまでのISLAND TVが出てくるボタン');
        button.classList.remove('disabled');
        document.getElementById('loading').style.display = "none";
      }
      fetchData();
});
function tvGet(){
    var button = document.getElementById('button');
    button.classList.add('disabled');
    button.setAttribute('value', 'ちょっと待っててね');
    document.getElementById('loading').style.display = "block";
    var resultarea = document.getElementById('result');
    const url =
        "https://script.google.com/macros/s/AKfycbwb2SS8YewgaMBf3RbJTFqkZZKzwyCPqe5HzsoCQ5WlNJ6l5vDTfWbfe2pLwEIbdVYWzQ/exec?sheetName=tvs_neo";
    const options = {
    method: "GET",
    headers: {
        "Content-Type": "text/plain",
    },
    };
    async function fetchData() {
        const data = await fetch(url, options);
        const res = await data.json();
        var htmlData = "<li class='d-flex justify-content-between align-items-center'>"
        + "<div class='card'><div class='card-header'>" + res['date'].substr(0, 16) + " ID:" + res['linenumber'] + "</div>"
        + "<div class='card-body'><p class='card-title'>"
        + res['title'] + "</p>"
        + "<p class='card-text'>" + res['description'].replace(/出演.+/, "")
        + "<br>出演：" + res['person'] + "</p></div></div></li>";
        resultarea.innerHTML = htmlData;
        resultarea.style.display = "block";
        var tweetUrl = "https://twitter.com/intent/tweet?text=" + 
            encodeURIComponent(res['title'] + " - ISLAND TV SUPER SEARCH NEO\n#ITSS_NEO\n") + 
            "&url=" + encodeURIComponent("https://akiyuri-dev.github.io/itss_neo/?id=" + res['linenumber']);
            //ツイートボタン作成
        document.getElementById("tweet").innerHTML = '<a href="' + tweetUrl + 
            '" class="twitter-share-button data-lang="ja" data-show-count="false" target="_brank">' + 
            '<button type="button" class="btn btn-info">結果をスクショして画像添付でポストしよう</button></a>' +
            '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
        button.setAttribute('value', 'もう一度ランダムに2022年10月半ばまでのISLAND TVを出す');
        button.classList.remove('disabled');
        document.getElementById('loading').style.display = "none";
      }
      fetchData();
}