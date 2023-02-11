<template>
  <div class="editor">
    <edit-panel
      @undo="handleUndo"
      @redo="handleRedo"
      @heading="handleHeading"
      @paragraph="handleParagraph"
      @picture="handlePaste"
      @copy="handleCopy"
    />
    <div
      ref="contentRef"
      class="editor__editable-area"
      contenteditable
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  onMounted,
  defineProps,
  defineEmits,
} from 'vue';
import EditPanel from '@/components/EditPanel.vue';
import addStylesToContentTags from '@/utils/addStylesToContentTags';
import {
  undo, redo, heading, paragraph, pastePicture,
} from '@/utils/contentCommands';
import copyToClipboard from '@/utils/clipboard';

type TProps = {
  modelValue: string,
};

const emit = defineEmits(['update:modelValue']);
const props = defineProps<TProps>();
const contentRef = ref();

const update = (): void => {
  emit('update:modelValue', contentRef.value.innerHTML);
  addStylesToContentTags(contentRef.value);
};

const handleInput = (): void => update();

const handleCopy = (): void => {
  copyToClipboard(props.modelValue);
};

const handleUndo = (): void => undo();
const handleRedo = (): void => redo();
const handleHeading = (): void => heading();
const handleParagraph = (): void => paragraph();

const handlePaste = (): void => {
  pastePicture();
  update();
};

onMounted(() => {
  contentRef.value.innerHTML = props.modelValue;
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
