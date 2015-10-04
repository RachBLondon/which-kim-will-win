document.getElementById("startBtn").addEventListener("click", showBlocks);

function showBlocks(){
  var picOne = document.createElement("img");
  var picTwo = document.createElement("img");
  picOne.src = 'http://a.abcnews.com/images/Entertainment/ht_kim_kardashian_instagram_jc_150224_1x1_1600.jpg';
  picTwo.src = 'http://cdn2.thegloss.com/wp-content/uploads/2015/03/Kim-Kardashians-Pouty-Lips-Instagram-Photo.jpg';
  document.querySelector("#photoOne").appendChild(picOne);
  document.querySelector("#photoTwo").appendChild(picTwo);
};
