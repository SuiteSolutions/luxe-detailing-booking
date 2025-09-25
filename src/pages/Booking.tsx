import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Upload, X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    carBrand: '',
    carModel: '',
    year: '',
    color: '',
    licensePlate: '',
    service: '',
    message: '',
    language: 'ES',
    gdprConsent: false
  });

  const services = [
    'Detailing Integral',
    'Coating Cerámico',
    'Pulido y Corrección de Pintura',
    'Paint Protection Film (PPF)',
    'Restauración Interior',
    'Tintado de Lunas',
    'Lavado Premium',
    'Otro (especificar en mensaje)'
  ];

  const languages = [
    { value: 'ES', label: 'Español' },
    { value: 'EN', label: 'English' },
    { value: 'DE', label: 'Deutsch' },
    { value: 'FR', label: 'Français' },
    { value: 'IT', label: 'Italiano' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      if (uploadedFiles.length + newFiles.length <= 5) {
        setUploadedFiles(prev => [...prev, ...newFiles]);
      } else {
        toast({
          title: "Máximo 5 fotos",
          description: "Puedes subir un máximo de 5 fotos de tu vehículo.",
          variant: "destructive"
        });
      }
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      toast({
        title: "Consentimiento requerido",
        description: "Debes aceptar la política de privacidad para continuar.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Enviando solicitud...",
      description: "Procesando tu reserva de detailing.",
    });

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "¡Solicitud enviada!",
        description: "Te contactaremos pronto para confirmar tu reserva.",
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="pt-8">
        <section className="hero-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 min-h-[80vh] flex flex-col justify-center">
              <div className="animate-scale-in">
                <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-8" />
              </div>
              
              <div className="space-y-4">
                <h1 className="hero-title">
                  ¡Gracias por tu{' '}
                  <span className="text-luxury-gradient">Solicitud</span>!
                </h1>
                <p className="hero-subtitle max-w-2xl mx-auto">
                  Hemos recibido tu solicitud de detailing. Nuestro equipo la revisará y te contactará 
                  en las próximas 24 horas para confirmar los detalles y agendar tu cita.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-4">Resumen de tu solicitud:</h3>
                <div className="space-y-2 text-left">
                  <p><span className="font-medium">Servicio:</span> {formData.service}</p>
                  <p><span className="font-medium">Vehículo:</span> {formData.carBrand} {formData.carModel}</p>
                  <p><span className="font-medium">Email:</span> {formData.email}</p>
                  <p><span className="font-medium">Teléfono:</span> {formData.phone}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="btn-luxury">
                  <Link to="/">Volver al Inicio</Link>
                </Button>
                <Button asChild variant="outline" className="btn-outline-luxury">
                  <Link to="/servicios">Ver Servicios</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-8">
      {/* Header */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <Button asChild variant="outline" size="sm">
              <Link to="/servicios">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a Servicios
              </Link>
            </Button>
          </div>
          
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-foreground">
              Reservar{' '}
              <span className="text-luxury-gradient">Detailing Premium</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Completa el formulario y te contactaremos para confirmar tu cita y presupuesto personalizado
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="card-luxury">
                <h2 className="text-2xl font-bold mb-6">Información Personal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellidos *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Tus apellidos"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="card-luxury">
                <h2 className="text-2xl font-bold mb-6">Información del Vehículo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="carBrand">Marca *</Label>
                    <Input
                      id="carBrand"
                      name="carBrand"
                      value={formData.carBrand}
                      onChange={handleInputChange}
                      required
                      placeholder="Ej: BMW, Porsche, Audi..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="carModel">Modelo *</Label>
                    <Input
                      id="carModel"
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleInputChange}
                      required
                      placeholder="Ej: 911, M3, RS6..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Año</Label>
                    <Input
                      id="year"
                      name="year"
                      type="number"
                      min="1950"
                      max="2025"
                      value={formData.year}
                      onChange={handleInputChange}
                      placeholder="2020"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="color">Color</Label>
                    <Input
                      id="color"
                      name="color"
                      value={formData.color}
                      onChange={handleInputChange}
                      placeholder="Ej: Negro, Blanco, Rojo..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="licensePlate">Matrícula</Label>
                    <Input
                      id="licensePlate"
                      name="licensePlate"
                      value={formData.licensePlate}
                      onChange={handleInputChange}
                      placeholder="0000-ABC"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="card-luxury">
                <h2 className="text-2xl font-bold mb-6">Servicio Deseado</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="service">Tipo de servicio *</Label>
                    <Select onValueChange={handleSelectChange('service')} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el servicio que necesitas" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Vehicle Photos */}
              <div className="card-luxury">
                <h2 className="text-2xl font-bold mb-6">Fotos del Vehículo (Opcional)</h2>
                <div className="space-y-4">
                  <p className="text-text-secondary">
                    Sube hasta 5 fotos de tu vehículo para ayudarnos a preparar un presupuesto más preciso
                  </p>
                  
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-text-secondary mx-auto mb-4" />
                    <Label htmlFor="photos" className="cursor-pointer">
                      <span className="text-primary font-semibold">Haz clic para subir fotos</span>
                      <span className="text-text-secondary"> o arrastra y suelta aquí</span>
                      <Input
                        id="photos"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </Label>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Information */}
              <div className="card-luxury">
                <h2 className="text-2xl font-bold mb-6">Información Adicional</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje / Notas</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntanos cualquier detalle específico sobre tu vehículo o el servicio que necesitas..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Idioma de preferencia</Label>
                    <Select onValueChange={handleSelectChange('language')} defaultValue="ES">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((lang) => (
                          <SelectItem key={lang.value} value={lang.value}>
                            {lang.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* GDPR Consent */}
              <div className="card-luxury">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="gdprConsent"
                    checked={formData.gdprConsent}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, gdprConsent: checked as boolean }))
                    }
                    required
                  />
                  <div className="space-y-1">
                    <Label htmlFor="gdprConsent" className="text-sm leading-relaxed">
                      Acepto la{' '}
                      <Link to="/legal/privacidad" className="text-primary hover:underline">
                        Política de Privacidad
                      </Link>{' '}
                      y autorizo el tratamiento de mis datos personales para gestionar mi solicitud de detailing. *
                    </Label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <Button type="submit" className="btn-luxury text-lg px-12 py-4">
                  Enviar Solicitud de Reserva
                </Button>
                <p className="text-sm text-text-secondary mt-4">
                  Te contactaremos en un plazo máximo de 24 horas para confirmar tu reserva
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;