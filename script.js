// 11 - vazifa to'g'irlandi
// 1-savol
let btn = document.getElementById("btn")
let div = document.getElementById("div1")
btn.addEventListener("click", () => {
    div.style.backgroundColor = "green";
})

// 2-savol
let p = document.createElement("p")
p.textContent = 'Salom'
document.body.appendChild(p)

p.addEventListener('mouseover', () => {
    p.style.color = 'red'
})
p.addEventListener('mouseout', () => {
    p.style.color = div.style.color
})

// 3-savol
let box = document.createElement('div')
box.textContent = 'div elementi'
document.body.appendChild(box)

let btn1 = document.createElement('button')
btn1.textContent = "class qoshish/olish"
document.body.appendChild(btn1)

let styleEl = document.createElement('style')
styleEl.textContent = `.highlight { border: 2px solid blue; }`
document.head.appendChild(styleEl)

btn1.addEventListener('click', () => {
    box.classList.toggle('highlight')
})

// 4-savol
const toggleBtn = document.getElementById("toggleBtn");
const img = document.getElementById("img");

if (toggleBtn && img) {
    toggleBtn.addEventListener("click", () => {
        if (img.style.display === "none") {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}

// 5-savol
const input = document.getElementById("input");
if (input) {
    input.addEventListener("input", () => {
        if (input.value.length < 5) {
            input.style.border = "3px solid red";
        } else {
            input.style.border = "3px solid green";
        }
    });
}

// 6-savol
const colorbtns = document.querySelectorAll(".colorbtn");
const colorbox = document.getElementById("colorbox");
if (colorbox) colorbox.textContent = "hello";

colorbtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const color = btn.getAttribute("data-color");
        colorbox.style.backgroundColor = color;
    });
});

// 7-savol (Dark mode)
const style = document.createElement("style");

style.textContent = `
  body { transition: background-color .2s ease, color .2s ease; }
  .dark-mode { background:#0f1115; color:#ffffff; }
  .dark-mode a { color: #9ecbff; }
  .dm-btn {
    padding: 10px 14px; border: 0;
  }
`;
document.head.append(style);

const dmBtn = document.createElement("button");
dmBtn.className = "dm-btn";
document.body.append(dmBtn);

function applyDark(on) {
    document.body.classList.toggle("dark-mode", on);
    dmBtn.textContent = on ? "Light Mode" : "Dark Mode";
    localStorage.setItem("dark-mode", on ? "1" : "0");
}

applyDark(
    localStorage.getItem("dark-mode") === "1" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
);

dmBtn.addEventListener("click", () => {
    applyDark(!document.body.classList.contains("dark-mode"));
});
