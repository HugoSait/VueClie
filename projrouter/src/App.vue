<template>
  <nav>
    <div class="nav-wrapper">
      <ul class="left hide-on-med-and-down">
        <li><router-link to="/Estudiantes">Estudiante</router-link></li>
        <li><router-link :to="{name: 'TLogin'}">Login</router-link></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: 'App'
}
</script>
