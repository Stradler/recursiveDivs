function init() {
  try {
    const input = document.getElementById("wordInput");
    const button = document.querySelector("button");
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    } );
    button.addEventListener("click", () => {
      generateDivs(input.value || "Nothing in Input");
    });
  } catch (e) {
    console.log(e);
  }
}

init();

const generateDivs = (value) => {
  let letters = value.match(/\S/g);
  clearDocument();
  let div = createDiv(value[0]);
  document.body.append(div);
  for (let i = 1, length = letters.length; i < length; i++) {
    let divToAppend = createDiv(letters[i]);
    div.append(divToAppend);
    div = divToAppend;
  }
};

const createDiv = letter => {
  const div = document.createElement("div");
  div.className = "alert alert-success";
  div.innerHTML = `<strong>${letter}</strong>`;
  return div;
};

const clearDocument = () => {
  const rootDiv = document.body.querySelector("div");
  rootDiv && rootDiv.remove();
};
