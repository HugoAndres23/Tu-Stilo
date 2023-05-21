const mobile_menu = document.getElementById("mobile_menu")
const open_menu = document.getElementById("bars")
const closed_menu = document.getElementById("closed_menu")
const items_menu = document.getElementById("menu_items")
const items = items_menu.querySelectorAll("li > a")

open_menu.addEventListener("click", () => {
    mobile_menu.classList.toggle("open-menu")
    mobile_menu.classList.toggle("closed-menu")
})

closed_menu.addEventListener("click", () => {
    mobile_menu.classList.toggle("closed-menu")
    mobile_menu.classList.toggle("open-menu")
})

items.forEach(item => {
    item.addEventListener("click", () => {
        mobile_menu.classList.toggle("closed-menu")
        mobile_menu.classList.toggle("open-menu")
    })
})

