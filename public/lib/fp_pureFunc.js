"use strict";/**
 * 함수형 프로그래밍
 * 부수효과를 줄이고, 조합성을 강조
 * 
 * 언제 평가해도 상관없는 순수함수들을 값으로 들고 다니면서,
 * 필요한 시점에 평가를 하면서 프로그래밍 하는것
 *//**
 * 순수함수
 * 동일한 인자를 주면 동일한 결과를 리턴
 * 언제실행해도 동일한 결과 리턴 -> 평가시점이 중요하지 않음 
 * 서로다른 공간에서 함수를 평가시켜도, 동일한 결과를 리턴
 * 
 */function add(c,a){return c+a}// 부수효과가 있는 함수
var c=5;function add2(c,a){return c=a,c+a}console.log(c),add2(1,2),console.log(c);// c = 2
/**
 * 일급함수
 * 함수를 값으로 다룰 수 있다
 * 값으로 들고다니다가 언제든 필요한 시점에 평가할 수 있다.
 * 
 * 함수를 변수에 넣을수도, 다른 함수의 인자로 받을수도 있다
 */var f1=function(b){return b*b};console.log(f1);// 함수를 인자로 받아, 내부에서 평가하여 결과를 리턴
function f3(a){return a()}console.log(f3(function(){return 10}));/**
 * add_maker
 * 함수를 리턴하는 함수
 */function add_maker(c){return function(a){return c+a}}// add10 에서 add_maker 는 10 이란 값을 들고 다니게 된다
var add10=add_maker(10);console.log(add10(20));function f4(a,b,c){return c(a()+b())}console.log(f4(function(){return 3},function(){return 5},function(b){return b*b}));