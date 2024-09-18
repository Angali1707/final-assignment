const name = document.getElementById('name');     // varible declaratoins using IDs
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const subject_error = document.getElementById('subject_error');
const message_error = document.getElementById('message_error');



form.addEventListener('submit',(e) => {  /* if someone clicks on submit button */

    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    if (name.value === '' || name.value === null)
        {
            e.preventDefault();   //prevents browser to reload
            name_error.innerHTML = "Name is required!"
        }
    
    if(!email.value.match(email_check))
        {
            e.preventDefault();
            email_error.innerHTML = " Valid Email is required!"
        }
    
    if (subject.value === '' || subject.value === null || subject.value.length<10)
        {
            e.preventDefault();
            subject_error.innerHTML = "Subject must be of more than 10 characters!"
        }

    if (message.value === '' || message.value === null)
        {
            e.preventDefault();
            message_error.innerHTML = "Message is missing!"
        }
})