var autoCreateWasCalled = false;

//functions for some buttons

//searching a person by its id number
function search(id){

if(typeof id == "string")
 id = id.trim();

if(!isNaN(id)&&id!="")
    showProfile(id);
     
  else
  resetSearchFields();
  
  document.getElementById('searchId').value="";

}
//deleting a person from the queue located in the API
function deleteThis(id){

  if(id=="----")
  alert("Select a profile before delete.");
  else
  deleteProfile(id);
  //;
  
}

function deleteQt(value){
  //will accept values like 12e98, but it's ok
value = value.trim();
  if(!isNaN(value)&&value!=""){
  deleteGroupOfProfiles(value);
  }
  document.getElementById('delQt').value="";
}
//updating the person with the new details
function updateThis(){
var id = document.getElementById('idSearch').innerHTML;

if(id=='----')
alert("Select a profile before update.");
else
updateForm();

}
//getting rid of the person after service been concluded
function finishService(id){
  let i = parseInt(id, 10)
 removeData(i);
}
function calling(id){

  let i = parseInt(id, 10)

  callNext(i);
  
}
//pushing all elements from create_queue.js into the immigrant queue. the for loop runs only one time
async function createQueue(){
  if(autoCreateWasCalled==true)
  return;
 
for(let i = 0;i<queue.length;i++){
  
  await pushProfile(queue[i]);
}

autoCreateWasCalled=true;
}
