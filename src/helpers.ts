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
  document.execCommand('formatBlock', false, 'h1');
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

  const res: boolean = document.execCommand('insertImage', false, url);
  if (!res) return;

  const img: HTMLImageElement|null = document.querySelector(`img[src="${url}"]:not(.ready)`);
  if (!img) return;

  img.classList.add('ready');
  // img.style.display = 'block';
  // img.style.margin = '1em 0';
};
