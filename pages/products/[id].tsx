import React from "react";
import Link from "next/link";
import ProductDetailCard from "@/components/ProductDetailCard";
import { fetch_products_by_id } from "@/services/productsServices";
import { Product } from "@/types/types";

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;

  try {
    const product: Product = await fetch_products_by_id(id);
    return {
      props: { product },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      notFound: true,
    };
  }
}

interface DetailsProps {
  product: Product;
}

const Details = ({ product }: DetailsProps) => {
  if (!product) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="text-center">
          <i className="bi bi-exclamation-circle text-muted display-1 mb-4"></i>
          <h2 className="mb-3">Product Not Found</h2>
          <p className="text-muted mb-4">
            We couldn&apos;t fetch the details for this product. Please try
            again later.
          </p>
          <Link href="/products" className="btn btn-primary">
            <i className="bi bi-arrow-left me-2"></i>
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-details-page bg-light py-5">
      <div className="container mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/" className="text-decoration-none">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/products" className="text-decoration-none">
                Products
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>
      </div>

      <ProductDetailCard {...product} />

      <style jsx global>{`
        .product-details-page {
          padding-top: 2rem;
        }

        .breadcrumb-item + .breadcrumb-item::before {
          color: #6c757d;
        }

        .rating i {
          font-size: 1.1rem;
          margin-right: 2px;
        }

        .btn-primary {
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(13, 110, 253, 0.15);
        }

        .card {
          border-radius: 1rem;
          overflow: hidden;
        }

        @media (max-width: 767.98px) {
          .card-body {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Details;
