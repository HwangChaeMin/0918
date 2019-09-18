var arrayInt =  new Array();

arrayInt.push(10);
arrayInt.push(547);
arrayInt.push(140);
arrayInt.push(2);

for(var i = 0; i < arrayInt.length; i++)
{
	document.writeln(i + "번 인덱스 원소값 : " + arrayInt[i]);
}
document.writeln("arrayInt 배열의 원소수 : " + arrayInt.length);
