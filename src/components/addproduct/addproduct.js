import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/actions';

import {
    productsAlreadyLoadedSelector,
    allExportersSelector,
} from '../../redux/reducer/selectors';

import styles from './addproduct.module.css';

const AddProduct = ({ 
    activeExporter, 
    addProduct, 
    state, 
    products,
    exporters,
}) => {
    // useEffect(() => {
    //     const addNewProductBtn = document.getElementById('addNewProductBtn');
    //     addNewProductBtn.addEventListener('click', addNewProductHandler)
    // },[]) //eslint-disable-line
    console.log(state);
    return (
        <div className={styles.wrapper}>
            Добавление новой позиции к поставщику:
            <p><b>"{activeExporter.exporterName}"</b></p>
            

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Название</span>
                </div>
                <input type="text" class="form-control" id='newProductName' aria-describedby="basic-addon1"></input>
            </div>
            
            <div className={styles.block_wrapper}>
                <div className={styles.block}> 
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" >Пошлина</span>
                        </div>
                        <input type="text" placeholder="20%" class="form-control" id="newProductDuty"></input>
                        
                        <div class="input-group-append">
                            <span class="input-group-text">%</span>
                        </div>
                    </div>
                </div>

                <div className={styles.block}> 
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" >НДС</span>
                        </div>
                        <input type="text" placeholder="10%" class="form-control" id="newProductVAT"></input>
                        <div class="input-group-append">
                            <span class="input-group-text">%</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.block_wrapper}>
                <div className={styles.block}> 
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" >Объем</span>
                        </div>
                        <input type="text" class="form-control" id="newProductVolume"></input>
                        <div class="input-group-append">
                            <span class="input-group-text">м3/шт</span>
                        </div>
                    </div>
                </div>

                <div className={styles.block}> 
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" >Вес</span>
                        </div>
                        <input type="text" class="form-control" id="newProductWeight"></input>
                        <div class="input-group-append">
                            <span class="input-group-text">кг/шт</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.block_wrapper}>
                <div className={styles.block}> 
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" >КОД УКТВЭД</span>
                        </div>
                        <input type="text" class="form-control" id="newProductCode"></input>
                    </div>
                </div>

                <div className={styles.block}> 
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" > URL</span>
                        </div>
                        <input type="text" class="form-control" id="newProductURL"></input>
                    </div>
                </div>
            </div>

            <div className={styles.block_wrapper}>
                <div className={styles.price}> 
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Цена</span>
                        </div>
                        <input type="text" class="form-control" id="newProductPrice"></input>
                        <div class="input-group-append">
                            <span class="input-group-text">usd</span>
                        </div>
                    </div>
                </div>
            
                <button 
                    type="button" 
                    class="btn btn-secondary btn-sm"
                    id="addNewProductBtn"
                    onClick={() => addNewProductHandler(addProduct, activeExporter, products, exporters)}
                >
                    Добавить</button>
            </div>
        </div>    
    );
};




const addNewProductHandler = (addProduct, activeExporter, products, exporters) => {
    // debugger;
    console.log('addNewProductHandler');
    const newProductName = document.getElementById('newProductName').value;
    const newProductVolume = +document.getElementById('newProductVolume').value;
    const newProductWeight = +document.getElementById('newProductWeight').value;
    const newProductDuty = +document.getElementById('newProductDuty').value;
    const newProductVAT = +document.getElementById('newProductVAT').value;
    const newProductCode = document.getElementById('newProductCode').value;
    const newProductURL = document.getElementById('newProductURL').value;
    const newProductPrice = +document.getElementById('newProductPrice').value;

    addProduct({
        activeExporter,
        products: products, 
        exporters: exporters,
        name: newProductName,
        weight: newProductWeight,
        volume: newProductVolume,
        duty: newProductDuty,
        productVAT: newProductVAT,
        code: newProductCode,
        productURL: newProductURL,
        price: newProductPrice,
    })

    // сбор, обработка и диспатсч инфы из ввода о новом продукте
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (newProductInfo) => dispatch(addProduct(newProductInfo))
    }
}

const mapStateToProps = (state) => {
    return {
        products: productsAlreadyLoadedSelector(state),
        exporters: allExportersSelector(state),
    }    
}

export default connect( mapStateToProps, mapDispatchToProps)(AddProduct);