package ischar.indrama.domain.dto;

import ischar.indrama.domain.entity.Location;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import java.util.List;

@AllArgsConstructor
@Getter
@Builder
public class SearchResultDto {
    private List<Location> locations;
}
