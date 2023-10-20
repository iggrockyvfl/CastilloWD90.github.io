class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700;900&display=swap');
        #logo {
            height: 80px;
        }
        .nav-item{
            padding: 0 25px 0 25px;
            font-family: 'Young Serif', serif;
            font-weight: bold;
          }
         .navbar {
          width: 100%;
          padding: 20px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        //   .navbar{
        //     position: sticky;
        //     top: 0;
        // }
        
        
        .popup{
          position: absolute;
          top:-150%;
          left: 50%;
          opacity: 0;
          transform:translate(-50%, -50%) scale(1.25);
          width: 380px;
          padding: 20px 30px;
          background: linear-gradient(to right,rgb(73, 73, 73),grey,rgb(153, 152, 152));
          box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          transition: top 0ms ease-in-out 200ms;
          opacity: 200ms ease-in-out 0ms;
          transform: 20ms ease-in-out 0ms;
          z-index: 999;
      }
      .popup.active {
          top: 50%;
          opacity: 1;
          transform:translate(-50%, -50%) scale(1);
          transition: top 0ms ease-in-out 0ms;
          opacity: 200ms ease-in-out 0ms;
          transform: 20ms ease-in-out 0ms;
      }
      .popup .close-btn{
          position: absolute;
          top: 10px;
          right: 10px;
          width: 15px;
          height: 15px;
          background: #888;
          color: #eee;
          text-align: center;
          line-height: 15px;
          border-radius: 15px;
          cursor: pointer;
      }
      .popup .form h2{
          text-align: center;
          color: #fff;
          margin: 10px 0px 20px;
          font-size: 25px;
      }
      .popup .form .form-element {
          margin: 15px 0px;
      }
      .popup .form .form-element label {
          font-size: 14px;
          color: #fff;
      }
      .popup .form .form-element input[type="text"],
      .popup .form .form-element input[type="date"] {
          margin-top:5px;
          display: block;
          width: 100%;
          padding: 10px;
          outline: none;
          border: 1px solid #aaa;
          border-radius: 5px;
      }
      .popup .form button {
          width: 100%;
          height: 40px;
          border: none;
          outline: none;
          font-size: 16px;
          background-color: #222;
          color: #fff;
          border-radius: 10px;
          cursor: pointer;
      }
      #popup-col .form-element .form-select {
          margin-top:5px;
          display: block;
          width: 100%;
          padding: 10px;
          outline: none;
          border: 1px solid #aaa;
          border-radius: 5px;
      }
      #date {
          margin-top:5px;
          display: block;
          width: 100%;
          padding: 10px;
          outline: none;
          border: 1px solid #aaa;
          border-radius: 5px;
      }
      #booknow {
        cursor: pointer;
      }

      @media only screen and (max-width: 375px) {
        .popup {
            width: 90%;
            
        }
    }








        </style>
        <body>
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html"><img src="120px-Architectural_Association_School_of_Architecture_logo.png" id="logo"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html"> H O M E </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="PROJECTS.html"> P R O J E C T S </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="ABOUTUS.html"> A B O U T - U S </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contacts"> C O N T A C T S </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="booknow">B O O K - N O W</a>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>


      <div class="popup">
    <div class="close-btn">&times;</div>
    <div class="form">
        <h2>SET A MEETING</h2>
        <div class="form-element">
            <label for="name">FULL NAME</label>
            <input type="text" id="name" placeholder="ENTER FULL NAME">
        </div>
        <div class="form-element">
            <label for="email">EMAIL</label>
            <input type="text" id="email" placeholder="example@gmail.com">
        </div>
        <div class="form-element">
            <label for="contact">CONTACT NUMBER</label>
            <input type="text" id="contact" placeholder="+69 - 915*******">
        </div>
        <div id="form-element">
            <input type="date" id="date" placeholder="SET DATE">
        </div>

    <div class="row">

            <div class="col-6" id="popup-col">
        <div class="form-element">
            <select class="form-select" id="floatingSelectGrid">
              <option value="1">1:00</option>
              <option value="2">2:00</option>
              <option value="3">3:00</option>
              <option value="3">4:00</option>
              <option value="3">5:00</option>
              <option value="3">6:00</option>
              <option value="3">7:00</option>
              <option value="3">8:00</option>
              <option value="3">9:00</option>
              <option value="3">10:00</option>
              <option value="3">11:00</option>
              <option value="3">12:00</option>
            </select>
        </div>
            </div>

            <div class="col-6" id="popup-col">
        <div class="form-element">
            <select class="form-select" id="floatingSelectGrid">
              <option value="1">AM</option>
              <option value="2">PM</option>
            </select>
        </div>
            </div>
        

    </div>
        <button type="submit" value="Submit" id="sumbit-btn" class="responsive">BOOK</button>
    </div>
