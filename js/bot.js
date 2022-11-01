$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.botui-app-container').addClass('active');
      } else {
          $('.botui-app-container').removeClass('active');
      }
  });
});


(function() {

    var url = 'https://api.github.com/search/repositories?q=';
    var msgIndex, key;
    var botui = new BotUI('search-repo');
  
  
    //初期メッセージ
    botui.message.bot({
      content: 'いらっしゃいませ！'
    }).then(init);
  
  
    function init() {
      botui.message.bot({
        delay: 1500,  //メッセージの表示タイミングをずらす
        content: '気になるキーワードをクリックしてみてください！'
      }).then(function() {
  
      // ボタンを提示する．
      return botui.action.button({
        autoHide: false,
        delay: 1500,
        action: [
          {text: 'カポナータ', value: 'caponata'},
          {text: 'トリッパ', value: 'tripe'},
          {text: 'サルシッチャ', value: 'salsiccia'},
          {text: 'プッタネスカ', value: 'puttanesca'},
          {text: 'ラビオリ', value: 'ravioli'},
          {text: 'カーチョエペぺ', value: 'cacioepepe'}]
      });
    }).then(function(res) {
      botui.action.hide();
      switch (res.value) {
        case 'caponata': showCaponata(); break;
        case 'tripe': showHoneycomb(); break;
        case 'salsiccia': showSalsiccia(); break;
        case 'puttanesca': showPuttanesca(); break;
        case 'ravioli': showRavioli(); break;
        case 'cacioepepe': showCacioepepe(); break;
        default: end();
      }
    });
    }
  
    function showCaponata() {
      botui.message.add({
        delay: 1500,
        content: 'シチリア料理の一つで、野菜をトマトと一緒に甘酸っぱく煮た料理です。'
      }).then(function() {
        return botui.message.add({
          delay: 2500,
          content: 'ほどよい酸味がきいていて、バゲットと共に食べるのがおすすめです。'
        });
      }).then(askEnd);
    }

    function showHoneycomb() {
      botui.message.add({
        delay: 1500,
        content: 'トリッパは日本語でいう「ハチノス」。牛の胃袋を指す言葉です。'
      }).then(function() {
        return botui.message.add({
          delay: 2500,
          content: 'プレジデンテではこれをトマトで煮た形で提供いたします。'
        });
      }).then(askEnd);
    }

    function showSalsiccia() {
      botui.message.add({
        delay: 1500,
        content: 'サルシッチャは火を通していない生のソーセージを指します。'
      }).then(function() {
        return botui.message.add({
          delay: 2500,
          content: 'プレジデンテではこちらを肉だねから腸詰めまで丁寧に行っています。'
        });
      }).then(askEnd);
    }

    function showPuttanesca() {
      botui.message.add({
        delay: 1500,
        content: 'プッタネスカはナポリのパスタ料理を指します。'
      }).then(function() {
        return botui.message.add({
          delay: 2500,
          content: 'トマトをベースにしたソースにケッパーやオリーブ、アンチョビなどを加えたパスタです。'
        });
      }).then(askEnd);
    }

    function showRavioli() {
      botui.message.add({
        delay: 1500,
        content: 'ラビオリは具材をパスタ生地とパスタ生地で挟んで包んだパスタ料理です。'
      }).then(function() {
        return botui.message.add({
          delay: 2500,
          content: 'プレジデンテでは季節によって中の具材を変えております。'
        });
      }).then(askEnd);
    }

    function showCacioepepe() {
      botui.message.add({
        delay: 1500,
        content: 'カーチョエペぺはローマの三大パスタの一つです。'
      }).then(function() {
        return botui.message.add({
          delay: 2500,
          content: 'チーズとコショウのシンプルなパスタのことを指します。'
        });
      }).then(askEnd);
    }

    function askEnd(){
      botui.message.add({
        delay:2000,
        content: '他に質問がありますか？'
      }).then(function() {
  
        // ボタンを提示する．
        return botui.action.button({
          delay: 1500,
          action: [
            {icon: 'circle-o', text: 'はい', value: true},
            {icon: 'close', text: 'いいえ', value: false}]
        });
      }).then(function(res) {
        res.value ? init() : end();
        });
    }
  
    //プログラムを終了する関数．
    function end() {
      botui.message.add({
        delay: 1500,
        content: 'お役に立てていたら嬉しいです。'
      }).then(function(){
        return botui.message.add({
          delay: 1500,
          content: 'それでは、引き続きサイトをお楽しみくださいませ。'
        });
      });
    }
  
  })();