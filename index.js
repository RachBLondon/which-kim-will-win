(function(){
  var kimPhotoOne = document.getElementById("photoOne");
  var kimPhotoTwo = document.getElementById("photoTwo");
  var photoArr;
  var scoreResult = 0;

  // $("#nextBtn").hide();
  $(".kimpics").hide();
  $(".winner").hide();
  $(".loser").hide();


  document.getElementById("startBtn").addEventListener("click", showBlocks);

  function showBlocks() {
    $("#startBtn").hide();
    $(".winner").hide();
    $(".loser").hide();
    // $("#nextBtn").show("slow");
    // document.getElementById("score").style.display = 'inline';
    var out = new XMLHttpRequest();
    out.onreadystatechange = function() {
      if (out.readyState === 4 && out.status === 200) {
        //clear exisisting photos if they are there

        photoArr = JSON.parse(out.responseText);
        console.log(photoArr);
        kimPhotoOne.setAttribute('src', photoArr.image1);
        kimPhotoTwo.setAttribute('src', photoArr.image2);
        document.getElementById("score").innerHTML = "Score  :  ";
        document.getElementById("scoreValue").innerHTML = scoreResult.toString();
          $(".kimpics").fadeIn("slow");
      }

    };
    out.open('GET', '/play');
    out.send();
  };
  kimPhotoOne.addEventListener("click", compare);
  kimPhotoTwo.addEventListener("click", compare);


  function compare(){
    $(".kimpics").hide("fast");
    if (this.src === photoArr.image1){
      if (photoArr.likes1 > photoArr.likes2){
          scoreResult += 1;
          $(".winner").show("slow");
      } else {
        $(".loser").show("slow");
      }
    }
    else if (this.src === photoArr.image2)
      if (photoArr.likes2 > photoArr.likes1){
        scoreResult += 1;
        $(".winner").show("slow");
      } else {
        $(".loser").show("slow");
      }
      setTimeout(function(){ showBlocks() }, 1000);
  }


})();