</div>
        




</body>
`
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
        .container {
            max-width: 1170px;
            margin: auto;
          }
        .footer {
            background-color: #24262b;
            padding: 70px 0;
            
          }
          .footer-col{
            width: 25%;
            padding: 0 15px;
          }
          .footer-col h4{
            font-size: 18px;
            color: #ffffff;
            text-transform: capitalize;
            margin-bottom: 35px;
            font-family: 'Roboto', sans-serif;
            position: relative;
            font-weight: 500;
          }
          .footer-col h4::before{
            content: '';
            position: absolute;
            left: 0;
            bottom: -10px;
            background-color: #e91e63;
            height: 2px;
            box-sizing: border-box;
            width: 50px;
          }
          .footer-col ul li a{
            font-size: 16px;
            text-transform: capitalize;
            color: #ffffff;
            text-decoration: none;
            font-weight: 300;
            color: #bbbbbb;
            display: block;
            transition: all 0.3s ease;
          }
          .footer-col ul li:not(:last-child){
            margin-bottom: 10px;
          }
          .footer-col ul li a:hover{
              color: #ffffff;
              padding-left: 8px;
          }
          .footer-col .social-links a{
            display: inline-block;
            height: 40px;
            width: 40px;
            background-color: rgba(255,255,255,0.2);
            margin: 0 10px 10px 0;
            text-align: center;
            line-height: 40px;
            border-radius: 50%;
            color: #ffffff;
            transition: all 0.5s ease;
          }
          .footer-col .social-links a:hover{
            color: #24262b;
            background-color: white;
          }
          .ul1 li{
            list-style: none;
            font-family: 'Roboto', sans-serif;
            line-height: 1.5;
          }
          @media only screen and (max-width: 768px) {
            .footer-col {
                width: 50%;
                margin-bottom: 30px;
            }
        }
        @media only screen and (max-width: 574px) {
            .footer-col {
                width: 100%;
            }
        }
          </style>
          <body>
          <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="footer-col">
                <h4>COMPANY</h4>
                <ul class="ul1">
                  <li><a href="index.html">HOME</a></li>
                  <li><a href="PROJECTS.html">PROJECTS</a></li>
                  <li><a href="ABOUTUS.html">ABOUT US</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>GET HELP</h4>
                <ul class="ul1">
                  <li><a href="FAQ.html">FAQ</a></li>
                  <li><a href="ContactUs.html">CONTACT US</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4 id="contacts">CONTACT US</h4>
                <ul class="ul1">
                  <li><a href="#">+69 9156748976</a></li>
                  <li><a href="#">254-5678</a></li>
                  <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=new">google@gmail.com</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>FOLLOW US</h4>
                <div class="social-links">
                  <a href="https://www.facebook.com/" target="_blank"><i class="fab fa fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/" target="_blank"><i class="fab fa fa-instagram"></i></a>
                  <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                </div>
                <ul class="ul1">
                  <li><a href="#"></a></li>
                </ul>
              </div>
             
            </div>
          </div>
        </footer>
</body>

        `
    }
}
customElements.define('my-footer', MyFooter)

let calcScrollValue = () => {
  let scrollProgress = document.getElementById
  ("progress");
  let progressValue = document.getElementById
  ("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100)/calcHeight);
  if (pos > 100) {
    scrollProgress.style.display ="grid"; }
    else {
      scrollProgress.style.display ="none";
    }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// document.querySelector('#contact-form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   e.target.elements.name.value = '';
//   e.target.elements.email.value = '';
//   e.target.elements.message.value = '';
// });
document.querySelector("#booknow")
.addEventListener("click",function(){
  document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn")
.addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("active");
});
