const http = require("http");
const url = require("url");
function firstServer(req, res) {
  if (req.url == "/") {
    let link = url.parse(req.url, true);
    //console.log(link.pathname);
    //response header
    res.writeHead(200, { "Content-Type": "text/html" }); //everything works

    //response content
    res.write("<html><body><h1>Hello from the server</h1></body></html>");

    //end of response
    res.end();
  } else if (req.url == "/newPage") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body>This is a new page</body></html>");
    res.end();
  }
}

let server = http.createServer(firstServer);

server.listen(8080);
console.log("This server is running at port 8080");