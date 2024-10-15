const formulario         = document.querySelector("#formulario");
const cardsEstudiantes   = document.querySelector("#cardsEstudiantes");
const cardsProfesores    = document.querySelector("#cardsProfesores");
const templateEstudiante = document.querySelector("#templateEstudiante").content;
const templateProfesor   = document.querySelector("#templateProfesor").content;
const estudiantes        = [];
const profesores         = [];
let idEstudiantes        = 0;
let idProfesores         = 0;


class Persona{
  constructor(p_nombre, p_edad, p_dni = 0){
    this.nombre = p_nombre;
    this.edad   = p_edad;
    this.dni    = p_dni;
  }
  //Funciones o Methods
  static pintarPersonaUI(personas, tipo){
    if(tipo == "estudiante"){
      cardsEstudiantes.textContent = '';
      const fragment = document.createDocumentFragment();

      personas.forEach(e => {
        fragment.appendChild(e.agregarNuevoEstudiante())
      });

      cardsEstudiantes.appendChild(fragment);
    }
    if(tipo == 'profesor'){
      cardsProfesores.textContent = '';
      const fragment = document.createDocumentFragment();
      personas.forEach(e => {
        fragment.appendChild(e.agregarNuevoProfesor())
      });
      cardsProfesores.appendChild(fragment);
    }
  }

}
class Estudiante extends Persona{
  #estado     = '';
  #estudiante = "Estudiante";
  
  constructor(p_nombre,p_edad,p_dni){
    super(p_nombre,p_edad,p_dni);
    idEstudiantes++;
    this.legajo = idEstudiantes;
  }
  //GETTERS AND SETTERS
  //estado
  set setEstado(p_estado){
    this.#estado = p_estado;
  }
  get getEstado(){
    return this.#estado;
  }
  //estudiante
  set setEstudiante(p_estudiante){
    this.#estado = p_estado;
  }
  get getEstudiante(){
    return this.#estudiante;
  }
  //legajo
  get getLegajo(){
    return this.legajo;
  }
  //Funciones o Methods
  agregarNuevoEstudiante(){
    const clone = templateEstudiante.cloneNode(true);
    clone.querySelector("h5 .text-primary").textContent = this.nombre;
    clone.querySelector(".lead").textContent            = this.edad;

    if(typeof this.#estado != 'string'){
      if(this.#estado){
        clone.querySelector('.badge').className       = "badge bg-success";
        clone.querySelector('.btn-success').disabled  = true;
        clone.querySelector('.btn-danger').disabled   = false;
      }else{
        clone.querySelector('.badge').className       = "badge bg-danger";
        clone.querySelector('.btn-success').disabled  = false;
        clone.querySelector('.btn-danger').disabled   = true;
      }
      clone.querySelector('.badge').textContent         = this.#estado ? "Aprobado" : "Reprobado" ;
    }
    clone.querySelector('.btn-success').dataset.legajo = this.legajo
    clone.querySelector('.btn-danger').dataset.legajo  = this.legajo

    return clone;
  }
  aprobarEstudiante(){
    const clone = templateEstudiante.cloneNode(true);

  }

}
class Profesor extends Persona{
  #profesor = 'Profesor';
  /*constructor(p_nombre, p){
    super()
  }*/
  agregarNuevoProfesor(){
    const clone = templateProfesor.cloneNode(true);
    clone.querySelector('h5').textContent = this.nombre;
    clone.querySelector('h6').textContent = this.#profesor;
    clone.querySelector('p').textContent  = this.edad;
    return clone;
  }
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const datos                       = new FormData(formulario);
  const [nombre, edad, dni, opcion] = [...datos.values()];
  const alerta                      = document.querySelector('.alert-danger')
  if(!nombre || !edad || !dni || !opcion){
    alerta.className = 'alert alert-danger'
    return
  }else alerta.className = 'alert alert-danger d-none'
  if(opcion === 'estudiante'){
    const estudiante = new Estudiante(nombre, edad, dni);
    
    let aux = estudiantes.filter(e => e.legajo == estudiante.legajo || e.dni == estudiante.dni)
    if(aux.length == 0){
      estudiantes.push(estudiante);
      Persona.pintarPersonaUI(estudiantes, opcion);
    }else{
      console.log("estudiante ya está agregado");
    }
  }
  if(opcion === 'profesor'){
    const prof = new Profesor(nombre, edad, dni);
    let aux = profesores.filter(e =>e.dni == prof.dni)
    if(aux.length == 0){
      profesores.push(prof);
      Persona.pintarPersonaUI(profesores, opcion);
    }else{
      console.log("profesor ya está agregado");
    }
  }
  formulario.querySelector('#nombre').value         = '';
  formulario.querySelector('#edad').value           = '';
  formulario.querySelector('#dni').value            = '';
  formulario.querySelector('#opcion').selectedIndex = 0;
});

document.addEventListener("click", e => {
  if(e.target.dataset.legajo){
    if(e.target.matches('.btn-success')){
      estudiantes.map(elem => {
        if(elem.legajo == e.target.dataset.legajo){
          elem.setEstado = true;
        }
        return elem
      })
    }

    if(e.target.matches('.btn-danger')){
      estudiantes.map(elem => {
        if(elem.legajo == e.target.dataset.legajo){
          elem.setEstado = false;
        }
        return elem
      })
    }
    Persona.pintarPersonaUI(estudiantes, "estudiante");
  }
})
