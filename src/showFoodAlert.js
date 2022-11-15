export async function showFoodAlert() {
    const currentDay = getCurrentDayIndex();

    const resp = await fetch(`http://localhost:5000/api/v1/safka`);

    if (!resp.ok) return;

    const body = await resp.json();

    console.log(body)
    console.log(currentDay)

    const menu = body[currentDay];

    // Create HTML
    const url = chrome.runtime.getURL("/html/index.html");

    const content = await fetch(url).then(resp => resp.text());

    content.replace("%FOOD%", menu.menu[0].name)
}

function getCurrentDayIndex() {
    return [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];
}