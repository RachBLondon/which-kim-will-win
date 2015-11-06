(function(){
  var kimPhotoOne = document.getElementById("photoOne");
  var kimPhotoTwo = document.getElementById("photoTwo");
  var photoArr;

  document.getElementById("startBtn").addEventListener("click", showBlocks);

  function showBlocks() {
    var out = new XMLHttpRequest();
    out.onreadystatechange = function() {
      if (out.readyState === 4 && out.status === 200) {
        //clear exisisting photos if they are there

        photoArr = JSON.parse(out.responseText);
        console.log(photoArr);
        kimPhotoOne.setAttribute('src', photoArr.image1);
        kimPhotoTwo.setAttribute('src', photoArr.image2);
      }

    };
    out.open('GET', '/play');
    out.send();


  };
  //write game scrip
  kimPhotoOne.addEventListener("click", compare);
  kimPhotoTwo.addEventListener("click", compare);


  function compare(){

    if (this.src === photoArr.image1){
      if (photoArr.likes1 > photoArr.likes2){
        document.getElementById("result").innerHTML = "Awesome you win!"
      } else {
        document.getElementById("result").innerHTML = "LOSER!!"
      }
    }
    else if (this.src === photoArr.image2)
      if (photoArr.likes2 > photoArr.likes1){
        document.getElementById("result").innerHTML = "Awesome you win!"
      } else {
        document.getElementById("result").innerHTML = "LOSER!!"
      }
  }


})();
