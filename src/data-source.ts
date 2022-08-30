import "reflect-metadata";
import { DataSource } from "typeorm";
import { users } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "P3nt3st@w3b",
  database: "my-project",
  synchronize: true,
  logging: false,
  entities: [users],
  migrations: [],
  subscribers: [],
});
