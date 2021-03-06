"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const filter_router_1 = require("./filter/routes/filter.router");
const router = express_1.Router();
router.use("/filteredimage", filter_router_1.FilterRouter);
// Root Endpoint
// Displays a simple message to the user  
router.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.send("try GET /filteredimage?image_url={{}}");
}));
exports.IndexRouter = router;
//# sourceMappingURL=index.router.js.map