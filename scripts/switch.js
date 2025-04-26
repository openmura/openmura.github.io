document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const defaultTheme = prefersDarkScheme ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", defaultTheme);
    }
});

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const isGuestMode = urlParams.has("guestmode");

    if (isGuestMode) {
        document.getElementById("userName").innerHTML = "ゲスト";
        const now = new Date();
        document.getElementById("lastVisited").innerHTML = formatDate(now.toISOString());
        document.getElementById("agreeDate").innerHTML = "ゲストモード使用中";
    } else {
        if (localStorage.getItem("agree")) {
            document.getElementById("userName").innerHTML = `${localStorage.getItem("userName")}`;
            const now = new Date();
            localStorage.setItem("lastVisited", formatDate(now.toISOString()));
            document.getElementById("lastVisited").innerHTML = localStorage.getItem("lastVisited");
            document.getElementById("agreeDate").innerHTML = localStorage.getItem("agreeDate");
        } else {
            alert("⚠️警告⚠️\n\nルールを確認していません。");
            location.href = "rule.html";
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const devValue = localStorage.getItem("dev");
    if (devValue !== "1") {
        document.querySelectorAll(".dev").forEach(el => {
            el.classList.add("hiddenDev");
        });
    }
});
