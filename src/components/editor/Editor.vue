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

const observer: Ref<any> = ref();
const content: Ref<string> = ref('');
const contentRef = ref();

const update = (): void => {
  console.log(Math.random());
  content.value = contentRef.value.innerHTML;
  addStyles(contentRef.value);
};

const setObserver = (): void => {
  observer.value = new MutationObserver(update);
  observer.value.observe(contentRef.value, { childList: true });
};

const copy = (): void => {
  copyToClipboard(content.value);
};

const onPastePicture = (): void => {
  pastePicture();
  update();
};

onMounted(() => {
  contentRef.value.innerHTML = content.value;
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
