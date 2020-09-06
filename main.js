function convert() {
  n = document.getElementById("bin_num").value;
  n.toString();

  var ok = true;
  for (i = 0; i < n.length; ++i) {
    if (n[i] != "0" && n[i] != "1") {
      ok = false;
      break;
    }
  }

  if (ok === false) {
    document.getElementById("dec_num").value = "";
    document.getElementById("msg").innerHTML =
      "Please enter a valid binary number";
  } else if (n != "") {
    var ans = parseInt(n, 2);
    document.getElementById("dec_num").value = ans;
    document.getElementById("msg").innerHTML = "";
  } else {
    document.getElementById("dec_num").value = "";
    document.getElementById("msg").innerHTML = "";
  }
}
