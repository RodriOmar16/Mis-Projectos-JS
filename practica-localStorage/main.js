const formulario   = document.querySelector("#formulario");
const pintarTodo   = document.querySelector("#pintarTodo");
const templateTodo = document.querySelector("#templateTodo").content;
let todos          = [];
let idNota         = 0;
let editar         = false;
let posicion       = 0;

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
    clone.querySelector("#borrar").dataset.id = e.id;
    clone.querySelector("#editar").dataset.id = e.id;
    fragment.append(clone);
  });

  pintarTodo.appendChild(fragment);
}

function editarNota(pos){
  posicion = pos;
  const nota = todos[pos];
  formulario.querySelector("input").value = nota.nombre;
  formulario.querySelector("button").textContent = 'Guardar Cambios';
  editar = true;
}
function guardarCambios(notaNva){
  todos[posicion].nombre = notaNva;
  formulario.querySelector("button").textContent = 'Agregar';
  editar = false;
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

  if(!editar){ 
    agregarNota(todo);
  }else{
    guardarCambios(todo)
  }
  pintarNotas();
  formulario.querySelector("input").value = '';
})

document.addEventListener("click", e => {
  if(e.target.dataset.id){
    if(e.target.matches('#borrar')){
      const pos = todos.map(e => e.id).indexOf(parseInt(e.target.dataset.id))
      todos.splice(pos,1);
      pintarNotas();
    }
    if(e.target.matches('#editar')){
      const pos = todos.map(e => e.id).indexOf(parseInt(e.target.dataset.id))
      editarNota(pos);
    }
  }
});