
/* 監聽 document 的 DOMContentLoaded 事件
 * 所有要執行的 Javascript 都寫在 ready function
 * ready() 必須等到 DOM 被載入完成才執行
 */
document.addEventListener('DOMContentLoaded', ready);

function ready() {

  console.log('DOM is loaded');

  // 建立 XHR 物件
  var ajax = new XMLHttpRequest();
  var endPoint = `http://localhost:8080/random-news/list?news_count=5`;

  /* Request Setting :
   *
   * 1. request type of http method
   * 2. url and querystring
   *
   */
  ajax.open('GET', endPoint, true);

  // 監聽 此次 request 的狀態，有所改變即做回應
  ajax.onreadystatechange = function(event) {

    console.log(`Event Object : ${Object.keys(event)}`);

    // 判斷 readyState 等於 4 且 response status 等於 200 才做事情
    if ( this.readyState === 4 && this.status === 200 ) {

      // 將 response data 中的 json string，復原成 JSON Object
      var responseData = JSON.parse(this.responseText);

      if ( responseData.data.length >= 2 ) {

        var data_length = responseData.data.length;
        var
        i,
        content = '';

        // 填入資料到 樣板-HTML
        for (i = 0; i < 2; i++ ) {

          var temp = `
          <div class="row-2">
            <a href="">
              <img src="${responseData.data[i].main_image}">
              <div class="news-list-figcaption">${responseData.data[i].title}</div>
            </a>
          </div>`;

          // 累加相同的樣板-HTML
          content = content + temp;
        }
      }

      // 插入 編輯好的樣板-HTML 到 指定 tag
      hotNews.innerHTML = content;
    }
  };

  ajax.send();
}
