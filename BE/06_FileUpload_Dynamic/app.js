const express = require("express");
const app = express();
const PORT = 8002;

const multer = require("multer");
const path = require("path");
// New filename with uploads/[id]/[current_time]/[extension]
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, "uploads/");
    },
    filename(req, file, callback) {
      callback(null, file.originalname);
    },
  }),
  limits: { fileSzie: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads")); // Using uploads directory on express

app.get("/", (req, res) => {
  res.render("index");
});

app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    console.log(req.file); // Print file information on server terminal
    res.send(req.file); // Send file to the client
  }
);

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
