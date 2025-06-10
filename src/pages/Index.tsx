
import React from 'react';
import LeadForm from '@/components/LeadForm';
import { BookOpen, TrendingUp, BarChart3, Users, CheckCircle, Target } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gold-500/8 rounded-full blur-lg"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,173,78,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(245,173,78,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gold-400 font-semibold">
                <BarChart3 className="w-5 h-5" />
                <span>Inteligência de Mercado</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                <span className="block bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                  DADOS CALADOS
                </span>
                <span className="text-2xl lg:text-3xl xl:text-4xl block mt-2">
                  5 perguntas para tirar os dados da inércia
                </span>
              </h1>
            </div>

            {/* O que você vai descobrir */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-gold-400" />
                <h2 className="text-xl font-bold text-white">O QUE VOCÊ VAI DESCOBRIR</h2>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>• Por que tantos dados viram decoração em vez de direção</p>
                <p>• Como transformar dashboards em decisões</p>
                <p>• Os 5 pontos cegos que impedem a inteligência de mercado de gerar impacto</p>
                <p>• Um framework prático para engajar liderança, BI e vendas na mesma cadência</p>
                <p>• Como criar um ciclo de decisões que aprende, ajusta e avança</p>
              </div>
            </div>

            {/* Para quem é o material */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-gold-400" />
                <h2 className="text-xl font-bold text-white">ESSE MATERIAL É PRA VOCÊ QUE...</h2>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>• Lidera áreas comerciais, BI, inteligência de mercado ou planejamento</p>
                <p>• Sente que os dados da empresa estão soltos e mal aproveitados</p>
                <p>• Já investiu em ferramentas, mas as decisões ainda são lentas ou intuitivas</p>
                <p>• Quer desafiar sua cultura analítica e virar a chave da execução</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">100%</div>
                <div className="text-sm text-gray-400">Gratuito</div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex items-center justify-center">
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
