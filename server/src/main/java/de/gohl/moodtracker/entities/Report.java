package de.gohl.moodtracker.entities;

import de.gohl.moodtracker.entities.params.Parameters;
import de.gohl.moodtracker.entities.params.Rating;

import java.time.LocalDate;

public record Report(String _id, String ownerId, LocalDate date, Parameters parameters, Rating rating) {

    public Report create(String ownerId, LocalDate date, Parameters parameters, Rating rating) {
        return new Report(null, ownerId, date, parameters, rating);
    }

}
