(function(){
  var kimPhotoOne = document.getElementById("photoOne");
  var kimPhotoTwo = document.getElementById("photoTwo");
  var photoOneArr = [];
  var photoTwoArr = [];

  document.getElementById("startBtn").addEventListener("click", showBlocks);


  function showBlocks() {
    var out = new XMLHttpRequest();
    out.onreadystatechange = function() {
      if (out.readyState === 4 && out.status === 200) {
        if(photoOneArr.length != 0 || photoTwoArr.length !=0){
          photoOneArr = [];
          photoTwoArr = [];
        }
        var photoArr = out.responseText.split(">");
        console.log(photoArr);
        photoOneArr.push(photoArr[0],photoArr[1]);
        photoTwoArr.push(photoArr[2],photoArr[3]);
        kimPhotoOne.setAttribute('src', photoOneArr[0]);
        kimPhotoTwo.setAttribute('src', photoTwoArr[0]);
        console.log(photoOneArr);
        console.log(photoTwoArr);
      }
    };
    out.open('GET', '/play');
    out.send();
  };
})();
