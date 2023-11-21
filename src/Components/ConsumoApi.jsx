const ConsumoApi = ({ titulo, descripcion, precio, imagen }) => {
    return (
        <div className="card col-64">
            <img src={imagen} height="600" width="500" />
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            <h4>{precio}</h4>
        </div>
    );
};
export default ConsumoApi;