const express = require("express");
const app = express();
const PORT = 8001;

const multer = require("multer");
const path = require("path");
// New filename with uploads/[id]/[current_time]/[extension]
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, "uploads/");
    },
    filename(req, file, callback) {
      const extension = path.extname(file.originalname);
      callback(null, req.body.id + Date.now() + extension);
    },
  }),
  limits: { fileSzie: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/result", uploadDetail.single("porfileImg"), (req, res) => {
  console.log(req.file);
  console.log(req.body);

  res.render("result", {
    imgSrc: req.file.path,
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
