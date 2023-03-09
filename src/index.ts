import { server } from "./server/server";

server.listen(process.env.PORT || 3333, () => {
  console.log(`Server Runing at port ${process.env.PORT || 3333}`)
});
