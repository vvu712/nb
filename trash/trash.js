function changePic(imgName) {
    const image = document.querySelectorAll(".imageDisplay");
    image.forEach((img) => {
      img.style.display = "none";
    });
    const selectedImage = document.getElementById(imgName);
    if (selectedImage) {
      selectedImage.style.display = "block";
    }
  }
  function flip(cardpicID, cardtextID) {
    var img = document.getElementById(cardpicID);
    var text = document.getElementById(cardtextID);
    if (img.style.display === "none") {
      img.style.display = "block";
      text.style.display = "none";
    } else {
      img.style.display = "none";
      text.style.display = "block";
    }
  }