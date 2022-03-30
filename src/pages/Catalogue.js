import { useProduct } from '../context/ProductContext'
import ProductCard from '../Components/ProductCard';
import FilterSection from '../Components/FilterSection';
import { useProductFilter } from '../context/ProductFilterContext';
import '../Components/Stylesheets/Catalogue.css';

import {getFilteredData} from '../utils';


function Catalogue() {
    const products = useProduct();
    const {state, dispatch} = useProductFilter();
    let productData = products.products;

    productData = getFilteredData(state, productData);

    return (
        <div>
            <h1>Catalogue</h1>      
            <FilterSection/>
            <div className='productListing'>
                {productData.map(p => 
                <ProductCard key={p._id} title={p.title} availbility={p.availbility} price={p.price} categoryName={p.categoryName} photo={p.photo} rating = {p.rating}/>)}
            </div>
        </div>        
    )
}


//productData = {p.title}
export default Catalogue