import './App.css';
import Icon1 from './images/icon1.png'
import Icon2 from './images/icon2.png'
import Icon3 from './images/icon3.png'
import Icon4 from './images/icon4.png'
import IronHack from './images/ironhack-logo-xs.png'
import Menutop from './images/menu-top-xs.png'

function App() {
  return (
    <>
    <div className="App">
   
    </div>
<div>

  <section> 
  <nav>
      <img src={IronHack} class="Ironhack" alt="ironhacklogo"></img>
      <img src= {Menutop} class="menutop" alt="menutop"></img>
    </nav>

    <h1> Say Hello to ReactJS</h1>
    <h6> You will learn how to use the most popular <br></br> frontend libray,
      and become a super Ninja developer
    </h6>

    <br>
    </br>
  
  <button class="Button"> AWESOME! </button>

  </section>


    <div class="icons">
    <img src={Icon1} alt="icon1"></img>
    <img src= {Icon2} alt="icon2"></img>
    <img src={Icon3} alt="icon3"></img>
    <img src= {Icon4} alt="icon4"></img>

    </div>
    </div>

    <div class="iconsexplain">
      <div>
    <h3> Declarative </h3>
    <p> React makes it painless to create interactive UIs</p>
    </div>

    <div>
    <h3> Declarative </h3>
    <p> React makes it painless to create interactive UIs</p>
    </div>

    <div>
    <h3> Declarative </h3>
    <p> React makes it painless to create interactive UIs</p>
    </div>

    <div>
    <h3> Declarative </h3>
    <p> React makes it painless to create interactive UIs</p>
    </div>
   
    </div>
    </>
  );
}

export default App;
