const validation = (data) => {
  let errors = {};

  //* EMAIL VALIDATIONS
  if (data.userEmail != "") {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.userEmail)) {
      errors.e1 = "Ingresa un email valido.";
    }
    if (data.userEmail.length > 35) {
      errors.e2 = "El email es demasiado largo.";
    }
  }

  //* PASSWORD VALIDATIONS
  if (data.userPassword != "") {
    if (!/\d+/.test(data.userPassword)) {
      errors.p1 = "Ingresa al menos un número";
    }
    if (!/[A-Z]+/.test(data.userPassword)) {
      errors.p2 = "Ingresa al menos una mayuscula";
    }
    if (!/[a-z]+/.test(data.userPassword)) {
      errors.p3 = "Ingresa al menos una minuscula";
    }
    if (!/[!@#$%^&*()_+\-=\[\]{ }; ':"\\|,.<>\/?]+/.test(data.userPassword)) {
      errors.p4 = "Ingresa al menos un caracter especial";
    }
    if (data.userPassword.length < 8) {
      errors.p5 = "La contraseña es demasiado corta";
    }
    if (data.userPassword.length > 24) {
      errors.p6 = "La contraseña es demasiado larga";
    }
  }

  return errors;
};
export default validation;
