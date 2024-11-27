# BanckendDevTest

Este proyecto utiliza TypeScript, Express, Prisma y PostgreSQL.

## Instalación

### Requisitos previos

Asegúrate de tener instalado Node.js y PostgreSQL.

### Pasos de instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/tu-proyecto.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd tu-proyecto
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Configura las variables de entorno:

Copia el archivo `.env.example` y renómbralo a `.env`. Luego, configura las variables de entorno según tus necesidades. Asegurate de cambiar TU_USUARIO y TU_CONTRASEÑA por tu usuario y contraseña de postgre, esto permitirá conectarse y crear la base de datos como corresponde.

DATABASE_URL="postgresql://TU_USARIO:TU_CONTRASEÑA@localhost:5432/mydb?schema=public"
PORT=3000

5. Migra la base de datos:
 Ejecuta el comando en tu terminal.
```bash
npx prisma migrate dev --name init
```
6. Carga la base de datos con la semilla:

 Ejecuta el comando en tu terminal.
```bash
npx prisma db seed
```
