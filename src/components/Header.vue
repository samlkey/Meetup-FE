<template>
  <div class="header">
  <img class="logo" src="../images/logo.png" v-on:click="def()" width="54" height="54">
  


  <div class="header-right">
    <a v-on:click="feat()">Features</a>
    <a v-on:click="safe()">Safety & ethics</a>
    <a v-on:click="about()">About us</a>
    <button v-on:click="logo()">Get Started</button>
  </div>
</div>
</template>

<script>


export default {
  name: 'Header',
  methods : {
    def: function(){
        this.$router.push({name: 'Body'})
        document.title = "Meet-Up"
    },
    feat: function(){
      this.$router.push({name: 'Features'})
       document.title = "Meet-Up features"
    },
    safe: function(){
      this.$router.push({name: 'Safety'})
       document.title = "Meet-Up safety"
    },
    about: function(){
      this.$router.push({name: 'AboutUs'})
    },
    logo : function() {
      this.$router.push({name: 'GetStarted'})
    }

  }
}
</script>

<style>
.header-right button {
  background-color: #ed1c40;
  border: none;
  color: white;
  padding: 14px 23px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
  border-radius: 18px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-left: 8px;

}


.header {
  overflow: hidden;
  background-color: #ffffff;
  padding: 20px 10px;
  margin-left: 330px;
  margin-right: 330px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.header img {
  float: left;
  margin-top: -4px;
  margin-left: 9px;  
  cursor: pointer;
}

/* Style the header links */
.header a {
  cursor: pointer;
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 15px;
  line-height: 25px;
  border-radius: 8px;
}

/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.header a.logo {
  font-size: 25px;
  font-weight: bold;
}


/* Change the background color on mouse-over */
.header a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active/current link*/
.header a.active {
  background-color: dodgerblue;
  color: white;
}

/* Float the link section to the right */
.header-right {
  float: right;
  font-weight: bold;
}

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
</style>
