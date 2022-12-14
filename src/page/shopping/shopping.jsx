import React, { useState, useEffect } from "react";
import "./Shopping.scss";
import axios from "axios";
function Shopping() {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://motorshop-85ou.onrender.com/api/products")
      .then((res) => {
        setProducts(res.data.products);
        console.log(products);
      });
  }, []);
  return (
    <div className="shopping">
      <ul className="list">
        {products.map((product) => (
          <div key={product.id}>
            <li className="item">
              <div className="img-box">
                <img className="img" src={product.img} alt="img item" />
              </div>
              <div className="content">
                <p className="title">{product.title}</p>
                <p className="desc">{product.desc}</p>
                {/* <p className="color">{product.color}</p> */}
                <div className="color-list">
                    <div className="item red active"></div>
                    <div className="item yellow"></div>
                    <div className="item blue"></div>
                    <div className="item pink"></div>

                </div>
                <di className="more">
                    <div className="rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                    </div>
                    <div className="like">
                    <i class="fa fa-heart"></i>
                    </div>
                    </di >
                <p className="price">{product.price} VND</p>
                <div className="actions">
                <button className="btn btn-add">Add to cart</button>
                <button className="btn btn-view">View detail</button>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Shopping;
