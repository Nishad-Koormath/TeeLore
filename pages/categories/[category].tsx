import React, { useState } from "react";
import ProductCard from "@/components/ProductsCard";
import { fetch_products_by_category } from "@/services/productsServices";
import { Product } from "@/types/types";

const styles = {
  cardContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  productGrid: {
    marginLeft: "-8px",
    marginRight: "-8px",
  },
};

export async function getServerSideProps(context: {
  params: { category: string };
}) {
  const { category } = context.params;

  try {
    const products: Product[] = await fetch_products_by_category(category);
    return {
      props: {
        products,
        category,
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      notFound: true,
    };
  }
}

interface DetailsProps {
  products: Product[];
  category: string;
}

const Category = ({ products, category }: DetailsProps) => {
  const [sortBy, setSortBy] = useState("default");

  const getSortedProducts = () => {
    switch (sortBy) {
      case "price-low":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...products].sort((a, b) => b.price - a.price);
      case "name":
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return products;
    }
  };

  if (!products || products.length === 0) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-info" role="alert">
          <i className="bi bi-exclamation-circle me-2"></i>
          No products found in this category.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light min-vh-100">
      <div className="bg-white shadow-sm">
        <div className="container py-4 text-center">
          <h2 className="display-6 fw-bold mb-3">
            <i className="bi bi-grid me-2"></i>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>
          <div className="w-50 mx-auto border-bottom border-primary border-2 mb-3"></div>
          <p className="text-muted">
            Explore our collection of premium {category} products
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-md-6 offset-md-6">
            <div className="d-flex justify-content-end align-items-center">
              <label className="me-2">
                <i className="bi bi-sort-down me-1"></i>
                Sort by:
              </label>
              <select
                className="form-select w-auto"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
        </div>

        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4"
          style={styles.productGrid}
        >
          {getSortedProducts().map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-muted text-center mt-4">
          <i className="bi bi-box-seam me-1"></i>
          Showing {products.length} products
        </div>
      </div>
    </div>
  );
};

export default Category;
