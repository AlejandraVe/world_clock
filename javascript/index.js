// Los Angeles
function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Merida
  let meridaElement = document.querySelector("#merida");
  let meridaDateElement = meridaElement.querySelector(".date");
  let meridaTimeElement = meridaElement.querySelector(".time");
  let meridaTime = moment().tz("America/Merida");

  meridaDateElement.innerHTML = meridaTime.format("MMMM Do YYYY");
  meridaTimeElement.innerHTML = meridaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Lisbon
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  let lisbonTime = moment().tz("Europe/Lisbon");

  lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
  lisbonTimeElement.innerHTML = lisbonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);