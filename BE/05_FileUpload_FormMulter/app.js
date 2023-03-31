const express = require("express");
const app = express();
const PORT = 8000;

// Using multer
const multer = require("multer");
const path = require("path"); // Built-in modules(no need to import), make easier to set file path
const upload = multer({
  dest: "uploads/",
}); /// Set destination directory path where files will be uploaded in the server from clients

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads")); // Using uploads directory on express

app.get("/", (req, res) => {
  res.render("index");
});

/* single("[FILE_NAME]") : Upload one file */
// <input type="file" name="[FILE_NAME]" />
app.post("/upload", upload.single("userfile"), (req, res) => {
  console.log("req.file: "); // Information of uploaded file
  console.log(req.file);
  // {
  //   fieldname: 'userfile', // name of input type="file"
  //   originalname: 'posts-11.jpg',
  //   encoding: '7bit',
  //   mimetype: 'image/jpeg',
  //   destination: 'uploads/', // directory path where file will be saved
  //   filename: 'e5266f5d9ac672ce8688a38f51992b9e', // filename which will be saved on destination
  //   path: 'uploads/e5266f5d9ac672ce8688a38f51992b9e', // absolute path from server's root directory
  //   size: 175830
  // }

  console.log("req.body: "); // Infromation in the form
  console.log(req.body);

  res.send("Upload Succeed!");
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
