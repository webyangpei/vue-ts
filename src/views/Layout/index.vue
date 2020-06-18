<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue';

  @Component({
      HelloWorld
  })
  export default class Layout extends Vue {
  }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>