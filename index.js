

document.getElementById("startBtn").addEventListener("click", showBlocks);
//



function showBlocks() {
  var out = new XMLHttpRequest();
  out.onreadystatechange = function() {
    if (out.readyState === 4 && out.status === 200) {
      var photoArr = out.responseText.split(">");
      document.getElementById("photoOne").setAttribute('src', photoArr[0]);
      document.getElementById("photoOneLike").innerHTML = photoArr[1];
      document.getElementById("photoTwo").setAttribute('src', photoArr[2]);
      document.getElementById("photoTwoLike").innerHTML = photoArr[3];
    }
  };
  out.open('GET', '/play');
  out.send();
};
