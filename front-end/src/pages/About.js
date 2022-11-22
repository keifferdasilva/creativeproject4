import "./about.css";

const About = () => {
    return (
    <div>
      <img class='img-header' src='images/32926238877_5511d0eea1_o.png'></img>
    <div class = 'about-wrapper'>
        <div class='section'>
        <h2>Premise</h2>
        <p>The game is a game about playing a game. In this game you play the game and fight against the bad guys. As you fight bad guys
        you get loot. Use the loot to upgrade your character and fight harder bad guys until you fight the main bad guy.</p>
        </div>
        <hr class='section-divider'/>
        <div class='section'>
        <h2>Bad Guys</h2>
        <p>In the game, you will face various bad guys. You will have to fight melee and ranged bad guys as well as bad guys who wield
        the Arcane power.</p>
        </div>
        <hr class='section-divider'/>
        <div class='section'>
        <h2>Tools</h2>
        <p>You will have a variety of tools available to fight the bad guys. Use swords, bows, shields, and even the power of the Arcane.
        Find others fighting against the bad guys and work together to fight the bad guys better.</p>
        </div>
        <hr class='section-divider'/>
        <div class='section'>
        <h2>Cosmetics</h2>
        <p>You can also use the loot you find from the bad guys to create new clothes, armor, accessories, or weapons that look really cool.
        The better you look, the cooler it will be when you beat the bad guys.</p>
        </div>
    </div>
    
    
    <hr class='divider'/>
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

export default About;