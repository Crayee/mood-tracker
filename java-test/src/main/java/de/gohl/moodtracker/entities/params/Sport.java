package de.gohl.moodtracker.entities.params;

import java.util.List;

public record Sport(double duration, Intensity intensity, List<String> tags) {
}
