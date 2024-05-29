let form1 =document.getElementById('form1');
let form2 =document.getElementById('form2');
let form3 =document.getElementById('form3');
let next1 =document.getElementById('next1');
let next2 =document.getElementById('next2');
let back1 =document.getElementById('back1');
let back2 =document.getElementById('back2');
let sumbit =document.getElementById('sumbit');
let progress =document.getElementById('progress');
let succsses =document.querySelector('.succsses');


next1.onclick=function () {
    var email =document.getElementById("email").value;
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    let test1 =0
    let test2 =0
    let test3 =0
    if (regx.test(email)) {
        document.getElementById("email").style.borderBottom="2px solid green"
        test1=1
    }else{
        document.getElementById("email").style.borderBottom="2px solid red"
        test1=0
    }
    let PasswordOne =document.getElementById("password1").value
    let PasswordTwo =document.getElementById("password2").value
    if(PasswordOne == "" || PasswordOne == null){
        document.getElementById("password1").style.borderBottom="2px solid red"
        test2=0
    }else{
        document.getElementById("password1").style.borderBottom="2px solid green"
        test2=1
    }
    if(PasswordTwo == "" || PasswordTwo == null){
        document.getElementById("password2").style.borderBottom="2px solid red"
        test3=0
    }else if(PasswordTwo == PasswordOne){
        document.getElementById("password2").style.borderBottom="2px solid green"
        test3=1
    }
    if(test1==1 && test2==1 && test3==1){
        form1.style.left='-450px';
        form2.style.left='40px';
        progress.style.width='240px';
    }
}
back1.onclick=function () {
        form1.style.left='40px';
        form2.style.left='450px';
        progress.style.width='120px';
}
next2.onclick=function () {
    let inst =document.getElementById("inst").value;
    let face =document.getElementById("face").value
    let twit =document.getElementById("twit").value
    let test1 =0
    let test2 =0
    let test3 =0
    if(inst == "" || inst == null){
        document.getElementById("inst").style.borderBottom="2px solid red"
        test1=0
    }else{
        document.getElementById("inst").style.borderBottom="2px solid green"
        test1=1
    }
    if(face == "" || face == null){
        document.getElementById("face").style.borderBottom="2px solid red"
        test2=0
    }else{
        document.getElementById("face").style.borderBottom="2px solid green"
        test2=1
    }
    if(twit == "" || twit == null){
        document.getElementById("twit").style.borderBottom="2px solid red"
        test3=0
    }else{
        document.getElementById("twit").style.borderBottom="2px solid green"
        test3=1
    }
    if(test1==1 && test2==1 && test3==1){
        form1.style.left='-450px';
        form2.style.left='-450px';
        form3.style.left='40px';
        progress.style.width='365px';
    }
}
back2.onclick=function () {
    form1.style.left='-450px';
    form2.style.left='40px';
    form3.style.left='450px';
    progress.style.width='240px';
}
sumbit.onclick= function (){
    let firstName =document.getElementById("firstName").value;
    let lastName =document.getElementById("lastName").value
    let phoneNumber =document.getElementById("phoneNumber").value
    let test1 =0
    let test2 =0
    let test3 =0
    if(firstName == "" || firstName == null){
        document.getElementById("firstName").style.borderBottom="2px solid red"
        test1=0
    }else{
        document.getElementById("firstName").style.borderBottom="2px solid green"
        test1=1
    }
    if(lastName == "" || lastName == null){
        document.getElementById("lastName").style.borderBottom="2px solid red"
        test2=0
    }else{
        document.getElementById("lastName").style.borderBottom="2px solid green"
        test2=1
    }
    if(phoneNumber == "" || phoneNumber == null){
        document.getElementById("phoneNumber").style.borderBottom="2px solid red"
        test3=0
    }else{
        document.getElementById("phoneNumber").style.borderBottom="2px solid green"
        test3=1
    }
    if(test1==1 && test2==1 && test3==1){
        succsses.style.marginTop="-500px"
        setInterval(() => {
            succsses.style.marginTop="-1500px"
        }, 2000);
        setInterval(() => {
            location.reload()
        }, 2400);
    }
}
