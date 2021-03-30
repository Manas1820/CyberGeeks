<template>
<div onmousedown="return false" onselectstart="return false">
    <b-navbar toggleable="lg" type="dark" class="header-style">
      <b-container>
      <b-navbar-brand href="https://github.com/Manas1820/CyberGeeks" class="logo" data-cursor-hover>CyberGeeks</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav class="all-menu">  
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="https://discord.com/channels/688852585071116289/821081715094061136" class="item-nav"  data-cursor-hover>Discord</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      </b-container>
    </b-navbar>
</div>
</template>


//fab fa-discord icon-color

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

.icon-color{
  color: aqua;
  size: 5rem;
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



