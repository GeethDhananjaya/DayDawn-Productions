import React, { useState } from 'react';
import { SectionTitle } from '../../common/SectionTitle';
import { Button } from '../../common/Button';
import { Input } from '../../ui/Input';
import { ErrorMessage } from '../../common/ErrorMessage';
import { contactService } from '../../../services/contactService';
import { getErrorMessage } from '../../../utils';
import './ContactSection.css';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Commercial',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await contactService.submitInquiry(formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Commercial',
        message: '',
      });
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <SectionTitle
          subtitle="COLLABORATE WITH US"
          title="Initiate a Production"
          description="Have a script, commercial concept, or visual project in mind? Connect with our production team."
        />

        <div className="contact-wrapper">
          {success ? (
            <div className="contact-success" role="status">
              <h3>Inquiry Received</h3>
              <p>Thank you for reaching out to DAYDAWN Productions. Our producers will review your brief and respond promptly.</p>
              <Button onClick={() => setSuccess(false)}>Send Another Message</Button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <ErrorMessage message={error} />
              <div className="contact-form__row">
                <Input
                  id="name"
                  label="Full Name"
                  placeholder="e.g. Christopher Nolan"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  id="email"
                  type="email"
                  label="Email Address"
                  placeholder="name@production.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form__row">
                <Input
                  id="phone"
                  label="Phone (Optional)"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <div className="form-group">
                  <label htmlFor="projectType" className="form-label">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    className="form-control"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="Feature Film">Feature Film</option>
                    <option value="Commercial">Commercial / Brand</option>
                    <option value="Documentary">Documentary</option>
                    <option value="Music Video">Music Video</option>
                    <option value="Post-Production / VFX">Post-Production / VFX</option>
                  </select>
                </div>
              </div>

              <Input
                as="textarea"
                id="message"
                label="Project Overview / Brief"
                placeholder="Describe project scope, timeline, and deliverables..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button type="submit" size="lg" isLoading={isLoading}>
                Submit Production Inquiry
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
