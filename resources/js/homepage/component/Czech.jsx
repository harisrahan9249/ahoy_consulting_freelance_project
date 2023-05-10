import React from 'react'
import Prague from './../../../Images/praga.jpg'
import Laguage from './../../../Images/language.jpg'
import Prime from './../../../Images/prime.jpg'
import phone from './../../../Images/phone.jpg'
import population from './../../../Images/population.jpg'
import gdp from './../../../Images/gdp.jpg'
import area from './../../../Images/area.jpg'
import climate from './../../../Images/climate.jpg'
import food1 from './../../../Images/food1.jpg'
import food2 from './../../../Images/food2.jpg'
import food3 from './../../../Images/food3.jpg'
import food4 from './../../../Images/food4.jpg'
import food5 from './../../../Images/food5.jpg'
import food6 from './../../../Images/food6.jpg'
import food7 from './../../../Images/food7.jpg'
import food8 from './../../../Images/food8.jpg'
import christmas from './../../../Images/christmas.jpg'
import Students from './../../../Images/Students.jpg'


import { TbTruckDelivery } from 'react-icons/tb';

function Czech() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
        Whats is Czech Republic
        </p>
      </div>
      <h2 className="max-w-7xl mb-6 font-sans text-xl font-semibold leading-6 tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          {/* <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
              width="52"
              height="24"
            />
          </svg> */}
          <span className="relative">Whats is Czech Republic</span>
        </span>{' '}
            </h2>
      <p className="text-base text-gray-700 md:text-lg">
      Czech Republic, also known as Czechia, is a landlocked country in Central Europe. Historically known as Bohemia, it is bordered by Austria to the south, Germany to the west, Poland to the northeast, and Slovakia to the southeast.
      </p>
    </div>
    <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
      <div className="max-w-auto sm:mx-auto sm:text-center ">
        <div className="flex items-center justify-center lg:w-full lg:h-96 mb-4  bg-indigo-900 sm:mx-auto sm:w-24 sm:h-24">
          {/* <svg
            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg> */}
          <img src={Prague} alt="pragu" className=' h-full w-full' />
        </div>
        <h6 className="mb-3 text-xl font-bold leading-5">Capital</h6>
        {/* <p className="mb-3 font-semibold text-m text-gray-900">
        Capitalt
        </p> */}
        {/* <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </a> */}
      </div>
      <div className="max-w-auto sm:mx-auto sm:text-center ">
        <div className="flex items-center justify-center lg:w-full lg:h-96 mb-4  bg-indigo-900 sm:mx-auto sm:w-24 sm:h-24">
          {/* <svg
            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg> */}
          <img src={Prime} alt="pragu" className=' h-96 w-full ' />
        </div>
        <h6 className="mb-3 text-xl font-bold leading-5">Prime Minister</h6>
        <h6 className="mb-3 text-xl font-bold leading-5">Petr Fiala</h6>
        {/* <p className="mb-3 font-semibold text-m text-gray-900">
        Capitalt
        </p> */}
        {/* <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </a> */}
      </div>
      <div className="max-w-auto sm:mx-auto sm:text-center ">
        <div className="flex items-center justify-center lg:w-full lg:h-96 mb-4  bg-indigo-900 sm:mx-auto sm:w-24 sm:h-24">
          {/* <svg
            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg> */}
          <img src={Laguage} alt="pragu" className=' h-96 w-full ' />
        </div>
        <h6 className="mb-3 text-xl font-bold leading-5">Official language</h6>
        <h6 className="mb-3 text-xl font-bold leading-5">Czech</h6>
        {/* <p className="mb-3 font-semibold text-m text-gray-900">
        Capitalt
        </p> */}
        {/* <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </a> */}
      </div>
      <div className="max-w-auto sm:mx-auto sm:text-center ">
        <div className="flex items-center justify-center lg:w-full lg:h-96 mb-4  bg-indigo-900 sm:mx-auto sm:w-24 sm:h-24">
          
          <img src={phone} alt="pragu" className=' h-96 w-full ' />
        </div>
        <h6 className="mb-3 text-xl font-bold leading-5">Dialing code</h6>
        <h6 className="mb-3 text-xl font-bold leading-5">+420</h6>
       
      </div>
      <div className="max-w-auto sm:mx-auto sm:text-center ">
        <div className="flex items-center justify-center lg:w-full lg:h-96 mb-4  bg-indigo-900 sm:mx-auto sm:w-24 sm:h-24">
          
          <img src={population} alt="pragu" className=' h-96 w-full ' />
        </div>
        <h6 className="mb-3 text-xl font-bold leading-5">Population</h6>
        <h6 className="mb-3 text-xl font-bold leading-5">1.05 crores (2021) World Bank</h6>
       
      </div>
      <div className="max-w-auto sm:mx-auto sm:text-center ">
        <div className="flex items-center justify-center lg:w-full lg:h-96 mb-4  bg-indigo-900 sm:mx-auto sm:w-24 sm:h-24">
          
          <img src={gdp} alt="pragu" className=' h-96 w-full ' />
        </div>
        <h6 className="mb-3 text-xl font-bold leading-5">Gross domestic product:</h6>
        <h6 className="mb-3 text-xl font-bold leading-5">28,177.79 crores USD (2021) World Bank</h6>
       
      </div>
      <div className="max-w-auto sm:mx-auto sm:text-center ">
        <div className="flex items-center justify-center lg:w-full lg:h-96 mb-4  bg-indigo-900 sm:mx-auto sm:w-24 sm:h-24">
          
          <img src={area} alt="pragu" className=' h-96 w-full ' />
        </div>
        <h6 className="mb-3 text-xl font-bold leading-5">Area</h6>
        <h6 className="mb-3 text-xl font-bold leading-5">78,867 km²</h6>
       
      </div>
      <div className="max-w-auto sm:mx-auto sm:text-center ">
        <div className="flex items-center justify-center lg:w-full lg:h-96 mb-4  bg-white sm:mx-auto sm:w-24 sm:h-24">
          
          <img src={climate} alt="pragu" className=' h-96 w-96 ' />
        </div>
        <h6 className="mb-3 text-xl font-bold leading-5">Climate</h6>
        <h6 className="mb-3 text-xl font-semibold leading-5">The average spring and fall season temperature reaches 7 to 8 °C, during the summer, the temperature rises to 16 or 17 °C; in winter, the average is -1 °C</h6>
       
      </div>
      {/* <div className="max-w-md sm:mx-auto sm:text-center">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
         
          
          <FaLockOpen className=' text-4xl'/>
        </div>
        <h6 className="mb-3 text-xl font-bold leading-5">Transparency</h6>
        <p className="mb-3 text-sm text-gray-900">
        We are accessible to you, and we maintain operational & financial transparency so that you can understand the entire process.
        </p>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </a>
      </div> */}
      {/* <div className="max-w-md sm:mx-auto sm:text-center">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            
         
          <TbTruckDelivery className=' text-4xl'/>
        </div>
        <h6 className="mb-3 text-xl font-bold leading-5">Delivering Excellence</h6>
        <p className="mb-3 text-sm text-gray-900">
        Everyone here at Ahoy strives to provide you with the greatest services possible. We give you the best.
        </p>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </a>
      </div> */}
      {/* <div className="max-w-md sm:mx-auto sm:text-center">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
         
            <FaHandsHelping className=' text-4xl'/>

        </div>
        <h6 className="mb-3 text-xl font-bold leading-5">
        Together
        </h6>
        <p className="mb-3 text-sm text-gray-900">
        To help you achieve a milestone in your life, we are actively working with you. Our European and Indian teams will do its very best to place you in your ideal destination.
        </p>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </a>
      </div> */}
      
      


    </div>
    <h6 className="mb-5 text-3xl font-semibold lg:ml-24 lg:mt-16 lg:mb-16">Traditional Czech Dishes You Need To Try</h6>
    <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          
          <div>
            
               <img
                 className="object-cover w-44 h-44 rounded-full shadow"
                 src={food1}
                 alt="Person"
               />
               <div className="flex flex-col justify-center mt-2">
                 <p className="text-lg font-bold">Svíčková na smetaně (marinated sirloin)</p>
                
               </div>
           </div>
          <div>
            
               <img
                 className="object-cover w-44 h-44 rounded-full shadow"
                 src={food2}
                 alt="Person"
               />
               <div className="flex flex-col justify-center mt-2">
                 <p className="text-lg font-bold">Vepřo knedlo zelo (roasted pork)</p>
                
               </div>
           </div>
          <div>
            
               <img
                 className="object-cover w-44 h-44 rounded-full shadow"
                 src={food3}
                 alt="Person"
               />
               <div className="flex flex-col justify-center mt-2">
                 <p className="text-lg font-bold">Řízek (schnitzel)</p>
                
               </div>
           </div>
          <div>
            
               <img
                 className="object-cover w-44 h-44 rounded-full shadow"
                 src={food4}
                 alt="Person"
               />
               <div className="flex flex-col justify-center mt-2">
                 <p className="text-lg font-bold">Sekaná pečeně (baked mincemeat)</p>
                
               </div>
           </div>
          <div>
            
               <img
                 className="object-cover w-44 h-44 rounded-full shadow"
                 src={food5}
                 alt="Person"
               />
               <div className="flex flex-col justify-center mt-2">
                 <p className="text-lg font-bold">Česnečka (garlic soup)</p>
                
               </div>
           </div>
          <div>
            
               <img
                 className="object-cover w-44 h-44 rounded-full shadow"
                 src={food6}
                 alt="Person"
               />
               <div className="flex flex-col justify-center mt-2">
                 <p className="text-lg font-bold">Uzené (smoked meat)</p>
                
               </div>
           </div>
          <div>
            
               <img
                 className="object-cover w-44 h-44 rounded-full shadow"
                 src={food7}
                 alt="Person"
               />
               <div className="flex flex-col justify-center mt-2">
                 <p className="text-lg font-bold">Guláš (goulash) </p>
                
               </div>
           </div>
         
          <div>
            
               <img
                 className="object-cover w-44 h-44 rounded-full shadow"
                 src={food8}
                 alt="Person"
               />
               <div className="flex flex-col justify-center mt-2">
                 <p className="text-lg font-bold">Rajská omáčka (beef in tomato soup) </p>
                
               </div>
           </div>

         
           
