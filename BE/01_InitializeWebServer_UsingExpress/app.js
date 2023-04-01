// Get express directory from node_modules directory
const express = require("express");
const app = express();
const PORT = 8000; // Port 5000 ~ 5999 : Occupied by OS

/* Upload files using multer*/
const multer = require("multer");
const path = require("path"); // Built-in modules(no need to import), make easier to set file path
// const upload = multer({
//   dest: "uploads/",
// }); // Set destination directory path where files will be uploaded in the server from clients
const uploadDetail = multer({
  storage: multer.diskStorage({
    // Determine within which folder the uploaded files should be stored
    destination(req, file, callback) {
      callback(null, "uploads/");
    },
    // Determine what the file should be named inside the folder
    filename(req, file, callback) {
      const extension = path.extname(file.originalname); // Extract extension from callback parameter, file
      /* A server commnicates with several clients, 
        so the file names can be the same 
        add current time to remove duplicate names */
      // path.basename() returns without file extension
      // Date.now() returns milliseconds from 1970 Jan 1, 0 minute 0 second
      callback(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  limits: { fileSzie: 5 * 1024 * 1024 }, // Set file size limit in 5MB
  /* cf. file size:
    5 * (2 ^ 10) = 5KB
    5 * (2 ^ 10) * (2 ^ 10) = 5MB
  */
});

/* Settings for views directory */
app.set("view engine", "ejs"); // Set view engine
app.use("/views", express.static(__dirname + "/views")); // Set views directory path which contains .ejs files
/* Settings for static directory */
app.use("/static", express.static(__dirname + "/static"));
// Using body-parser
app.use(express.urlencoded({ extended: true })); // built-in function of express to use request.body // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // built-in function in express to recognize the incoming Request Object as a JSON Object
app.use("/uploads", express.static(__dirname + "/uploads")); // Using uploads directory on expres

// Rounting :
// Set pairs of browser url and page
/* 
- request: Request that client send to server
- response: Response that server send to client
 */
// url IP:PORT/ will show index.ejs
app.get("/", (request, result) => {
  result.render("index");
});

app.listen(PORT, () => {
  console.log("Start web server");
  console.log(`https://localhost:${PORT}`);
});
