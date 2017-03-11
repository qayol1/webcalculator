var first = 0;
var second = 0;
var operator = 0;
var operator_pressed = false;

function print_to_text(x) {
    var t = document.getElementById("result");
    if (operator_pressed === true) {
        t.value = "";
        operator_pressed = false;
    }
    if (t.value.length < 10) {
        if(t.value ==="0") {
            t.value = x;
        } else {
        t.value += x;
        }
    }
}

function print_dot() {
    var t = document.getElementById("result");
    var result = 0;
    for (var i = 0; i < t.value.length; i++) {
        if (t.value[i] === ".") {
            result +=1;
        }
    }
    if (result<1){
        t.value += ".";
        }
}

function clear_text(){
    document.getElementById("result").value = "0";
}

function set_operator(o) {
    operator = o;
    first = document.getElementById("result").value;
    operator_pressed = true;
}

function calculate() {
    second = document.getElementById("result").value;
    calculus = first+operator+second;
    result = eval(calculus)
    r = result.toString()
    document.getElementById("result").value = r.substring(0,10);
}