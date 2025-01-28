"use client";
import Link from "next/link";
import React from "react";
import { useCart } from "../contexts/cartContext";

const Navbar = () => {
  const { getTotalQuantity } = useCart();
  const cartItemCount = getTotalQuantity();

  return (
    <nav
      className="navbar navbar-expand-lg bg-white position-sticky top-0 border-bottom"
      style={{ zIndex: 2 }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <i className="bi bi-shop fs-3 me-2 text-primary"></i>
          <span className="fw-bold text-dark">TeeLore</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-4"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link
                className="nav-link mx-2 d-flex align-items-center"
                href="/"
              >
                <i className="bi bi-house-door me-2"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link mx-2 d-flex align-items-center"
                href="/products"
              >
                <i className="bi bi-grid me-2"></i>
                Products
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle mx-2 d-flex align-items-center"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-collection me-2"></i>
                Categories
              </Link>
              <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0">
                <li>
                  <Link
                    className="dropdown-item py-2"
                    href="/categories/electronics"
                  >
                    <i className="bi bi-laptop me-2"></i>
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-2"
                    href="/categories/jewelery"
                  >
                    <i className="bi bi-gem me-2"></i>
                    Jewelery
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-2"
                    href="/categories/men's%20clothing"
                  >
                    <i className="bi bi-person me-2"></i>
                    Men&apos;s Clothing
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-2"
                    href="/categories/women's%20clothing"
                  >
                    <i className="bi bi-person-standing-dress"></i>
                    Women&apos;s Clothing
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link mx-2 d-flex align-items-center"
                href="/about"
              >
                <i className="bi bi-info-circle me-2"></i>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link mx-2 d-flex align-items-center"
                href="/contact"
              >
                <i className="bi bi-envelope me-2"></i>
                Contact
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link position-relative d-flex align-items-center"
                href="/cart"
              >
                <i className="bi bi-cart3 fs-5"></i>
                Cart
                {cartItemCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItemCount > 99 ? "99+" : cartItemCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .nav-link {
          color: #4a5568;
          font-weight: 500;
          padding: 0.5rem 0;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--bs-primary);
        }

        .dropdown-menu {
          border-radius: 0.5rem;
          margin-top: 0.5rem;
        }

        .dropdown-item {
          color: #4a5568;
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background-color: var(--bs-primary);
          color: white;
        }

        .dropdown-item:hover i {
          color: white;
        }

        .navbar-brand {
          font-size: 1.5rem;
          transition: transform 0.2s ease;
        }

        .navbar-brand:hover {
          transform: scale(1.05);
        }

        .badge {
          font-size: 0.7rem;
          padding: 0.25em 0.6em;
        }

        @media (max-width: 991.98px) {
          .navbar-nav {
            padding: 1rem 0;
          }

          .nav-link {
            padding: 0.5rem 0;
          }

          .dropdown-menu {
            border: none;
            box-shadow: none;
            padding: 0 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
