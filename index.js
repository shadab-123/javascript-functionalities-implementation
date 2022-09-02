const loadtext= document.querySelector('.loading-text');
const bg= document.querySelector('.bg');
var tablediv = document.getElementById("tableid");

let load =0;

let interval = setInterval(blurring,25);

function blurring(){
    load++;
    if(load>99){
        clearInterval(interval);
        tablediv.style.display = 'block';
    }
    loadtext.innerText=`${load}%`;
    loadtext.style.opacity =scale(load,0,100,1,0);
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function addstudent(){
    var rollno=document.sample.rollno.value;
    var name=document.sample.name.value;

    var tr=document.createElement('tr');

    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));

    td1.innerHTML=rollno;
    td2.innerHTML=name;

    document.getElementById("tbl").appendChild(tr);
}