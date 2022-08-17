// * counter
let counts = 0;
// * +
document.getElementById('plus-btn').addEventListener('click', function(){
    // counts += 1;
    counts++
    document.getElementById('count').innerText = counts;
})
// * -
document.getElementById('minus-btn').addEventListener('click', function(){
    counts--;
    document.getElementById('count').innerText = counts;
})