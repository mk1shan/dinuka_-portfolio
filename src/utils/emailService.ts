import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = "service_your_service_id";  // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = "template_your_template_id";  // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = "your_public_key";  // Replace with your Public Key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: 'dinukavidushan23@gmail.com'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return response.status === 200;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};