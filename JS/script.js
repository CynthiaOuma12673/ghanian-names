

// finding female names
function calculateFemale(){
    month = document.form.month.selectedIndex;
    month = document.form.month.options[month].value;
    day = document.form.day.selectedIndex;
    day = document.form.day.options[day].value;
    year = document.form.year.value;

    var dob = month + "" + day + "" + year;
    var stagedDate = new Date(dob);
    var thatDay = stagedDate.getDay()+1;
    var date = stagedDate.getDate();
    var year = stagedDate.getFullYear();
    
    let weekday = new Array(6);
    weekday[1] = "Sunday and your Akan name is Akosua";
    weekday[2] = "Monday and your Akan name is Adowa";
    weekday[3] = "Tuesday and your Akan name is Abenna";
    weekday[4] = "Wednesday and your Akan name is Akua";
    weekday[5] = "Thursday and your Akan name is Yaa";
    weekday[6] = "Friday and your Akan name is Afua";
    weekday[7] = "Saturday and your Akan name is Ama";

    if(day > 31)
    alert("Warning! Enter a valid date!");
    else{
        dayBorn = weekday[thatDay];
        dob = dayBorn + "" + "You were born on" + "" + month + "" + date + "" + year + "";
        document.getElementById(display1).innerHTML = "You were born on a" + dob;
    }
}

// male names
function calculateMale(){
    month = document.form.month.selectedIndex;
    month = document.form.month.options[month].value;
    day = document.form.day.selectedIndex;
    day = document.form.day.options[day].value;
    year = document.form.year.value;

    var dob = month + "" + day + "" + year;
    var stagedDate = new Date(dob);
    var thatDay = stagedDate.getDay()+1;
    var date = stagedDate.getDate();
    var year = stagedDate.getFullYear();
    
    let weekday=new Array(6);
    weekday[1]="Sunday and your Akan name is Kwasi";
    weekday[2]="Monday and your Akan name is Kwadwo";
    weekday[3]="Tuesday and your Akan name is Kwabena";
    weekday[4]="Wednesday and your Akan name is Kwaku";
    weekday[5]="Thursday and your Akan name is Yaw";
    weekday[6]="Friday and your Akan name is Kofi";
    weekday[7]="Saturday and your Akan name is Kwame";

    if(day > 31)
    alert("Warning! Enter a valid date!");
    else{
        dayBorn = weekday[thatDay];
        dob = dayBorn + "" + "You were born on" + "" + month + "" + date + "" + year + "";
        document.getElementById(display2).innerHTML = "You were born on a" + dob;
    }
}
