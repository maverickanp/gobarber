import multer from 'multer';
import crypto from 'crypto';
import { extname } from 'path';
import config from './config';

export default {
  storage: multer.diskStorage({
    destination: config.path.uploads,
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
