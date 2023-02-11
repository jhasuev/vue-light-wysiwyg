import validateImageUrl from '@/utils/validateImageUrl';

export const undo = (): void => {
  try {
    document.execCommand('undo', false, undefined);
  } catch (e) {
    console.error(e);
  }
};

export const redo = (): void => {
  try {
    document.execCommand('redo', false, undefined);
  } catch (e) {
    console.error(e);
  }
};

export const heading = (): void => {
  try {
    document.execCommand('formatBlock', false, 'h2');
  } catch (e) {
    console.error(e);
  }
};

export const paragraph = (): void => {
  try {
    document.execCommand('formatBlock', false, 'p');
  } catch (e) {
    console.error(e);
  }
};

export const pastePicture = async (): Promise<void> => {
  // eslint-disable-next-line no-alert
  const url = prompt('Enter image URL');
  if (!url) return;

  try {
    await validateImageUrl(url);
    document.execCommand('insertImage', false, url);
  } catch (e) {
    console.error(e);
  }
};
