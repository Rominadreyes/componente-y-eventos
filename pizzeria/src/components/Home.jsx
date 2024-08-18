import CardPizza from "./CardPizza"
import Header from "./Header"

const Home = () => {
    return (
        <>
            <Header />
            
            <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}        
            img="/src/img/napolitana.jpg"
            />

            <CardPizza
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
            img="/src/img/española.jpeg"
            />

            <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img="/src/img/pepperoni.webp"
            />
        </>
    )
    
}
export default Home