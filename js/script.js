function login() {
  let user = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  user === "admin" && pass === "admin"
    ? (window.location = "principalPage.html")
    : Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong Email or Password",
      });
}

function showPassword() {
  let pass = document.getElementById("password");
  let icon = document.getElementById("icon-password");

  if (pass.type === "password") {
    pass.setAttribute("type", "text");
    icon.setAttribute("name", "eye-off-outline");
  } else {
    pass.setAttribute("type", "password");
    icon.setAttribute("name", "eye-outline");
  }
}

const inputSearch = document.querySelector("#input-search");
const searchResult = document.querySelector(".search-result");
const main = document.querySelector("main");

function selectList(list) {
  inputSearch.value = list.innerHTML;
  searchResult.innerHTML = "";
  main.classList.remove("body-opacity");
}

fetch("https://api.rawg.io/api/games?key=5ddfec9274094f7c93c073204ccecff1")
  .then((response) => response.json())
  .then((data) => {
    inputSearch.addEventListener("keyup", () => {
      let inputUser = inputSearch.value;
      if (inputUser.length) {
        apiFilter = api.filter((search) => {
          return search.name.toLowerCase().includes(inputUser.toLowerCase());
        });
        display(apiFilter);
      } else {
        searchResult.innerHTML = "";
        main.classList.remove("body-opacity");
      }
    });

    function display(result) {
      const content = result.map((list) => {
        return "<li onclick=selectList(this)>" + list.name + "</li>";
      });
      searchResult.innerHTML = "<ul>" + content.join("") + "</ul>";
      main.classList.add("body-opacity");
    }

    let api = data.results;
    let apiFilter = [];

    cardStats(api, "#card-template");
  });

const gamesList =
  "https://api.rawg.io/api/games?key=5ddfec9274094f7c93c073204ccecff1";

function cardStats(Array, idContainer) {
  let container = document.querySelector(idContainer);
  console.log(Array);
  Array = orderByRating(Array);

  Array.forEach((x, i) => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <div class="card-part-1">
      <img src="${x.background_image}" alt="Filter">
      <ion-icon name="heart-outline"></ion-icon>
    </div>
    <div class="card-part-2">
      <div class="card-title">
        <h2>${x.name}</h2>
        <p>#${i + 1}</p>
      </div>
      <div class="card-data">
        <div class="release">
          <p class="grey-text">Release date: </p>
          <p >${x.released}</p>
          <div class="card-icons">
            <ion-icon name="logo-playstation"></ion-icon>
            <ion-icon name="logo-xbox"></ion-icon>
            <ion-icon name="logo-windows"></ion-icon>
            <img src="/img/nintendo.svg" alt="">
          </div>
        </div>
        <div class="card-info">
          <p class="grey-text">Genres: </p>
          <p>${getGenres(x.genres)}</p>
        </div> 
        </div>
        </div>`;
    container.appendChild(div);
  });
}

function getGenres(Array) {
  let genres = [];
  Array.forEach((element) => {
    genres.push(element.name);
  });
  return genres;
}

function orderByRating(games) {
  games.sort((a, b) => b.rating - a.rating);
  return games;
}

const btnSwitch = document.querySelector("#checkbox");
const header = document.querySelector("header");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("white");
  header.classList.toggle("white");
});
