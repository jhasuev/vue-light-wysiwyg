<template>
  <button
    type="button"
    class="custom-btn"
    :class="{
      'custom-btn--icon': props.type === 'icon',
      'custom-btn--text': props.type === 'text',
    }"
  >
    <img
      v-if="props.icon"
      :src="require(`@/assets/icons/${props.icon}.svg`)"
      alt="svg icon"
    />
    <span
      v-if="props.text"
    >{{ props.text }}</span>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';

type TProps = {
  type: 'icon'|'text',
  icon?: 'left'|'right'|'text-bigger'|'text-smaller'|'picture',
  text?: string,
};

const props = withDefaults(defineProps<TProps>(), {
  type: 'text',
});

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
