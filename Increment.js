// document.body.innerHTML = <h1>Increment</h1>;

let count = 1;
function increment() {
  count++;
  document.getElementById("content").innerHTML = count;
}

function decrement() {
  if (count > 1) {
    count--;
    document.getElementById("content").innerHTML = count;
  }
}
