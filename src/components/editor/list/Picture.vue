<template>
  <div
    :style="(getWrapperStyles as StyleValue)"
  >
    <img
      :src="props.src"
      :style="(getImgStyles as StyleValue)"
      alt="image"
    />
  </div>
</template>

<script lang="ts" setup>

import {
  defineProps,
  withDefaults,
  computed,
  ComputedRef,
  StyleValue,
} from 'vue';
import { parseStyles } from '../utils';
import { TComponentProps } from '../types';

type TProps = {
  src: string
  width: number
  textAlign: string
};

const props = withDefaults(defineProps<TProps>(), {
  src: 'https://picsum.photos/1000/600/?blur&v=1',
});

const getStyles: ComputedRef<TComponentProps> = computed(
  () => parseStyles(props),
);

const getWrapperStyles: ComputedRef<TComponentProps> = computed(() => ({
  ...getStyles.value,
  fontSize: '0',
  width: undefined,
}));

const getImgStyles: ComputedRef<TComponentProps> = computed(() => ({
  ...getStyles,
  textAlign: undefined,
  maxWidth: '100%',
}));

</script>
