import React from "react";
import dadPic from '../images/dadpic.png'

function Header() {
  return (
    <>
      <header>

      <div className="header-flex ">
          <img src={dadPic} alt="hi" />
        </div>
        
      <div className="header-flex">
          <h1>Free Dad Jokes</h1>
          <h2>Create an account to get your laugh on!</h2>
        </div>

    
       
      </header>

<div className="button-flex">

   <div className="button-flex-box">
   <button>Sign-Up</button>
   </div>

   <div className="button-flex-box">
   <button>Login</button>
      </div>
</div>
  

  
    </>
  );
}

export default Header;
