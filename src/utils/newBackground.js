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

const rand = (max, min) => Math.floor(Math.random() * (max - min + 1))
export const image = () => {
    switch (rand(9, 0)) {
        case 0:
            return `url(${img1})`
        case 1:
            return `url(${img2})`
        case 2:
            return `url(${img3})`
        case 3:
            return `url(${img4})`
        case 4:
            return `url(${img5})`
        case 5:
            return `url(${img6})`
        case 6:
            return `url(${img7})`
        case 7:
            return `url(${img8})`
        case 8:
            return `url(${img9})`
        case 9:
            return `url(${img10})`
        default:
            return `url(${img1})`
    }
}

export const loadImages = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
    images.forEach(image => {
        new Image().src = image
    })
}