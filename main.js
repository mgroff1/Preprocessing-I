

var main = $(".main-contain");
var mainSpin = $("main-contain-click");
var mid = $(".main-mid-flex");
main.on('click',projects);

function projects(){
   
    main.toggleClass("main-contain-click");

}
$(".back").on('click',function(){
    main.toggleClass("main-contain-click");
})

// function doshit(){ 
   
// }

