<template>
  <div class="editor">
    <div
      class="editor__item"
      v-for="cmp in modelValue"
      :key="cmp.id"
    >
      <component :is="comps[cmp.name]" v-bind="cmp.props" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import Text from './list/Text.vue';
import Picture from './list/Picture.vue';
import { TComponents } from './types';

const comps = {
  Text,
  Picture,
};

type TProps = {
  modelValue: TComponents,
};

const props = defineProps<TProps>();
const emit = defineEmits(['update:modelValue']);

</script>

<style lang="scss" scoped>

.editor {
  padding: 100px 0;
  overflow: hidden;
  &__item {
    margin: 20px 0;
  }
}

</style>
