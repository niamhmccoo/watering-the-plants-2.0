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
          <h3>
            <time datetime="${ plant.watered || '' }"></time>
          </h3>
          <form method="POST" action="/water-plants">
            <input type="hidden" name="plant" value="${plant.name}" />
          <button>I just watered the plant!</button>
          </form>
          <form method="POST" action="/remove-plant">
            <button>Remove plant</button>
          </form>
        </div>
      </div>`))
};

function removePlant(plant) {
  let name = plant.name;
  let watered = plant.watered;
  $("main").delete($(`<div class='plant'>
    <div class='plant-text'>
      <h2>${plant.name}</h2>
      <h3>
        <time datetime="${ plant.watered || '' }"></time>
      </h3>
      <form method="POST" action="/remove-plant">
      <input type="hidden" name="plant" value="${plant.name}" />
      <button>I just watered the plant!</button>
      </form>
      <form method="POST" action="/remove-plant">
            <button>Remove plant</button>
          </form>
    </div>
  </div>`))
};

function formatTimeAgo(timeInMilliseconds) {
  let timeInS = Math.round(timeInMilliseconds / 1000);
  let secondsOnly = timeInS % 60;
  let timeInM = (timeInS - secondsOnly) / 60;
  let minutesOnly = timeInM % 60;
  let timeInH = (timeInM - minutesOnly) / 60;
  let hoursOnly = timeInH % 24;
  let timeInD = (timeInH - hoursOnly) / 24;
  return `${timeInD}d ${timeInH}h ${minutesOnly}m ${secondsOnly}s ago`;
}

function refreshTimes() {
  $("time").each(function () {
    let watered = this.dateTime;

    if (watered) {
      wateredText = formatTimeAgo(+(new Date()) - +(Date.parse(watered)));
    } else {
      wateredText = "Never watered";
    }

    console.log("Please refresh", this, wateredText)
    $(this).text(wateredText)
  });
};

setInterval(refreshTimes, 1000);