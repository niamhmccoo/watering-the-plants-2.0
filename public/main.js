fetch('/get-plants')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        myJson.forEach(setupPlant);
    });

function setupPlant(plant) {
    let name = plant.name;
    let watered = plant.watered;
    $(".main").append($(`<div class='plant'>
        <div class='plant-text'>
          <h2>${plant.name}</h2>
          <h1>
            <time datetime="${ plant.watered || '' }"></time>
          </h1>
          <form method="POST" action="/water-plants">
          <input type="hidden" name="plant" value="${plant.name}" />
          <button>I just watered the plant!</button>
          </form>
        </div>
      </div>`))
};