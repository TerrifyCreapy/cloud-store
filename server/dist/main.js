"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const dist_1 = require("@nestjs/swagger/dist");
const cookieParser = require("cookie-parser");
const express = require("express");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: false });
    app.enableCors({ credentials: true, origin: true });
    app.use(cookieParser());
    app.use("/uploads", express.static((0, path_1.join)(__dirname, "..", "uploads")));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('cloud-store')
        .setDescription('Cloud store api')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('cloud')
        .build();
    const document = dist_1.SwaggerModule.createDocument(app, config);
    dist_1.SwaggerModule.setup('swagger', app, document, {
        swaggerOptions: {
            persistAuthorization: true
        }
    });
    await app.listen(7000);
}
bootstrap();
//# sourceMappingURL=main.js.map