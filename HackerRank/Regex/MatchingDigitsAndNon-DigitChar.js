// xxXxxXxxxx를 매칭하라
// x는 숫자를 의미하고, X는 숫자가 아닌것을 의미한다.

var Regex_Pattern = /\d{2}\D\d{2}\D\d{4}/;

function processData(Test_String) {
    //Enter your code here
    
    console.log(!!Test_String.match(Regex_Pattern));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
