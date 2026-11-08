function handle() {
  let inputs = document.querySelectorAll("input");
 
  for (let i = 0; i < inputs.length; i++) {
    input_values.push(inputs[i].value);
  }
}
let input_values = [];
let button = document.querySelector(".btn");
button.addEventListener("click", handle);
