"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("./user/entities/user.entity");
const file_entity_1 = require("./files/entities/file.entity");
const config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1',
    database: 'cloud-store',
    entities: [user_entity_1.UserEntity, file_entity_1.FileEntity],
    synchronize: true,
    autoLoadEntities: true,
};
exports.default = config;
//# sourceMappingURL=orm_config.js.map