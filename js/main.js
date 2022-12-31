/*------- API -------*/
function get_image() {
  let url = `https://api.unsplash.com/photos/random/?client_id=tCL_3Ic2BmtO73IHj1vFgxs8ILuWyoCLQ30aw0ntVII`;
  
  let imageElement = document.querySelector('.image');
  
  fetch(url)
  .then(function(response){
      return response.json();
  })
  
  .then(function(jsonData){
      imageElement.src = jsonData.urls.regular;
    })
  
    }  

      /*------- OUTPUT SESSION -------*/
      const _SaveData = () => {
      // receive image source
      let img = document.querySelector('.image'),
      //receive email source
      email = document.getElementById('email'),
      email_err = document.getElementById('email').value;
    
      //email if statement
      if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_err)) {
      document.getElementById('error-text').innerHTML = 'Invalid Email Address!';
      //console.log(`Invalid Email Address!`)
      return
      }

      //Add email to session storage and output result
      const emailValue = email.value;
      sessionStorage.setItem('email', emailValue);
      document.getElementById('email2').innerHTML  = emailValue;
    
    
      //Add image to session storage and output result
      let newData = {
      img: img.src
      },
      data = (sessionStorage.getItem("data")) ? JSON.parse(sessionStorage.getItem("data")) : []

      // Update data
      data = [...data, newData]

      // Save data
      sessionStorage.setItem("data", JSON.stringify(data))

      //for loop to iterate through array
      let i = 0;
      for(i = 0; i < data.length; i++) {
      const s = document.createElement("img");
      s.src=`${data[i].img}`;
      document.body.appendChild(s);

      console.log(data[i]);
      //if([i] == [i]){
        //console.log("Image already stored!");
      //}
  }

     //Clear 
    sessionStorage.clear("data");

}


