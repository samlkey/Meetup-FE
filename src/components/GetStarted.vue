<template>
  <div class="app">
    <div class="left">
    <h1 class="heading">Sign Up</h1>
    <div class="inputcol">
    <input type="text" name="username" v-model="dexport.username" placeholder="Username" />
    <input type="text" name="email" v-model="dexport.email" placeholder="E-mail" />
    <input type="password" name="password" v-model="dexport.password" placeholder="Password" />
    <input type="password" name="password2" v-model="dexport.retrypass" placeholder="Retype Password" />
    </div>
    <input type="checkbox" id="terms" name="terms" value="term">
    <label for="terms">By checking this box, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use.</label><br>
    
    <input type="submit" v-on:click="signup()" name="signup_submit" value="Sign up" />

    </div>
    <div class="right">
      <div class="headings">
    <h1 class="heading">Already Registered?</h1>
    <h1 class="heading2">Login Here</h1>
      </div>
    <div class="inputcol2">
    <input type="text" name="email" placeholder="E-mail" />
    <input type="password" name="password" placeholder="Password" />
    
    
    </div>
    <input type="checkbox" id="stay" name="stay" value="stay">
    <label for="stay">Stay Logged In?</label><br>
    <div class="login">
    <input type="submit" name="signup_submit" value="Login" />
    </div>
    </div>
  </div>
</template>

<script>
import UserDataService from "@/services/UserDataService";
export default {
  name: 'gettingstarted',
  data() {
    return {
      dexport: {
        username: "",
        email: "",
        password: "",
        retrypass: ""
      },
      dimport: {
        username: "",
        password: "",
        remember: false
      }
    }
  },
  methods: {
    signup : function() {
      var match = this.dexport.password == this.dexport.retrypass;
      var term = document.getElementById("terms").checked;

      if(match && term){
        var req = {
        "username": this.dexport.username,
        "email": this.dexport.email,
        "password": this.dexport.password
        }
        console.log("signup");
        console.log(req);

        UserDataService.create(req)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e)
          })



      

      }else{
        //AGREE TO TERMS OR PASSWORD IS NOT SAME
        if(!match) alert("Passwords don't match");
        if(!term) alert("Please accept the terms and conditions");

      }
      


    }
  }
}
</script>

<style>


.heading {
    font-size: 35px;
    padding-bottom: 5px;
}

.heading2 {
  margin-top: -30px;
  margin-bottom: 35px;
}

.headings {
  margin-top: -20px;
}

.login {
  margin-top: 19px;
}

#stay {
  margin-top: 78px;
}

.inputcol {
  margin-left: 30%;
  padding-bottom: 25px;
}

.inputcol2 {
   margin-left: 30%;
  padding-bottom: 1px;
    margin-top: 59px;
}

.left,
.right { 
  box-sizing: border-box;
  padding: 40px;
  width: 600px;
  height: 600px;
  
}


input[type="text"],
input[type="password"] {
  display: block;
  box-sizing: border-box;  
  margin-bottom: 20px;

  padding: 4px;
  width: 220px;
  height: 32px;
  border: none;
  border-bottom: 1px solid #AAA;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 15px;
  transition: 0.2s ease;
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-bottom: 2px solid #ed1c40;
  color: #ed1c40;
  transition: 0.2s ease;
}

input[type="submit"] {
  margin-top: 28px;
  width: 120px;
  height: 32px;
  background: #ed1c40;
  border: none;
  border-radius: 2px;
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.1s ease;
  cursor: pointer;
  border-radius: 18px;
}

input[type="submit"]:hover,
input[type="submit"]:focus {
  opacity: 0.8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transition: 0.1s ease;
}

input[type="submit"]:active {
  opacity: 1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  transition: 0.1s ease;
}
</style>
