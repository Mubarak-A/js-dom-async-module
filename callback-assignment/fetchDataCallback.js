//create a fetchDataWithCallback function with parameter of a callback function
function fetchDataWithCallback(forCallback) {}

//create a setTimeout
setTimeout(function () {
  forCallback();
}, 2000);

//create a string result with console.log of the callback when called
function forCallback() {
  console.log("Data fetched");
}

//include logic to check for error in forCallback function
function forCallback() {
  let error = true;
  if (error === true) {
    throw new Error();
  } else {
    console.log("Data fetched");
  }
}

//create a try and catch syntax
try {
} catch (error) {}

//check for error in the callback function in the setTimeout
setTimeout(function () {
  try {
    forCallback();
  } catch (error) {
    console.log("Error: Fetch failed");
  }
}, 2000);

//combined code
function forCallback() {
  let error = true;
  if (error === true) {
    throw new Error();
  } else {
    console.log("Data fetched");
  }
}

function fetchDataWithCallback(forCallback) {
  setTimeout(function () {
    try {
      forCallback();
    } catch (error) {
      console.log("Error: Fetch failed");
    }
  }, 2000);
}

fetchDataWithCallback();
