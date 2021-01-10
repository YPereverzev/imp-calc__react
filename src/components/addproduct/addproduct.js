import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/actions';

import { productsAlreadyLoadedSelector, allExportersSelector } from '../../redux/reducer/selectors';

import styles from './addproduct.module.css';
import globalStyles from '../../globalstyles.module.css';


const AddProduct = ({ activeExporter, addProduct, state, products, exporters }) => {
  return (
    <div className={`${styles.AddProduct} ${globalStyles.card_wrapper}`}>
      Добавление новой позиции к поставщику:
      <p>
        <b>"{activeExporter.exporterName}"</b>
      </p>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Название
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          id="newProductName"
          aria-describedby="basic-addon1"
        ></input>
      </div>

      <div className={styles.block_wrapper}>
        <div className={styles.block}>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Пошлина</span>
            </div>
            <input type="text" placeholder="20%" className="form-control" id="newProductDuty"></input>

            <div className="input-group-append">
              <span className="input-group-text">%</span>
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">НДС</span>
            </div>
            <input type="text" placeholder="10%" className="form-control" id="newProductVAT"></input>
            <div className="input-group-append">
              <span className="input-group-text">%</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.block_wrapper}>
        <div className={styles.block}>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Объем</span>
            </div>
            <input type="text" className="form-control" id="newProductVolume"></input>
            <div className="input-group-append">
              <span className="input-group-text">м3/шт</span>
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Вес</span>
            </div>
            <input type="text" className="form-control" id="newProductWeight"></input>
            <div className="input-group-append">
              <span className="input-group-text">кг/шт</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.block_wrapper}>
        <div className={styles.block}>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">КОД УКТВЭД</span>
            </div>
            <input type="text" className="form-control" id="newProductCode"></input>
          </div>
        </div>

        <div className={styles.block}>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"> URL</span>
            </div>
            <input type="text" className="form-control" id="newProductURL"></input>
          </div>
        </div>
      </div>
      
      <div className={styles.block_wrapper}>
        <div className={styles.price}>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Цена</span>
            </div>
            <input type="text" className="form-control" id="newProductPrice"></input>
            <div className="input-group-append">
              <span className="input-group-text">usd</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-secondary btn-sm"
          id="addNewProductBtn"
          onClick={() => addNewProductHandler(addProduct, activeExporter, products, exporters)}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

const addNewProductHandler = (addProduct, activeExporter, products, exporters) => {
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
  });

  // сбор, обработка и диспатсч инфы из ввода о новом продукте
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (newProductInfo) => dispatch(addProduct(newProductInfo)),
  };
};

const mapStateToProps = (state) => {
  return {
    products: productsAlreadyLoadedSelector(state),
    exporters: allExportersSelector(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
