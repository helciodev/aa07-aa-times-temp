window.addEventListener("DOMContentLoaded", () => {
  console.log("event-handling.js script was successfully loaded");
  const cogIcon = document.querySelector(".fas.fa-cog");
  cogIcon.addEventListener("click", (event) => {
    console.log("Gear clicked");
    event.stopPropagation();
    document.querySelector(".pref").classList.toggle("pref--hidden");
  });
  const searchIcon = document.querySelector(".fas.fa-search");
  searchIcon.addEventListener("click", (e) => {
    console.log("Search clicked");
    e.stopPropagation();
    document
      .querySelector(".search-modal")
      .classList.toggle("search-modal--hidden");
  });

  window.addEventListener("click", () => {
    console.log("HTML document clicked");
    document.querySelector(".pref").classList.add("pref--hidden");
  });
});

const dateElement = document.querySelector(".masthead__date");
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const dayOfTheWeek = date.getDay();
const year = date.getFullYear();
const monthsOfTheYear = {
  0: "January",
  1: "february",
  2: "March",
  3: "May",
  4: "April",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

const daysOfTheWeek = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  0: "Sunday",
};

const today = `${daysOfTheWeek[dayOfTheWeek]}, ${monthsOfTheYear[month]} ${day}, ${year}`;
dateElement.innerHTML = `<span>${today}</span>`;
