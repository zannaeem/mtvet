import { Helmet } from "react-helmet";
import Header from "@/components/ui/header";
import ContactFooter from "@/components/ui/contact-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const HubungiKami = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:Sekretariat.Tvet@sabah.gov.my?subject=${encodeURIComponent('Pertanyaan Baru dari Laman Web Majlis TVET Sabah')}&body=${encodeURIComponent(`Nama: ${data.nama}\nEmel: ${data.emel}\n\nMesej:\n${data.mesej}`)}`;
      
      // Open default email client
      window.open(mailtoLink);
      
      // Set success status
      setSubmitStatus('success');
      
      // Reset form after a short delay
      setTimeout(() => {
        (e.target as HTMLFormElement).reset();
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Hubungi Kami - Majlis TVET Sabah</title>
        <meta name="description" content="Hubungi Majlis TVET Sabah untuk sebarang pertanyaan, cadangan atau kerjasama dalam pendidikan teknikal dan vokasional." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Contact Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  
                  {/* Left Side - Contact Information */}
                  <div className="space-y-8">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        HUBUNGI KAMI
                      </h1>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Sebarang pertanyaan boleh diajukan melalui borang yang disediakan.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">EMEL:</h3>
                        <a 
                          href="mailto:Sekretariat.Tvet@sabah.gov.my"
                          className="text-tvet-blue hover:text-tvet-blue/80 underline text-lg"
                        >
                          Sekretariat.Tvet@sabah.gov.my
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Contact Form & Map */}
                  <div className="space-y-8">
                    {/* Google Maps */}
                    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl shadow-2xl overflow-hidden p-1">
                      <div className="bg-white rounded-xl overflow-hidden">
                        <div className="aspect-video w-full">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d116.0755!3d5.9801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b6b8d8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s9%2C+Jalan+Masjid+Lama%2C+Bandaran+Berjaya%2C+88000+Kota+Kinabalu%2C+Sabah!5e0!3m2!1sen!2smy!4v1234567890"
                            title="Majlis TVET Sabah Office Location"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Full Width Contact Form - End to End */}
                <div className="mt-16 w-full">
                  <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl shadow-2xl p-1 w-full">
                    <div className="bg-white rounded-xl p-8 w-full">
                    <form onSubmit={handleSubmit} className="space-y-6 w-full">
                      {/* First Row - Name and Email side by side */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <div className="w-full">
                          <Label htmlFor="nama" className="text-base font-medium text-gray-700">
                            Nama Penuh
                          </Label>
                          <Input 
                            id="nama" 
                            name="nama"
                            placeholder="Masukkan nama anda di sini" 
                            className="mt-2 w-full"
                          />
                        </div>
                        
                        <div className="w-full">
                          <Label htmlFor="emel" className="text-base font-medium text-gray-700">
                            Alamat Emel*
                          </Label>
                          <Input 
                            id="emel" 
                            name="emel"
                            type="email" 
                            placeholder="Masukkan emel anda di sini" 
                            required
                            className="mt-2 w-full"
                          />
                        </div>
                      </div>
                      
                      {/* Second Row - Message full width */}
                      <div className="w-full">
                        <Label htmlFor="mesej" className="text-base font-medium text-gray-700">
                          Mesej Anda*
                        </Label>
                        <Textarea 
                          id="mesej" 
                          name="mesej"
                          placeholder="Tulis mesej di sini" 
                          required
                          className="mt-2 min-h-[120px] w-full"
                        />
                      </div>
                      
                                                        {/* Third Row - Submit button full width */}
                                  <div className="w-full space-y-4">
                                    <Button 
                                      type="submit" 
                                      size="lg" 
                                      disabled={isSubmitting}
                                      className="w-full bg-tvet-blue hover:bg-tvet-blue/90 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                      {isSubmitting ? (
                                        <>
                                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                          </svg>
                                          Menghantar...
                                        </>
                                      ) : (
                                        'Hantar Pertanyaan Anda'
                                      )}
                                    </Button>
                                    
                                    {/* Status Messages */}
                                    {submitStatus === 'success' && (
                                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex items-center">
                                          <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                          </svg>
                                          <span className="text-green-800 font-medium">
                                            Borang berjaya dihantar! Emel anda akan dibuka dalam aplikasi emel default.
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                    
                                    {submitStatus === 'error' && (
                                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <div className="flex items-center">
                                          <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                          </svg>
                                          <span className="text-red-800 font-medium">
                                            Ralat semasa menghantar borang. Sila cuba lagi.
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                    </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <ContactFooter />
      </div>
    </>
  );
};

export default HubungiKami;