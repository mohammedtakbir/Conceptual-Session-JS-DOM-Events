document.getElementById('yes-btn').addEventListener('click', function(){
    // const message = document.getElementById('msg');
    // message.innerText = 'meh......ok'
    sentmsg('msg')
})
document.getElementById('ofCourse-btn').addEventListener('click', function(){
    // const message = document.getElementById('msg');
    // message.innerText = 'oh....yeah';
    sentmsg('msg')
})
function sentmsg(id){
    document.getElementById('msg').innerText = 'adore you!';
}