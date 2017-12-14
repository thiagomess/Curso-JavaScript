  var titulo = document.querySelector(".titulo");
  // console.log(titulo);
  // console.log(titulo.textContent);
  titulo.textContent = "Aparecida Nutricionista";


  var paciente = document.querySelector("#primeiro-paciente");
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

  }
  if(altura <= 0 || altura >= 2.50){
      console.log("altura inválida");
      alturaEhValida = false;
      tdImc.textContent = "Altura inválida";
  }

  if (pesoEhValido  && alturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;

  }
