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