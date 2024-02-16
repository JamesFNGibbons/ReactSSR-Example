"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const typeorm_1 = require("typeorm");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use(body_parser_1.default.json());
        const controllersDir = path_1.default.join(__dirname, 'controllers');
        fs_1.default.readdirSync(controllersDir).forEach(dir => {
            const dirPath = path_1.default.join(controllersDir, dir);
            if (fs_1.default.statSync(dirPath).isDirectory()) {
                const indexPath = path_1.default.join(dirPath, 'index.ts');
                if (fs_1.default.existsSync(indexPath)) {
                    const controllerModule = require(indexPath);
                    if (controllerModule.default && controllerModule.default.prototype instanceof express_1.default.Router) {
                        const routerInstance = new controllerModule.default();
                        routerInstance.stack.forEach(layer => {
                            console.log(`Loading ${layer.route.path} => ${dir}/${layer.route.stack[0].name}`);
                        });
                        app.use('/', routerInstance);
                    }
                }
            }
        });
        const PORT = process.env.PORT || 3000;
        try {
            yield (0, typeorm_1.createConnection)();
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    });
}
start().catch(error => {
    console.error('Error starting the server:', error);
});
