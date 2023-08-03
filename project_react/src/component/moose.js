import React from "react";
import ab from "./moose.jpg";
import './moose.css';

export default function Moose(){
    return(
        <div className="App">
       <h1 id='heading'><center>Sarah's Favorite animal</center></h1>
       <img className='image' src={ab} alt="moose" height="150"></img>
       <p className='para'>My name is Sarah,and my favorite animal is moose.<br></br>
          They can be upto 6.5 feet tall and weight 1200 pounds.<br></br>
          Surprisingly,they're really good at Swimming!<br></br>
          If you want to learn more about the moose,check out <a href="https://en.wikipedia.org/wiki/Moose">its wikipedia page.</a></p>
      <div className='second'>
       <h1 id='heading2'>Moose are awesome because...</h1>
       <ol type="1" className='order'>
        <li>They can swim really well</li>
        <li>They can make really funny noises</li>
        <li>They can close their nostrils</li>
      </ol>
      <h1 id='heading3'>If I were a moose,I would...</h1>
      <ul className='unorder'>
        <li>Eat lots of lecture</li>
        <li>Carry little animals on my antlers</li>
        <li>Swim to Alaska</li>
      </ul>
      <h1 id='heading4'>Moose Video</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/F3yse7vTWrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
     </div>
    );
}