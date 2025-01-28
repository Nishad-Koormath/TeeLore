"use client";

import React from "react";
import { Product } from "@/types/types";
import { useCart } from "../contexts/cartContext";
import Image from "next/image";
import Link from "next/link";

const ProductCard: React.FC<Product> = ({
  id,
  title,
  price,
  description,
  image,
  category,
  rating,
}) => {
  const { addToCart } = useCart();
  const product = { id, title, price, description, image, category, rating };

  return (
    <div className="col">
      <div className="card h-100 shadow border-0">
        <Link href={`/products/${id}`}>
          <div className="overflow-hidden position-relative">
            <Image
              src={image}
              alt={title}
              width={300}
              height={300}
              className="card-img-top p-4 product-image"
              style={{
                objectFit: "contain",
                transition: "transform 0.3s ease",
              }}
            />

            {category && (
              <span className="position-absolute top-0 start-0 m-3 badge bg-secondary">
                {category}
              </span>
            )}
          </div>
        </Link>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold mb-2 ">{title}</h5>

          <p className="card-text text-muted small mb-2 ">
            {description.length > 100
              ? `${description.substring(0, 100)}...`
              : description}
          </p>

          {rating && (
            <div className="mb-2">
              <span className="badge bg-warning text-dark">
                <i className="bi bi-star-fill me-1"></i>
                {rating.rate} ({rating.count})
              </span>
            </div>
          )}

          <div className="mt-auto">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <span className="text-primary fs-4 fw-bold">${price}</span>
            </div>

            <button
              className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
              onClick={() => {
                console.log("add to cart button clicked");
                addToCart(product);
              }}
            >
              <i className="bi bi-cart-plus"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.15) !important;
        }
        .card:hover .product-image {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
