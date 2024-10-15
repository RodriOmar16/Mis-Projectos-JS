/*array animales = [“el lobo”, “el toro”, … ]; // 100 animales

map LlamarA = {}

print(“Sal de ahí chivita chivita, sal de ahí de ese lugar”)
actualmente = “la chiva”
Realizar N veces {
..prox = elemento_random(animales)
..LlamarA[actualmente] = prox
..print(“Hay que llamar a “ + prox + “ para que saque a “ + actualmente)
..actualmente = prox
..array remover = [ ]
..inspeccionar = “la chiva”
..repetir hasta que inspeccionar no esté en LlamarA {
....remover.insertar_primero(LlamarA[inspeccionar] + “ no quiere sacar a ” + inspeccionar)
....inspeccionar = LlamarA[inspeccionar]
..}
for i in remover {
....print(i)
..}
..print(“La chiva no quiere salir de ahí. Sal de ahí chivita chivita, sal de ahí de ese lugar”)
}


Ejemplo de output para N = 3

Sal de ahí chivita chivita, sal de ahí de ese lugar
Hay que llamar a el lobo para que saque a la chiva
el lobo no quiere sacar a la chiva
La chiva no quiere salir de ahí. Sal de ahí chivita chivita, sal de ahí de ese lugar
Hay que llamar a el perro para que saque a el lobo
el perro no quiere sacar a el lobo
el lobo no quiere sacar a la chiva
La chiva no quiere salir de ahí. Sal de ahí chivita chivita, sal de ahí de ese lugar
Hay que llamar a el leon para que saque a el perro
el leon no quiere sacar a el perro
el perro no quiere sacar a el lobo
el lobo no quiere sacar a la chiva
La chiva no quiere salir de ahí. Sal de ahí chivita chivita, sal de ahí de ese lugar*/

