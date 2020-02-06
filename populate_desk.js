/*
Methods to populate each desk cell with person's infos and an image
*/
var indexM = 1;
var indexF = 2;
var indexU = 25;
var deskArray = new Array(8);
//checking the person gender to select an appropriate image
function getNextImage(gender){

    switch(gender){
        case "FEMALE": return getImageF();
        case "MALE": return getImageM();
        default: return getImageU();
    }

}
//choosing images of males
function getImageM(){

    indexM == 23?indexM=1:indexM+=2;
    return 'img/img_'+indexM+'.jpg';
}
//choosing images of females
function getImageF(){
    indexF == 24?indexF=2:indexF+=2;
    return 'img/img_'+indexF+'.jpg';

}
//choosing images of peoples whose gender was marked as undefined 
function getImageU(){
    indexU == 35?indexU=25:indexU++;
    return 'img/img_'+indexU+'.jpg';

}
//inserting data from the called person in the calling desk
function insertData(id, profile) {

    if ('message' in profile){
        alert(profile.message);
        return;
    }

    if(customerCame()){
    deskArray[id] = profile;
    document.getElementById("customer"+id).attributes[3].nodeValue = getNextImage(profile.gender);
    document.getElementById("attId"+id).innerHTML='Attending: '+profile.id;
    document.getElementById("attName"+id).innerHTML='Name: '+profile.firstName;
    document.getElementById("attPass"+id).innerHTML='Passport: '+profile.passportNumber;
    document.getElementById("finish"+id).disabled = false;
    document.getElementById("caller"+id).disabled = true;
}

}
//removind all details from the already attended person from the desk and setting the person's status as 'CHECKED'
function removeData(id){
    
    document.getElementById("attId"+id).innerHTML='Attending: ';
    document.getElementById("attName"+id).innerHTML='Name: ';
    document.getElementById("attPass"+id).innerHTML='Passport: ';
    document.getElementById("finish"+id).disabled = true;
    document.getElementById("caller"+id).disabled = false;
    document.getElementById("customer"+id).attributes[3].nodeValue = 'img/img_0.jpg';
    
    deskArray[id].status="CHECKED";

    updateProfile(deskArray[id]);

    deskArray[id] = null;

}
//chances to non show. a person wont attend the calling if the result is equals or less than 2.
function customerCame(){

var value = Math.floor((Math.random() * 12) + 1);

return(value>2);

}
