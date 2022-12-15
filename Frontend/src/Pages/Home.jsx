import React from 'react'
import Carousel  from './Slider'
import homestyle from './Home.module.css'

export const Home = () => {
  return (
    <div>
          <Carousel/>

          <div className={homestyle.secondimg} >
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1654714506_Free-Home-Delivery--strip-1240-X-162.jpg" />
        </div>

        <div className={homestyle.secondimg1}>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663775475_Slim-Banner_web.jpg" />
        </div>

        <div className={homestyle.secondimg2}>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1662531217_Wednesday_Bonus.jpg"/>
        </div>

                {/* shop for categories */}
                <div className={homestyle.shopandshadow}> 
            <h1>Shop from Top Categories</h1>
            <div className={homestyle.shadowgrid}>

            <div>
                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1661329065_02--Shop-From-Top-Categories-Kitchen-Appliances.jpg"/>
            </div>

            <div>
                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1661329189_02--Shop-From-Top-Categories-audio.jpg"/>
            </div>


            <div>
                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109495_1654018730_Smartphones.jpg"/>
            </div>

            <div>
                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109344_1654018675_Mens-Wear.jpg" />
            </div>

            <div>
                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109379_1654018684_Womens-Wear.jpg"/>
            </div>


            <div>
                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109408_1654018699_Kids-WEAR.jpg" />
            </div>


            <div>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109280_1654018629_Dairy-Bakery.jpg" />
            </div>

            </div>
        </div>

        <div className={homestyle.safeDiv}>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1624041574_web_static.jpg" />
        </div>

        {/* 2img div */}
        <div className={homestyle.twoslidediv}>
            <div>
                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1662047585_jiomart-svg_910x278_1.jpg"/>
            </div>
            <div>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1662047508_Payzapp_910x278.jpg"/>
            </div>
         </div>

         
        {/* daily-essentails div  8-grid*/}

        <div className={homestyle.offerday}>
            <h1>Offers on daily essentials</h1>

          <div className={homestyle.newdiv}>
            <div>
                <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/17/thumb/dals-pulses-20200714.png" />
                <h3>Dals & Pulses</h3>
            </div>


            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/14/thumb/0-14.png" />
                <h3>Atta, Flours & Sooji</h3></div>


            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/18/thumb/0-18.png" />
                <h3>Edible Oils</h3></div>


            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/20/thumb/0-20.png" />
                <h3>Salt, Sugar, & Jaggery</h3></div>
          </div>
          
        

            {/* div2 */}
            <div>

            <div className={homestyle.newdiv}>
            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/119/thumb/bath-hand-wash-20200714.png" />
                <h3>Bath & Hand Wash</h3></div>



            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/7/thumb/toothpaste-20200520.png" />
                <h3>Biscuits & Cookies</h3></div>


            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/191/thumb/noodle-pasta-vermicelli-20200603.png" />
                <h3>Toothpaste</h3></div>


            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/44/thumb/0-44.png" />
                <h3>Noodles, Pasta, Vermicelli</h3></div>
          </div>
            </div>
        </div>
          
                    {/* shop by categores again */}

                    <div className={homestyle.shopandshadow1}> 
            <h1>Shop from Top Categories</h1>
            <div className={homestyle.shadowgrid1}>

            <div>
                <img src="https://www.jiomart.com/images/category/6/thumb/0-6.png?v=1607022291"/>
                 <h3>Personal care</h3>
            </div>

            <div>
                <img src="https://www.jiomart.com/images/category/7/thumb/0-7.png?v=1607022291"/>
                <h3>Home care</h3>
            </div>


            <div>
                <img src="https://www.jiomart.com/images/category/10/thumb/0-10.png?v=1607022291"/>
                <h3>Baby care</h3>
            </div>

            <div>
                <img src="https://www.jiomart.com/images/category/13/thumb/staples-20200710.jpg?v=1607022291" />
                <h3>Staples</h3>
            </div>

            <div>
                <img src="https://www.jiomart.com/images/category/12/thumb/0-12.png?v=1607022291"/>
                <h3>Snacks & Branded </h3>
            </div>


            <div>
                <img src="https://www.jiomart.com/images/category/3/thumb/0-3.png?v=1607022291" />
                <h3>Dairy $ Bakery</h3>
            </div>


            <div>
            <img src="https://www.jiomart.com/images/category/141/thumb/fruits-vegetables-20200520.png?v=1607022291" />
            <h3>Fruits & Vegetables</h3>
            </div>

            </div>
        </div>

             {/* 700hg banner img */}

             <div className={homestyle.banner}>

<div>

<div>
 <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1661428656_01--Staple-Store-_600x350.jpg" />
</div>
 <div>
 <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1656790165_Web--600-x-350.jpg" />
 </div>

 </div> 



<div>
 
<div> <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1647359679_Milk-Fest--600x350.jpg" /></div>
 <div> <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1623423184_wm.jpg" /></div>
 </div> 

<div>
 
<div> <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1656690807_Min-33-600x350.jpg" /></div>
 <div> <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1628171483_Chinese_webmini.jpg" /></div>
</div>
</div>   

             {/* household red pic  */}

             <div className={homestyle.offerday1}>
            <h1> Offers on Household & Personal care </h1>

          <div className={homestyle.newdiv1}>
            <div>
                <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/37/thumb/all-purpose-cleaners-20200603.png" />
                <h3>All Purpose Cleaners</h3>
            </div>


            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/43/thumb/detergent-bars-20200520.png" />
                <h3>Detergent Bars</h3></div>


            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/17/thumb/feminine-hygiene-20200605.png" />
                <h3>Feminine</h3></div>


            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/28/thumb/0-28.png" />
                <h3>Skin Care</h3></div>
          </div>
          
        

            {/* div2 */}
            <div>

            <div className={homestyle.newdiv1}>
            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/6/thumb/oral-care-20200603.png" />
                <h3>Oral Care</h3></div>



            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/31/thumb/0-31.png" />
                <h3>hair Care</h3></div>


            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/10/thumb/0-10.png" />
                <h3>Baby Care</h3></div>


            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/213/thumb/paper-tissues-napkins-20210727.png" />
                <h3>Paper Tissues & Napkins</h3></div>
          </div>
            </div>
        </div>  
                {/* 2image bottom      */}
             <div className={homestyle.imagetwo}>
            <div>
                <img style={{width:"100%"}} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1645558047_web_mini.jpg"/>
            </div>
            <div>
            <img style={{width:"100%"}} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1624538640_wm.jpg"/>

            </div>
            </div>

              {/* offers on groceries */}

              <div className={homestyle.offerday2}>
            <h1> Offers on Groceries </h1>

          <div className={homestyle.newdiv2}>
            <div>
                <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/188/thumb/breakfast-cereals-20200603.png" />
                <h3>Breakfast cereals</h3>
            </div>


            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/117/thumb/dairy-20200522.png" />
                <h3>Dairy</h3></div>


            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/17/thumb/feminine-hygiene-20200605.png" />
                <h3>Dry Fruits</h3></div>


            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/15/thumb/0-15.png" />
                <h3>Masalas & Spices</h3></div>
          </div>
          
        

            {/* div2 */}
            <div>

            <div className={homestyle.newdiv2}>
            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/135/thumb/0-135.png" />
                <h3>Snacks & Namkeen</h3></div>



            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/25/thumb/0-25.png" />
                <h3>Fruit Juices</h3></div>


            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/26/thumb/0-26.png" />
                <h3>Energy & Soft Drinks</h3></div>


            <div> <span> Up To <b>20%</b>OFF</span>
                <img src="https://www.jiomart.com/images/category/221/thumb/papads-ready-to-fry-20200520.png" />
                <h3>Papads, Ready To Fry</h3></div>
          </div>
            </div>
        </div>  

           {/* 700hn image again bottom */}

           <div className={homestyle.banner1}>
                    <div>

                    <div>
                    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1663690559_Desktop_600x350.jpg" />
                    </div>
                    <div>
                    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1626259904_wm.jpg" />
                    </div>

                    </div> 

                    <div>
                    
                    <div> <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1656690807_Min-33-600x350.jpg" /></div>
                    <div> <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1628171483_Chinese_webmini.jpg" /></div>
                    </div> 

                    <div>
                    
                    <div> <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1656690807_Min-33-600x350.jpg" /></div>
                    <div> <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1628171483_Chinese_webmini.jpg" /></div>
                    </div>

                    <div>
                        <div>
                            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1641903326_Your-Favourite-Noodle_600x350.jpg" />
                        </div>
                    </div>
                    </div>
    </div>
  )
}