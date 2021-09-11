const http = require("http");

http
  .createServer((req, res) => {
    let body = [];
    req
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        console.log("chunk", chunk);
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        console.log("body", body);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(
`<html maaa=sudongyu>
<head>
   <style>
       body div #myid{
           width:100px;
           background-color: pink;
       }
       body div img{
           width: 30px;
           background-color: #ffffff;
       }
   </style>
</head>
<body>
    <div>
        <img id="myid" />
        <img />
    </div>
</body>
</html>`
        );
      });
  })
  .listen("8088");
console.log("server started");
