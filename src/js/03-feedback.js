import throttle from 'lodash.throttle';


const CURRENT_ITEM = 'feedback-form-state';

const formData = {};


const form = document.querySelector('.feedback-form');


const writeDataLocaleStorage = (event) => {
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
    
    localStorage.setItem(CURRENT_ITEM, JSON.stringify(formData));
    
    
}



const insertValue = () => {
     const values = JSON.parse(localStorage.getItem(CURRENT_ITEM));
      
    
    if (values) {
        if (values.email === undefined) {
            form.elements.email.value = "";
        }

        if (values.message === undefined) {
            form.elements.message.value = "";
        }
    
        form.elements.email.value = values.email;
        form.elements.message.value = values.message;
    }
    
}
 
const submitForm = (event) => {
    event.preventDefault();
    if (form.elements.email.value === '' || form.elements.email.value === '') {
        alert("Заповність всі поля");
        return;
    } else {
        console.log(form.elements.email.name)
        console.log(form.elements.email.value);
        console.log(form.elements.message.name)
        console.log(form.elements.message.value);

        event.currentTarget.reset();
        localStorage.clear();
    
    }
    
}

insertValue();
form.addEventListener('input', throttle(writeDataLocaleStorage, 500));

form.addEventListener('submit', submitForm);