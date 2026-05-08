function add(a, b) {
    return a + b;
}

function sub(a, b) {
    if(a > b) throw new Error("No a must be greator than b");
    return a - b;
}

add(2, 5)
add(10, 23)
add(40, 42)

sub(10, 5)
