import React from "react";
import { useSelector } from "react-redux";
import { Calendar, Tag } from "lucide-react";
import "./Orders.css";

function Orders() {
  const orders = useSelector((state) => state.orders);

  let orderItemsList = [];

  if (orders.length === 0) {
    orderItemsList = <li className="no-orders">No orders available</li>;
  } else {
    orderItemsList = orders.map((order, index) => {
      const itemList = order.items.map((item, idx) => (
        <li key={idx} className="item-list-item">
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="item-details">
            <span>Name: {item.name}</span>
            <span>Price: ₹{item.price}</span>
            <span>Qty: {item.quantity}</span>
          </div>
        </li>
      ));

      return (
        <li key={index} className="order-item">
          <div className="order-header">
            <p>
              <Calendar size={16} /> Date: {order.date}
            </p>
            <p>
              <Tag size={16} /> Product ID: {order.id}
            </p>
          </div>
          <ul className="item-list">{itemList}</ul>
          <p className="total">
            Total:₹{order.finalPrice.toFixed(2)}
          </p>
        </li>
      );
    });
  }

  return (
    <div className="orders-container">
      <h2>Orders</h2>
      <ul className="orders-list">{orderItemsList}</ul>
    </div>
  );
}

export default Orders;
