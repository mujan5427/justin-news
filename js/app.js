
/* 監聽 document 的 DOMContentLoaded 事件
 * 所有要執行的 Javascript 都寫在 ready function
 * ready() 必須等到 DOM 被載入完成才執行
 */
document.addEventListener('DOMContentLoaded', ready);

function ready() {

  console.log('DOM is loaded');

  // 假的 cookie 狀態
  window.isLogin = 'no';
  var cookie = {'token': '1a2b3c4d'};
  // var cookie = {'token': ''};

  if ( cookie.token !== null && cookie.token !== '' ) {

    window.isLogin = 'yes';
  }

  // 透過 cookie 狀態，判斷 哪些項目要 顯示 or 隱藏
  if ( window.isLogin === 'yes' ) {

    btn_navLogin.style.display = 'none';
    btn_navSignup.style.display = 'none';
  }

  console.log(`Current Login Status : ${window.isLogin}`);


  // Nav Bar 搜尋按鈕，點擊後 顯示 or 關閉
  btn_search.addEventListener('click', showDialog);

  function showDialog() {

    event.preventDefault();

    if ( searchBar.style.display !== 'block' ) {

      searchBar.style.display = 'block';
    }
    else {

      searchBar.style.display = 'none';
    }

  }

  /*
   * 首頁「Slide Bar」區塊
   * ------------------------------------------------------------
   */

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
  ajax.onreadystatechange = function() {

    // 判斷 readyState 等於 4 且 response status 等於 200 才做事情
    if ( this.readyState === 4 && this.status === 200 ) {

      // 將 response data 中的 json string，復原成 JSON Object
      var responseData = JSON.parse(this.responseText);

      if ( responseData.data.length >= 2 ) {

        var data_length = responseData.data.length;
        var
        i,
        content_hot_news = '',
        content_slide_bar = '';

        var temp_slide_bar = `
        <div class="slider-bar-image-clip-box">
          <img src="${responseData.data[2].main_image}">
        </div>
        <div class="slider-bar-title">${responseData.data[2].title}</div>`;

        content_slide_bar = temp_slide_bar;

        // 填入資料到 樣板-HTML
        for (i = 3; i < data_length; i++ ) {

          var temp_hot_news = `
          <div class="row-2">
            <a href="">
              <img src="${responseData.data[i].main_image}">
              <div class="news-list-figcaption">${responseData.data[i].title}</div>
            </a>
          </div>`;

          // 累加相同的樣板-HTML
          content_hot_news = content_hot_news + temp_hot_news;
        }
      }

      // 插入 編輯好的樣板-HTML 到 指定 tag
      slideBar.innerHTML = content_slide_bar;
      hotNews.innerHTML = content_hot_news;
    }
  };

  ajax.send();

  /*
   * 首頁「國際」頻道區塊
   * ------------------------------------------------------------
   */
   var ajax = new XMLHttpRequest();
   var endPoint = `http://localhost:8080/channel-news/list?channel_type=international&news_count_per_page=6&current_page=1`;

   /* Request Setting :
    *
    * 1. request type of http method
    * 2. url and querystring
    *
    */
   ajax.open('GET', endPoint, true);

   ajax.onreadystatechange = function() {

     if ( this.readyState === 4 && this.status === 200 ) {

       var responseData = JSON.parse(this.responseText);

       var data_length = responseData.data.length;
       var
       i,
       content_indexSection_Channel1 = '';


       // 填入資料到 樣板-HTML
       for (i = 0; i < data_length; i++ ) {

         var temp_indexSection_Channel1 = `
         <div class="row-3">
           <a href="">
             <img src="${responseData.data[i].main_image}">
             <div class="news-list-figcaption">${responseData.data[i].title}</div>
           </a>
         </div>`;

         // 累加相同的樣板-HTML
         content_indexSection_Channel1 = content_indexSection_Channel1 + temp_indexSection_Channel1;
       }

       indexSection_Channel1.innerHTML = content_indexSection_Channel1;
     }
   };

   ajax.send();

   /*
    * 首頁「財經」頻道區塊
    * ------------------------------------------------------------
    */
    var ajax = new XMLHttpRequest();
    var endPoint = `http://localhost:8080/channel-news/list?channel_type=finance&news_count_per_page=6&current_page=1`;

    /* Request Setting :
     *
     * 1. request type of http method
     * 2. url and querystring
     *
     */
    ajax.open('GET', endPoint, true);

    ajax.onreadystatechange = function() {

      if ( this.readyState === 4 && this.status === 200 ) {

        var responseData = JSON.parse(this.responseText);

        var data_length = responseData.data.length;
        var
        i,
        content_indexSection_Channel2 = '';


        // 填入資料到 樣板-HTML
        for (i = 0; i < data_length; i++ ) {

          var temp_indexSection_Channel2 = `
          <div class="row-3">
            <a href="">
              <img src="${responseData.data[i].main_image}">
              <div class="news-list-figcaption">${responseData.data[i].title}</div>
            </a>
          </div>`;

          // 累加相同的樣板-HTML
          content_indexSection_Channel2 = content_indexSection_Channel2 + temp_indexSection_Channel2;
        }

        indexSection_Channel2.innerHTML = content_indexSection_Channel2;
      }
    };

    ajax.send();

    /*
     * 首頁「藝文」頻道區塊
     * ------------------------------------------------------------
     */
     var ajax = new XMLHttpRequest();
     var endPoint = `http://localhost:8080/channel-news/list?channel_type=literature-and-art&news_count_per_page=6&current_page=1`;

     /* Request Setting :
      *
      * 1. request type of http method
      * 2. url and querystring
      *
      */
     ajax.open('GET', endPoint, true);

     ajax.onreadystatechange = function() {

       if ( this.readyState === 4 && this.status === 200 ) {

         var responseData = JSON.parse(this.responseText);

         var data_length = responseData.data.length;
         var
         i,
         content_indexSection_Channel3 = '';


         // 填入資料到 樣板-HTML
         for (i = 0; i < data_length; i++ ) {

           var temp_indexSection_Channel3 = `
           <div class="row-3">
             <a href="">
               <img src="${responseData.data[i].main_image}">
               <div class="news-list-figcaption">${responseData.data[i].title}</div>
             </a>
           </div>`;

           // 累加相同的樣板-HTML
           content_indexSection_Channel3 = content_indexSection_Channel3 + temp_indexSection_Channel3;
         }

         indexSection_Channel3.innerHTML = content_indexSection_Channel3;
       }
     };

     ajax.send();
}
