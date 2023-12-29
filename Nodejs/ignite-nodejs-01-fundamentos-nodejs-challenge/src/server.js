import http from "node:http";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;
  await JSON(req, res);

  return route.method === method && route.path.test(url);
});

server.listen(3333);
