/* eslint-disable no-param-reassign */
export default (element: HTMLElement): void => {
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
