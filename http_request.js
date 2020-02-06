var div = document.getElementById("cardDiv")
var lastId = 1;//this is not the best solution. if you change something and update this file, the value goes back to one

const url = 'http://localhost:8080/';
//div.onload = getRetreats();

  function showProfile(id) {
    fetch(url+'search/' + id)
      .then((res) => {
        return res.json();
      }).then((profile) => {
      
       searchResult(profile);
      
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function showPosition(id){
    fetch(url+'position/' + id) .then((res) => {
      return res.json();
    }).then((position) => {
    
     definePosition(position);
     
    })
    .catch((error) => {
      console.log(error)
    })
  }

  function callNext (id){
    fetch(url+'call')
      .then((res) => {
        return res.json();
      }).then((calledProfile) => {
        
        insertData(id, calledProfile);
    
      })
      .catch((error) => {
        console.log(error)
      })
  }

 async function pushProfile(profile) {
    var data = JSON.stringify(profile);
 
  await fetch(url+'create', {
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "body":data
  })
  .then(response => {
   
    if(response.status==200){
    alert("Profile created."+lastId++)
    //search(lastId++)
    }
  })
  .catch(err => {
    console.log(err);
  });
  }

  function updateProfile(profile) {
    var data = JSON.stringify(profile);
  
    fetch(url+'update/' + profile.id, {
      "method": "PUT",
      "headers": {
        "content-type": "application/json"
      },
      "body": data
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function deleteProfile(id){
 
    fetch(url+"delete/"+id, {
    "method": "DELETE",
    "headers": {
      "content-type": "application/json"
    }
  })
  .then(response => {
    
    console.log(response)
    
  })
  .catch(err => {
    console.log(err);
  });
  }

  function deleteGroupOfProfiles(amount){
    
    fetch(url+"delete/amount/"+amount, {
    "method": "DELETE",
    "headers": {
      "content-type": "text/plain;charset=UTF-8"
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
  }
