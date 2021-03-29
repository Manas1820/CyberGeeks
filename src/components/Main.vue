<template>
    <div> 
      <Header/>
      <b-container>
        <div class="add-space">
            <Home/> 
        </div>
        <div class="add-space">
            <Projects/>
        </div>     
      </b-container>
   </div>     
</template>

<script>

import Home from './Home'
import Header from './Header.vue'
import Projects from './Hackers.vue'

export default {
  name: 'Main',
  components: {
    Home,
    Header,
    Projects
  }
}

</script>

<style scoped>
.add-space {
  display :flexbox;
}
</style>