/*const animalesConGenero = [
  { nombre: "lobo", genero: "el" }, { nombre: "toro", genero: "el" }, { nombre: "águila", genero: "el" },
  { nombre: "tigre", genero: "el" }, { nombre: "león", genero: "el" }, { nombre: "zorro", genero: "el" },
  { nombre: "elefante", genero: "el" }, { nombre: "jaguar", genero: "el" }, { nombre: "puma", genero: "el" },
  { nombre: "halcón", genero: "el" }, { nombre: "buitre", genero: "el" }, { nombre: "búho", genero: "el" },
  { nombre: "coyote", genero: "el" }, { nombre: "perro", genero: "el" }, { nombre: "gato", genero: "el" },
  { nombre: "rinoceronte", genero: "el" }, { nombre: "hipopótamo", genero: "el" }, { nombre: "jirafa", genero: "la" },
  { nombre: "canguro", genero: "el" }, { nombre: "koala", genero: "el" }, { nombre: "panda", genero: "el" },
  { nombre: "mono", genero: "el" }, { nombre: "chimpancé", genero: "el" }, { nombre: "gorila", genero: "el" },
  { nombre: "rinoceronte", genero: "el" }, { nombre: "delfín", genero: "el" }, { nombre: "ballena", genero: "la" },
  { nombre: "tiburón", genero: "el" }, { nombre: "pez espada", genero: "el" }, { nombre: "mantarraya", genero: "la" },
  { nombre: "pulpo", genero: "el" }, { nombre: "calamar", genero: "el" }, { nombre: "medusa", genero: "la" },
  { nombre: "estrella de mar", genero: "la" }, { nombre: "caballito de mar", genero: "el" }, { nombre: "pingüino", genero: "el" },
  { nombre: "oso polar", genero: "el" }, { nombre: "foca", genero: "la" }, { nombre: "morsa", genero: "la" },
  { nombre: "nutria", genero: "la" }, { nombre: "castor", genero: "el" }, { nombre: "liebre", genero: "la" },
  { nombre: "conejo", genero: "el" }, { nombre: "ardilla", genero: "la" }, { nombre: "mapache", genero: "el" },
  { nombre: "zarigüeya", genero: "la" }, { nombre: "hurón", genero: "el" }, { nombre: "chinchilla", genero: "la" },
  { nombre: "hamster", genero: "el" }, { nombre: "ratón", genero: "el" }, { nombre: "murciélago", genero: "el" },
  { nombre: "serpiente", genero: "la" }, { nombre: "cocodrilo", genero: "el" }, { nombre: "caimán", genero: "el" },
  { nombre: "iguana", genero: "la" }, { nombre: "camaleón", genero: "el" }, { nombre: "lagarto", genero: "el" },
  { nombre: "gecko", genero: "el" }, { nombre: "tortuga", genero: "la" }, { nombre: "salamandra", genero: "la" },
  { nombre: "rana", genero: "la" }, { nombre: "sapo", genero: "el" }, { nombre: "pez", genero: "el" },
  { nombre: "trucha", genero: "la" }, { nombre: "salmón", genero: "el" }, { nombre: "bagre", genero: "el" },
  { nombre: "cangrejo", genero: "el" }, { nombre: "langosta", genero: "la" }, { nombre: "almeja", genero: "la" },
  { nombre: "ostra", genero: "la" }, { nombre: "mejillón", genero: "el" }, { nombre: "caracol", genero: "el" },
  { nombre: "babosa", genero: "la" }, { nombre: "mariposa", genero: "la" }, { nombre: "polilla", genero: "la" },
  { nombre: "abeja", genero: "la" }, { nombre: "avispa", genero: "la" }, { nombre: "hormiga", genero: "la" },
  { nombre: "saltamontes", genero: "el" }, { nombre: "grillo", genero: "el" }, { nombre: "escorpión", genero: "el" },
  { nombre: "araña", genero: "la" }, { nombre: "ciervo", genero: "el" }, { nombre: "alce", genero: "el" },
  { nombre: "reno", genero: "el" }, { nombre: "bisonte", genero: "el" }, { nombre: "búfalo", genero: "el" },
  { nombre: "caballo", genero: "el" }, { nombre: "burro", genero: "el" }, { nombre: "mula", genero: "la" },
  { nombre: "oveja", genero: "la" }, { nombre: "cabrito", genero: "el" }, { nombre: "gallina", genero: "la" },
  { nombre: "gallo", genero: "el" }, { nombre: "pato", genero: "el" }, { nombre: "ganso", genero: "el" },
  { nombre: "cisne", genero: "el" }, { nombre: "pavo", genero: "el" }, { nombre: "pavón", genero: "el" },
  { nombre: "flamenco", genero: "el" }, { nombre: "pelícano", genero: "el" }
];

let animales = animalesConGenero.map(e => e.genero == "el" ? "el "+e.nombre : "la "+e.nombre);;
let nAnimlaes = 100;

let llamarA = ["la chiva"];

console.log("Sal de ahí chivita chivita, sal de ahí de ese lugar");
let actualmente = "la chiva"
let remover = [];
let inspeccionar = ""
for(let i= 0; i < nAnimlaes; i++){
  //let posProx = Math.floor(Math.random() * nAnimlaes); //posición random
  let prox = animales[i];
  llamarA.push(prox);
  console.log("Hay que llamar a "+ prox +" para que saque a " + actualmente);
  actualmente = prox;
  remover = [];
  inspeccionar = "la chiva"
  //console.log("llamarA: ", llamarA.actualmente);
  let nllamarA = llamarA.length-1;
  for(let j= nllamarA;j > 0;j--){
    if(j == 0){
      remover.push(llamarA[j]+" no quiere sacar a "+inspeccionar);
    }
    remover.push(llamarA[j]+" no quiere sacar a "+llamarA[j-1]);
    //inspeccionar = llamarA[i];
  }
  for(let i=0;i < remover.length;i++){
    console.log(remover[i]);
  }
  console.log("La chiva no quiere salir de ahí. Sal de ahí chivita chivita, sal de ahí de ese lugar");
}*/
const cards        = document.getElementById("card-dinamicas");
const templateCard = document.getElementById("template-card").content;
const loading      = document.getElementById("loading");

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  //console.log("Obteniendo datos..");
  try {
    loadingData(true);
    const res  = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();
    
    pintarCard(data);

  } catch (error) {
    console.log("Ocurrió un error: ",error);
    loadingData(false);
  }finally{
    loadingData(false);
  }
};

const loadingData = (estado) => {
  if(estado){
    loading.classList.remove('d-none');
  }else loading.classList.add('d-none');

}

const pintarCard = (data) => {
  const fragment = document.createDocumentFragment();
  console.log("data: ", data);
  data.results.forEach(e => {
    const clone = templateCard.cloneNode(true);
    clone.querySelector("h5").textContent = e.name;
    clone.querySelector("img").src        = e.image;
    clone.querySelector("p").textContent  = e.species;
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
}