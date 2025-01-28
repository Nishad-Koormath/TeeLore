import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-light mt-5 py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3">TeeLore</h5>
            <p className="text-muted mb-3">
              Discover unique t-shirts that tell your story. Quality
              craftsmanship meets creative design.
            </p>
            <div className="d-flex gap-3">
              <Link
                href="https://www.facebook.com"
                className="text-secondary"
                target="_blank"
              >
                <i className="bi bi-facebook fs-5"></i>
              </Link>
              <Link
                href="https://www.instagram.com"
                className="text-secondary"
                target="_blank"
              >
                <i className="bi bi-instagram fs-5"></i>
              </Link>
              <Link
                href="https://x.com"
                className="text-secondary"
                target="_blank"
              >
                <i className="bi bi-twitter fs-5"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-2 col-md-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  href="/about"
                  className="text-decoration-none text-secondary"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/products"
                  className="text-decoration-none text-secondary"
                >
                  Shop
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/contact"
                  className="text-decoration-none text-secondary"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/faq" className="text-decoration-none text-secondary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h6 className="fw-bold mb-3">Customer Service</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  href="/shipping"
                  className="text-decoration-none text-secondary"
                >
                  Shipping Info
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/returns"
                  className="text-decoration-none text-secondary"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/size-guide"
                  className="text-decoration-none text-secondary"
                >
                  Size Guide
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/privacy"
                  className="text-decoration-none text-secondary"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h6 className="fw-bold mb-3">Stay Updated</h6>
            <p className="text-muted mb-3">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <hr className="mb-4" />
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <p className="text-muted mb-0">
                &copy; {new Date().getFullYear()} TeeLore. All rights reserved.
              </p>
              <div className="d-flex gap-3">
                <Link
                  href="/terms"
                  className="text-decoration-none text-secondary small"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy"
                  className="text-decoration-none text-secondary small"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
