import http from 'http';

const server = http.createServer((req, res) => {
  if(req.method === 'GET'){
    if(req.url === "/") {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write('호영아 오늘은 이기자');
      res.end();
  }

}})

server.listen(3000, () => {
  console.log()
})