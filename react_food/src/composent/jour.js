import React from 'react'
import Aliment from './aliment'

const Jour = (props) => {
    const listBarCode = props.listBarCode 
    const name = props.name
    const url = "https://world.openfoodfacts.org/api/v0/product/3042061712017.json"

    /*HOOK D'ETAT*/
    const [count, setCount] = React.useState(0)
    const [nameElement, setNameElement]= React.useState(" ")
    /*HOOK D'EFFET*/
    React.useEffect(()=>{
        fetch(url)
            .then(function(response){ return response.json(); })
            .then(function(data) {
                if(data.product !== undefined){
                    setNameElement(data.product.product_name_fr) 
                }else{
                    setNameElement("aliment non trouvé")
                }
            })
    },[])
    return(
        <>
            <div>
                <h2>{name} -- {count}</h2>
                {
                    listBarCode.map(barCode =>(
                        <Aliment barCode={barCode} />
                    ))
                }

                <button
                    onClick={()=> setCount(count +1)}
                >Increment</button>
            </div>
        </> 
    )
}

export default Jour