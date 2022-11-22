import { Outlet, Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <div>
     
      

    <div class='news-grid'>
        <Link class='first-news-item'><div class='news-item-title'>New Update!</div><div class='news-item-content'>Dive in now to play the latest update and fight the new dastardly enemies coming to the game!</div></Link>
        <Link class ='news-item1'><div class='news-item-title'>Giveaway!</div><div class='news-item-content'>Sign up for free merch!</div></Link>
        <Link class ='news-item2' to='/store'><div class='news-item-title'>Sale!</div><div class='news-item-content'>Get 50% off our premium currency!</div></Link>
    </div>
    <hr class='divider'></hr>
    <div class='footer'>
        <div class='others-container'>
            <a class='others'>Support</a>
            <div class='footer-divider'></div>
            <a class='others'>Terms of Use</a>
            <div class='footer-divider'></div>
            <a class='others'>Privacy Policy</a>
            <div class='footer-divider'></div>
            <a class='others'>EULA</a>
            <div class='footer-divider'></div>
            <a class='others' href="https://github.com/keifferdasilva/creativeproject3">Github</a>
        </div>
        <div class='socials-container'>
            <a class='socials'>Facebook</a>
            <a class='socials'>Instagram</a>
            <a class='socials'>Youtube</a>
            <a class='socials'>Twitter</a>
            <a class='socials'>Reddit</a>
        </div>
    </div>
</div>
      );
};

export default Home;