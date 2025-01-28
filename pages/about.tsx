import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row text-center mb-5">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-4 fw-bold mb-3">About TeeLore</h1>
          <p className="lead text-muted mb-4">
            Crafting comfort and style since 2020
          </p>
          <hr className="w-25 mx-auto" />
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0 rounded-3 hover-card">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-bullseye fs-2 text-primary me-3"></i>
                <h3 className="card-title h4 fw-bold mb-0">Our Mission</h3>
              </div>
              <p className="card-text mb-4">
                At TeeLore, we&apos;re dedicated to revolutionizing everyday
                fashion through our premium quality T-shirts. We believe in:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Sustainable manufacturing processes
                </li>
                <li className="mb-2">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Premium quality materials
                </li>
                <li className="mb-2">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Affordable pricing for everyone
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0 rounded-3 hover-card">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-eye fs-2 text-primary me-3"></i>
                <h3 className="card-title h4 fw-bold mb-0">Our Vision</h3>
              </div>
              <p className="card-text mb-4">
                We envision a world where fashion meets comfort seamlessly. Our
                commitment includes:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Creating trendsetting designs
                </li>
                <li className="mb-2">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Building a sustainable fashion community
                </li>
                <li className="mb-2">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Innovating in eco-friendly materials
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <div className="bg-light p-4 rounded-3">
            <h3 className="text-center mb-4">Our Core Values</h3>
            <div className="row g-4">
              {[
                {
                  icon: "heart",
                  title: "Quality",
                  text: "Premium materials and craftsmanship",
                },
                {
                  icon: "globe",
                  title: "Sustainability",
                  text: "Eco-friendly practices",
                },
                {
                  icon: "people",
                  title: "Community",
                  text: "Building lasting relationships",
                },
                {
                  icon: "star",
                  title: "Innovation",
                  text: "Continuous improvement",
                },
              ].map((value, index) => (
                <div key={index} className="col-md-3 col-sm-6">
                  <div className="text-center">
                    <i
                      className={`bi bi-${value.icon} fs-1 text-primary mb-3`}
                    ></i>
                    <h5 className="fw-bold">{value.title}</h5>
                    <p className="small text-muted">{value.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center">
          <h3 className="mb-4">Ready to Join Our Journey?</h3>
          <div className="d-flex justify-content-center gap-3">
            <Link href="/products" className="btn btn-primary">
              Shop Now
            </Link>
            <Link href="/contact" className="btn btn-outline-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hover-card {
          transition: transform 0.2s ease-in-out;
        }
        .hover-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default About;
