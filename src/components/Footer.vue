<template>
  <div id="Footer">
    <a
      href="#" class="link"
      >© Manas Gupta</a
    >| Made with 💙 by Manas Gupta
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>

#Footer {
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0.3em;
  width: 100%;
  color: white;
  text-align: center;
  color:  #f7f7f7;
  position: fixed;
}

.link{
     text-decoration: none;
    color: #f7f7f7;
    padding-right: 0.3rem;
}
</style>