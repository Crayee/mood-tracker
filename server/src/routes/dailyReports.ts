import { getDailyReportModel } from "../models/dailyReport";
import { FastifyInstance, FastifyRequest } from "fastify";
import { DailyReport, NewReport } from "../shared/types";

type RequestWithId = FastifyRequest<{
  Params: { id: string };
}>;

export default async function dailyReports(fastify: FastifyInstance) {
  // Get all for user
  fastify.get("/user/:id", async (req: RequestWithId) => {
    const { id: userId } = req.params;
    return await getDailyReportModel()
      .find({ ownerId: userId })
      .sort({ date: "desc" })
      .exec();
  });

  // Get by Id
  fastify.get("/:id", async (req: RequestWithId) => {
    const { id } = req.params;
    return await getDailyReportModel().findById(id).exec();
  });

  // Create
  fastify.post(
    "/",
    async (
      req: FastifyRequest<{
        Body: NewReport;
      }>,
      reply
    ) => {
      const report = new (getDailyReportModel())({ ...req.body });
      const newReport = await report.save();
      return reply.status(201).send(newReport);
    }
  );

  // Delete
  fastify.delete("/:id", async (req: RequestWithId) => {
    const { id } = req.params;
    return await getDailyReportModel().findByIdAndDelete(id).exec();
  });

  // Update
  fastify.put(
    "/:id",
    async (
      req: FastifyRequest<{
        Params: { id: string };
        Body: DailyReport;
      }>
    ) => {
      const { id } = req.params;
      return await getDailyReportModel()
        .findByIdAndUpdate(id, { ...req.body })
        .exec();
    }
  );
}
