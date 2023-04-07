window.onload = function() {

    const divParent = document.getElementById('parent'); 
    const img = document.createElement('img');   
    const buttonPrev = document.createElement('button');
    const buttonNext = document.createElement('button');
    buttonPrev.textContent = 'Prev';
    buttonNext.textContent = 'Next';

    divParent.appendChild(buttonPrev);
    divParent.appendChild(img);    
    divParent.appendChild(buttonNext);

    divParent.setAttribute('style', 'display: flex; justify-content: space-between; align-items: center; height: 579px');
    
    let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

    let count = 0;
    img.src = `./images/${images[0]}`;
    buttonPrev.setAttribute('style', 'visibility: hidden');  
    
    buttonNext.addEventListener('click', (event) => {      
        count += 1;
        if (count === images.length - 1) {
            buttonNext.setAttribute('style', 'visibility: hidden');
            img.src = `./images/${images[images.length - 1]}`;     
        } else {
            buttonNext.setAttribute('style', 'visibility: visible');
            buttonPrev.setAttribute('style', 'visibility: visible');  
            img.src = `./images/${images[count]}`;
        } 
    });              

    buttonPrev.addEventListener('click', (event) => {      
        count -= 1;
        if (count === 0) {
            buttonPrev.setAttribute('style', 'visibility: hidden');            
            img.src = `./images/${images[0]}`;     
        } else {
            buttonNext.setAttribute('style', 'visibility: visible');
            buttonPrev.setAttribute('style', 'visibility: visible');
            img.src = `./images/${images[count]}`;
        } 
    });       

};
