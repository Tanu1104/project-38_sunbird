import React from "react";
import "./order_history.css";

const orders = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "earbuds",
    price: 1000,
    status: "Delivered",
    date: "Sep 30, 2025",
    image: "/products/earbuds/earbuds.jpeg",
  },
  {
    id: 2,
    name: "Headphones",
    category: "headphones",
    price: 2500,
    status: "Delivered",
    date: "Sep 22, 2025",
    image: "/products/headphones/headphones.jpeg",
  },
  {
    id: 3,
    name: "Smartwatch",
    category: "smartwatch",
    price: 4599,
    status: "Refund Completed",
    date: "Jan 15, 2026",
    image: "/products/smartwatch/smartwatch.jpeg",
    refundMessage: "Refund of ₹4599 has been credited to your original payment method."
  },
];

const OrderHistory = () => {
  return (
    <div className="orders-page">
      <div className="orders-container">

        {/* ===== SIDEBAR (NO NEW FILE) ===== */}
        <aside className="orders-sidebar animate-slide-in">
          <h2 className="sidebar-title">Filters</h2>

          <div className="sidebar-section">
            <h4>ORDER STATUS</h4>
            <label><input type="checkbox" /> On the way</label>
            <label><input type="checkbox" /> Delivered</label>
            <label><input type="checkbox" /> Cancelled</label>
            <label><input type="checkbox" /> Returned</label>
          </div>

          <div className="sidebar-section">
            <h4>ORDER TIME</h4>
            <label><input type="checkbox" /> Last 30 days</label>
            <label><input type="checkbox" /> 2024</label>
            <label><input type="checkbox" /> 2023</label>
            <label><input type="checkbox" /> Older</label>
          </div>
        </aside>

        {/* ===== ORDERS LIST ===== */}
        <div className="orders-content">
          <header>
            <h2 className="orders-title">Order History</h2>
            <div className="search-bar">
              <input type="text" placeholder="Search all orders" />
              <button>Search</button>
            </div>
          </header>

          {orders.map((order, index) => (
            <div
              key={order.id}
              className="order-card animate-order-card"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <img src={order.image} alt={order.name} />

              <div className="order-info">
                <h3>{order.name}</h3>
                <p className="category">{order.category}</p>
                <p className="price">₹{order.price}</p>
                {order.status === 'Refund Completed' && (
                  <p className="refund-message">{order.refundMessage}</p>
                )}
              </div>

              <div className="order-status">
                <div>
                  <span className={`status-dot ${order.status === 'Refund Completed' ? 'status-refund' : ''}`} />
                  <p className={`status-text ${order.status === 'Refund Completed' ? 'status-refund-text' : ''}`}>{order.status}</p>
                </div>
                <span className="date">{order.date}</span>
                <div className="buttons">
                  {order.status !== 'Refund Completed' && (
                    <button className="track-button">Track Order</button>
                  )}
                  <button className="rate-button">⭐ Rate & Review</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OrderHistory;
