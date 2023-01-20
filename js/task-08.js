const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }
    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails)
    event.currentTarget.reset()
}


//2
// const form = document.querySelector(".login-form");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const {
//         elements: { email, password },
//     } = event.currentTarget;
//     if (email.value === "" || password.value === "") {
//         return alert("Please fill in all the fields!");
//     }

//     const elementsObj = {
//         email: email.value,
//         password: password.value,
//     };

//     event.currentTarget.reset();
//     return console.log(elementsObj);
// });