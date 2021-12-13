
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayValue, d, DD, MM, YY, CC, yr;

var form = document.getElementById('forms');
form.addEventListener('submit', (event)=> {
    event.preventDefault();
    var gndr = document.querySelector('input[name="gndr"]:checked')
    var birthDate = document.getElementById('date').value;

    birthDate = new Date (birthDate);

    var dayOfWeek = birthDate.getDay();

    var akanName;
    femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    if (gndr==='male') {
        akanName = maleNames[dayOfWeek];

    }
    else {
        akanName = femaleNames[dayOfWeek]
    }

    document.getElementById("results").innerHTML = '<h3>You got it</h3><p>Your Akan Name is </p> <h4>${akanName}</h4>'
    document.getElementById("forms").reset();

})