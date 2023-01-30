// show popup
let add_news = document.getElementById('addNews');
let send_plyar = document.getElementById('send-playr');



function showPopue(){
    document.querySelector('.poup-news').classList.add('show-popup');
    document.querySelector('.ovelay').classList.add('poupu-ovelay');
   
}

function showPouoSendPlayer(){
    document.querySelector('.Transfer-send-player').classList.add('show-popup');
    document.querySelector('.ovelay').classList.add('poupu-ovelay');
    
}


function showrevenues(){
    document.querySelector('.Finance-revenues').classList.add('show-popup');
    document.querySelector('.ovelay').classList.add('poupu-ovelay');
    
}

function displyrevenues(){
    document.querySelector('.Finance-revenues').classList.remove('show-popup');
    document.querySelector('.ovelay').classList.remove('poupu-ovelay');
    
}



function displayPouoSendPlayer(){
    document.querySelector('.Transfer-send-player').classList.remove('show-popup');
    document.querySelector('.ovelay').classList.remove('poupu-ovelay');
    
}

function displayPoupe(){
    document.querySelector('.poup-news').classList.remove('show-popup');
    document.querySelector('.ovelay').classList.remove('poupu-ovelay');
    
}

function selectCahng(e){
    e.classList.add("cahng-select");  
}
function selectCahngWiner(e){
    e.classList.add("cahng-select-winer");  
}
function sowhFdite(r){
    r.firstElementChild.classList.toggle("showdiv-edite-remov");
}
function butstyle(e){
 
 e.classList.add("butactive")
}
function removbutstyle(){
    document.querySelector('.butactive').classList.remove("butactive");
   }
function reject(){
   
    document.querySelector(".poup-reject").classList.add('poup-show-accpt');
    document.querySelector('.ovelay').classList.add('poupu-ovelay');
    window.scrollTo(0,0);
}
function acceptance(){
   
    document.querySelector(".poup-Acceptance").classList.add('poup-show-accpt');
    document.querySelector('.ovelay').classList.add('poupu-ovelay');
    window.scrollTo(0,0);
}
function closacc_rej(){
    document.querySelector(".poup-show-accpt").classList.remove('poup-show-accpt');
    document.querySelector('.ovelay').classList.remove('poupu-ovelay');
}
function TabelAccptens(e) {
    document.querySelector(".Newes-culb-acpt").classList.add("Newes-culb-acpt-show")
    document.querySelector(".Newes-culb-pending").classList.remove("Newes-culb-pending-show");
    document.querySelector(".butactive").classList.remove("butactive");
    e.classList.add('butactive');
    
   
}
function TabelPading(e){
    document.querySelector(".Newes-culb-pending").classList.add("Newes-culb-pending-show")
    document.querySelector('.Newes-culb-acpt').classList.remove('Newes-culb-acpt-show');
    document.querySelector(".butactive").classList.remove("butactive");
    e.classList.add('butactive');
}

// *******************************************************
function temporary_accepted(e){
    document.querySelector('.Newes-culb-temporary-accepted').classList.add('Newes-culb-temporary-accepted-show');
    document.querySelector('.Newes-culb-acpt').classList.remove('Newes-culb-acpt-show');
    document.querySelector('.Newes-culb-pending').classList.remove('Newes-culb-pending-show');
    document.querySelector(".butactive").classList.remove("butactive");
    e.classList.add('butactive');
}
function permanent_accepted(e){
   
    document.querySelector('.Newes-culb-temporary-accepted').classList.remove('Newes-culb-temporary-accepted-show');
    document.querySelector('.Newes-culb-acpt').classList.add('Newes-culb-acpt-show');
    document.querySelector('.Newes-culb-pending').classList.remove('Newes-culb-pending-show');
    document.querySelector(".butactive").classList.remove("butactive");
    e.classList.add('butactive');
}
function pending(e){
    document.querySelector('.Newes-culb-temporary-accepted').classList.remove('Newes-culb-temporary-accepted-show');
    document.querySelector('.Newes-culb-acpt').classList.remove('Newes-culb-acpt-show');
    document.querySelector('.Newes-culb-pending').classList.add('Newes-culb-pending-show');
    document.querySelector(".butactive").classList.remove("butactive");
    e.classList.add('butactive');
}

const nav_but = document.querySelectorAll('.team-accept li');

nav_but.forEach(items => {
    items.addEventListener('click', function(){
        nav_but.forEach(nav => nav.classList.remove('teame-active'))
        this.classList.add('teame-active');
    })
 });

    
   
var state = false;
function toggle_card(item){
    if(state){
        item.nextElementSibling.style.display='none';
        item.style.marginBottom = '10px';
        item.style.width = '100%';
      
        state = false;
    }else{
        
        item.nextElementSibling.style.display='flex';
        state = true;
    }
   }
   


// suport tabel 
const sup_acp = document.querySelector('.tabel-accept');
const sup_pad = document.querySelector('.tabel-pending');
const sup_rej = document.querySelector('.tabel-noaccpt');

function sup_tabel_acp(){
   sup_acp.classList.add('sowh-tabel');
   sup_pad.classList.remove('sowh-tabel');
   sup_rej.classList.remove('sowh-tabel');
}
function sup_tabel_pad(){
    sup_acp.classList.remove('sowh-tabel');
    sup_pad.classList.add('sowh-tabel');
    sup_rej.classList.remove('sowh-tabel');
 }
 function sup_tabel_rej(){
    sup_acp.classList.remove('sowh-tabel');
    sup_pad.classList.remove('sowh-tabel');
    sup_rej.classList.add('sowh-tabel');
 }