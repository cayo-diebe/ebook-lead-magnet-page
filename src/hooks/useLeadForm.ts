import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast"; // ajuste aqui
import emailjs from 'emailjs-com';

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
}
const SERVICE_ID = 'service_szvsy99';
const TEMPLATE_ID = 'template_rgto2gv'; // substitua pelo seu
const PUBLIC_KEY = 'CBle3ZCNhseIwR4yY'; // pegue em Account > API Keys

export const useLeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();



const submitLead = async (data: LeadFormData) => {
  setIsSubmitting(true);

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      position: data.position,
      datetime: new Date().toLocaleString('pt-BR'),
    }, PUBLIC_KEY);

    setIsSubmitted(true);
    toast({
      title: "Sucesso!",
      description: "Seus dados foram enviados. O download do ebook começará em instantes.",
    });

    downloadPDF();

  } catch (error) {
    console.error("Erro ao enviar email:", error);
    toast({
      title: "Erro",
      description: "Não foi possível enviar os dados.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = 'https://thankful-sky-0d154f410.6.azurestaticapps.net/EBOOK_DADOS_CALADOS_Jean_Ferreira_2025.pdf';
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
    // isSubmitting,
    // isSubmitted,
    // downloadPDF
  };
};
