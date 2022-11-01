window.addEventListener("load", function(){

	//プラグインを定義
	gsap.registerPlugin(ScrollTrigger);
  
	const area  = document.querySelector(".js-area");
	const recommend  = document.querySelector(".js-recommend");
	const recdish = document.querySelectorAll(".js-rec-dish");
	const num   = recdish.length;
  
	//横幅を指定
	gsap.set(recommend,  { width: num * 100 + "%" });
	gsap.set(recdish, { width: 100 / num + "%" });
  
	gsap.to(recdish, {
	  xPercent: -100 * ( num - 1 ), //x方向に移動させる
	  ease: "none",
	  scrollTrigger: {
		trigger: area, //トリガー
		start: "top top", //開始位置
		end: "+=1000", //終了位置
		pin: true, //ピン留め
		scrub: true, //スクロール量に応じて動かす
	  }
	});
  });
  
  