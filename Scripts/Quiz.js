function check() {
    var xelem = document.getElementById('g1');
    if (xelem.checked) {
        alert('Good job!')
    }
    else {
        alert("Try next time!")
    }
    var g3elem =  document.getElementById('g3');
    var reselem = document.getElementById('res');
    reselem.innerHTML = 'Are you sure' + g3elem.value + '?';
} 