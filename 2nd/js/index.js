"use strict";!function(){var e,t,o,n,r;$(".btn_catalog").on("click",function(){$(".catalog_box").toggle()}),$(".btn_home").on("click",function(){$(".home_box").toggle()}),$(".wrap").on("touchstart",function(e){$(".point").fadeOut()}),$(".list_box ul li").on("mouseover",function(e){$(this).index();$(this).addClass("on").siblings().removeClass("on")}),$(".share-btn").on("click",function(){$(".b-bg").show(),$(".pop-vid").hide(),$(".pop-share").show()}),e=document,o="script",t="facebook-jssdk",n=e.getElementsByTagName(o)[0],e.getElementById(t)}();