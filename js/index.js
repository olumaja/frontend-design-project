let mobileIcon = document.querySelector("#mobileIcon");
mobileIcon.addEventListener('click', function(e){
    
    if(mobileIcon.className === "nav-menu-item hamburger"){

        mobileIcon.classList.remove('hamburger');
        mobileIcon.classList.add("rotateHumburger");
    }
    else{

        mobileIcon.classList.remove('rotateHamburger');
        //mobileIcon.classList.add("hamburger");
    }
    
    alert(mobileIcon.className);
    
})