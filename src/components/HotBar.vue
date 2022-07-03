<template>
  <div class="hotbar">
    <div class="key"><img src="../assets/key.svg" width="39px" /></div>
    <div class="key"><img src="../assets/key.svg" width="39px" /></div>
    <div class="key"><img src="../assets/key.svg" width="39px" /></div>
    <div class="key"><img src="../assets/key.svg" width="39px" /></div>
    <div class="key"><img src="../assets/key.svg" width="39px" /></div>
    <div class="key"><img src="../assets/key.svg" width="39px" /></div>
    <div class="key"><img src="../assets/key.svg" width="39px" /></div>
    <div class="key"><img src="../assets/key.svg" width="39px" /></div>
  </div>
</template>



<style lang="scss">

.hotbar {
  height: 9rem;
  width: 37rem;
  padding: 0 2rem 0 2.1rem;
  border-radius: 4rem;
  background-repeat: no-repeat;
  background-image: url(../assets/hotbar.svg);
  background-size: contain;
  justify-content: flex-start;
}

.key {
  width: 3.8rem;
  height: 9rem;
  transform:rotate(45deg)
}

</style>