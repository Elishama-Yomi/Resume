import React from 'react';
import "./styles.css"

function Education(){
    return (
        <>
        
      <div style={{display:"flex"}}>
<div className='edu'>
<h2>EDUCATION</h2>
<ul className='edu1'>
<li>
    <p><strong>Master of Environmental Management and Protection</strong></p>
    <p>Federal University of Agriculture Abeokuta | 2018-2021</p>
</li>
<li>
   <br></br>
    <p><strong>Bachelor of Science in Animal and Environmental Biology</strong></p>
    <p>University of Benin | 2012-2016</p>
</li>
</ul>
</div>

<div className='skill' >
<h2>KEY SKILLS</h2>
<ul className='skill1'>
<li>ReactJs</li>
<li>HTML</li>
<li>CSS</li>
<li>MySQL</li>
<li>Python</li>
<li>SPSS</li>
<li>Tableau</li>
</ul>
</div>
        </div>



        </>   
    )
}
export default Education;