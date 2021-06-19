import { Router } from "express";

import contatoRoutes from "./contato.routes";

const router = Router();

router.use("/contato", contatoRoutes);

export default router;
