import Fastify from "fastify";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "@fastify/cors";
import dailyReports from "./src/routes/dailyReports";

dotenv.config();

const fastify = Fastify({
  logger: true,
});
fastify.register(cors);

mongoose
  // @ts-ignore
  .connect(process.env.MONGO_URI)
  .catch((err) => fastify.log.error("Failed to connect to MongoDB", err));

fastify.register(dailyReports, { prefix: "/api/daily-reports" });

const port = process.env.PORT;
fastify.listen({ port: Number(port) }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server is listening at port ${port}`);
});
