import ConsumoApi from "../../Components/ConsumoApi";
import { useEffect, useState } from "react";
const ListPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => { setProducts(data.results) })
    }, [])
    return (
        <div className="d-flex justify-content-center">
            {
                products?.map((product) => (
                    <ConsumoApi titulo={product.name}
                        descripcion={product.status}
                        precio={product.species}
                        imagen={product.image}
                    ></ConsumoApi>
                ), [])
            }
        </div>
    );
};
export default ListPage;