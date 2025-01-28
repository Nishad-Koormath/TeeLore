"use client";

import React from "react";
import { Product } from "@/types/types";
import { useCart } from "../contexts/cartContext";
import Image from "next/image";
import Link from "next/link";

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <>
      {products.map((product: Product) => (
        <div className="col" key={product.id}>
          <div className="card h-100 shadow border-0">
            <Link href={`/products/${product.id}`}>
              <div className="overflow-hidden position-relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="card-img-top p-4 product-image"
                  style={{
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                  }}
                />

                {product.category && (
                  <span className="position-absolute top-0 start-0 m-3 badge bg-secondary">
                    {product.category}
                  </span>
                )}
              </div>
            </Link>

            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-bold mb-2">{product.title}</h5>

              <div className="mt-auto">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="text-primary fs-4 fw-bold">
                    ${product.price}
                  </span>
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
        </div>
      ))}

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
    </>
  );
};

export default FeaturedProducts;
