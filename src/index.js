import '#Confing/env.js';
import httpServer from '#Confing/http.js';

const bootstrap = () => {
    httpServer.listen(process.env.PORT, () => {
        console.log(`Servidor Corriendo en PUERTO: ${process.env.PORT}`);
    });
};

bootstrap();
