<template>
  <div class="editor">
    <edit-panel
      @undo="undo"
      @redo="redo"
      @heading="heading"
      @paragraph="paragraph"
      @picture="onPastePicture"
      @copy="copy"
    />
    <div
      ref="contentRef"
      class="editor__editable-area"
      contenteditable
    />
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  Ref,
  onMounted,
  onBeforeUnmount,
  defineProps,
  defineEmits,
} from 'vue';
import EditPanel from '@/components/EditPanel.vue';
import {
  copyToClipboard,
  undo,
  redo,
  heading,
  paragraph,
  pastePicture,
  addStyles,
} from '@/helpers';

type TProps = {
  modelValue: string,
};

const emit = defineEmits(['update:modelValue']);
const observer: Ref<any> = ref();
const props = defineProps<TProps>();
const contentRef = ref();

const update = (): void => {
  emit('update:modelValue', contentRef.value.innerHTML);
  addStyles(contentRef.value);
};

const setObserver = (): void => {
  observer.value = new MutationObserver(update);
  observer.value.observe(contentRef.value, {
    childList: true,
    attributes: true,
    subtree: true,
    characterData: true,
    characterDataOldValue: true,
  });
};

const copy = (): void => {
  copyToClipboard(props.modelValue);
};

const onPastePicture = (): void => {
  pastePicture();
  update();
};

onMounted(() => {
  contentRef.value.innerHTML = props.modelValue;
  setObserver();
});

onBeforeUnmount(() => {
  observer.value.disconnect();
});

</script>

<style lang="scss" scoped>
.editor {
  padding: 50px 0;

  &__editable-area {
    overflow: hidden;
    margin-top: 20px;
    outline: 1px dashed #333;
    min-height: 100px;

    &:focus {
      // outline: 0;
    }
  }
}
</style>
