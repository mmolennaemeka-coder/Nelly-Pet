import React from "react";
import "../Nellypetstyle.css"
import { BrowserRouter } from "react-router-dom";

function Main() {   
  return (  
    <BrowserRouter>
    <React.Fragment>

      <header> 
    <div class="head">
    <img src="/Asset/nelpetlog.png" alt="logo" style={{ width: "80px", height: "80px" }} />
     
    
    <nav> 
        <a href="#">Home</a>  
        <a href="#gallery">Gallery</a> 
      
     <a href="#starpet">Featured Pet</a>

   <a href="./donate.html">Donate</a>
    

<a href="#adopt">Adopt</a>
     
    </nav>
</div>
    <div class="input">

       <i class="fa-solid fa-user fa-2x"></i> 
      
      

    </div>
     <div id="signup-form">
      <h2>Create Your Account</h2>
      <form>
        <input type="text" placeholder="Full Name" required/><br/>
        <input type="email" placeholder="Email Address" required/><br/>
        <input type="password" placeholder="Password" required/><br/>
        <button type="submit">Sign Up</button>
      </form>
  
    </div>
  
  </header>

     
 
<section class="hero">
    <div class="hero1">
     <h2>ADOPT A PET</h2>
    <span>Our aim is to provide you the best Pet for adoption <br/>  Could you give one of them the love they deserve? </span>
  </div>

  <div class="hero2">
  
    <img src="/Asset/pet5.jpeg" alt="pet"style={{ width: "200px", height: "100px" }} />
    
    <p> <strong>Henry</strong> <br/>
      Male/ vaccinated <br/> <br/>
   <strong> $700 </strong> </p>
  <i class="fa-solid fa-arrow-up-right-from-square"></i>

  
  </div>

  <div>
    <div class="hero3">
  <img src="/Asset/pet3.png" alt="pet" style={{ width: "200px", height: "100px" }} />
    
    <p> <strong>Daisy</strong> <br/>
      Femalee/ vacinated <br/> <br/>

   <strong> $700 </strong> </p>
 <i class="fa-solid fa-arrow-up-right-from-square"></i> 


</div>

  </div>
</section>


   

<section class="services" data-aos="fade-up" data-aos-duration="2000">  
      <h2  >Our Services</h2>
  <div class="service1">
    <div>
        <img src="/Asset/pethealth.webp" alt="" style={{ width: "85%", height: "70%" }} />
        <h3>We Care for Your Pets</h3>
        <p>Love, health, and joy for your furry <br/> friends in Calabar.</p>
       
      </div>

    <div>
        <img src="/Asset/petgrooming.webp" alt=""  style={{ width: "85%", height: "70%" }}/>
        <h3>Trusted Pet Grooming</h3>
        <p>Keep your pets looking neat, clean, <br/> and adorable.</p>
       
    </div>

    <div>
        <img src="/Asset/petadopt.webp" alt="" style={{ width: "330px", height: "70%" }} />
        <h3>Safe Pet Adoption</h3>
        <p>We try to provide you the safest <br/>Pet for adoption.</p>
       
      </div>
  </div>
</section> 





  <section className="featured">

    <div className="about" id="starpet">
     <img src="/Asset/belladog.webp"  alt="Featured Pet" style={{ width: "400px", height: "80%" }} />


        <em>

         

       Meet Our Star Pet 
       <br/>
       This is <strong>Bella</strong>, a 2-year-old Labrador mix who loves belly rubs and playtime. 
        Bella came to us after her previous owner had to move abroad. She’s been patiently
         waiting for someone to see her sparkle and trust us, she shines. Just ask Max, the little boy who barely spoke until Bella came into his life.
          Their bond was instant, and now Bella is thriving in her new home.
But Bella isn’t the only star here  we have many more furry friends looking for love.   Could you be her new best friend? </em>
 
    </div>
  </section>



  <section class="adoption" id="adopt">
    <h2> Steps for Adoption</h2> 
    <div class="parent" data-aos="fade-up" data-aos-duration="2000">
      
      
           
               <div class="child1"> 
                <img src="/Asset/Copilot_20250919_063822.png" alt="Featured Pet"  style={{ width: "80px", height: "80px" }} />  <br/> <br/>
                <p> <em>Meet Bella and other pets at our <br/> Calabar shelter.</em></p> <br/>
                 <input type="submit" value="VISIT US" />
                </div>

                <div class="child1">
                   <img src="/Asset/Copilot_20250905_154957.png" alt="Featured Pet"  style={{ width: "80px", height: "80px" }}/>  <br/> <br/>
                    <p> <em>Fill out our quick adoption form in person or online.</em></p> <br/>
                   <input type="submit" value="APPLY" />
                    </div>
                    
                <div class="child1"> 
                  <img src="/Asset/Copilot_20250905_155821.png" alt="Featured Pet" style={{ width: "80px", height: "80px" }} /> <br/> <br/>
                  <p> <em>Book a playdate to spend time with your chosen pet .</em></p> <br/>
                   <input type="submit" value="BOOK" />
                    </div>

                <div class="child1">
                  <img src="/Asset/takepethom.png" alt="Featured Pet"  style={{ width: "80px", height: "80px" }}/> <br/> <br/>
                  <p> <em>Welcome your new furry family member home!</em></p> <br/>
                   <input type="submit" value="TAKE HOME" />
                   </div>
           
      </div>
  </section>
 

<section class="pet"  id="gallery" >



         <h2>Our Gallery</h2>
    
    
  <div class="pet1">
       <div> <img src="/Asset/dog2.jpg" alt="Adoptable Pet" /> <p> Jeel</p> </div>

       <div><img src="/Asset/dog3.jpg" alt="Featured Pet"  /><p>Bobby</p> </div>
      
       <div>  <img src="/Asset/dog4.jpg" alt="Featured Pet"  /> <p>Jolly</p></div>

        <div>  <img src="/Asset/dog5.jpg" alt="Featured Pet" /> <p>Mella</p></div>

       <div> <img src="/Asset/dog8.avif" alt="Adoptable Pet" /> <p>Bruno</p> </div>
       <div>  <img src="/Asset/dog9.avif" alt="Featured Pet"  /> <p>Kizzy</p> </div>
       <div>  <img src="/Asset/dog10.avif" alt="Featured Pet"  /> <p>Matt</p></div>
 
      <input type="submit" value=" See More &rarr;"/>
       <i class="fa-solid fa-paw fa-3x"></i>  <i class="fa-solid fa-paw fa-3x"></i>  
  
  </div>
  <i class="fa-solid fa-arrow-right fa-2x"></i> 
   
</section>


<section class="donate" id="donate" >

  <h3>Help Us Save More Lives </h3>
  <p>Every donation makes a different in the lives of animals in need. join our mission to rescue and find loving homes for pet</p>
</section>

<section class="container" data-aos="fade-right" >
    <section class="stats">
      <div class="stat-box">2,500+<span>Animals Rescued</span><i class="fa-solid fa-paw fa-2x"></i></div>
      <div class="stat-box">850+<span>Animal Rehomed</span><i class="fa-solid fa-house-chimney fa-2x"></i></div>
      <div class="stat-box">1,200+<span>Animal Sheltered</span><i class="fa-solid fa-tents fa-2x"></i></div>
      <div class="stat-box">95%<span>Our Success Rate</span><i class="fa-solid fa-percent fa-2x"></i></div>

    </section>

   <section class="donation-form" data-aos="fade-left" data-aos-duration="2000">
      <form>
        <h2>Make a Donation</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />

        <div class="amount-options">
          <button type="button">$25</button>
          <button type="button">$40</button>
          <button type="button">$60</button>
          <button type="button">$100</button>
          <input type="number" placeholder="Custom Amount" />
        </div>

        <label>
          <input type="checkbox"/> Make this donation anonymous 
        </label>

        <button type="submit" class="submit-btn">Submit Donation</button>
      </form>
    </section>
  </section>







  
 

  <footer class="footer">
     <div class="foot">
                <div>
                  <h4>OUR COMPANY</h4>
                  <ul>     
                        
                        <li><a href="#">About NellyPet</a></li>

                        <li><a href="#">Investor Relations</a></li>

                        
                        <li><a href="#">International Holiday Schedule</a></li>

                        <li><a href="#">Binding Corporate Rules</a></li>
                          
                        

                       <span><a href="#">F0LL0W US</a> 
                       <i class="fa-brands fa-facebook"></i>
                       <i class="fa-brands fa-instagram"></i>
                       <i class="fa-solid fa-x"></i>
                       <i class="fa-brands fa-youtube"></i>
                       <i class="fa-brands fa-linkedin"></i> </span>
                  </ul> 
                   <div id="google_translate_element"></div>  
                </div>
                

            <div>
                <h4>CONTACT US</h4>
                  <ul>
                   <li><a href="#">General enquiries</a></li>
                   <li><a href="#">Find a charity shop</a></li>
                   <li><a href="#">Visit Us</a></li>
                   <li><a href="#">FAQs</a></li>
                   

                  </ul>
            </div>
            <div>
                   
                  <h4>MORE FROM NELLYPET</h4>
                  
                       <ul> 
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">NellyPet Locations</a></li>
                        <li><a href="#">Prices</a></li>
                  </ul>
            </div>

           
            <div>
                  <h4>LANGUAGE</h4>
                 
                <ul> <li><a href="#">  <i class="fa fa-globe" aria-hidden="true"></i> Nigeria</a> </li></ul>  
                  <br/> 
                   
                  <form action="" method="POST">
                        <select name="English" required>
                              <option value="English">English</option>
                              <option value="Igbo">Igbo</option>  
                              
                        </select>
                  </form> 
            </div>
     </div> 


               <div class="foot1">
               <pre>&copy;Nellypet 2025--  </pre>
             <pre><h4> Terms of Use  |  Security and Privacy</h4> </pre> 
               </div>   
   

  </footer>
 
 
    </React.Fragment>
    </BrowserRouter>
  );
}
export default Main;