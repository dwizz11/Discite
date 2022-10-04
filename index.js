document.addEventListener("click", (Element) => {
    var isProfilebtn = Element.target.matches("[data-dropdown-button]");

    // if(!isProfilebtn && Element.target.closest("[data-dropdown]") != null) return;

    var currentDropdown = document.getElementById("profile-header");
    if (isProfilebtn && !currentDropdown.classList.contains("active")) {
        currentDropdown.classList.add("active");

        document
            .getElementById("arrow")
            .classList.replace("fa-caret-down", "fa-caret-up");
    } else if (
        (isProfilebtn || !isProfilebtn) &&
        currentDropdown.classList.contains("active")
    ) {
        currentDropdown.classList.remove("active");

        document
            .getElementById("arrow")
            .classList.replace("fa-caret-up", "fa-caret-down");
    } else {
        return;
    }
});

document.addEventListener("click", (e) => {
    var whichSideNav = e.target.matches("[data-sideNav-button]");

    if(!whichSideNav) return;

    
    var ifactive = e.target.closest("[data-sideNav]").classList.contains("active");
    if(whichSideNav && ifactive) return;

    if(whichSideNav && !ifactive){

        var getAllSideNav = document.getElementsByClassName("sidenavButton");

        var getAllcontent = document.getElementsByClassName("contents")

        var getallSeeAll = document.getElementsByClassName("expandable");

        for (let index = 0; index < getAllSideNav.length; index++) {
            getAllSideNav[index].classList.remove("active");
        }

        for (let index = 0; index < getAllcontent.length; index++) {
            getAllcontent[index].classList.remove("active");
        }

        for (let index = 0; index < getallSeeAll.length; index++) {
            getallSeeAll[index].classList.remove("expand");
        }

       var getSideNav = e.target.closest("[data-sideNav]");
       var getContent = getSideNav.classList[0]; 
       getSideNav.classList.add("active");
       document.getElementsByClassName(getContent + " contents")[0].classList.add("active");


    //    Bruteforce version

    //    if(getSideNav.classList.contains("home")){
    //      getSideNav.classList.add("active");
    //      document.getElementsByClassName("home contents")[0].classList.add("active");
    //    }else if(getSideNav.classList.contains("search")){
    //     getSideNav.classList.add("active");
    //      document.getElementsByClassName("search contents")[0].classList.add("active");
    //    }
       

    //    console.log(getSideNav.classList[0]);


       
       
    }
});

document.addEventListener("click", e =>{
    var isSeeAll = e.target.matches("[data-course-expand-btn]")


    if(!isSeeAll) return;

    var expandState = e.target.closest("[data-course-container]").classList.contains("expand");
    if(isSeeAll && !expandState){
        var expandNow = e.target.closest("[data-course-container]");
        var chgInner = e.target.closest("[data-ongoing-btn-parent]");

        chgInner.innerHTML = "<p data-course-expand-btn>Show Less</p>";
        expandNow.classList.add("expand");
    }else{
        var expandNow = e.target.closest("[data-course-container]");
        var chgInner = e.target.closest("[data-ongoing-btn-parent]");

        chgInner.innerHTML = "<p data-course-expand-btn>See All</p>";
        expandNow.classList.remove("expand");
    }
})

function greyArrow() {
    document.getElementById("arrow").style.color = "#555555"
}

function normalArrow() {
    document.getElementById("arrow").style.color = "initial"
}





