var firebaseConfig = {
    apiKey: "AIzaSyBX-gmGgvAnIE-2xdnu3XLVyRdhjNOQyMo",
    authDomain: "wrud-8b641.firebaseapp.com",
    databaseURL: "https://wrud-8b641-default-rtdb.firebaseio.com",
    projectId: "wrud-8b641",
    storageBucket: "wrud-8b641.appspot.com",
    messagingSenderId: "147068688128",
    appId: "1:147068688128:web:f7039c6a15eee2f684c5e5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase)

  var database = firebase.database()

function save() {
  var newproject = document.getElementById('newproject').value
  var area = document.getElementById('area').value
  var username = document.getElementById('username').value
  var amount = document.getElementById('amount').value
  var date = document.getElementById('date').value

  database.ref('users/' + username).set({
    newproject : newproject,
    area : area,
    username : username,
    amount : amount,
    date : date
  })

  alert('Saved')
}

       function uploadImage(){
      const ref = firebase.storage().ref()

      const file = document.querySelector('#photo').files[0]
      const name = new Date() + '-'  +file.name
      const metadata = {
          contentType:file.type
      }
      const task = ref.child(name).put(file,metadata)
      task
      .then(snapshot=> snapshot.ref.getDownloadURL())
       .then(url => {
           console.log(url)
           alert("image Uploaded successfully")
           const image = document.querySelector('#image')
           image.src=url
      
        })
  
  
  }

firebase.auth().onAuthStateChanged((user)=>{
	if(!user){
		location.replace("index.html")
	}else{
		document.getElementById("user").innerHTML = "Hello,"+user.email
	}
})


function logout(){
	firebase.auth().signOut()
}

