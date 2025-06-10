
import React from 'react';
import LeadForm from '@/components/LeadForm';
import { BookOpen, TrendingUp, BarChart3, Users, CheckCircle, Target } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-500/8 rounded-full blur-lg"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-orange-400 font-semibold mb-6">
            <BarChart3 className="w-5 h-5" />
            <span>Inteligência de Mercado</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8">
            <span className="block text-gray-300 text-3xl lg:text-4xl xl:text-5xl line-through opacity-75">
              DADOS
            </span>
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-black">
              CALADOS
            </span>
            <span className="text-2xl lg:text-3xl xl:text-4xl block mt-4 text-slate-200">
              5 perguntas para tirar os dados da inércia
            </span>
          </h1>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Left side - Ebook Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-slate-700 to-blue-900 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 border-2 border-orange-500/30">
                <div className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden">
                  {/* Placeholder para a imagem do ebook */}
                  <img 
                    src="/lovable-uploads/465fb424-3acb-463c-97c5-53649c9802b4.png" 
                    alt="Ebook Dados Calados" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Center - Content */}
          <div className="lg:col-span-1 space-y-8">
            {/* O que você vai descobrir */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-orange-400" />
                <h2 className="text-xl font-bold text-white">O QUE VOCÊ VAI DESCOBRIR</h2>
              </div>
              <div className="space-y-3 text-slate-300">
                <p className="flex items-start space-x-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>Por que tantos dados viram decoração em vez de direção</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>Como transformar dashboards em decisões</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>Os 5 pontos cegos que impedem a inteligência de mercado de gerar impacto</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>Um framework prático para engajar liderança, BI e vendas na mesma cadência</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>Como criar um ciclo de decisões que aprende, ajusta e avança</span>
                </p>
              </div>
            </div>

            {/* Para quem é o material */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-orange-400" />
                <h2 className="text-xl font-bold text-white">ESSE MATERIAL É PRA VOCÊ QUE...</h2>
              </div>
              <div className="space-y-3 text-slate-300">
                <p className="flex items-start space-x-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>Lidera áreas comerciais, BI, inteligência de mercado ou planejamento</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>Sente que os dados da empresa estão soltos e mal aproveitados</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>Já investiu em ferramentas, mas as decisões ainda são lentas ou intuitivas</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>Quer desafiar sua cultura analítica e virar a chave da execução</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:col-span-1 flex justify-center">
            <LeadForm />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 pt-16 mt-16 border-t border-slate-700 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">100%</div>
            <div className="text-sm text-slate-400">Gratuito</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">PDF</div>
            <div className="text-sm text-slate-400">Download</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">5min</div>
            <div className="text-sm text-slate-400">Leitura</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
