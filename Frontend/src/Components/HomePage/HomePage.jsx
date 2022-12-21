import React from 'react'
import Slider from './Slider'
import { jiomart } from './SliderImages'
import "../HomePage/Slider.css";
import ProductsSection from '../ProductPage/ProductsSection';

export default function HomePage(props) {
  const {url} = props
  return (
    <div>
      <Slider images={jiomart} />
      <div  >
      <img className={'img'} src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1667281294_bLOCK_BUSTER_dEALS_1_Desktop.jpg' alt='desktop'/>
      <img className={'img'} src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1671388507_Desktop-Finall-Christmas.jpg' alt='desktop' />
      <img className={'img'} src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1668663411_Sim-Delivery_1240_X_194_px_web.jpg' alt='homepage' />
      <img className={'img'} src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1671389500_EOSS-2022-Banners_slim_web.jpg' alt='homepage' />
      </div>
      <div>
        <ProductsSection url={url} />
      </div>
    </div>
  )
}
