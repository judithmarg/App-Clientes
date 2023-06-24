function validateForm() {
    var ciCliente = document.getElementById('ciCliente').value;
    var nombreCliente = document.getElementById('nombreCliente').value;
    var nroHijos = document.getElementById('nroHijos').value;
    var estadoCivil = document.getElementById('estadoCivil').value;
    var correoCliente = document.getElementById('correoCliente').value;
  
  
    if (ciCliente === '') {
      alert('Por favor, ingrese el CI del cliente.');
      return false;
    }
  
    if (nombreCliente === '') {
      alert('Por favor, ingrese el nombre del cliente.');
      return false;
    }

    if (nroHijos === '') {
      alert('Por favor, ingrese el número de hijos.');
      return false;
    }

    if (estadoCivil === '') {
      alert('Por favor, ingrese el estado civil .');
      return false;
    }

    if (correoCliente === '') {
      alert('Por favor, ingrese el correo electrónico.');
      return false;
    }
  

    return true;
  }

const steps = Array.from(document.querySelectorAll('form .step'));
const nextBtn = document.querySelectorAll('form .next-btn');
const prevBtn = document.querySelectorAll('form .previous-btn');
const form = document.querySelector('form');

nextBtn.forEach(button=>{
  button.addEventListener('click', ()=>{
    changeStep('next');
  })
})

prevBtn.forEach(button=>{
  button.addEventListener('click', ()=>{
    changeStep('prev');
  })
})

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const inputs =[];
  form.querySelectorAll('input').forEach(input=>{
    const {name,value} = input;
    inputs.push({name,value})
  })
  console.log(inputs)
  form.reset();
  let index = 0;
  const active = document.querySelector('form .step.active');
  index = steps.indexOf(active);
  steps[index].classList.remove('active');
  steps[0].classList.add('active');
})

function changeStep(btn){
  let index = 0;
  const active = document.querySelector('form .step.active');
  index = steps.indexOf(active);
  steps[index].classList.remove('active');
  if(btn === 'next'){
    index ++;
  }else if(btn === 'prev'){
    index --;
  }
  steps[index].classList.add('active')
  console.log(index)
}