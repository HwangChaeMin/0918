
var num = prompt('원하는 단을 입력하세요');


	document.writeln("<br></br>" + num + "단 <br></br>");
	for(var j = 1; j< 10; j++)
	{
		document.write(num + "x" + j + "=" + num*j +"<hr>");
	}
	document.writeln("");
