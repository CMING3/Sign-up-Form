function checkpwd(){
    const pwd = document.querySelector("input[name=pwd]");
    const cpwd = document.querySelector("input[name=cpwd]");
    const warnMsg = document.querySelector(".error");
    if (pwd.value==cpwd.value){
        warnMsg.style.display="none"

    }else if (pwd.value!==cpwd.value){
        warnMsg.style.display="block"
    }
}