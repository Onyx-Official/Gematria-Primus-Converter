let button = document.getElementById("button");

button.addEventListener("click", () => {
    let list2 = document.getElementById("list2");

    if (list2.style.display != "flex")
        list2.style.display = "flex";
    else {
        list2.style.display = "none";
    }
});