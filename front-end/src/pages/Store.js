import "./store.css";

const Store = () =>{
    return(
    <div>
     <div class='container'>
      <div class='row'>
        <a class='purchase' style={{backgroundImage: 'url(./images/367940774_556cd2b8bf_o.jpg)'}}><div class='purchase-content'>100 gems</div><div class='purchase-content'>$9.99 USD</div></a>
      </div>
      <div class='row'>
        <a class ='purchase' style={{backgroundImage:'url(images/8462850546_6bf852239d_k.jpg)'}}><div class='purchase-content'>500 gems</div><div class='purchase-content'>$19.99 USD</div></a>
      </div>
      <div class='row'>
        <a class ='purchase' style={{backgroundImage:'url(images/1604217328_380b940711_k.jpg)'}}><div class='purchase-content'>1000 gems</div><div class='purchase-content'>$39.99 USD</div></a>
      </div>
      <div class='row'>
        <a class='purchase' style={{backgroundImage:'url(images/6535411931_3b541d7fc3_k.jpg)'}}><div class='purchase-content'>2000 gems</div><div class='purchase-content'>$59.99 USD</div></a>
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
    )
};

export default Store;