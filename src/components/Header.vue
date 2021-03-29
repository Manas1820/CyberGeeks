<template>
<div>
    <b-navbar toggleable="lg" type="dark" class="header-style" sticky>
      <b-container>
      <b-navbar-brand href="#" class="logo">CyberGeeks</b-navbar-brand>
  
      </b-container>
    </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logo{
  display: flex;
  font-family: Gilbert;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.5rem; 
  color: #FFFFFF;
}

.item-nav{
  color: #FFFFFF;
  font-family: Archia;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* padding-inline: 0.5em; */
}

.header-style{
  background: rgba(3, 4, 5, 0.4);
  backdrop-filter: blur(40px);
}
</style>



// <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
// <b-collapse id="nav-collapse" is-nav class="all-menu">  
//         <!-- Right aligned nav items -->
//         <b-navbar-nav class="ml-auto">
//           <b-nav-item href="#" class="item-nav">Projects</b-nav-item>
//           <b-nav-item href="#" class="item-nav">Skills</b-nav-item>
//           <b-nav-item href="#" class="item-nav">About</b-nav-item>
//           <b-nav-item href="#" class="item-nav">Contact</b-nav-item>
//         </b-navbar-nav>
//       </b-collapse>