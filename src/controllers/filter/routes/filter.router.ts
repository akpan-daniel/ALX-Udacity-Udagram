import { Response, Request, Router } from "express";
import { filterImageFromURL, deleteLocalFiles } from "../../../util/util";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  /*
  Endpoint to filter an image from a public url.
  GET /filteredimage?image_url={{URL}}
  QUERY PARAMATERS
      image_url: URL of a publicly accessible image
   RETURNS
     the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]
  */
  const image_url: string = req.query.image_url;
  //    1. validate the image_url query
  if (!image_url) {
    return res.status(400).send("image_url not specified");
  }
  try {
    //    2. call filterImageFromURL(image_url) to filter the image
    const image: string = await filterImageFromURL(image_url);
    // console.log(image);
    //    3. send the resulting file in the response
    return res.status(200).sendFile(image, () => {
      //    4. deletes any files on the server on finish of the response
      deleteLocalFiles([image]);
    });
  } catch (err: any) {
    console.log(err.message);
    return res.status(422).send(err.message);
  }
});

export const FilterRouter: Router = router;
