if (window.location.href.endsWith("/")) {
    var container = document.createElement("div");
    document.querySelector("#loggedin-frontpage > div:nth-child(2)").appendChild(container);

    const url = chrome.runtime.getURL("index.html")
    fetch(url).then(res => res.text()).then(e => container.innerHTML = e);
}
else {
    const lunchURL = chrome.runtime.getURL("index1.html")

    fetch(lunchURL).then(res => res.text()).then(html => {
        for (let i = 0; i < 5; i++) {
            const lunchBreak = document.createElement("div");
            lunchBreak.className = "block sera";
            lunchBreak.style.left = i *  20 + .2 + "%";

    
            document.querySelector("#schedule").appendChild(lunchBreak);
            lunchBreak.innerHTML = html
        }
    });

    // var container1 = document.createElement("div");
    document.querySelector("#schedule").appendChild(container1);

    

    // fetch(lunchURL).then(res => res.text()).then(e => container1.innerHTML = e);

}