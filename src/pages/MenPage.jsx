import react from "react";
import m1 from '../img/Men/m1.jpg'
import m2 from '../img/Men/m2.jpg'
import m3 from '../img/Men/m3.jpg'
import m4 from '../img/Men/m4.jpg'
import m5 from '../img/Men/m5.jpg'
import m6 from '../img/Men/m6.jpg'
import m7 from '../img/Men/m7.jpg'
import m8 from '../img/Men/m8.jpg'
const MenPage = ()=>{
    return(

        <div className="container-products">
        {/* <div className="first-content"> */}
            <figure className="content-img">
                <img src={m1} />
                <h3>Zapatilla 1</h3>
                <h4>Precio: 1 $</h4>
                <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
            </figure >

            <figure className="content-img">
                <img src={m2} />
                <h3>Zapatilla 2</h3>
                <h4>Precio: 1 $</h4>
                <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
            </figure>

            <figure className="content-img">
                <img src={m3} />
                <h3>Zapatilla 3</h3>
                <h4>Precio: 1 $</h4>
                <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
            </figure>

            <figure className="content-img">
                <img src={m4} />
                <h3>Zapatilla 4</h3>
                <h4>Precio: 1 $</h4>
                <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
            </figure>
        {/* </div> */}
        {/* <div className="second-content"> */}
            <figure className="content-img">
                <img src={m5}/>
                <h3>Zapatilla 5</h3>
                <h4>Precio: 1 $</h4>
                <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
            </figure>

            <figure className="content-img">
                <img src={m6}/>
                <h3>Zapatilla 6</h3>
                <h4>Precio: 1 $</h4>
                <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
            </figure>
                
            <figure className="content-img">
                <img src={m7}/>
                <h3>Zapatilla 7</h3>
                <h4>Precio: 1 $</h4>
                <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
            </figure>

            <figure className="content-img">
                <img src={m8}/>
                <h3>Zapatilla 8</h3>
                <h4>Precio: 1 $</h4>
                <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
            </figure>
        {/* </div> */}
    </div>
    );
};

export default MenPage;