var request = require('request');
var env = require('env2')('./config.env');


var request = new XMLHttpRequest();

//
document.getElementById("startBtn").addEventListener("click", showBlocks);
//



function showBlocks(){
  //remove children
  console.log(process.env.apikey);
  var script = document.createElement('script');
  script.src = "https://api.instagram.com/v1/users/18428658/media/recent?access_token="+ env + "&callback=displayData";
  document.body.appendChild(script);
  // var picOne = document.createElement("img");
  // var picTwo = document.createElement("img");
  //replaced with real data from server.js
  // document.querySelector("#photoOne").replaceChild(picOne);
  // document.querySelector("#photoTwo").appendChild(picTwo);

};


function displayData(response){
  console.log(response);
  var oldInsta = document.getElementsByClassName("instaphotos");
  var arrphotos = [];

  for (index = oldInsta.length - 1; index >= 0; index--) {
      oldInsta[index].parentNode.removeChild(oldInsta[index]);
    }
  // for loop is accessing nested photo urls and pushing into array
  for(var i = 0; i<9;i++){
    arrphotos.push(response['data'][i]['images']['low_resolution']['url']);
  }
  // for loop is creating an 'img' element for each array element,
  // specifying a source and class for them, then appending them to the body
  for(var j = 0 ; j < 9 ; j++){
    var photoDiv = document.createElement("div");
    var oImg = document.createElement("img");
    photoDiv.setAttribute('id', 'photoDest' + [j]);
    photoDiv.setAttribute('class', 'instaphotos');
    document.getElementById("instagram").appendChild(photoDiv);
    oImg.setAttribute('src', arrphotos[j]);
    oImg.setAttribute('class', 'pUnit');
    document.getElementById("photoDest" + [j]).appendChild(oImg);
  }
}


//on click on photo function
