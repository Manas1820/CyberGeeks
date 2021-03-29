<template>
  <div class="flex-container">
    
    <div class="name-home"> We Are <vue-typer
      :text='["CyberGeeks","ComputerizedSmartAlacs","CyberSpaceNerds"]'
      :repeat='Infinity'
      initial-action='typing'
      :pre-type-delay='90'
      :type-delay='110'
      :pre-erase-delay='2000'
      :erase-delay='250'
      erase-style='clear'
      :erase-on-complete='true'
      caret-animation='smooth'
      ></vue-typer></div>
    <div class="text-desc">
      <p> </p>
    </div>
  </div>    
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name-home{
  font-size: 3rem;
  font-family: Shrimp;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 background: -webkit-linear-gradient(48deg,#69C9C6,#F3F4F4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-desc{
  font-size: 1.2rem;
  font-family: Archia;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #F5F3F5;
}
.flex-container{
  float: center;
  color: aliceblue;
}

.vue-typer {
  font-family:Shrimp; 
}
.vue-typer .custom.char.typed {
  color: #009688;
}
.vue-typer .custom.char.selected {
  color: #E91E63;
}


</style>


