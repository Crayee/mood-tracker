package de.gohl.moodtracker;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import de.gohl.moodtracker.entities.Report;
import de.gohl.moodtracker.entities.params.Parameters;
import de.gohl.moodtracker.entities.params.Rating;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.bson.Document;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class ReportRepository {

    @Inject
    MongoClient mongoClient;

    public void add(Report r) {
        Document document = new Document()
                .append("ownerId", r.ownerId())
                .append("date", r.date())
                .append("parameters", r.parameters())
                .append("rating", r.rating());
        getCollection().insertOne(document);
    }

    public List<Report> list(){
        List<Report> list = new ArrayList<>();

        try (MongoCursor<Document> cursor = getCollection().find().iterator()) {
            while (cursor.hasNext()) {
                Document document = cursor.next();
                list.add(
                        new Report(
                                document.getString("_id"),
                                document.getString("ownerId"),
                                document.get("date", LocalDate.class),
                                document.get("parameters", Parameters.class),
                                document.get("rating", Rating.class)
                        )
                );
            }
        }
        return list;
    }

    private MongoCollection<Document> getCollection() {
        return mongoClient.getDatabase("report").getCollection("report");
    }
}
