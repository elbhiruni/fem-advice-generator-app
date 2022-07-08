const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const adviceBtn = document.getElementById("advice-btn");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      mode: "cors",
    });
    const data = await response.json();

    adviceId.textContent = "Advice #" + data.slip.id;
    adviceText.textContent = data.slip.advice;
  } catch (err) {
    console.log(err);
  }
}

adviceBtn.onclick = () => getAdvice();
window.onload = () => getAdvice();
