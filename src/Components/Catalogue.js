import { useProduct } from '../context/ProductContext'
import ProductCard from './ProductCard';
import FilterSection from './FilterSection';

function Catalogue() {
const products = useProduct();
console.log(products);
let productData = products.products
console.log(productData);
// {
//   _id: uuid(),
//   title: "FRIENDS t-shirt",
//   availbility: "In stock",
//   price: "499",
//   categoryName: "F.R.I.E.N.D.S.",
//   photo: "/friends1.jpg"
// }
  return (
    <div>
      <h1>Catalogue</h1>      
      <FilterSection/>
      {productData.map(p => <ProductCard key={p._id} title={p.title} availbility={p.availbility} price={p.price} categoryName={p.categoryName} photo={p.photo} rating = {p.rating}/>)}
    </div>
    
  )
}


//productData = {p.title}
export default Catalogue