import style from './Product.module.css';

const Product = () => {
    return (<>
        <div className={style.product}>
            <div className={style.productTitleContainer}>
                <h1 className={style.productTitle}>Product</h1>
                <button className={style.productAddButton}>Add Product</button>
            </div>
        </div>
    </>);
}

export default Product;