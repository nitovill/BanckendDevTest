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
## Endpoints de la API

### `GET /api/campaings`

Obtiene la lista de todas las campañas.

**Respuesta:**
```json
{
    "success": true,
    "data": [
        {
            "id": "55a1bdd0-af32-4aad-b5f6-bb83e9bcfe58",
            "name": "Black Friday Sale",
            "status": true,
            "totalResponses": 0,
            "url": "https://example.com/black-friday",
            "questionIDs": [
                "fcf4c83b-2c02-46b2-af94-4b1f94c5a88a",
                "b6683ddc-e73b-4d1c-a9d2-8d9549b56ba6"
            ],
            "questions": [
                {
                    "question": "What is your favorite Black Friday deal?"
                },
                {
                    "question": "How can we improve your shopping experience?"
                }
            ]
        }
    ]
}
```
### `POST /api/campaings`

Crea una campaña.

**Respuesta:**
```json
{
    {
        "id": "fe0ca95c-7e8b-45eb-b0d7-d5e5bde24bf8",
        "name": "día del niño",
        "status": "active",
        "totalResponses": 0,
        "url": null,
        "questionIDs": []
    }
}
```
