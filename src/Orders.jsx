import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Calendar, Tag, ShoppingCart, DollarSign, ChevronDown, ChevronUp } from "lucide-react";
import "./Orders.css";

function Orders() {
  const orders = useSelector((state) => state.orders);

  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const handleToggle = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  let orderItemsList = [];

  if (orders.length === 0) {
    orderItemsList = <li className="no-orders" >No orders available</li>;
  } else {
    orderItemsList = orders.map((order) => {
      const isExpanded = expandedOrderId === order.id;

      return (
        <li key={order.id} className={`order-item ${isExpanded ? "expanded" : ""}`}>
          <div className="order-header" onClick={() => handleToggle(order.id)}>
            <div className="header-left">
              <Calendar size={18} className="icon" />
              <p>Date: {order.date}</p>
            </div>

            <div className="header-right">
              <Tag size={18} className="icon" />
              <p className="product-id">OrderID: {order.id}</p>
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </div>

          <div className={`order-details ${isExpanded ? "show" : ""}`}>
            <ul className="item-list">
              {order.items.map((item, idx) => (
                <li key={idx} className="item-list-item">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <span><ShoppingCart size={14} /> {item.name}</span>
                    <span>₹{item.price}</span>
                    <span>Qty: {item.quantity}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="total">
              <DollarSign size={16} className="icon" />
              Total: ₹{order.finalPrice.toFixed(2)}
            </div>
          </div>
        </li>
      );
    });
  }

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      <ul className="orders-list">{orderItemsList}</ul>
    </div>
  );
}

export default Orders;
