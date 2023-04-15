require("dotenv").config();
import myDataSource from "./database";
import { User } from "./entity/user.entity";

myDataSource
  .initialize()
  .then(() => {
    console.log("connect successfully");
  })
  .catch(() => {
    console.log("connect failed");
  });

const promise = new Promise(async () => {
  console.log("thuc hien promise");
  const result = await myDataSource.getRepository(User);
  const user = new User();
  user.firstName = "Duyen Truong";
  user.lastName = "27042001";
  user.id = 2;
  return result.save(user);
});

promise
  .then(() => {
    console.log("add successfully");
  })
  .catch(() => {
    console.log("add failed");
  });
