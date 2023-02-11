export default (url: string): Promise<boolean|Error> => new Promise((resolve, reject) => {
  const image = new Image();
  image.onload = () => {
    resolve(true);
  };
  image.onerror = () => {
    reject(new Error('Invalid image URL'));
  };
  image.src = url;
});
