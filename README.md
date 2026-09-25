# ✈️ WingsData

> Plataforma ágil e moderna para consulta de registros de aeronaves civis brasileiras (RAB / ANAC) com enriquecimento visual em tempo real via API do Planespotters.

[![Deploy to GitHub Pages](https://github.com/SEU_USUARIO/wingsdata/actions/workflows/deploy.yml/badge.svg)](https://github.com/SEU_USUARIO/wingsdata/actions/workflows/deploy.yml)
[![Licença](https://img.shields.io/badge/licença-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-online-success.svg)](https://SEU_USUARIO.github.io/wingsdata/)

[🔗 Acessar Demonstração Online](https://SEU_USUARIO.github.io/wingsdata/)

---

## 📌 Sobre o Projeto

O **WingsData** nasceu da necessidade de consultar dados técnicos, ano de fabricação, operadores e habilitações de aeronaves registradas no Brasil de forma instantânea, limpa e responsiva.

Diferente de consultas tradicionais em tabelas estáticas do governo, o projeto alia uma interface inspirada em aviônicos e design _glassmorphism_ moderno a uma busca indexada em memória, além de integrar atalhos diretos para monitoramento de voo (Flightradar24), acervos de fotos (JetPhotos) e certidões oficiais da ANAC.

---

## 🚀 Principais Funcionalidades

- **Busca em Tempo Real $O(1)$:** Indexação local via estrutura de dados `Map` do dump de dados abertos da ANAC, garantindo buscas instantâneas sem lentidão no cliente.
- **Normalização Inteligente de Prefixos:** Reconhecimento automático de formatos comuns da aviação brasileira (`PRCRC`, `pr-crc`, `PT-MYS`, `PS-AEF`).
- **Enriquecimento Visual Automático:** Integração assíncrona com a API pública do **Planespotters.net** para exibição de fotos em alta resolução da matrícula pesquisada e créditos autorais.
- **Histórico Persistido:** Armazenamento em `localStorage` das últimas 5 consultas do usuário com atalhos em chips clicáveis e opção de remoção individual.
- **Links Rápidos de Contexto:** Redirecionamento automático com os parâmetros da aeronave para Flightradar24, JetPhotos e consulta oficial da ANAC.
- **Pipeline Automatizada (CI/CD):** Cronjob semanal no GitHub Actions para atualizar a base de dados oficial e deploy contínuo via Pages.

---

## 🛠️ Tecnologias & Engenharia

O projeto foi construído do zero priorizando boas práticas de componentização, desacoplamento e checagem estática de tipos:

| Camada          | Tecnologia     | Detalhes                                                               |
| :-------------- | :------------- | :--------------------------------------------------------------------- |
| **Framework**   | React 18+      | Arquitetura modular baseada em hooks customizados                      |
| **Linguagem**   | TypeScript     | Tipagem estrita de contratos de dados e APIs externas                  |
| **Build Tool**  | Vite           | Empacotamento ultrarrápido com Hot Module Replacement (HMR)            |
| **Estilização** | CSS3 Nativo    | Design responsivo, variáveis CSS, temas escuros e estética aviônica    |
| **Automação**   | GitHub Actions | Workflows de atualização periódica dos dados da ANAC e deploy contínuo |
| **Hospedagem**  | GitHub Pages   | Deploy estático otimizado                                              |

---

## 📂 Arquitetura do Projeto

```text
wingsdata/
├── .github/
│   └── workflows/          # Pipelines de CI/CD (Deploy + Atualização de Dados)
├── public/
│   └── data/               # Banco cadastral da ANAC (data.json)
├── src/
│   ├── assets/             # Ícones e imagens do sistema
│   ├── components/         # Componentes isolados (Header, SearchBar, ResultCard, Footer)
│   ├── hooks/              # Custom hooks (ex: useRecentSearches com localStorage)
│   ├── services/           # Camada de integração (anacService, photoService)
│   ├── types/              # Contratos TypeScript (aircraft.ts)
│   ├── utils/              # Helpers de sanitização e regex de prefixos
│   ├── App.tsx             # Orquestrador de estado e layout
│   └── main.tsx            # Ponto de entrada da aplicação
```
