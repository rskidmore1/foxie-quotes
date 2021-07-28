
var summonBtn = document.querySelector('.summon-btn');

var summonImg = document.querySelector('.image');

var acceptBtn = document.querySelector('.accept-btn');


function getLoadFox(){

  var image = ''

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://randomfox.ca/floof/');  // http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]

  var response = [];
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {

    console.log(xhr.status);
    console.log(xhr.response);

    response.push(xhr.response);

    image = response[0].image;
    // console.log(image)

    summonImg.setAttribute("src", image)



  });

  xhr.send();


}

summonBtn.addEventListener('click', getLoadFox)
