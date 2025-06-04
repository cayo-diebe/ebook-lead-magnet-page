
import React from 'react';
import LeadForm from '@/components/LeadForm';
import { BookOpen, TrendingUp, BarChart3, Users } from 'lucide-react';

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
                Transforme
                <span className="block bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                  Dados em Decisões
                </span>
                Reais
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Descubra como aplicar inteligência de mercado na prática e tomar decisões estratégicas baseadas em dados concretos.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Conteúdo Prático</h3>
                  <p className="text-sm text-gray-400">Estratégias aplicáveis no dia a dia</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Casos Reais</h3>
                  <p className="text-sm text-gray-400">Exemplos de empresas de sucesso</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Ferramentas</h3>
                  <p className="text-sm text-gray-400">Templates e frameworks prontos</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Expertise</h3>
                  <p className="text-sm text-gray-400">Conhecimento de especialistas</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">50+</div>
                <div className="text-sm text-gray-400">Páginas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">10+</div>
                <div className="text-sm text-gray-400">Casos Práticos</div>
              </div>
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

      {/* Bottom section */}
      <div className="relative z-10 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Junte-se a milhares de profissionais
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Este ebook já ajudou centenas de empresas a implementar estratégias data-driven 
              e transformar seus processos de tomada de decisão.
            </p>
            <div className="flex justify-center items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-lg font-semibold text-gold-400">5.000+</div>
                <div className="text-sm text-gray-400">Downloads</div>
              </div>
              <div className="w-px h-8 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gold-400">98%</div>
                <div className="text-sm text-gray-400">Satisfação</div>
              </div>
              <div className="w-px h-8 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gold-400">4.8/5</div>
                <div className="text-sm text-gray-400">Avaliação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
