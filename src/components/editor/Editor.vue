<template>
  <Text text="asdasd" :font-size="11" text-align="right" />
  <Text text="asdasd" :font-size="21" text-align="left" />
</template>

<script lang="ts" setup>
import Text from './list/Text.vue';
/*
const components = [
  {
    // attrs: {
    //   src: '',
    // },
    type: 'text',
    styles: {
      textAlign: 'right',
      fontSize: 15,
    },
    props: {
      text: 'Текстовый компонент. Этот текст можно заменить на свой.',
    },
  },
  {
    type: 'text',
    props: {
      text: 'Текстовый компонент. Этот текст можно заменить на свой.',
      textAlign: 'right',
      fontSize: 15,
    },
  },
]; */

// import { defineProps, withDefaults } from 'vue';

// type TProps = {
//   data: any,
// };

// const props = withDefaults(defineProps<TProps>(), {
//   type: 'text',
// });

</script>

<style lang="scss" scoped>

.custom-btn {
  position: relative;
  z-index: 1;
  padding: 10px;
  min-height: 40px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: 4px;

  border: none;
  cursor: pointer;

  font-size: 15px;
  color: #639EFF;

  vertical-align: middle;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: rgba(255, 255, 255, .1);
    opacity: 0;
    transition: 300ms;
  }

  &:hover:after {
    opacity: 1;
  }

  &--text {
    background-color: transparent;
  }

  &--icon {
    background-color: #282828;
  }
}

</style>
