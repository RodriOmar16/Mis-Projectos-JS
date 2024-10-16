const formulario   = document.querySelector("#formulario");
const pintarTodo   = document.querySelector("#pintarTodo");
const templateTodo = document.querySelector("#templateTodo").content;
let todos          = [];
let idNota         = 0;

const agregarNota = (nombre) => {
  idNota++;
  todos.push({
    id:     idNota,
    nombre: nombre
  });
}

function pintarNotas(){
  pintarTodo.textContent = ''; //se limpia todo todo irá
  const fragment = document.createDocumentFragment();

  todos.forEach(e => {
    const clone = templateTodo.cloneNode(true);
    clone.querySelector("p").textContent     = e.nombre;
    clone.querySelector("button").dataset.id = e.id;
    fragment.append(clone);
  });

  pintarTodo.appendChild(fragment);
}

formulario.addEventListener("submit", async e => {
  e.preventDefault();
  const data   = new FormData(formulario);
  const [todo] = [...data.values()];

  const alerta = document.querySelector(".alert-danger");
  if(!todo.trim()){
    alerta.className = 'alert alert-danger';
    return 
  }else alerta.className = 'alert alert-danger d-none';

  agregarNota(todo);
  pintarNotas();

  formulario.querySelector("input").value = '';
})

document.addEventListener("click", e => {
  if(e.target.dataset.id){
    const pos = todos.map(e => e.id).indexOf(parseInt(e.target.dataset.id))
    todos.splice(pos,1);
    pintarNotas();
  }
});