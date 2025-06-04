
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLeadForm, LeadFormData } from '@/hooks/useLeadForm';
import { Download, CheckCircle, Loader2 } from 'lucide-react';

const LeadForm = () => {
  const { submitLead, isSubmitting, isSubmitted } = useLeadForm();
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleInputChange = (field: keyof LeadFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.company) {
      await submitLead(formData);
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.company;

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto bg-gray-900/80 border-gold-500/30 backdrop-blur-sm animate-fade-in">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">Sucesso!</h3>
            <p className="text-gray-300">
              Seu ebook foi enviado e o download começou automaticamente.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-900/80 border-gold-500/30 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-white">
          Baixe seu Ebook Gratuito
        </CardTitle>
        <p className="text-gray-300">
          Preencha os dados abaixo para receber o material
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Nome Completo</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-gold-500"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-gold-500"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">Telefone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-gold-500"
              placeholder="(11) 99999-9999"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-white">Empresa</Label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-gold-500"
              placeholder="Nome da sua empresa"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-semibold py-3 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Baixar Ebook Gratuito
              </>
            )}
          </Button>

          <p className="text-xs text-gray-400 text-center">
            Seus dados estão seguros conosco. Não compartilhamos informações com terceiros.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;
