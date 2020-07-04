// Задача 1
const string = "Привет! Как дела?";

function getVowels(stringToBeFiltered) {

  const vowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
  let stringOnlyVowels = "";

  for (let i = 0; i < stringToBeFiltered.length; i++) {
    let letter = stringToBeFiltered[i];

    for (let j = 0; j < vowels.length; j++) {
      if (letter == vowels[j]) {
        stringOnlyVowels = stringOnlyVowels + vowels[j];
      }
    }
  }
  return stringOnlyVowels;
};

console.log(getVowels(string)); 
// Конец

// Задача 2
const workers = [
  { "name": "John", "salary": 500 },
  { "name": "Mike", "salary": 1300 },
  { "name": "Linda", "salary": 1500 }
];

function getWorthyWorkers(arrayToBeFiltered) {
  let workersHigherSalary = [];

  for (let i = 0; i < arrayToBeFiltered.length; i++) {
    if (arrayToBeFiltered[i].salary > 1000) {
      workersHigherSalary.push(arrayToBeFiltered[i].name);
    }
  }

  return workersHigherSalary;
};

console.log(getWorthyWorkers(workers));
// Конец

// Задача 3
const path = "/users/download/index.html";

function isHtml(string) {
  if (string.lastIndexOf(".html") + 5 == path.length) {
    return true;
  } else {
    return false;
  }
};

console.log(isHtml(path));
// Конец

// Задача 4(дополнительная)
const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];
const isEven = num => {
  let result = num % 2;
  if (result == 0) {
    return true;
  } else {
    return false;
  }
};

function filterArray(arr, fn) {
  arrayEvenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) == true) {
      arrayEvenNumbers.push(arr[i]);
    }
  }

  return arrayEvenNumbers;
};

console.log(filterArray(mixedArray, isEven));
// Конец