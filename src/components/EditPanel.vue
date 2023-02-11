<template>
  <div class="edit-panel">
    <custom-btn
      v-for="btn, i in buttons"
      :key="i"
      v-bind="btn"
      class="edit-panel__btn"
      @click="emit(btn.name)"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';
import CustomBtn, { TBtnProps } from '@/components/CustomBtn.vue';

const emit = defineEmits(['redo', 'undo', 'heading', 'paragraph', 'picture', 'copy']);

const buttons: TBtnProps[] = [
  {
    type: 'icon',
    name: 'undo',
    icon: 'undo',
  },
  {
    type: 'icon',
    name: 'redo',
    icon: 'redo',
  },
  {
    type: 'icon',
    name: 'heading',
    icon: 'heading',
  },
  {
    type: 'icon',
    name: 'paragraph',
    icon: 'paragraph',
  },
  {
    type: 'icon',
    name: 'picture',
    icon: 'picture',
  },
  {
    type: 'text',
    name: 'copy',
    text: 'Скопировать HTML',
  },
];

</script>

<style lang="scss">

.edit-panel {
  display: flex;
  align-items: center;
  gap: 12px;
}

</style>
