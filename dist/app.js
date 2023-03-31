"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const genZTranslate_1 = require("./src/genZTranslate");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('public', {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));
app.get('/', (req, res) => {
    res.render('index', { translation: '' });
});
app.post('/', (req, res) => {
    const text = req.body.text;
    const translated = (0, genZTranslate_1.genZTranslate)(text);
    res.render('index', { translation: translated });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
