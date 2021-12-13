

let form = document.getElementById('form');
form.addEventListener('submit', (event)=> {
    event.preventDefault();
    let gender = document.querySelector('input[name="gender"]:checked');
    let dateOfBirth = document.getElementById('date').value;

    dateOfBirth= new Date (dateOfBirth);

    let dayOfWeek = dateOfBirth.getDay();

    let akanNames;
    femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    if (gender==='male') {
        akanNames= maleNames[dayOfWeek];

    }
    else {
        akanNames = femaleNames[dayOfWeek];
    }

    document.getElementById("submit").innerHTML = '<h4>You got it!</h4><p>Your Akan Name is</p><h5>{akanNames} </h5>';
    document.getElementById("form").reset();

});