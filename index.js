let main = document.getElementById("container");
function getDetails() {
  main.innerHTML = null;
  let input = document.getElementById("name").value;
  var hash = "669619266832677ce19237ac139b42a2";
  // var hash= md5(stringToHash)
  var url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${input}&apikey=2893788e21defb318d0a1832a724b81a&ts=10&hash=669619266832677ce19237ac139b42a2`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data.results);
      uppendData(res.data.results);
    });
}

function uppendData(data) {
  for (let ele of data) {
    let { name, thumbnail } = ele;
    let { path } = thumbnail;
    //console.log(name, path);
    let div = document.createElement("div");
    div.setAttribute("class", "each slideUp");
    div.addEventListener("click", function () {
      moduleDiv(ele);
    });
    let h5 = document.createElement("h5");
    h5.innerText = name;

    div.append(h5);
    main.append(div);
  }
}

function moduleDiv(data) {
  let input = document.getElementById("name");
  input.value = "";
  let Mainbody = document.getElementById("main");
  Mainbody.style.display = "none";
  let card = document.getElementById("card");
  let cardItems = document.createElement("div");
  cardItems.setAttribute("class", "cardItems fadeIn");
  cardItems.innerHTML = `
    <div class="leftItems">
      <div class="title">
        <h2>${data.name}</h2>  
      </div>
      <div class="details">
        <p>${data.description}</p>
        </div>
        <div class="btn">
          <button onclick="back()">Back</button>  
        </div>
      </div>
      <div class="rightItems">
      
      <div class="Each_img">
        <img src="${data.thumbnail.path}.jpg" width="250px" height="250px"/>
        </div>
      
      </div>
    `;
  card.append(cardItems);
}
function back() {
  let card = document.getElementById("card");
  card.innerHTML = null;
  let Mainbody = document.getElementById("main");
  Mainbody.style.display = "block";
  let input = document.getElementById("name").value;
  input = "";
  main.innerHTML = "";
}
let i = 0;
function toggle() {
  i++;
  let btn = document.getElementById("toggleBtn");

  let myAudio = document.getElementById("audio");
  if (myAudio.paused) {
    myAudio.play();
    btn.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else {
    myAudio.pause();
    btn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  }
}
