const toggle = document.getElementById("toggle");

toggle.addEventListener('click', function(){

    var toggleActive = document.getElementsByClassName("item");
    for (var i = 0; i < toggleActive.length; i++) {
        toggleActive[i].classList.toggle('active');
    }
})
