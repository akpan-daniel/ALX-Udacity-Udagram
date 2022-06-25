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
const util_1 = require("../../../util/util");
const router = express_1.Router();
router.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    /*
    Endpoint to filter an image from a public url.
    GET /filteredimage?image_url={{URL}}
    QUERY PARAMATERS
        image_url: URL of a publicly accessible image
     RETURNS
       the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]
    */
    const image_url = req.query.image_url;
    //    1. validate the image_url query
    if (!image_url) {
        return res.status(400).send("image_url not specified");
    }
    try {
        //    2. call filterImageFromURL(image_url) to filter the image
        const image = yield util_1.filterImageFromURL(image_url);
        // console.log(image);
        //    3. send the resulting file in the response
        return res.status(200).sendFile(image, () => {
            //    4. deletes any files on the server on finish of the response
            util_1.deleteLocalFiles([image]);
        });
    }
    catch (err) {
        console.log(err.message);
        return res.status(422).send(err.message);
    }
}));
exports.FilterRouter = router;
//# sourceMappingURL=filter.router.js.map