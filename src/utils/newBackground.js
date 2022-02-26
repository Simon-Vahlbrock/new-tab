import img1 from "./images/app-background/1.jpg";
import img2 from "./images/app-background/2.png";
import img3 from "./images/app-background/3.jpg";
import img4 from "./images/app-background/4.jpg";
import img5 from "./images/app-background/5.jpg";
import img6 from "./images/app-background/6.jpg";
import img7 from "./images/app-background/7.jpg";
import img8 from "./images/app-background/8.png";
import img9 from "./images/app-background/9.jpg";
import img10 from "./images/app-background/10.jpg";
import img11 from "./images/app-background/11.jpg";
import img12 from "./images/app-background/12.jpg";
import img13 from "./images/app-background/13.jpg";
import img14 from "./images/app-background/14.jpg";
import img15 from "./images/app-background/15.jpg";

const rand = (max, min) => Math.floor(Math.random() * (max - min + 1));

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

export const image = () => `url(${images[rand(14, 0)]})`

export const loadImages = () =>
    images.forEach(image => {
        new Image().src = image
    })