/* eslint-disable no-param-reassign */
const validateImageUrl = (url: string): Promise<boolean|Error> => new Promise((resolve) => {
  const image = new Image();
  image.onload = () => {
    resolve(true);
  };
  image.onerror = () => {
    resolve(false);
  };
  image.src = url;
});

export function copyToClipboard(text: string) {
  const textarea: HTMLTextAreaElement = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

export const undo = (): void => {
  document.execCommand('undo', false, undefined);
};

export const redo = (): void => {
  document.execCommand('redo', false, undefined);
};

export const heading = (): void => {
  document.execCommand('formatBlock', false, 'h2');
};

export const paragraph = (): void => {
  document.execCommand('formatBlock', false, 'p');
};

export const pastePicture = async (): Promise<void> => {
  // eslint-disable-next-line no-alert
  const url = prompt('Enter image URL');
  if (!url) return;

  const isValidImage = await validateImageUrl(url);
  if (!isValidImage) return;

  document.execCommand('insertImage', false, url);
};

export const addStyles = (element: HTMLElement): void => {
  const images = element.querySelectorAll('img');
  const headings = element.querySelectorAll('h2');
  const paragraphs = element.querySelectorAll('p');

  images.forEach((img) => {
    img.style.display = 'block';
    img.style.margin = '1em 0';
    img.style.maxWidth = '100%';
  });

  headings.forEach((headingItem) => {
    headingItem.style.margin = '1em 0';
  });

  paragraphs.forEach((paragraphItem) => {
    paragraphItem.style.margin = '0.5em 0';
  });
};
