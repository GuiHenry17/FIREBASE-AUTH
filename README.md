# Firebase Authentication Project

Este projeto implementa autenticação de usuários utilizando o **Firebase Authentication** em uma aplicação **React**. Ele permite que usuários se registrem, façam login e logout, com uma interface simples e responsiva.

## Funcionalidades

- Registro de novos usuários com e-mail e senha
- Login de usuários existentes
- Logout seguro
- Proteção de rotas privadas
- Interface responsiva para diferentes dispositivos

## Tecnologias

- **React**
- **Firebase Authentication**
- **React Router**
- **CSS Global**

## 🚀 Como rodar

1. **Clone o repositório:**

```bash
git clone https://github.com/GuiHenry17/FIREBASE-AUTH.git
cd FIREBASE-AUTH
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o Firebase:**

Crie um projeto no [Firebase Console](https://console.firebase.google.com/).

Atualize o arquivo `src/firebase.js` com as suas credenciais:

```js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_AUTH_DOMAIN',
  projectId: 'SEU_PROJECT_ID',
  storageBucket: 'SEU_STORAGE_BUCKET',
  messagingSenderId: 'SEU_MESSAGING_SENDER_ID',
  appId: 'SEU_APP_ID'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
```

4. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

Acesse a aplicação em `http://localhost:5173`.

## Rotas

- `/registrar`: página de cadastro
- `/login`: página de login
- `/`: área protegida (requer autenticação)

## Estilo

A aplicação usa um arquivo global de estilos (`global.css`) com variáveis CSS, responsividade e design limpo para os formulários de login e cadastro.

