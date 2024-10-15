# 🌍💼 Vita Wallet - Challenge

Este proyecto es una aplicación web para un sistema de intercambios de divisas, donde los usuarios pueden ver sus balances, realizar transacciones, y consultar tasas de cambio actualizadas en tiempo real. La aplicación también incluye una página de inicio de sesión y funcionalidades para gestionar el intercambio de crypto monedas.

## 🎯 Descripción del Desafío

El objetivo del desafío es desarrollar un sistema de intercambio de divisas utilizando React y React Context. La aplicación permite a los usuarios:

- 🔐 Iniciar sesión con credenciales dadas.
- 📊 Visualizar su balance e historial de transacciones.
- 💱 Realizar intercambios de divisas.
- 💹 Validar tasas de cambio y mostrar balances actualizados.

### 🔗 Endpoints Consumidos

- **🔐 Iniciar sesión**: `https://api.qa.vitawallet.io/api/auth/sign_in`
- **👤 Obtener información del perfil**: `https://api.qa.vitawallet.io/api/profile`
- **📈 Obtener precios de criptomonedas**: `https://api.qa.vitawallet.io/api/users/get_crypto_multi_prices`
- **💸 Listar transacciones**: `https://api.qa.vitawallet.io/api/transactions`
- **💱 Realizar intercambio**: `https://api.qa.vitawallet.io/api/transactions/exchange`

## 🛠️ Tecnologías Utilizadas

El proyecto está construido con las siguientes tecnologías:

- ⚛️ **React**
- 🟦 **TypeScript**
- 🔗 **React Context**
- 📝 **React Hook Form**
- 🔄 **TanStack Query**
- 📡 **Axios**
- 🎨 **Shadcn/ui**
- 🖌️ **Tailwind CSS**
- 🔍 **Lucide Icons**
- ⚡ **Vite**
- 📏 **ESLint y Prettier**

## 🚀 Funcionalidades

### 🔐 Página de Inicio de Sesión

- Permite a los usuarios autenticarse utilizando credenciales proporcionadas.
- Al iniciar sesión correctamente, se guarda el token de autenticación y se utiliza en las solicitudes subsecuentes.

### 🏠 Home (Dashboard)

- Muestra el balance actual del usuario y sus transacciones más recientes.

### 💱 Página de Intercambio

- Permite a los usuarios realizar intercambios de criptomonedas de acuerdo a las tasas de cambio.
- Validación de tasas de cambio y balances antes de confirmar la transacción.

## 📝 Instalación y Uso

1. Clona el repositorio:

```bash
git clone https://github.com/FavioMagallanes/vita-wallet.git
```

2. Navega al directorio del proyecto:

```bash
cd vita-wallet
```

3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```
