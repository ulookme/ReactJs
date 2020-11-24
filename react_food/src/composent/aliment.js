
import React, { useEffect } from 'react'
import fetch from 'node-fetch'


const Aliment = (props) => {
    const barCode = props.barCode
    const url = "https://world.openfoodfacts.org/api/v0/product/"+barCode+".json"
    const [name, setName]  = React.useState("")
    
    React.useEffect(() =>{
        fetch(url)
            .then(function(response){ return response.json(); })
            .then(function(data) {
                data.product !== undefined ? setName(data.product.product_name_fr) 
                : setName("aliment non trouvé")
            })
    },[])
 
    return(
    <>
        <h3>{name}</h3>
    </> 

)}

export default Aliment
