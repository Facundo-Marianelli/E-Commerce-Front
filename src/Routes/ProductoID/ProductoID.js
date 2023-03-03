import React, { useEffect , useState} from "react";
import { useParams } from "react-router-dom";

const ProductoID = () => {
    const { id } = useParams();
    const [ productos, setProductos ] = useState();

    useEffect(()=>{
        fetch(`https://swapi.dev/api/people/${id}`)
        .then((res)=>res.json())
        .then((res)=>setProductos(res))
    },[id]);
    console.log(productos)
    return (
        <div>
            <p>Noombre {productos.name}</p>
            <p>Peso {productos.height}</p>
        
        </div>
    );
};
export default ProductoID;