import React, {useState} from 'react'
import './Carousel.css';
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";

export default function Carousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    console.log(currentIndex);

    const nextImg = () => {
        if(currentIndex === props.children.length - 1){
            setCurrentIndex(0);
        }
        else{
            setCurrentIndex(currentIndex + 1);
        }
    }

    const prevImg = () => {
        if(currentIndex === 0){
            setCurrentIndex(props.children.length - 1);
        }
        else{
            setCurrentIndex(currentIndex - 1);
        }
    }

    return (
    <>
        <div className="img">
            {props.children.map((img, index) => {
                return img.id === currentIndex ? <img src={img.url}/> : null;
            })}
        </div>
        <TiArrowLeftThick className="left" onClick={prevImg}/>
        <TiArrowRightThick className="right" onClick={nextImg}/>
    </>
  )
}