import react from "react";
import w1 from '../img/women/w1.jpg'
import w2 from '../img/women/w2.jpg'
import w3 from '../img/women/w3.jpg'
import w4 from '../img/women/w4.jpg'
import w5 from '../img/women/w5.jpg'
import w6 from '../img/women/w6.jpg'
import w7 from '../img/women/w7.jpg'
import w8 from '../img/women/w8.jpg'

const WomenPage = () => {
    return (
        <div className="container-products">
            {/* <div className="first-content"> */}
                <figure className="content-img">
                    <img src={w1} />
                    <h3>Zapatilla 1</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
                </figure >

                <figure className="content-img">
                    <img src={w2} />
                    <h3>Zapatilla 2</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
                </figure>

                <figure className="content-img">
                    <img src={w3} />
                    <h3>Zapatilla 3</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
                </figure>

                <figure className="content-img">
                    <img src={w4} />
                    <h3>Zapatilla 4</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
                </figure>
            {/* </div> */}
            {/* <div className="second-content"> */}
                <figure className="content-img">
                    <img src={w5}/>
                    <h3>Zapatilla 5</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
                </figure>

                <figure className="content-img">
                    <img src={w6}/>
                    <h3>Zapatilla 6</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
                </figure>
                    
                <figure className="content-img">
                    <img src={w7}/>
                    <h3>Zapatilla 7</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
                </figure>

                <figure className="content-img">
                    <img src={w8}/>
                    <h3>Zapatilla 8</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
                </figure>
            {/* </div> */}
        </div>
    );
};

export default WomenPage;