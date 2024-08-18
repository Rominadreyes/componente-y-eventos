import Card from 'react-bootstrap/Card';

const CardPizza = ({name,price,ingredients,img}) => {

    return (
        <>    
            <Card style={{ width: "18rem" }}>        
                
                <Card.Img variant="top" src= {img} />

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Ingredientes: {ingredients}</Card.Text>

                    <Card.Text>Precio: {price}</Card.Text>
                </Card.Body>

            </Card>                
        </>
    )
    
}
export default CardPizza