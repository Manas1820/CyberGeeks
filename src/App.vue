<template>   
  <div id="app" onmousedown="return false" onselectstart="return false">
      <particles-bg color='#7EE787' num=35 type="cobweb" :bg="true" :canvas="canvasObject"/>
      <cursor-fx ref="cursor" color="#77B9F1" color-hover="#bbbbbb" inside-size= 8px outside-size= 100px />    
      <Main/>
  </div>    
</template>


// ["#000000"]

<script>

import Main from './components/Main.vue'


export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  background-color:black;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
/* Importing Gilbert-Color */
@font-face {
  font-family: "GilbertColor";
  src: local("Gilbert-Color"),
   url("./fonts/Gilbert-Color Bold Preview5.otf") format("truetype");
}

/* Importing Gilbert-Bold */
@font-face {
  font-family: "Gilbert";
  src: local("Gilbert-Bold"),
   url("./fonts/Gilbert-Bold Preview5.otf") format("truetype");
}
/* Importing SHRIMP */
@font-face {
  font-family: "Shrimp";
  src: local("SHRIMP"),
   url("./fonts/SHRIMP.ttf") format("truetype");
}
/* Importing Aachia */
@font-face {
  font-family: "Archia";
  src: local("Archia-Regular"),
   url("./fonts/Archia-Regular.otf") format("truetype");
}

*bg{
position: "absolute";
z-index: -1;
top: 0;
left: 0;
}

*color{
  background-color: black;
  color: white;
}

</style>
