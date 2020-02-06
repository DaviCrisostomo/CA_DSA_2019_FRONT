/*
Not all views are here. Some of them
*/
var div = document.getElementById("callDesk")
div.onload = createDesks();

function createDesks() {
    
    for (let i = 1; i <= 8; i++) {
      div.innerHTML += `
                    
                      <div class="card col-3 m-1 mx-auto text-center" id="desk${i-1}" >
                      
                          <img class="card-img-top "  id="customer${i-1}" style="margin-left: auto;margin-right: auto;"  src="img/img_0.jpg"/>
                       
                          <div class="card-body">
                              <h5 class="card-title">Desk${i}</h5>
                         <p id="attId${i-1}" align="left">Attending:</p>
                         <p id="attName${i-1}" align="left">Name:</p>
                         <p id="attPass${i-1}" align="left">Passport:</p>
                        
                          <input type="submit" style="width: 80px;" value="Call" id="caller${i-1}" onclick="calling(${i-1})">
                          <input type="submit" style="width: 80px;" value="Finish" id="finish${i-1}" onclick="finishService(${i-1})" disabled = "true">
                       
                      </div>
                     
                      `                  
        }
     
  }

function  searchResult(profile){
  //
console.log(profile)
  if ('message' in profile){
  alert(profile.message);
  return;
  }

  document.getElementById("nameSearch").contentEditable="true";
  document.getElementById("lnameSearch").contentEditable="true";
  document.getElementById("passSearch").contentEditable="true";


  document.getElementById("idSearch").innerHTML=profile.id;
  document.getElementById("nameSearch").innerHTML=profile.firstName;
  document.getElementById("lnameSearch").innerHTML=profile.lastName;
  document.getElementById("genderSearch").innerHTML=`<select name="genSearchValues" id="genSearchValues" required="true" >${defineGenderSelectInitialIndex(profile.gender)}
  </select> `;
  document.getElementById("passSearch").innerHTML=profile.passportNumber;
  document.getElementById("arrivalSearch").innerHTML=profile.arrivalDate;
  document.getElementById("prioSearch").innerHTML=profile.priority;
  document.getElementById("statusSearch").innerHTML=profile.status;
  
  showPosition(profile.id);
}

function resetSearchFields(){

  document.getElementById('idSearch').innerHTML="----";
  document.getElementById("nameSearch").innerHTML="----";
  document.getElementById("lnameSearch").innerHTML="----";
  document.getElementById("genderSearch").innerHTML="----";
  document.getElementById("passSearch").innerHTML="----";
  document.getElementById("prioSearch").innerHTML="----";
  document.getElementById("arrivalSearch").innerHTML="----";
  document.getElementById("statusSearch").innerHTML="----";
  document.getElementById("posSearch").innerHTML="----";   

  document.getElementById("nameSearch").contentEditable="false";
  document.getElementById("lnameSearch").contentEditable="false";
  document.getElementById("passSearch").contentEditable="false";
  
}

function definePosition(position){

  if(position<=0)
  position='Not in the queue'
  document.getElementById("posSearch").innerHTML=position;

}

function defineGenderSelectInitialIndex(gender){

switch(gender){
  case "FEMALE": return `<option value="FEMALE">FEMALE</option><option value="MALE">MALE</option><option value="UNDEFINED">UNDEFINED</option>`;
 
  case "MALE": return `<option value="MALE">MALE</option><option value="FEMALE">FEMALE</option><option value="UNDEFINED">UNDEFINED</option>`;

  default: return `<option value="UNDEFINED">UNDEFINED</option><option value="MALE">MALE</option><option value="FEMALE">FEMALE</option>`;
  
}

}

