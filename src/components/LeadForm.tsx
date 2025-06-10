
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLeadForm, LeadFormData } from '@/hooks/useLeadForm';
import { Download, CheckCircle, Loader2, BookOpen } from 'lucide-react';

const LeadForm = () => {
  const { submitLead, isSubmitting, isSubmitted } = useLeadForm();
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: ''
  });

  const handleInputChange = (field: keyof LeadFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.company && formData.position) {
      await submitLead(formData);
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.company && formData.position;

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto bg-slate-800/90 border-orange-500/30 backdrop-blur-sm animate-fade-in shadow-2xl">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">Sucesso!</h3>
            <p className="text-slate-300">
              Seu ebook foi enviado e o download começou automaticamente.
            </p>
            <div className="text-sm text-slate-400">
              Verifique também sua caixa de entrada para receber atualizações.
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-slate-800/90 border-orange-500/30 backdrop-blur-sm shadow-2xl">
      <CardHeader className="text-center border-b border-slate-700">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <BookOpen className="w-6 h-6 text-orange-400" />
          <span className="text-orange-400 font-semibold">EBOOK GRATUITO</span>
        </div>
        <CardTitle className="text-2xl font-bold text-white">
          Baixe Agora
        </CardTitle>
        <p className="text-slate-300">
          Preencha os dados abaixo para receber o material
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white font-medium">Nome Completo</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white font-medium">Telefone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
              placeholder="(11) 99999-9999"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-white font-medium">Empresa</Label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
              placeholder="Nome da sua empresa"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="position" className="text-white font-medium">Cargo</Label>
            <Input
              id="position"
              type="text"
              value={formData.position}
              onChange={(e) => handleInputChange('position', e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
              placeholder="Seu cargo na empresa"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 border-0"
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

          <p className="text-xs text-slate-400 text-center">
            Seus dados estão seguros conosco. Não compartilhamos informações com terceiros.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;
