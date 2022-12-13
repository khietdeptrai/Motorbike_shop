import { Add, Remove } from "@material-ui/icons";
import {Link} from 'react-router-dom'

import './Cart.scss'


const Cart = () => {
  return (
    <div className="Container">

      <div className="Wrapper">
        <h1 className="Title">YOUR BAG</h1>
        <div className="Top">
          <Link to ='/homepage'><button className="TopButton">CONTINUE SHOPPING</button></Link>
          <div className="TopTexts">
            <div className="TopTexts">Shopping Bag(2)</div>
            <div className="TopTexts">Your Wishlist (0)</div>
          </div>
          <button className="TopButton" type="filled">CHECKOUT NOW</button>
        </div>
        <div className="Bottom">
          <div className="Info">
            <div className="Product">
              <div className="ProductDetail">
                <image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <div className="Details">
                  <span className="ProductName">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className="ProductId">
                    <b>ID:</b> 93813718293
                  </span>
                  <div className="ProductColor" color="black" />
                  <span className="ProductSize">
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="PriceDetail">
                <div className="ProductAmountContainer">
                  <Add />
                  <div className="ProductAmount">2</div>
                  <Remove />
                </div>
                <div className="ProductPrice">$ 30</div>
              </div>
            </div>
            <hr className="Hr" />
            <div className="Product">
              <div className="ProductDetail">
                <image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <div className="Details">
                  <span className="ProductName">
                    <b>Product:</b> HAKURA T-SHIRT
                  </span>
                  <span className="ProductId">
                    <b>ID:</b> 93813718293
                  </span>
                  <div className="ProductColor" color="gray" />
                  <span className="ProductSize">
                    <b>Size:</b> M
                  </span>
                </div>
              </div>
              <div className="PriceDetai"l>
                <div className="ProductAmountContainer">
                  <Add />
                  <div className="ProductAmount">1</div>
                  <Remove />
                </div>
                <div className="ProductPrice">$ 20</div>
              </div>
            </div>
          </div>
          <div className="Summary">
            <h1 className="SummaryTitle">ORDER SUMMARY</h1>
            <div className="SummaryItem">
              <span className="SummaryItemText">Subtotal</span>
              <span className="SummaryItemPrice">$ 80</span>
            </div>
            <div className="SummaryItem">
              <span className="SummaryItemText">Estimated Shipping</span>
              <span className="SummaryItemPrice">$ 5.90</span>
            </div>
            <div className="SummaryItem">
              <span className="SummaryItemText">Shipping Discount</span>
              <span className="SummaryItemPrice">$ -5.90</span>
            </div>
            <div className="SummaryItem" type="total">
              <span className="SummaryItemText">Total</span>
              <span className="SummaryItemPrice">$ 80</span>
            </div>
            <button className="Button">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
