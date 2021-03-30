<template>
    <div> 
      <Header/>
        <b-row class="align-text">
            <Home/> 
        </b-row>
        <b-row class="align-text">
          <b-container>
            <Description/>
          </b-container>  
        </b-row>
        <div class="footer">
          <Footer/> 
        </div>
          
   </div>     
</template>

<script>

import Home from './Home'
import Header from './Header.vue'
import Description from './Description.vue'
import Footer from './Footer'

export default {
  name: 'Main',
  components: {
    Home,
    Header,
    Description,
    Footer
  }
}

</script>

<style scoped>
.add-space {
  display :flex;
}

.align-text {
  justify-content:center;
  display :flex;
}

.color-code{
  padding-top: 3rem;
  background:transparent;
  height :50%;
  width:30%;
  float: right;
}

</style>