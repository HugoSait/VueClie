<template>
  <div class="login-page">
    <transition name="fade">
      <div v-if="!registerActive" class="wallpaper-login"></div>
    </transition>
    <div class="wallpaper-register"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields}">
            <h1> Sing In</h1>
            <form class="form-group">
              <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required>
              <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
              <input type="submit" class="btn btn-primary" @click="doLogin">
              <p> Don't have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign up here</a></p>
              <p><a href="#">Forgot your password?</a></p>
            </form>
          </div>
          <div v-else class="card register" v-bind:class="{ error: emptyFields}">
            <h1>Sign Up</h1>
            <form class="form-group">
              <input type="email" v-model="emailReg" class="form-control" placeholder="Email" required>
              <input type="password" v-model="passwordReg" class="form-control" placeholder="Password" required>
              <input type="password" v-model="confirmReg" class="form-control" placeholder="Confirm Password" required>
              <input type="submit" class="btn btn-primary" @click="doRegister">
              <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign in here</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      registerActive: false,
      emailLogin: "",
      passwordLogin:"",
      emailReg:"",
      passwordReg:"",
      confirmReg: "",
      emptyFields: false
    }
  },
  methods:{
    doLogin(){
      if(this.emailLogin == "" || this.passwordLogin == "")
      {
        this.emptyFields = true
      }
      else{
        alert('You arre now registered')
      }
    },
    doRegister(){
      if(this.emailReg === ""|| this.passwordReg === "" || this.confirmReg === ""){
        this.emptyFields = true
      }
      else{
        alert("You are now registered")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  line-height: 1rem;
}

.card{
  padding: 20px;
  border-radius: 20px;
}

.form-group input{
  margin-bottom: 20px;
}

.login-page{
  align-items: center;
  display: flex;
  height: 100vh;
}
.login-page .wallpaper-login{
  background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
}
.login-page .fade-enter-active, .fade-leave-active
{
  transition: opacity .5;
}
.login-page .fade-enter, .fade-leave-to{
  opacity: 0;
}

.login-page h1{
  margin-bottom: 1.5rem;
}

.login-page .wallpaper-register {
  background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
    no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
}

.error{
  animation-name: errorShake;
  animation-duration: 0.3;
}

@keyframes errorShake{
  0%{
    transform: translateX(-25);
  }
  25%{
    transform: translateX(-25);
  }
  50%{
    transform: translateX(-25);
  }
  75%{
    transform: translateX(-25);
  }
  100%{
    transform: translateX(-25);
  }
}

</style>
