function convert() {
  n = document.getElementById("bin_num").value;
  n.toString();
  if (n === "") {
    alert("Please enter a valid binary number");
    return;
  }

  for (i = 0; i < n.length; ++i) {
    if (n[i] != "0" && n[i] != "1") {
      alert("Please enter a valid binary number");
      return;
    }
  }
  var ans = parseInt(n, 2);
  document.getElementById("dec_num").value = ans;
}
