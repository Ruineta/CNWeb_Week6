import React from "react";
import "../styles/App.css";

export default function Modal({ show, title, children, onClose }) {
    if (!show) return null; // Không render gì nếu modal đang tắt

    return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
                <h3 id = "modal-title">{title}</h3>
                <button className="btn-close" onClick={onClose}>✖</button>
            </div>

            <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
