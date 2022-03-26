import express from "express";
import serverRenderer from '../middleware/renderer';

const path = require("path");

const router = express.Router();


const actionIndex = (req, res, next) => {
    serverRenderer()(req, res, next);
};


// root (/) should always serve our server rendered page
router.use('^/$', actionIndex);


// other static resources should just be served as they are
// we want to use the compressed files so we override the request url
router.use('*.js', function (req, res, next) {
    req.url = req.url + ".br";
    res.set("Content-Encoding", "br");
    res.set("Content-Type", "text/javascript");
    next();
  });
  
router.use('*.css', function (req, res, next) {
    req.url = req.url + ".br";
    res.set("Content-Encoding", "br");
    res.set("Content-Type", "text/css");
    next();
  });

// other static files other than js and css files
router.use(express.static(
    path.resolve(__dirname, '..', '..', 'build'),
    { maxAge: '30d' },
));

// any other route should be handled by react-router, so serve the index page
router.use('*', actionIndex);


export default router;