function addProduct() {
  // 1. Seleziona l'input di testo e la lista UL
  const input = document.querySelector("input");
  const ul = document.querySelector("ul");

  // 2. Controlla che l'input non sia vuoto
  if (input.value.trim() === "") {
    alert("Per favore, inserisci un task!");
    return;
  }

  // 3. Crea il nuovo elemento della lista (li)
  const li = document.createElement("li");

  // 4. Crea il checkbox e imposta il tipo
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // 5. Crea un nodo di testo con il valore dell'input
  const taskText = document.createTextNode(" " + input.value);

  // 6. Assembla gli elementi all'interno del 'li'
  li.appendChild(checkbox);
  li.appendChild(taskText);

  // 7. Aggiungi il 'li' alla lista 'ul'
  ul.appendChild(li);

  // 8. Svuota il campo di input per il prossimo task
  input.value = "";
}
