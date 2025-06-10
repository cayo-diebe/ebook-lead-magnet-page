
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
}

export const useLeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitLead = async (data: LeadFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simular envio para o email cayodiebe@gmail.com
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Lead enviado para cayodiebe@gmail.com:', data);
      
      // Simular envio de email com os dados do lead
      const emailData = {
        to: 'cayodiebe@gmail.com',
        subject: 'Novo Lead - Ebook Dados Calados',
        body: `
          Novo lead capturado para o ebook "Dados Calados":
          
          Nome: ${data.name}
          Email: ${data.email}
          Telefone: ${data.phone}
          Empresa: ${data.company}
          Cargo: ${data.position}
          
          Data/Hora: ${new Date().toLocaleString('pt-BR')}
        `
      };
      
      console.log('Email enviado:', emailData);
      
      setIsSubmitted(true);
      toast({
        title: "Sucesso!",
        description: "Seus dados foram enviados. O download do ebook começará em instantes.",
        variant: "default",
      });

      // Simular download do PDF
      downloadPDF();
      
    } catch (error) {
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadPDF = () => {
    // Simular download do PDF melhorado
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKERhZG9zIENhbGFkb3MgLSA1IHBlcmd1bnRhcyBwYXJhIHRpcmFyIG9zIGRhZG9zIGRhIGluZXJjaWEpCi9BdXRob3IgKEplYW4gRmVycmVpcmEpCi9DcmVhdG9yIChFeHBvR2VzdMOjbykKL1Byb2R1Y2VyIChQREYgR2VuZXJhdG9yKQovQ3JlYXRpb25EYXRlIChEOjIwMjQwNjEwMDAwMDAwKQo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMyAwIFIKPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFs0IDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAzIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDUgMCBSCj4+Ci9Db250ZW50cyA2IDAgUgo+PgplbmRvYmoKNSAwIG9iago8PAovRjEgNyAwIFIKPj4KZW5kb2JqCjYgMCBvYmoKPDwKL0xlbmd0aCAyMDAKPj4Kc3RyZWFtCkJUCi9GMSAxNCBUZgo1MCA3NTAgVGQKKERhZG9zIENhbGFkb3M6IDUgcGVyZ3VudGFzIHBhcmEgdGlyYXIgb3MgZGFkb3MgZGEgaW5lcmNpYSkgVGoKMCAtMjAgVGQKKHBvciBKZWFuIEZlcnJlaXJhKSBUagowIC0zMCBUZAooQ29udGXDumRvIHByw6F0aWNvIHBhcmEgdHJhbnNmb3JtYXIgZGFkb3MgZW0gZGVjaXPDtWVzIHJlYWlzKSBUagowIC0yMCBUZAooVHJhbnNmb3JtZSBzZXVzIGRhZG9zIGVtIHZhbnRhZ2VtIGNvbXBldGl0aXZhKSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCjcgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCnhyZWYKNCA1CjUgNTM1NTI0Mzg5Cjc0IDUzNTUyNDUwOQo4MyA1MzU1MjQ1ODkKMTAyIDUzNTUyNDY2OQp0cmFpbGVyCjw8Ci9TaXplIDgKL1Jvb3QgMiAwIFIKL0luZm8gMSAwIFIKPj4Kc3RhcnR4cmVmCjUzNTUyNDcxOQolJUVPRgo=';
    link.download = 'dados-calados-ebook.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download iniciado!",
      description: "O ebook está sendo baixado para seu dispositivo.",
    });
  };

  return {
    submitLead,
    isSubmitting,
    isSubmitted,
    downloadPDF
  };
};
