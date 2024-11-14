/* Task  1.2 */
for (let i = 1; i < 21; i++) {
    console.log(i)
}

/* Task  1.3 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let tall = 0; tall < numbers.length; tall++) {
    // console.log(numbers[tall])
    
    if (numbers[tall] % 3 == 0) {
        console.log("Eple")
    } else if (numbers[tall] % 5 == 0) {
        console.log("Kake")
    } else {
        console.log(numbers[tall])
    }
}

/* Task  1.4 */
let title = document.getElementById("title")
title.innerHTML = "Hello, JavaScript"
console.log(title)


/* Task  1.5 */
let box = document.getElementById("magic")

let d1 = document.getElementById("btnDisplay")
let d2 = document.getElementById("btnVisibility")
let d3 = document.getElementById("btnReset")

function changeDisplay () {
    box.style.display = "none";
}

function changeVisibility () {
    box.style.visibility = "hidden";
}

function reset () {
    box.style.visibility = "visible";
    box.style.display = "block";
}

d1.addEventListener("click", changeDisplay);
d2.addEventListener("click", changeVisibility);
d3.addEventListener("click", reset);

/* Task 1.6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];
const techList = document.getElementById("tech");
let listItems = "";

technologies.forEach(tech=>{
    listItems += "<li>" + tech + "</li>";
});
techList.innerHTML = listItems;