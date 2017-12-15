
  var pacientes = document.querySelectorAll(".paciente");

  for(var i=0; i<pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura =paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
      console.log("peso inválido");
      pesoEhValido = false;
      tdImc.textContent = "Peso inválido";
      paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        console.log("altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido  && alturaEhValida) {
      var imc = calculaImc(peso, altura);
      tdImc.textContent = imc;

  }

}

function calculaImc(peso, altura){
    var imc = 0

    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
  if(peso >= 0 && peso <= 300){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >= 0 && altura <= 2.30 ){
    return true;
  }else{
    return false;
  }
}

// Adiciona mensagem no console ao clicar no titulo da pagina
// titulo.addEventListener("click", mostraMensagem);
// function mostraMensagem(){
//   console.log("Olá, eu fui clicado!");
// }

// Função anonima.
// titulo.addEventListener("click",function(){
//   console.log("Olá, eu fui clicado!");
// });
