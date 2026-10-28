# ✈️ WingsData

> Uma ferramenta ágil e moderna para consulta de registros de aeronaves civis brasileiras (RAB / ANAC) com enriquecimento visual em tempo real via API do Planespotters.

[![Deploy to GitHub Pages](https://github.com/willgdo/wingsdata/actions/workflows/deploy.yml/badge.svg)](https://github.com/willgdo/wingsdata/actions/workflows/deploy.yml)

🌐 **Demonstração online:** [https://willgdo.github.io/wingsdata](https://willgdo.github.io/wingsdata/)

---

## 📌 Sobre o Projeto

O **WingsData** foi desenvolvido para agilizar a consulta de aeronaves registradas no Brasil, permitindo pesquisar qualquer matrícula de forma instantânea, fluida e responsiva.

Diferente das consultas convencionais em páginas ou tabelas brutas de dados abertos, o projeto combina uma interface moderna em estilo *glassmorphism* com busca indexada em memória $O(1)$ e exibição dinâmica de fotos. Além disso, disponibiliza atalhos diretos para rastreamento de voo em tempo real (Flightradar24), acervos fotográficos (Planespotters) e certidões oficiais do Registro Aeronáutico Brasileiro (RAB/ANAC).

## 🚀 Principais Funcionalidades

- **Busca em Tempo Real $O(1)$:** Indexação local via estrutura de dados `Map` do dump de dados abertos da ANAC, garantindo buscas instantâneas sem lentidão no cliente.
- **Normalização Inteligente de Prefixos:** Reconhecimento automático de formatos comuns da aviação brasileira (`PRCRC`, `pr-crc`, `PT-MYS`, `PS-AEF`).
- **Enriquecimento Visual Automático:** Integração assíncrona com a API pública do **Planespotters.net** para exibição de fotos da matrícula pesquisada e créditos autorais.
- **Histórico Persistido:** Armazenamento em `localStorage` das últimas 5 consultas do usuário com atalhos em chips clicáveis e opção de remoção individual.
- **Links Rápidos de Contexto:** Redirecionamento automático com os parâmetros da aeronave para Flightradar24, Planespotters e consulta oficial da ANAC.
- **Pipeline Automatizada (CI/CD):** Cronjob semanal no GitHub Actions para atualizar a base de dados oficial e deploy contínuo via Pages.

---

## 🛠️ Tecnologias & Engenharia

O projeto foi construído do zero priorizando boas práticas de componentização, desacoplamento e checagem estática de tipos:

| Camada                  | Tecnologia               | Detalhes                                                                                           |
| :---------------------  | :----------------------  | :------------------------------------------------------------------------------------------------  |
| **Framework**           | React 18+                | Arquitetura modular baseada em hooks customizados                                                  |
| **Linguagem**           | TypeScript               | Tipagem estrita de contratos de dados e APIs externas                                              |
| **Build Tool**          | Vite                     | Empacotamento ultrarrápido com Hot Module Replacement (HMR)                                        |
| **Estilização**         | CSS3 Nativo              | Design responsivo, variáveis CSS, temas escuros e estética padrão                                  |
| **Observabilidade**     | Cloudflare Web Analytics | Telemetria sem cookies (compatível com LGPD/GDPR) com tracking de Core Web Vitals (LCP, INP, CLS)  |
| **Dados & Integrações** | Planespotters.net API    | Consumo assíncrono para obtenção de fotos reais de aeronaves e metadados de spotters               |
| **Automação (CI/CD)**   | GitHub Actions |Workflows automatizados para sincronização periódica da base ANAC e pipeline de build/deploy                  |
| **Hospedagem**          | GitHub Pages   | Deploy estático contínuo com roteamento e deep linking via Web APIs nativas                                  |

---

## 📂 Arquitetura do Projeto

```text
wingsdata/
├── .github/
│   └── workflows/          # Pipelines de CI/CD (Deploy + Atualização de Dados)
├── public/
│   └── data/               # Banco cadastral da ANAC (data.json)
│   ├── assets/             # Ícones e imagens do sistema
├── scripts/
│   └── update-data/        # Script para atualizar dados do RAB / ANAC
├── src/
│   ├── components/         # Componentes isolados (Header, SearchBar, ResultCard, Footer)
│   ├── hooks/              # Custom hooks (ex: useRecentSearches com localStorage)
│   ├── services/           # Camada de integração (anacService, photoService)
│   ├── types/              # Contratos TypeScript (aircraft.ts)
│   ├── utils/              # Helpers de sanitização e regex de prefixos
│   ├── App.tsx             # Orquestrador de estado e layout
│   └── main.tsx            # Ponto de entrada da aplicação
```

---

## 📸 Telas & Protótipo

### ✏️ Concepção & Wireframe
> Rascunho Inicial no Excalidraw: Planejamento inicial do fluxo de busca, hierarquia de informações cadastrais e posicionamento do card de detalhes.
<img width="1515" height="557" alt="Captura de tela 2026-10-28 134705" src="https://github.com/user-attachments/assets/4ae894e5-49a3-4897-9ca2-52d1fc0344e6" />

---

### 🚀 Aplicação em Produção - Tela Inicial (Busca Centralizada)
<img width="1518" height="832" alt="Captura de tela 2026-10-28 134434" src="https://github.com/user-attachments/assets/d5b02580-354a-4691-9bf2-c3c5ab2326e4" />

---

### 🚀 Aplicação em Produção - Resultado com Foto & Dados Oficiais
<img width="917" height="822" alt="Captura de tela 2026-10-28 134553" src="https://github.com/user-attachments/assets/f32da832-a51b-4792-affe-28c5128bb4d0" />

---

### 🚀 Aplicação em Produção -  Resultado com Foto & Dados Oficiais - Mobile
<img width="407" height="741" alt="Captura de tela 2026-10-28 134609" src="https://github.com/user-attachments/assets/d87f6ce4-1a3f-4efb-94cd-eb1b51ec57d4" />


