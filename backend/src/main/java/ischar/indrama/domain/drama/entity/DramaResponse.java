package ischar.indrama.domain.drama.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DramaResponse {

    private int page;
    private List<Drama> results;
    private int totalPages;
    private int totalResults;
}
