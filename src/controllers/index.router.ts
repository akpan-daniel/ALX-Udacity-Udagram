import { Request, Response, Router } from "express";
import { FilterRouter } from "./filter/routes/filter.router";

const router: Router = Router();

router.use("/filteredimage", FilterRouter);

// Root Endpoint
// Displays a simple message to the user  
router.get("/", async (req: Request, res: Response) => {
  res.send("try GET /filteredimage?image_url={{}}");
});

export const IndexRouter: Router = router;
