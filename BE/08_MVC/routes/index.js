const express = require("express");
const controller = require("../controller/Cmain");
/* controller = {
    main : () => {}
    comments : () => {}
} */
const router = express.Router();
/* Above is the same as
    const app = express();
    app.get()
*/

router.get("/", controller.main);
router.get("/comments", controller.comments);
router.get("/comment/:id", controller.comment);

// To export router so that access router on app.js
module.exports = router;
