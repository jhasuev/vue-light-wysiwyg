<template>
  <div
    v-html="props.text"
    :style="(getStyles as StyleValue)"
  />
</template>

<script lang="ts" setup>

import {
  defineProps,
  computed,
  ComputedRef,
  StyleValue,
} from 'vue';
import { parseStyles } from '../utils';
import { TComponentProps } from '../types';

type TProps = {
  text: string,
  fontSize?: number,
  textAlign?: string,
};

const props = defineProps<TProps>();

const getStyles: ComputedRef<TComponentProps> = computed(
  () => parseStyles(props),
);

</script>
