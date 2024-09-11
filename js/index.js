const color = { F: "pink", L: "red", R: "green", num: "orange" };
const span = (text) =>
  "FLR0123456789".includes(text[0])
    ? `<span style=\"color: ${
        "FLR".includes(text[0]) ? color[text[0]] : color["num"]
      }\">${text}</span>`
    : text;

function highlight(code) {
  let temp = code[0];
  let result = "";
  for (let i = 1; i < code.length; i++) {
    const check = code.slice(i - 1, i + 1);
    if (!isNaN(check) || ["FF", "LL", "RR"].includes(check)) {
      temp += code[i];
    } else {
      result += span(temp);
      temp = code[i];
    }
    if (i == code.length - 1) {
      result += span(temp);
    }
  }
  return result;
}

const text = document.getElementById("text");

function change(e) {
  text.innerHTML = highlight(e.target.value);
}
