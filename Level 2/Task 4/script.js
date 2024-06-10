/* Task 4: Interactive Button */
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("colorButton");
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    button.addEventListener("click", function () {
        document.body.style.backgroundColor = getRandomColor();
        button.textContent = "Color Changed!";
        setTimeout(() => {
            button.textContent = "Change Background Color";
        }, 2000);
    });
});
function changeBackgroundColor() {
    document.body.style.backgroundColor = "white";
}
document.getElementById("reset").addEventListener("click", changeBackgroundColor);