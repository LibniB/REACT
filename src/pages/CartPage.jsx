import react from "react";
import m3 from '../img/Men/m3.jpg'
const CartPage = ()=>{
    return(
        <div className="carrito">
        <h2>Carrito de Compras</h2>
        <ul>
            <li>
                <img src={m3} alt="Producto 1"/>
                <div className="detalles">
                    <h3>Producto 1</h3>
                    <p>Precio: $20.00</p>
                    <label>Cantidad:</label>
                    <input type="number" value="1"/>
                </div>
            </li>
            
        </ul>
        <div className="total">
            <p>Total: $20.00</p>
            <button>Ir a Pagar</button>
        </div>
    </div>
    );
};

export default CartPage;