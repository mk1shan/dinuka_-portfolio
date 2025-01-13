import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendEmail, EmailData } from '../../utils/emailService';

const ContactForm = () => {
  const [formData, setFormData] = useState<EmailData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const success = await sendEmail(formData);
      
      if (success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="backdrop-blur-xl bg-white/[0.02] p-8 rounded-2xl border border-white/10 shadow-2xl">
        {['name', 'email', 'subject'].map((field) => (
          <motion.div
            key={field}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              value={formData[field as keyof EmailData]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              required
              className="w-full px-4 py-3 bg-white/[0.03] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 border border-white/10 placeholder-white/30"
            />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 bg-white/[0.03] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 border border-white/10 placeholder-white/30 resize-none"
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={status === 'sending'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-400 text-white rounded-lg font-medium disabled:opacity-50 transition-all duration-300"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </motion.button>

        {status === 'success' && (
          <p className="mt-4 text-green-400 text-center">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-400 text-center">Failed to send message. Please try again.</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;