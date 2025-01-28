import React from "react";

const Contact = () => {
  return (
    <div className="contact-page bg-light py-5">
      <div className="container mb-5">
        <div className="row text-center">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
            <p className="lead text-muted mb-4">
              We'd love to hear from you! Our team is always here to help.
            </p>
            <div className="d-flex justify-content-center gap-4 mb-5">
              <div className="contact-info text-center">
                <div className="icon-wrapper mb-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <h5 className="fw-bold">Email Us</h5>
                <p className="text-muted">support@teelore.com</p>
              </div>
              <div className="contact-info text-center">
                <div className="icon-wrapper mb-3">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <h5 className="fw-bold">Call Us</h5>
                <p className="text-muted">+1 (555) 123-4567</p>
              </div>
              <div className="contact-info text-center">
                <div className="icon-wrapper mb-3">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <h5 className="fw-bold">Visit Us</h5>
                <p className="text-muted">123 Fashion St, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <h3 className="card-title fw-bold mb-4">Send us a Message</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter your full name"
                          required
                        />
                        <label htmlFor="name">Full Name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter your email"
                          required
                        />
                        <label htmlFor="email">Email Address</label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="form-floating">
                      <select className="form-select" id="subject">
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Product Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        style={{ height: "150px" }}
                        placeholder="Write your message"
                        required
                      ></textarea>
                      <label htmlFor="message">Your Message</label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg px-5">
                    <i className="bi bi-send me-2"></i>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .contact-page {
          min-height: calc(100vh - 76px);
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          background-color: #e3f2fd;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        .icon-wrapper i {
          font-size: 24px;
          color: #1976d2;
        }

        .contact-info {
          padding: 20px;
          transition: transform 0.3s ease;
        }

        .contact-info:hover {
          transform: translateY(-5px);
        }

        .form-control,
        .form-select {
          border: 1px solid #e0e0e0;
          padding: 0.75rem;
        }

        .form-control:focus,
        .form-select:focus {
          border-color: #1976d2;
          box-shadow: 0 0 0 0.25rem rgba(25, 118, 210, 0.1);
        }

        .form-floating > label {
          padding: 1rem;
        }

        .btn-primary {
          background-color: #1976d2;
          border: none;
          padding: 0.75rem 2rem;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background-color: #1565c0;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(25, 118, 210, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Contact;
