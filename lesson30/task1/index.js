const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

export const addImage = imgSrc => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    const pageElem = document.querySelector('.page');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.setAttribute('src', imgSrc);
    pageElem.append(imgElem);

    const onLoadImg = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
      };
      
      const onErrorImg = () => {
        reject(new Error('Image load is failed...'));
      };
    
    imgElem.addEventListener('load', onLoadImg);
    imgElem.addEventListener('error', onErrorImg);
  });
    return p;
};

const result = addImage(imgSrc)
console.log(result);