</div>
<h6 className="mb-5 text-3xl font-semibold lg:ml-24 lg:mt-16 lg:mb-16">EVENTS AND FESTIVALS IN CZECH REPUBLIC</h6>
<h6 className="mb-5 text-xl  lg:ml-24 lg:mt-16 lg:mb-16">The popular festivals of the Czech Republic are celebrated with great enthusiasm and joy in all the regions of the country. This attitude is propitiated, in part, by the harsh communist oppression to which the Czech people were subjected, during which they were deprived of the celebration of their ancient traditions.</h6>
<h6 className="mb-5 text-xl font-semibold  lg:ml-24 lg:mt-16 lg:mb-16">Popular festivals in the Czech Republic</h6>
<h6 className="mb-5 text-xl  lg:ml-24 lg:mt-16 lg:mb-16">They have thirteen national holidays, of which we highlight the most special ones.</h6>
<div className="grid gap-16 mx-auto sm:grid-cols-2 lg:grid-cols-2 lg:max-w-screen-lg">



    
        <div>
                
                <img
                  className="object-cover w-full h-64  shadow"
                  src={christmas}
                  alt="Person"
                />
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold">Christmas<br/><span className=' text-lg leading-none font-normal'>Christmas is celebrated almost all over the world but in this country, it is done with true fervor. The streets are filled with light and color and the squares are filled with street markets. Some of the typical products of this time of the year are sold in the streets. Svařák is a very spicy hot wine with a rich flavor which is served to accompany trdelník, a traditional sweet which consists of a flour dough roasted on a wooden skewer.</span></p>
                 
                </div>
            </div>
             <div>
                
                <img
                  className="object-cover w-full h-64  shadow"
                  src={Students}
                  alt="Person"
                />
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold">Barborky or Feast of Saint Barbara<br/>
                  <span className=' text-lg leading-none font-normal'>
                  It takes place on 4th December. According to tradition, the Czechs must cut the branch of a cherry tree which is 10 or more years old and put it in a vase in the house of a single woman. It is said that if the branch blooms before Christmas Eve, it will mean that the woman will marry in the following year. 5th December is Saint Nicholas, a party similar to the Spanish Three Kings Day. At the end of the year, lentils are eaten to attract good luck or 4 nuts are eaten to ensure good health.                    
                  </span></p>
                 
                </div>
            </div>
             
            <div>
                
                <img
                  className="object-cover w-full h-64  shadow"
                  src={Students}
                  alt="Person"
                />
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold">Velikonoce or Easter<br/>
                  <span className=' text-lg leading-none font-normal'>
                  Another event in the Czech Republic is Easter, which is more related to spring than to Christian tradition. Easter eggs decorated with colors are also sold. On Monday there is a procession of children singing songs. These dates are celebrated as a family and people eat Mazanec, an almond and lemon cake with the drawing of on a cross on top.                  </span></p>
                 
                </div>
            </div>
            <div>
                
                <img
                  className="object-cover w-full h-64  shadow"
                  src={Students}
                  alt="Person"
                />
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold">Burning of Witches<br/>
                  <span className=' text-lg leading-none font-normal'>
                  The Festival of the Burning of Witches is one of the most curious and magical Czech folk festivals. It is celebrated on the night of 30th April and is a tradition which dates back to the Middle Ages. At that time it was believed that witches hid in the mountains to practice black magic with the devil. The people of the villages used amulets to protect themselves from curses and lit fires to burn these women. The tradition is maintained today but the atmosphere is more festive. The Burning of Witches is celebrated by burning straw dolls which represent the witches while the women dance around and the men jump over the fire.
                 </span></p>
                 
                </div>
            </div>
            <div>
                
                <img
                  className="object-cover w-full h-64  shadow"
                  src={Students}
                  alt="Person"
                />
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold">Lovers' Day<br/>
                  <span className=' text-lg leading-none font-normal'>
                  It takes place on 1st May and is one of the most popular festivals in the Czech Republic. Couples head to the Petřín park in Prague and kiss under a cherry tree. The reason Lovers' Day is celebrated on May Day is because of a well-known poem by Karel Hynek Mácha called Maj which means, precisely, May.
                </span></p>
                 
                </div>
            </div>
            <div>
                
                <img
                  className="object-cover w-full h-64  shadow"
                  src={Students}
                  alt="Person"
                />
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold">Royal Silvering<br/>
                  <span className=' text-lg leading-none font-normal'>
                  Another of the festivities of the Czech Republic is the Royal Silvering, which takes place at the end of June in the town of Kutná Hora, also known as "Treasure Chest". It is a celebration that commemorates the arrival of King Wenceslas IV with his wife Sofia. The streets are decorated, knights duel and parades and fireworks shows are organised.
                 </span></p>
                 
                </div>
            </div>
            <div>
                
                <img
                  className="object-cover w-full h-64  shadow"
                  src={Students}
                  alt="Person"
                />
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold">Feast of the Rose of the Five Petals<br/>
                  <span className=' text-lg leading-none font-normal'>
                  This is one of the most picturesque events in the Czech Republic. It is celebrated in June in the city of Cesky Krumlov and is a tribute to the Rosenberg family, who ruled the city for more than 300 years.  That day is a medieval festival, where the crafts of the time are recreated and a spectacular parade of torches takes place. It also features an amazing live chess game.
                   </span></p>
                 
                </div>
            </div>
            <div>
                
                <img
                  className="object-cover w-full h-64  shadow"
                  src={Students}
                  alt="Person"
                />
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold">Prague Spring<br/>
                  <span className=' text-lg leading-none font-normal'>
                  This takes place on 15th May and commemorates the liberation of the country from the oppression of the Soviet Union. It is named for the cultural and social flourishing which could be enjoyed in former Czechoslovakia, at least for a time, until the Soviets crushed the nation's dreams of freedom. It is celebrated by playing classical music.
                  </span></p>
                 
                </div>
            </div>
            <div>
                
                <img
                  className="object-cover w-full h-64  shadow"
                  src={Students}
                  alt="Person"
                />
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold">International Folklore Festival<br/>
                  <span className=' text-lg leading-none font-normal'>
                  It takes place in the months of June and July in Straznice, Moravia. Thousands of people gather to watch or participate in the contest of Verbunk, which is the traditional dance of the Czech Republic.
                  </span></p>
                 
                </div>
            </div>
            <div>
                
                <img
                  className="object-cover w-full h-64  shadow"
                  src={Students}
                  alt="Person"
                />
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold">Karlovy Vary International Film Festival<br/>
                  <span className=' text-lg leading-none font-normal'>
                  This is celebrated in July and is one of the oldest film festivals in the world. During the Cold War it was canceled but in the 90s it was able to recover its importance and prestige. The awards which are granted are the Crystal Globe and is celebrated in a luxury thermal station.<br/>
                  The Czechs are especially proud of their folklore which has centuries of history and they love to show their traditions to tourists.  Therefore, if you travel to this country, we recommend that you do it during one of the peculiar Czech Republic festivities.</span></p>
                 
                </div>
            </div>

           
</div>
<h6 className="mb-5 text-3xl font-semibold lg:ml-24 lg:mt-16 lg:mb-16">Why Czech Republic</h6>
<p className="text-lg ffont-normal lg:ml-24">
Low living costs
<br/>
<span className=' text-lg leading-none font-normal'>
World Ranking Universities
<br />
Affordable world class Universities
<br />
high employment rate
<br />
Heart of Europe
<br />
Good Quality of Life
<br />
Safe Country
<br />
6th Clean country in the world
<br />
Hospitable Country
<br />
Rich History & Culture
<br />
Easy to travel to other countries
<br />
Stable labour market
</span></p>

    
  </div>
  )
}

export default Czech
