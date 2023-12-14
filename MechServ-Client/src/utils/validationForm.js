const validationForm = (service) => {
    let errors = [];

    if(!service.name){
        errors.push('Debe contener un nombre')
    }

    if(!service.description){
        errors.push('Debe contener una descripción')
    }

    if(service.category == 'Seleccionar'){
        errors.push('Debe contener seleccionar una categoria')
    }

    if(service.dates.length === 0){
        errors.push('Debe seleccionar al menos una fecha')
    }

    return errors;
};
export default validationForm;
