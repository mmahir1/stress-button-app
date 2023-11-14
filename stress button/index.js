let countEl = document.getElementById("count-el")
let entriesEl = document.getElementById("entries-el")
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    entriesEl.textContent += count + " / "
    countEl.textContent = 0;
    count = 0;
}
