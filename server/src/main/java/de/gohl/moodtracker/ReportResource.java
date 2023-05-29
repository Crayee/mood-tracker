package de.gohl.moodtracker;

import de.gohl.moodtracker.entities.Report;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;

import java.util.List;

@Path("/api/report")
public class ReportResource {

    @Inject
    ReportRepository repository;

    @POST
    public void add(Report report) {
        repository.add(report);
    }

    @GET
    public List<Report> list() {
        return repository.list();
    }
}
