package ischar.indrama.domain.drama.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Drama {
    private boolean adult;
    private String backdropPath;
    private List<Integer> genreIds;
    private int id;
    private List<String> originCountry;
    private String originalLanguage;
    private String originalName;
    private String overview;
    private double popularity;
    @JsonProperty("poster_path")
    private String posterPath;
    private String firstAirDate;
    private String name;
    private double voteAverage;
    private int voteCount;
}