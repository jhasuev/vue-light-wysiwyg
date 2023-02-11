<template>
  <div class="container">
    <editor v-model="content" />
  </div>
</template>

<script lang="ts" setup>
import Editor from '@/components/editor/Editor.vue';
import { ref, Ref } from 'vue';

const content: Ref<string> = ref(`
  <h2 style="margin: 1em 0px;">This is a heading</h2>
  <div>this is a paragraph</div>
  <div><br></div>
  <div>
    <img src="https://picsum.photos/1100/700" style="display: block; margin: 1em 0px; max-width: 100%;">
  </div>
`);

</script>

<style lang="scss">

#app {
  background-color: #1E1E1E;
  min-height: 100vh;
  color: #EAEAEA;
  font-family: Roboto;
  font-size: 15px;
  line-height: 1.2;
}

</style>
