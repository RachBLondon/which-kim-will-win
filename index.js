(function(){
  // var photoArr;
  // var kimPhotoOne;
  // var kimOneLikes;
  // var kimPhotoTwo;
  var kimPhotoOne = document.getElementById("photoOne")
  var kimOneLikes;
  var kimPhotoTwo = document.getElementById("photoTwo")
  var kimTwoLikes;
  document.getElementById("startBtn").addEventListener("click", showBlocks);
  //



  function showBlocks() {
    var out = new XMLHttpRequest();
    out.onreadystatechange = function() {
      if (out.readyState === 4 && out.status === 200) {
        var photoArr = out.responseText.split(">");
        kimPhotoOne.setAttribute('src', photoArr[0]);
        kimOneLikes = photoArr[1];
        kimPhotoTwo.setAttribute('src', photoArr[2]);
        kimTwoLikes = photoArr[3];
      }
    };
    out.open('GET', '/play');
    out.send();
  };
})();
