"use strict";
// Rikiuoti skaičius nuo didžiausio iki mažiausio
let a = +prompt("Įveskite pirmą skaičių");
let b = +prompt("Įveskite antrą skaičių");
let c = +prompt("Įveskite trečią skaičių");
// Rikiuojame skaičius nuo didžiausio iki mažiausio
if (a >= b && a >= c) { 
    alert(a + ", " + b + ", " + c); // Ši sąlyga apima atvejį, kai a yra didžiausias, o b ir c yra lygūs
} else if (a >= c && c >= b) { 
    alert(a + ", " + c + ", " + b); // Ši sąlyga apima atvejį, kai a yra didžiausias, o b ir c yra lygūs
} else if (b >= a && a >= c) {
    alert(b + ", " + a + ", " + c); // Ši sąlyga apima atvejį, kai b yra didžiausias, o a ir c yra lygūs
} else if (b >= c && c > a) {
    alert(b + ", " + c + ", " + a); // Ši sąlyga apima atvejį, kai b yra didžiausias, o a ir c yra lygūs
} else if (c >= a && a >= b) {
    alert(c + ", " + a + ", " + b); // Ši sąlyga apima atvejį, kai c yra didžiausias, o a ir b yra lygūs
} else {
    alert(c + ", " + c + ", " + a); // Ši sąlyga apima atvejį, kai c yra didžiausias, o a ir b yra lygūs
}