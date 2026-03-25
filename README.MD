# 🍔 OrderFlow - Backend

API responsável pelo gerenciamento de usuários, restaurantes, produtos, pedidos e pagamentos.

---

## 🚀 Tecnologias

* Node.js
* TypeScript
* Express
* PostgreSQL
* Prisma ORM

---

## 🧠 Arquitetura

O projeto segue uma abordagem baseada em:

* Clean Architecture (adaptada)
* DDD (Domain-Driven Design) leve
* Separação por módulos

### Estrutura

```
src/
  modules/
    users/
    orders/
    products/
    restaurants/

  shared/
    infra/
      http/
      database/
```

### Camadas

* **Controller** → Entrada HTTP
* **Use Case** → Regras de negócio
* **Repository** → Acesso a dados
* **Infra** → Implementações externas

---

## 📦 Instalação

```bash
git clone <repo>
cd backend
npm install
```

---

## ⚙️ Configuração

Crie um arquivo `.env`:

```
DATABASE_URL="postgresql://user:password@localhost:5432/orderflow"
JWT_SECRET="sua_chave_secreta"
PORT=3333
```

---

## 🗄️ Banco de Dados

```bash
npx prisma migrate dev
npx prisma generate
```

---

## ▶️ Rodando o projeto

```bash
npm run dev
```

---

## 🔐 Autenticação

* JWT (JSON Web Token)
* Middleware para rotas protegidas

---

## 📌 Principais funcionalidades

* Cadastro de usuários
* Autenticação
* CRUD de restaurantes
* CRUD de produtos
* Criação de pedidos
* Simulação de pagamento

---

## 🧪 Testes (futuro)

* Testes unitários para use cases
* Testes de integração

---

## 🚀 Roadmap

* [ ] Refatoração para Clean Architecture completa
* [ ] Separação em microserviços
* [ ] Comunicação via mensageria
* [ ] Dockerização

---

## 👨‍💻 Autor

Desenvolvido como projeto de estudo focado em arquitetura de software e microserviços.
