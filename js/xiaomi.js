$(function(){
	$("#slide>div").hide();
	$("#tou32 li").mouseover(function(){
		var index = $(this).index();
		$("#slide>div").eq(index).slideDown(1000);
	})
	$("#tou32 li").mouseout(function(){
		var index = $(this).index();
		$("#slide>div").eq(index).slideUp(1000);
	})
	$(".show").hide();
	$("#logo li").mouseover(function(){
		var index = $(this).index();
		$(".show").eq(index).show();
	})
	$("#logo li").mouseout(function(){
		var index = $(this).index();
		$(".show").eq(index).hide();
	})
	   $(".you1show").hide();
		$("#jia1 li").eq(0).css({"border-bottom":"2px solid #FF6700","color":"#FF6700"})
	$("#jia1 li").mouseover(function(){
		var index = $(this).index()+1;
		$(".you1show").eq(index).show();
		$("#jia1 li").css({"border-bottom":"0px solid #FF6700","color":"#820000"})
		$("#jia1 li").eq(index-1).css({"border-bottom":"2px solid #FF6700","color":"#FF6700"})
	});
	$("#jia1 li").mouseout(function(){
		var index = $(this).index()+1;
		$(".you1show").eq(index).hide();
		$("#jia1 li").eq(index-1).css({"border-bottom":"0px solid #FF6700","color":"#820000"})
	})
		$(".flo").hide();
	$("#you1 li").mouseover(function(){
		var index = $(this).index();
		$(".flo").eq(index).slideDown(10);
	});
	$("#you1 li").mouseout(function(){
		var index = $(this).index();
		$(".flo").eq(index).slideUp(10);
	})
})
