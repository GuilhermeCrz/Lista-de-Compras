const form = document.querySelector("#adicionar form");
const input = document.querySelector("#item");
const lista = document.querySelector("#lista ul");
const alerta = document.querySelector("#alerta");
const botaoFecharAlerta = document.querySelector("#alerta button");

let timeoutAlerta;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const textoItem = input.value.trim();

    if (textoItem === ""){
        return;
    } 

    const novoLi = document.createElement("li");
    novoLi.innerHTML = `
        <label class="checkbox-container">
            <input type="checkbox">
            <span></span>
        </label>

        <button type="button" aria-label="Remover ${textoItem}">
            <img src="assets/trash.svg" alt="">
        </button>
    `;

    novoLi.querySelector("span").textContent = textoItem;

    lista.appendChild(novoLi);
    input.value = "";
    input.focus();
})

lista.addEventListener("click", (event) => {
    const botaoRemover = event.target.closest("button");

    if (botaoRemover) {
        const itemParaRemover = botaoRemover.closest("li")
        itemParaRemover.remove();
        mostrarAlerta();
    }
})

function mostrarAlerta() {
    alerta.classList.remove("hidden");

    clearTimeout(timeoutAlerta);

    timeoutAlerta = setTimeout(() => {
        alerta.classList.add("hidden");
    }, 3000);
}

botaoFecharAlerta.addEventListener("click", (event) => {
    alerta.classList.add("hidden");
    clearTimeout(timeoutAlerta);
});