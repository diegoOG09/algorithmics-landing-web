import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/client";

async function fetchData() {
  const container = document.getElementById("quotes-container");
  const querySnapshot = await getDocs(collection(db, "reviews"));

  function limitarCaracteres(parrafo, maxCaracteres) {
    if (parrafo.textContent.length > maxCaracteres) {
      const textoRecortado = parrafo.textContent.slice(0, maxCaracteres) + '...';
      parrafo.textContent = textoRecortado;
    }
  }

  querySnapshot.forEach((doc) => {
    const { name, quote } = doc.data();

    // Crear un div para cada documento
    const div = document.createElement("div");
    div.setAttribute('id', 'review');
    div.classList.add('review');
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.gap = "1rem";
    div.style.backgroundColor = "white";
    div.style.padding = "1rem";
    div.style.borderRadius = "25px";
    div.style.boxShadow = 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px';

    // Crear un span para el nombre
    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;

    // Crear un parrafo para la cita
    const quoteParagraph = document.createElement("p");
    quoteParagraph.textContent = quote;
    // Limitamos el numero de caracteres del parrafo
    limitarCaracteres(quoteParagraph, 250)

    const icon = document.createElement("i")
    icon.classList.add("fa-solid", "fa-quote-right");

    // Agregar el span y el parrafo al div
    div.appendChild(quoteParagraph);
    div.appendChild(nameSpan);
    div.appendChild(icon);

    // Agregar el div al contenedor
    container.appendChild(div);
  });
}

export default fetchData;
