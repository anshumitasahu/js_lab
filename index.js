// let navElement = document.querySelector("nav");
// let navItems = document.getElementsByClassName("list");
// nav = () => {
//     console.log(navElement);
//     navElement.style.backgroundColor = "red";
// }
// nav();

// items = () => {
//     console.log(navItems);
//     for (let item of navItems) {
//         item.style.backgroundColor = "pink";
//     }
// }
// items();

// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
// document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";
// Array.from(document.getElementsByTagName("li")).forEach((element) => {
//     element.style.backgroundColor = "cyan";
// });
// let choices = ['s', 'w', 'g'];
// let cpu = choices[Math.floor(Math.random() * 3)];
// console.log(cpu)
// let user = prompt("Enter s, w, or g");
// const match = (cpu, user) => {
//     if (cpu === user) {
//         return 0
//     } else if (cpu === 's' && user === 'w') {
//         return "cpu"
//     } else if (cpu === 's' && user === 'g') {
//         return "user"
//     } else if (cpu === 'g' && user === 'w') {
//        return "user"
//     } else if (cpu === 'g' && user === 's') {
//         return "cpu"
//     } else if (cpu === 'w' && user === 's') {
//         return "user"
//     } else if (cpu === 'w' && user === 'g') {
//         return "cpu"
//     }
// }
// let result = match(cpu, user) 

// document.body.innerHTML = `
//     cpu: ${cpu} <br>
//     user: ${user} <br>
//     winner: ${result}
// `;
// let divArray = Array.from(document.getElementsByClassName("joke"));

// divArray.forEach((div) => {div.style.display = "none"});
// let output = divArray[Math.floor(Math.random() * divArray.length)];
// output.style.display = "block";

// clock
const time = () => {
let a = new Date();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();
let d = a.getDate();

// console.log(h, m, s, d);
document.querySelector(".see").innerHTML = (h +" : " + m + " : " + s + " : " + d)
}
setInterval (time, 1000);