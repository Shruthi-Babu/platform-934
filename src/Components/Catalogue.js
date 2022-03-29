import { useProduct } from '../context/ProductContext'
import ProductCard from './ProductCard';
import FilterSection from './FilterSection';
import { useProductFilter } from '../context/ProductFilterContext';
import './Stylesheets/Catalogue.css';


function getFilteredData(state, productData) {
    // productData = productData.filter(({filterState.rating}))=>()
    let {sort, includeOOS, rating, fastDelivery, category} = state;
    console.log(JSON.stringify(state));
    
    productData = productData.filter(prod => includeOOS ? true : prod.availbility ==="In stock");

    productData = productData.filter(prod => {
        if(rating==="all"){
            return true;
        } else {
            if(prod.rating>=rating){
                return true;
            } else {
                return false;
            }
        }
        //rating==="all" ? true : prod.rating===rating ? true : false;
    })
    
    productData = productData.filter(prod => category[prod.categoryName] === true);

    productData = productData.filter(prod => fastDelivery ? prod.fastDelivery===true : true);
    console.log(fastDelivery);

    if (sort === "hightolow") {
        return productData.sort((a, b) => b.price - a.price);
    } else if (sort === "lowtohigh") {
        return productData.sort((a, b) => a.price - b.price);
    } else {
        return productData;
    }
}

function Catalogue() {
    const products = useProduct();
    const {state, dispatch} = useProductFilter();
    console.log(state);
    let productData = products.products;
    console.log(productData);
    // {
    //   _id: uuid(),
    //   title: "FRIENDS t-shirt",
    //   availbility: "In stock",
    //   price: "499",
    //   categoryName: "F.R.I.E.N.D.S.",
    //   photo: "/friends1.jpg"
    // }

    productData = getFilteredData(state, productData);

        return (
        <div>
            <h1>Catalogue</h1>      
            <FilterSection/>
            <div className='productListing'>
                {productData.map(p => <ProductCard key={p._id} title={p.title} availbility={p.availbility} price={p.price} categoryName={p.categoryName} photo={p.photo} rating = {p.rating}/>)}
            </div>
        </div>
        
        )
}


//productData = {p.title}
export default Catalogue