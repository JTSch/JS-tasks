/*Напишите код, который проверяет, что перемнная var является объектом хотя бы с одним ключом. */

var objct = {},
objct1 = {1:"one"},
arrw = [];
function checkObj(obj) {
var toString = {}.toString; /*заимствуем метод toString() у Объекта, т.к. только он выдает тип объекта. можно записать в виде Object.prototype.toString*/
if (toString.call(obj) == '[object Object]') {  
return countKeys(obj);
} else {
return "not an object";
}
};
function countKeys(obj) {
var count = 0;  
for (var key in obj) {
count++;
} 
return count == 1 ? "object with "+ count + " key" : "object with "+ count + " keys";
};
checkObj(objct);
checkObj(objct1);
checkObj(arrw);

width: 100px;
height: 143px;
margin-left: -35px;
margin-top: -310px;


