
var forms = document.getElementById('forms');
forms.addEventListener('submit', (event)=> {
    event.preventDefault();
    var gndr = document.querySelector('input[name="gndr"]:checked');
    var birthDate = document.getElementById('date').value;

    birthDate= new Date (birthDate);

    var weekDay = birthDate.getDay();

    var akanNames;
    femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    
    if (gndr==='male') {
        akanNames= maleNames[weekDay];
    }
    else {
        akanNames = femaleNames[weekDay];
    }
    document.getElementById("output").innerHTML = `<h4>You got it!</h4><p>Your Akan Name is</p><h5>${akanNames} </h5>`;
    document.getElementById("forms").reset();

});