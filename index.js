(function(){
  // var photoArr;
  // var kimPhotoOne;
  // var kimOneLikes;
  // var kimPhotoTwo;
  // var kimTwoLikes;

  document.getElementById("startBtn").addEventListener("click", showBlocks);
  //



  function showBlocks() {
    var out = new XMLHttpRequest();
    out.onreadystatechange = function() {
      if (out.readyState === 4 && out.status === 200) {
        var photoArr = out.responseText.split(">");
        var kimPhotoOne = document.getElementById("photoOne").setAttribute('src', photoArr[0]);
        var kimOneLikes = document.getElementById("photoOneLike").innerHTML = photoArr[1];
        var kimPhotoTwo = document.getElementById("photoTwo").setAttribute('src', photoArr[2]);
        var kimTwoLikes = document.getElementById("photoTwoLike").innerHTML = photoArr[3];
      }
    };
    out.open('GET', '/play');
    out.send();
  };
})();
