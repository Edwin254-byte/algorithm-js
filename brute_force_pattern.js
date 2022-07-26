"use strict";
//Pattern matching using brute force algorithm
function findPattern() {
  const stringEl = document.querySelector(".string");
  const patternEl = document.querySelector(".pattern");
  const btnEl = document.querySelector("button");
  const resultEl = document.querySelector("p");

  //pattern handler
  function patternHandler() {
    //e.preventDefault();
    const string = stringEl.value;
    const pattern = patternEl.value;

    //Brute force algorithm
    let i = 1;
    function getPattern(pattern, string) {
      if (string.length === 0 || pattern.length === 0) return;
      const max = string.length - pattern.length + 1;
      let flag;
      for (i; i <= max; i++) {
        flag = true;
        for (let j = 0; j < pattern.length && flag === true; j++) {
          if (pattern[j] != string[j + i - 1]) flag = false;
        }

        if (flag) break;
      }
      return flag;
    }

    //dealing with visualization(output)
    const results = getPattern(pattern, string);
    const newString = `<span class='highlight'>${pattern}</span>`;
    const markup = `${string.replaceAll(pattern, newString)}`;

    //clearing the input fields
    patternEl.value = stringEl.value = "";
    patternEl.blur();

    results
      ? resultEl.insertAdjacentHTML("beforeend", markup)
      : resultEl.insertAdjacentHTML("beforeend", string);
    resultEl.insertAdjacentHTML("beforeend", "<br>");

    console.log(results ? "match found" : "no match found");
  }

  //click event
  btnEl.addEventListener("click", (e) => {
    e.preventDefault();
    patternHandler();
  });

  //keyboard event
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") patternHandler();
  });
}

export default findPattern;
