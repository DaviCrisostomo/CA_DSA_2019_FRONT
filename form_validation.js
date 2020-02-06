//forms validation. the section is not exactly an html form, but works as a form
function validateRegisterForm(regForm) {
   
    var json = getJsonModel();
    json.id = "";
    json.firstName = regForm[0].value;
    json.lastName = regForm[1].value;
    json.gender = regForm[2].selectedOptions[0].value;
    json.passportNumber = regForm[3].value;
    json.priority = regForm[4].selectedOptions[0].value;
    json.arrivalDate = "";
    json.status = "";

    var reason =  checkFields(json);
  
    if (reason!="") {
  
      // console.log(json.name+" "+json.surname+" "+json.passport+" "+json.priority)
        alert("The following fields are incorrect:\n" + reason);
      
    } else{
        pushProfile(json)
        document.getElementById("regForm").reset();        
    }

        return false;
    
}

function updateForm(){
    console.log(document.getElementById("genSearchValues").selectedOptions[0].value);
    var json = getJsonModel();
    json.id =  document.getElementById('idSearch').innerHTML;
    json.firstName = document.getElementById("nameSearch").innerHTML;
    json.lastName = document.getElementById("lnameSearch").innerHTML;
    json.gender =  document.getElementById("genSearchValues").selectedOptions[0].value;
    json.passportNumber = document.getElementById("passSearch").innerHTML;
    json.priority = document.getElementById("prioSearch").innerHTML;
    json.arrivalDate = document.getElementById("arrivalSearch").innerHTML;
    json.status =   document.getElementById("statusSearch").innerHTML;
   
    var reason = checkFields(json);
    if(reason!=""){
        alert("The following fields are incorrect:\n" + reason);
        return;
    }

    updateProfile(json);
    search(json.id);

}

function checkFields(json){

    var reason = "";
    reason += validateName(json.firstName);
    reason += validateName(json.lastName);
    reason += validatePassport(json.passportNumber);

    return reason;

}

 function validateName(name){

    var regRef = new RegExp("[A-Z][a-z]*");

    if (regRef.test(name))
    return "";

    return " "+name;
}

function validatePriority(priority){

    var expTest = priority.toUpperCase();

    switch(expTest) {
        case "HIGH": return true;
        case "MEDIUM": return true;
        case "LOW": return true;
        default: return false;
      } 
    

}

function validatePassport(passport){
    var regRef = new RegExp ("[A-Z]{2}\\d{6}");
    if (regRef.test(passport))
    return "";

    return " "+passport
}

function getJsonModel(){

    var json = {"id":String, "firstName":String,"lastName":String, "gender":String, "passportNumber":String, "arrivalDate": String, "priority":String, "status":String}
    return json;

}