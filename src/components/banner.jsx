import React from 'react';
import logo from "./../images/headshot.png"
import "./styles.css"

function Banner(){
    return (
        <>
        
      <header style={{display:"flex"}}>

<div className='box1'>

<div >
    <h1>ELISHAMA YOMI-AGBAJOR</h1>
    <h2> Abuja, Nigeria</h2>
    <hr />
</div>

<div className='boxy' >
    <center>
    <div className='box' style={{display:"flex"}}>
            <a href="https://www.linkedin.com/in/elishamayomi-agbajor" rel="noopener noreferrer" target="_blank"><button>My LinkedIn</button></a> 
           <strong><a href="mailto:elishamayomiagbajor@gmail.com" rel="noopener noreferrer" target="_blank">elishamayomiagbajor@gmail.com</a></strong>
            {/* <li>Phone Number: +2349030961666</li> */}
            <a href="https://github.com/Elishama-Yomi" rel="noopener noreferrer" target="_blank"><button>My GitHub Profile</button></a>       

           
    </div>
    </center>
</div>

</div>



<div className='box2'>
 <img src={logo} alt='headshot' />   
</div>



        </header>

        </>   
    )
}
export default Banner;