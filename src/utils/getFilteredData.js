function getFilteredData(state, productData) {
    let {sort, includeOOS, rating, fastDelivery, category} = state;
    
    productData = productData.filter(prod => includeOOS ? true : prod.availbility ==="In stock");

    productData = productData.filter(prod => rating==="all" ? true : prod.rating>=rating);
    
    productData = productData.filter(prod => category[prod.categoryName] === true);

    productData = productData.filter(prod => fastDelivery ? prod.fastDelivery===true : true);

    if (sort === "hightolow") {
        return [...productData].sort((a, b) => b.price - a.price);
    } else if (sort === "lowtohigh") {
        return [...productData].sort((a, b) => a.price - b.price);
    } else {
        return productData;
    }
}

export default getFilteredData;