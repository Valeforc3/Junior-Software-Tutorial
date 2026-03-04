import { useState } from 'react';

'use client';


export default function ContactForm({ page = 'unknown' }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Send form data with page source
        const submissionData = {
            ...formData,
            submittedFrom: page,
            timestamp: new Date().toISOString(),
        };

        console.log('Form submitted from:', submissionData);
        
        // Add your API call here
        // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(submissionData) })

        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
            />
            <button type="submit">Send</button>
            {submitted && <p>Thank you! Your message has been sent.</p>}
        </form>
    );
}