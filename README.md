# 🚀 Portfólio Full-Stack - Thalita Drummont

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
  <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" />
</div>

## 📋 Sobre o Projeto

Este é meu portfólio pessoal desenvolvido como uma aplicação full-stack moderna, demonstrando minhas habilidades em desenvolvimento web e design de interfaces. O projeto apresenta uma experiência visual impressionante com animações fluidas, design responsivo e uma arquitetura bem estruturada.

### ✨ Características Principais

- 🎨 **Design Moderno**: Interface elegante com gradientes e animações suaves
- 📱 **Totalmente Responsivo**: Otimizado para todos os dispositivos
- ⚡ **Performance Otimizada**: Carregamento rápido com Vite
- 🎯 **SEO Friendly**: Estrutura otimizada para mecanismos de busca
- 🌙 **Tema Adaptativo**: Suporte a modo claro/escuro
- 🚀 **Deploy Automático**: Integração com plataformas de CI/CD

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI modernos
- **Lucide React** - Ícones SVG otimizados
- **Framer Motion** - Animações fluidas

### Backend & DevOps
- **PHP** - Linguagem de programação backend
- **Laravel** - Framework PHP robusto
- **PostgreSQL** - Banco de dados relacional
- **Docker** - Containerização
- **GitHub Actions** - CI/CD automatizado

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/Tdrummont/portifolio-fullstack.git
cd portifolio-fullstack
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse a aplicação**
```
http://localhost:5173
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Build
npm run build        # Gera build de produção
npm run preview      # Preview do build de produção

# Qualidade de Código
npm run lint         # Executa o linter
npm run type-check   # Verifica tipos TypeScript
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── ui/             # Componentes de UI base (shadcn/ui)
│   ├── About.tsx       # Seção sobre mim
│   ├── Hero.tsx        # Seção principal
│   ├── Projects.tsx    # Portfólio de projetos
│   ├── Skills.tsx      # Habilidades técnicas
│   └── ...
├── hooks/              # Custom hooks
├── lib/                # Utilitários e configurações
├── pages/              # Páginas da aplicação
└── main.tsx           # Ponto de entrada da aplicação
```

## 🎯 Projetos Destacados

### 🍕 Pará Food - Sistema de Delivery
- **Stack**: PHP, Laravel, React.js, TypeScript, PostgreSQL
- **Features**: Gestão de pedidos, pagamentos, rastreamento em tempo real
- **Resultados**: 5000+ pedidos processados, 50+ restaurantes integrados

### 📋 Cartas Precatórias
- **Stack**: Laravel, Vue 3, TypeScript, PostgreSQL
- **Features**: Geração automática de protocolos, rastreamento por estado
- **Resultados**: 1000+ protocolos gerados, 100% de segurança

## 🎨 Design System

O projeto utiliza um design system consistente com:
- **Cores**: Paleta de gradientes modernos
- **Tipografia**: Hierarquia clara e legível
- **Espaçamento**: Sistema de grid responsivo
- **Componentes**: Biblioteca reutilizável de UI

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: Adaptação para tablet e desktop
- **Touch Friendly**: Interface otimizada para touch

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Deploy automático via GitHub
```

### Netlify
```bash
npm run build
# Upload da pasta dist/
```

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **LinkedIn**: [Thalita Drummont](https://linkedin.com/in/thalita-drummont)
- **GitHub**: [@Tdrummont](https://github.com/Tdrummont)
- **Email**: thalita.drummont@email.com

## 🙏 Agradecimentos

- [shadcn/ui](https://ui.shadcn.com/) - Componentes de UI incríveis
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Lucide](https://lucide.dev/) - Ícones SVG otimizados
- [Vite](https://vitejs.dev/) - Build tool moderna

---

<div align="center">
  <p>Feito com ❤️ por <strong>Thalita Drummont</strong></p>
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
</div>