import React from 'react';
import ReactDOM from 'react-dom'
import {render} from 'react-dom'
import App from './App.js'
import Slider from './slider.js'
import './main.css'
import Img1 from './images/1.jpg'
import Img2 from './images/2.jpg'
import Img3 from './images/3.jpg'
import Img4 from './images/4.jpg'
let imgs=[Img1,Img2,Img3,Img4]
ReactDOM.render(
<Slider imgs={imgs}/>,(document.getElementById('app'))
)
