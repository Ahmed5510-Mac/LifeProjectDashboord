import { React, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { insertProduct } from '../../store/product/productSlice';

const ProductAdd = () => {
    const productName = useRef(null)
    const company = useRef(null)
    const price = useRef(null)
    const quantity = useRef(null)
    const image = useRef(null)
    const countryOfManufacture = useRef(null)
    const description = useRef(null)
    const discountId = useRef(null)
    const categoryId = useRef(null)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            productName: productName.current.value,
            company: company.current.value,
            // image: e.target.files[0],
            price: price.current.value,
            quantity: quantity.current.value,
            countryOfManufacture: countryOfManufacture.current.value,
            description: description.current.value,
            discountId:discountId.current.value,
            categoryId:categoryId.current.value,
        };
        dispatch(insertProduct(data));
        productName.current.value = null;
        company.current.value = null;
        image.current.value = null;
        price.current.value = null;
        quantity.current.value = null;
        countryOfManufacture.current.value = null;
        description.current.value = null;
        discountId.current.value = null;
        categoryId.current.value = null;
    };

    return (<>
        <div className='row justify-content-center  align-items-center mx-auto'>
            <form
                className='continer px-5 py-5 text-center  mx-auto sign-Up'
                onSubmit={handleSubmit}
            >
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor='productName'>
                        <i
                            className='fa-solid border p-2 rounded-circle fa-user'
                            role='button'
                        ></i>
                    </label>
                    <input
                        className='form-control w-75 '
                        placeholder='Enter Your productName'
                        type='text'
                        name='productName'
                        ref={productName}
                        required
                    />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor='company'>
                        <i
                            className='fa-solid fa-at border p-2 rounded-circle  '
                            role='button'
                        ></i>
                    </label>
                    <input
                        className='form-control w-75 '
                        type='text'
                        placeholder='Enter the company'
                        name='company'
                        ref={company}
                        required
                    />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor='image'>
                        <i
                            className='fa-solid fa-at border p-2 rounded-circle  '
                            role='button'
                        ></i>
                    </label>
                    <input
                        className='form-control w-75 '
                        type='file'
                        placeholder='Enter Your productImage'
                        name='image'
                        ref={image}
                        
                    />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor='price'>
                        <i
                            className='fa-solid fa-unlock-keyhole border p-2 rounded-circle '
                            role='button'
                        ></i>
                    </label>
                    <input
                        className='form-control w-75 '
                        type='number'
                        placeholder='Enter Your price'
                        name='price'
                        ref={price}
                        required
                    />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor='quantity'>
                        <i
                            className='fa-solid fa-unlock-keyhole border p-2 rounded-circle  '
                            role='button'
                        ></i>
                    </label>
                    <input
                        className='form-control w-75 '
                        type='number'
                        placeholder='Your quantity'
                        name='quantity'
                        ref={quantity}
                        required
                    />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor='countryOfManufacture'>
                        <i
                            className='fa-solid border p-2 rounded-circle fa-user  '
                            role='button'
                        ></i>
                    </label>
                    <input
                        className='form-control w-75 '
                        type='text'
                        placeholder='Enter Your countryOfManufacture'
                        name='countryOfManufacture'
                        ref={countryOfManufacture}
                        required
                    />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor='description'>
                        <i
                            className='fa-solid fa-location-dot border rounded-circle p-2  '
                            role='button'
                        ></i>
                    </label>
                    <input
                        className='form-control w-75'
                        type='text'
                        placeholder='Enter Your Description'
                        name='description'
                        ref={description}
                        required
                    />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor='discountId'>
                        <i
                            className='fa-solid fa-location-dot border rounded-circle p-2  '
                            role='button'
                        ></i>
                    </label>
                    <input
                        className='form-control w-75'
                        type='text'
                        placeholder='Enter Your discountId'
                        name='discountId'
                        ref={discountId}
                        
                    />
                </div>
                <div className='d-flex align-items-center justify-content-evenly w-100'>
                    <label htmlFor='categoryId'>
                        <i
                            className='fa-solid fa-location-dot border rounded-circle p-2  '
                            role='button'
                        ></i>
                    </label>
                    <input
                        className='form-control w-75'
                        type='text'
                        placeholder='Enter Your categoryId'
                        name='categoryId'
                        ref={categoryId}
                        
                    />
                </div>
                <button className='btnSubmit btn mt-3' type='submit'>
                    Add<i className='fa-solid fa-clipboard-list mx-1'></i>
                </button>
            </form>
        </div>
    </>);
}

export default ProductAdd;