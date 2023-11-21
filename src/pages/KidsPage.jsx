import react from "react";
import k1 from '../img/kids/k1.jpg'
import k2 from '../img/kids/k2.jpg'
import k3 from '../img/kids/k3.jpg'
import k4 from '../img/kids/k4.jpg'
import k5 from '../img/kids/k5.jpg'
import k6 from '../img/kids/k6.jpg'
import k7 from '../img/kids/k7.jpg'
import k8 from '../img/kids/k8.jpg'
const KidsPage = ()=>{
    return(

        <div className="container-products">
            {/* <div className="first-content"> */}
                <figure className="content-img">
                    <img clasName="img-figure" src={k1} />
                    <h3>Zapatilla 1</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
                </figure >

                <figure className="content-img">
                    <img clasName="img-figure" src={k2} />
                    <h3>Zapatilla 2</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
                </figure>

                <figure className="content-img">
                    <img clasName="img-figure" src={k3} />
                    <h3>Zapatilla 3</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
                </figure>

                <figure className="content-img">
                    <img clasName="img-figure" src={k4} />
                    <h3>Zapatilla 4</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
                </figure>
            {/* </div> */}
            {/* <div className="second-content"> */}
                <figure className="content-img">
                    <img clasName="img-figure" src={k5}/>
                    <h3>Zapatilla 5</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
                </figure>

                <figure className="content-img">
                    <img clasName="img-figure" src={k6}/>
                    <h3>Zapatilla 6</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
                </figure>
                    
                <figure className="content-img">
                    <img clasName="img-figure" src={k7}/>
                    <h3>Zapatilla 7</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary"><a href="/Cartpage">Buy</a></button>
                </figure>

                <figure className="content-img">
                    <img clasName="img-figure" src={k8}/>
                    <h3>Zapatilla 8</h3>
                    <h4>Precio: 1 $</h4>
                    <button type="button" class="btn btn-outline-primary">Buy</button>
                </figure>
            {/* </div> */}
        </div>

    );
};

export default KidsPage;