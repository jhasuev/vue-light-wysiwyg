export default (text: string) => {
  const textarea: HTMLTextAreaElement = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
  } catch (e) {
    console.error(e);
  }
  document.body.removeChild(textarea);
};
