

document.getElementById("startBtn").addEventListener("click", showBlocks);
//



function showBlocks() {
  var out = new XMLHttpRequest();
  out.onreadystatechange = function() {
    if (out.readyState === 4 && out.status === 200) {
      //  var photoURL = out.responseText
      //  console.log(photoURL);
    // document.getElementById("photoOne").setAttribute('src', out.responseText[0]);
      // console.log(out);
      var photoArr = out.responseText.split(">");
      console.log(photoArr);
      // document.getElementById('results').innerHTML = out.responseText;
      document.getElementById("photoOne").setAttribute('src', photoArr[0]);
      document.getElementById("photoTwo").setAttribute('src', photoArr[1]);
    }
  };
  out.open('GET', '/play');
  out.send();
};

//
// function displayData(response) {
//   console.log(response);
//   var oldInsta = document.getElementsByClassName("instaphotos");
//   var arrphotos = [];
//
//   for (index = oldInsta.length - 1; index >= 0; index--) {de44ff
//     oldInsta[index].parentNode.removeChild(oldInsta[index]);
//   }
//   // for loop is accessing nested photo urls and pushing into array
//   for (var i = 0; i < 9; i++) {
//     arrphotos.push(response['data'][i]['images']['low_resolution']['url']);
//   }
//   // for loop is creating an 'img' element for each array element,
//   // specifying a source and class for them, then appending them to the body
//   for (var j = 0; j < 9; j++) {
//     var photoDiv = document.createElement("div");
//     var oImg = document.createElement("img");
//     photoDiv.setAttribute('id', 'photoDest' + [j]);
//     photoDiv.setAttribute('class', 'instaphotos');
//     document.getElementById("instagram").appendChild(photoDiv);
//     oImg.setAttribute('src', arrphotos[j]);
//     oImg.setAttribute('class', 'pUnit');
//     document.getElementById("photoDest" + [j]).appendChild(oImg);
//   }
// }


//on click on photo function
