//### plugins declaration ###//
const ipc = require('electron').ipcRenderer;
const remote = require('electron').remote;
const $=require('jquery');
//###
window.controllers=[];
var user='';
var pass='';
var server='';
var productKey='7EUCG2N4kB3HD78DmJNjFANWUvMu';
console.log("MAIN ready");
$(document).ready(function(){
	console.log("MAIN ONLOAD ready");
	ipc.send("set-gui");
	loadingSequence();
	var controllMaster=require("../js/core/controll-master.js");
});
function configServer(){

}
function readServerJSON(strIn){
	var dataObject=$.parseJSON(strIn);
}
function handleErrorFunct(e){
	var errorJSON=JSON.stringify(e);
	$('#alert-content-span').html(errorJSON);
	$('#error-modal-window').modal('show');
}
function loadingSequence(){
	ipc.on("throw-error", function(event, e){
		throw e;
	});
}
function ajaxHELLO(sendData,returnFunct){
	$.ajax({
		type: 'POST',
		dataType: 'json',
		url: server,
		data: sendData,
		error: function ( e ){
			handleErrorFunct(e);
		}
	}).done(function( data ){
		loadingSequence(data);
	});
}
function loadPosts(arr){
	$('#post-page').html('');
	for(a in arr){
		$('#post-page').append(postViev(a['tytul'], a['krot_opi'], a['plik'], a['id']));
	}
	$('.post-btn').off();
	$('.post-btn').on('click',function(){});
}
function loadReferences(arr ){
	$('#reference-page').html('');
	for(a in arr){
		$('#post-page').append(tableGen(a));
	}
	$('.post-btn').off();
	$('.post-btn').on('click',function(){
		if($(this).data('met')=='delete'){
			deleteFunct($(this).data('id'));
			deleteImage($(this).data('id'));
		}else{
			editePost($(this).data('id'));
		}
	});
}
function loadReferences(arr){
	$('#reference-page').html('');
	for(a in arr){
		$('#post-page').append(tableGen(a));
	}
	$('.post-btn').off();
	$('.post-btn').on('click',function(){
		if($(this).data('met')=='delete'){
			deleteFunct($(this).data('id'));
			deleteImage($(this).data('id'));
		}else{
			editePost($(this).data('id'));
		}
	});
}
/*function initLoad(data){
	for(a in arr){
		$('#post-page').append(postViev(a[], a[], a[], a[]));
	}
	for(a in arr){
		$('#reference-page').append(tableGen(a));
	}
	for(a in arr){
		$('#client-page').append(tableGen(a));
	}
	for(a in arr){
		$('#category-page').append(tableGen(a));
	}
	for(a in arr){
		$('#personel-page').append(tableGen(a));
	}
	for(a in arr){
		$('#logs-page').append(tableGen(a));
	}
	for(a in arr){
		$('#category-page').append(tableGen(a));
	}
}*/
function tableGen(arr){
	var ret='<tr>';
	for(a in arr){
		ret+='<td>'+a+'</td>';
	}
	return ret+'</tr>';
}
function postViev(postTitle, postDescrib, postImage, id){
	var ret='';
	ret+='<div class="post-viev-block" data-id="'+id+'">';
	ret+='<img class="post-viev-image" src="'+postImage+'"/>';
	ret+='<h3>'+postTitle+'</h3>';
	ret+='<p>'+postDescrib+'</p>';
	ret+='<div class="btn-group">';
	ret+='<button class="btn btn-primary post-btn" data-met="edit" data-id="'+id+'">edit</button>';
	ret+='<button class="btn btn-danger post-btn" data-met="delete" data-id="'+id+'">delete</button>';
	ret+='</div></div>';
	return ret;
}
function keyEventFunct(code){

}
function addListeners(){
	window.addEventListener('keydown',function(event){
		keyEventFunct(event.keyCode);
	});
	$(".minimalize-app").on("click", function () {
		var eWindow = remote.getCurrentWindow();
		eWindow.minimize();
	});
	$(".close-app").on("click", function () {
		var eWindow = remote.getCurrentWindow();
		eWindow.close();
	});
	$("#copyright").on("click", function(){
		ipc.send("portfolio");
	});
	$("#login").on("click", function(){
		loggedIn();
	});
	$(".nav-menu-header div button[data-whereto]").on("click", function(){
		$("main>div").addClass("hide-me");
		$("#"+$(this).data("whereto")+"-page").removeClass("hide-me");
	});
}
function loggedIn(){
	console.log("dsadsa");

	$("#login-page").addClass("hide-me");
	$("#post-page").removeClass("hide-me");
	$(".nav-menu-header div .btn").removeClass("disabled");
}
function loadScreen(sections){
	if(typeof(sections)=="Array"){
		for(i in sections){
			$("body").html(icp.sendSync("load-file", "elements/"+sections[i]+".html"));
		}
	}else if(typeof(sections)=="String"){
		$("body").html(icp.sendSync("load-file", "elements/"+sections+".html"));
	}
}
