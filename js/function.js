$(function(){

// ドロップダウン
		$("#nav li,#nav li ul li").hover(function () {
		$(this).children("ul").show( 300, "easeOutQuint");
		},function() {
		$(this).children("ul").hide( 100, "easeOutQuint");
		});
	// nav
		var flg = "close";
		$('#menu').click(function(){
		if(flg == "close"){
		$('#nav,#menu').stop().animate({marginRight:'200px'},800, "easeOutExpo");
		flg = "open";
		}else{
		$('#nav,#menu').stop().animate({marginRight:'0px'},800, "easeOutExpo");
		flg = "close";
		}
		});
	// 外部ページブランク
		$("a[href^='http://'] , a[href^='https://']").not("a[href*='" + location.hostname + "']").attr("target","_blank");
		$("a[href$='.pdf']").attr("target","_blank");
	// table 偶数行色づけ	
		$(".table_border tr:even").addClass("table_border_even");

	// img
		$('#main a img,#page-top').hover(function() {
		$(this).stop().animate({opacity:'0.6'},600);
		},function() {
		$(this).stop().animate({opacity:'1.0'},400);
		});

	// #page-top
		var topBtn = $('#page-top');   
		topBtn.hide();
		//スクロールが100に達したらボタン表示
		$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
		topBtn.fadeIn();
		} else {
		topBtn.fadeOut();
		}
		});

	// #link
		// #で始まるアンカーをクリックした場合に処理
		$('a[href^=#]').click(function() {
		// スクロールの速度
		var speed = 400; // ミリ秒
		// アンカーの値取得
		var href= $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
		});
		
});

function startMailer(mail,host){
var mailto = "mailto:" + mail + "@" + host;
location.href= mailto;
}
//<a href="javascript:startMailer('xxxx','xxxx');">こちらをクリックしてください。</a>


