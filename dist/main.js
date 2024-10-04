"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const helmet_1 = require("helmet");
const morgan = require("morgan");
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });
const logger_1 = require("./config/logger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.PORT || 5000;
    app.use((0, helmet_1.default)());
    app.enableCors();
    logger_1.logger.stream = {
        write: function (message, encoding) {
            logger_1.logger.info(message);
        }
    };
    app.use(morgan("dev", { stream: logger_1.logger.stream }));
    app.setGlobalPrefix('api');
    await app.listen(port, () => {
        logger_1.logger.info(`Server listening on port ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map