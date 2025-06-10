
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
      // Simular envio para o email (em produção, você precisaria de um backend)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Lead enviado para cayodiebe@gmail.com:', data);
      
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
    // Simular download do PDF
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKERhZG9zIENhbGFkb3MgLSA1IHBlcmd1bnRhcyBwYXJhIHRpcmFyIG9zIGRhZG9zIGRhIGluZXJjaWEpCi9BdXRob3IgKEV4cG9HZXN0w6NvKQovQ3JlYXRvciAoRXhwb0dlc3TDo28pCi9Qcm9kdWNlciAoUERGIEdlbmVyYXRvcikKL0NyZWF0aW9uRGF0ZSAoRDoyMDI0MDYwNDAwMDAwMCkKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDMgMCBSCj4+CmVuZG9iagozIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovS2lkcyBbNCAwIFJdCi9Db3VudCAxCj4+CmVuZG9iago0IDAgb2JqCjw8Ci9UeXBlIC9QYWdlCi9QYXJlbnQgMyAwIFIKL01lZGlhQm94IFswIDAgNjEyIDc5Ml0KL1Jlc291cmNlcyA8PAovRm9udCA1IDAgUgo+PgovQ29udGVudHMgNiAwIFIKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0YxIDcgMCBSCj4+CmVuZG9iago2IDAgb2JqCjw8Ci9MZW5ndGggMTIzCj4+CnN0cmVhbQpCVAovRjEgMTQgVGYKNTAgNzUwIFRkCihEYWRvcyBDYWxhZG9zOiA1IHBlcmd1bnRhcyBwYXJhIHRpcmFyIG9zIGRhZG9zIGRhIGluZXJjaWEpIFRqCjAgLTIwIFRkCihDb250ZcO6ZG8gcHLDoXRpY28gcGFyYSB0cmFuc2Zvcm1hciBkYWRvcyBlbSBkZWNpc8O1ZXMgcmVhaXMpIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKNyAwIG9iago8PAovVHlwZSAvRm9udAovU3VidHlwZSAvVHlwZTEKL0Jhc2VGb250IC9UaW1lcy1Sb21hbgo+PgplbmRvYmoKeHJlZgo0IDUKMDAWODQ4Nzc2Nwo2NSA1MzU1MjQzODkKNzQgNTM1NTI0NTA5CjgzIDUzNTUyNDU4OQoxMDIgNTM1NTI0NjY5CnRyYWlsZXIKPDwKL1NpemUgOAovUm9vdCAyIDAgUgovSW5mbyAxIDAgUgo+PgpzdGFydHhyZWYKNTM1NTI0NzE5CiUlRU9GCg==';
    link.download = 'dados-calados-ebook.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return {
    submitLead,
    isSubmitting,
    isSubmitted,
    downloadPDF
  };
};
