# Locations Frontend

Este proyecto es la interfaz gráfica del sistema de gestión de ubicaciones (locations). Está desarrollado en React con TypeScript y utiliza Material-UI para los estilos y componentes.

## Características

- Muestra una lista de ubicaciones con imágenes, nombre, código y fecha de creación.
- Interfaz moderna y responsiva gracias a Material-UI.
- Consumo de API REST para obtener datos de las ubicaciones.

## Tecnologías utilizadas

- **React** (18.x)
- **TypeScript**
- **Material-UI** (MUI)
- **Axios** para consumo de API
- **Jest** y **Testing Library** para pruebas

## Requisitos previos

- Node.js (versión 16 o superior)
- npm o yarn instalado

## Instalación

1. Clona el repositorio:
    git clone https://github.com/tu-usuario/locations-frontend.git
    cd locations-frontend

2. Instala las dependencias:
    npm install

3. Crea un archivo .env basado en el ejemplo proporcionado:
    REACT_APP_API_URL=http://127.0.0.1:8000/api
    REACT_APP_API_KEY=secret123

4. Ejecución del proyecto
    Para iniciar la aplicación en modo de desarrollo:
    npm start
    La aplicación estará disponible en http://localhost:3000.

5. Pruebas
    Ejecuta las pruebas unitarias:
    npm test

6. Deploy
    Genera el build de producción:
    npm run build

7. Sube la carpeta build al servidor o plataforma de hosting que prefieras (por ejemplo, Netlify o Vercel).

8. Contacto
    Si tienes preguntas o sugerencias, por favor abre un issue en el repositorio.