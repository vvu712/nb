fetch("prototype.html")
        .then((response) => response.text())
        .then((data) => {
          // Insert the loaded content into the container section
          document.getElementById("prototype1").innerHTML = data;
          
          
        })
        

        .catch((error) => console.error("Error loading content:", error));
        
       
function changePage(currentPage, nextPage) {
    var disable = document.getElementById(currentPage);
    var enable = document.getElementById(nextPage);

    disable.style.display = "none";
    enable.style.display = "flex";
  }
function startDemo() {
    var allPrototypePages = document.querySelectorAll(".prototypePages");

    allPrototypePages.forEach(function (page) {
      page.style.display = "none";
    });

    var enableSignIn = document.getElementById("signInPage");
    enableSignIn.style.display = "flex";
  }
function back2SignInBTN() {
    console.log("pp");
    var demoBTNtext = document.getElementById("demoBTN");
    demoBTNtext.textContent = "RETURN TO SIGN IN";
  }
function changeNavPage(navPageID, navPageClass) {
    var enableNavPage = document.getElementById(navPageID);
    var allNavPage = document.querySelectorAll(navPageClass);
    allNavPage.forEach(function (pages) {
      pages.style.display = "none";
    });
    enableNavPage.style.display = "flex";
  }