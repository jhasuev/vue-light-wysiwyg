<template>
  <div class="container">
    <editor
      v-model="components"
    />
  </div>
</template>

<script lang="ts" setup>
import Editor from '@/components/editor/Editor.vue';
import { reactive } from 'vue';
import { TComponents } from '@/components/editor/types';

const componentsData: TComponents = [
  {
    id: 1,
    name: 'Text',
    props: {
      text: 'Таким образом консультация с широким активом представляет собой интересный эксперимент...'.repeat(7),
      textAlign: 'left',
      fontSize: 15,
    },
  },
  {
    id: 2,
    name: 'Text',
    props: {
      text: 'Смотрите какие обезьянки',
      textAlign: 'left',
      fontSize: 31,
    },
  },
  {
    id: 3,
    name: 'Picture',
    props: {
      src: 'https://picsum.photos/1000/600/?blur',
      width: 100,
    },
  },
  {
    id: 4,
    name: 'Text',
    props: {
      text: 'Таким образом консультация с широким активом представляет собой интересный эксперимент...'.repeat(10),
      textAlign: 'left',
      fontSize: 15,
    },
  },
  {
    id: 5,
    name: 'Text',
    props: {
      text: 'Таким образом консультация с широким активом представляет собой интересный эксперимент...'.repeat(4),
      textAlign: 'left',
      fontSize: 15,
    },
  },
];

const components = reactive(componentsData as TComponents);

</script>

<style lang="scss">

#app {
  background-color: #1E1E1E;
  color: #EAEAEA;
  font-family: Roboto;
  font-size: 15px;
  line-height: #{ 23 / 15 };
}

</style>
