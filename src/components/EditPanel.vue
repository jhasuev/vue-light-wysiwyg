<template>
  <div class="edit-panel">
    <custom-btn class="edit-panel__btn" type="icon" icon="left" />
    <custom-btn class="edit-panel__btn" type="icon" icon="right" />
    <custom-btn class="edit-panel__btn" type="icon" icon="text-bigger" />
    <custom-btn class="edit-panel__btn" type="icon" icon="text-smaller" />
    <custom-btn class="edit-panel__btn" type="icon" icon="picture" />

    <custom-btn class="edit-panel__btn" type="text" text="Скопировать HTML" />
  </div>
</template>

<script lang="ts" setup>
import CustomBtn from '@/components/CustomBtn.vue';
</script>

<style lang="scss">

.edit-panel {
  display: flex;
  align-items: center;
  gap: 12px;
}

</style>
