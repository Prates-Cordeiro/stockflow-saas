# stockflow-saas
Multi-tenant inventory management SaaS built with Next.js, TypeScript, Supabase and Stripe.

# StockFlow SaaS

Sistema de Gestão de Estoque SaaS desenvolvido para empresas que precisam controlar entradas, saídas, transferências e movimentações de produtos em múltiplos locais.

## 📋 Sobre o Projeto

O StockFlow é uma plataforma SaaS (Software as a Service) criada para atender armazéns, almoxarifados, lojas físicas e operações de e-commerce.

O sistema permite que empresas tenham controle total sobre seu estoque em tempo real, com rastreabilidade das movimentações e gestão centralizada.

## 🚀 Funcionalidades

### MVP

* Cadastro de empresas
* Autenticação de usuários
* Controle de permissões
* Cadastro de produtos
* Cadastro de locais de armazenamento
* Entradas de estoque
* Saídas de estoque
* Controle de saldo por local
* Alertas de estoque mínimo
* Dashboard operacional

### Futuras Funcionalidades

* Transferências entre locais
* Leitor de código de barras
* Relatórios avançados
* Importação via CSV
* Cadastro de fornecedores
* Ordens de compra
* API pública
* Aplicativo mobile

## 🏗️ Arquitetura

O sistema segue uma arquitetura multi-tenant, permitindo que várias empresas utilizem a mesma aplicação com isolamento completo de dados.

Cada empresa possui:

* Usuários próprios
* Produtos próprios
* Movimentações próprias
* Locais próprios
* Assinatura própria

## 🛠️ Tecnologias

### Front-end

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui

### Back-end

* Next.js API Routes
* TypeScript

### Banco de Dados

* PostgreSQL
* Supabase
* Row Level Security (RLS)

### Pagamentos

* Stripe

### Hospedagem

* Vercel

## 📊 Modelo de Dados

### Empresas

Representa os clientes da plataforma.

### Usuários

Controle de acesso e permissões.

### Produtos

Cadastro completo dos itens do estoque.

### Locais

Armazéns, depósitos, lojas ou prateleiras.

### Movimentações

Registro imutável de:

* Entrada
* Saída
* Transferência
* Ajuste

### Saldos

Quantidade atual de cada produto por local.

### Assinaturas

Controle de planos, cobrança e período de teste.

## 🔒 Segurança

* Multi-tenancy
* Row Level Security (RLS)
* Controle de permissões por função
* Isolamento de dados entre empresas
* Autenticação segura

## 📈 Roadmap

### Fase 0 - Fundação

* [ ] Autenticação
* [ ] Multiempresa
* [ ] Controle de assinaturas
* [ ] Trial gratuito

### Fase 1 - MVP

* [ ] Produtos
* [ ] Locais
* [ ] Movimentações
* [ ] Dashboard
* [ ] Alertas

### Fase 2 - Operação

* [ ] Código de barras
* [ ] Transferências
* [ ] Relatórios
* [ ] Importação CSV

### Fase 3 - Expansão

* [ ] Fornecedores
* [ ] Compras
* [ ] API
* [ ] Mobile

## 🎯 Objetivo

Fornecer uma solução simples, escalável e acessível para gestão de estoque, utilizando um modelo SaaS baseado em assinatura recorrente.

## Software Engenieers

Tcordeir0 and RafhaellPrates

Projeto em desenvolvimento.
