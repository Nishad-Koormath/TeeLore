import React from "react";
import { useCart } from "../contexts/cartContext";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, updateCartItem, getCartTotal } =
    useCart();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      updateCartItem(id, quantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-5">
        <div className="text-center empty-cart-container p-5">
          <div className="mb-4">
            <i className="bi bi-cart-x display-1 text-muted"></i>
          </div>
          <h2 className="fs-3 fw-semibold text-muted mb-3">
            Your Shopping Cart is Empty
          </h2>
          <p className="text-muted mb-4">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <Link href="/products" className="btn btn-primary btn-lg">
            <i className="bi bi-shop me-2"></i>
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0">
              <i className="bi bi-cart3 me-2"></i>
              Shopping Cart ({cartItems.length}{" "}
              {cartItems.length === 1 ? "item" : "items"})
            </h1>
          </div>

          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body p-0">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`cart-item p-4 ${
                    index !== cartItems.length - 1 ? "border-bottom" : ""
                  }`}
                >
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <div
                        className="position-relative"
                        style={{ height: "120px" }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-fit-contain"
                        />
                      </div>
                    </div>

                    <div className="col-md-5">
                      <h3 className="h6 fw-semibold mb-2">{item.title}</h3>
                      <p className="small text-muted mb-0">{item.category}</p>
                    </div>

                    <div className="col-md-3">
                      <div className="input-group input-group-sm quantity-controls">
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <i className="bi bi-dash"></i>
                        </button>
                        <input
                          type="number"
                          className="form-control text-center"
                          value={item.quantity}
                          min="1"
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              parseInt(e.target.value)
                            )
                          }
                          style={{ width: "60px" }}
                        />
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                    </div>

                    <div className="col-md-2 text-end">
                      <p className="fw-semibold mb-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-link btn-sm text-danger p-0"
                      >
                        <i className="bi bi-trash me-1"></i>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card shadow-sm border-0 bg-light">
            <div className="card-body">
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
                <div>
                  <span className="text-muted">Total:</span>
                  <span className="ms-2 fs-4 fw-bold">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
                <div className="d-flex gap-2">
                  <button
                    onClick={clearCart}
                    className="btn btn-outline-danger"
                  >
                    <i className="bi bi-trash me-2"></i>
                    Clear Cart
                  </button>
                  <button className="btn btn-primary">
                    <i className="bi bi-credit-card me-2"></i>
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .cart-item:hover {
          background-color: #f8f9fa;
        }
        .quantity-controls .form-control:focus {
          box-shadow: none;
          border-color: #dee2e6;
        }
        .empty-cart-container {
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default CartPage;
