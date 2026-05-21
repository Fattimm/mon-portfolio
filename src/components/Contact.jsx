import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS (replace with your public key from https://emailjs.com)
const EMAILJS_PUBLIC_KEY = 'EXY9R8nAOUkAC4IB_';
const EMAILJS_SERVICE_ID = 'service_oyodqt7';
const EMAILJS_TEMPLATE_ID = 'template_yy6yfcy';

export default function Contact({ darkMode }) {
  const [status, setStatus] = useState('idle');
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY' &&
        EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' &&
        EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      setIsConfigured(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isConfigured) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    const form = e.target;

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Erreur:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Contact
          </span>
        </h2>
        <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>

          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
              ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
              {!isConfigured ? '⚠️ Le formulaire n\'est pas configuré. Veuillez contacter via email.' : '❌ Erreur lors de l\'envoi. Veuillez réessayer ou m\'envoyer un email directement.'}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Nom</label>
              <input
                type="text" id="name" name="name" required
                placeholder="Votre nom"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-purple-500 ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                type="email" id="email" name="email" required
                placeholder="votre@email.com"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-purple-500 ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea
                id="message" name="message" rows={5} required
                placeholder="Votre message..."
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-purple-500 ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || !isConfigured}
              className={`w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity ${
                status === 'sending' || !isConfigured ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {status === 'sending' ? '📤 Envoi en cours...' : '📨 Envoyer le message'}
            </button>
          </form>

          {/* Email direct */}
          <div className={`mt-8 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Ou contactez-moi directement par email à{' '}
              <a
                href="mailto:diamata998@gmail.com"
                className="text-purple-500 hover:text-purple-400 underline"
              >
                diamata998@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}