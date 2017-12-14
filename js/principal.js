  var titulo = document.querySelector(".titulo");
  // console.log(titulo);
  // console.log(titulo.textContent);
  titulo.textContent = "Aparecida Nutricionista";


  var pacientes = document.querySelectorAll(".paciente");

  for(var i=0; i<pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura =paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso < 20 || peso >= 1000){
      console.log("peso inválido");
      pesoEhValido = false;
      tdImc.textContent = "Peso inválido";
      paciente.classList.add("paciente-invalido");

    }
    if(altura <= 0 || altura >= 2.50){
        console.log("altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido  && alturaEhValida) {
      var imc = peso / (altura * altura);
      tdImc.textContent = imc.toFixed(2);

  }

}
titulo.addEventListener("click", mostraMensagem);
function mostraMensagem(){
  console.log("Olá, eu fui clicado!");
}

// Função anonima.
// titulo.addEventListener("click",function(){
//   console.log("Olá, eu fui clicado!");
// });

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(){
  alert("cliquei");
});
