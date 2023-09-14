import { Router } from "express";
import logger from "../utils/logger.util.js";

const router = Router();

router.get('/', (req,res) =>{
    logger.fatal('Fatal Log');
    logger.error('Error Log');
    logger.warn('Warn log');
    logger.info('info log');
    logger.http('HTTP log');
    logger.debug('Debug log');
    return res.status(200).json({status: 'success', message: 'Logs printed'})
});

export default router;