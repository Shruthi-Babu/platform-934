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

    productData = getFilteredData(state, productData, dispatch);

    return (
        <div className='catalogue'>
            <h1>Catalogue</h1>      
            <div className='content'>
                <div>
                    <FilterSection className="filter-section"/>
                </div>
                
                <div className="product-listing">
                        {productData.map(p => 
                        <ProductCard className="product-item" key={p.id} id={p.id} title={p.title} availbility={p.availbility} price={p.price} categoryName={p.categoryName} photo={p.photo} rating = {p.rating}/>)}
                </div>                  
            </div>
        </div>        
    )
}


export default Catalogue