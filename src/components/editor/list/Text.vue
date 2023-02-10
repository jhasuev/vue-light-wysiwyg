<template>
  <div
    v-html="props.text"
    :style="(getStyles as StyleValue)"
  />
</template>

<script lang="ts" setup>

import {
  defineProps,
  withDefaults,
  computed,
  ComputedRef,
  StyleValue,
} from 'vue';
import { TProcessedStyles } from '../types';
import { parseStyles } from '../utils';

type TProps = {
  text: string,
  fontSize?: number,
  textAlign?: string,
};

const props = withDefaults(defineProps<TProps>(), {
  fontSize: 15,
  textAlign: 'left',
});

const getStyles: ComputedRef<TProcessedStyles> = computed(() => parseStyles(props));

</script>
