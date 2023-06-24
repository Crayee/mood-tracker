package de.gohl.moodtracker.entities.params;

import java.util.List;

public record Food(double calories, List<String> tags) {
}
