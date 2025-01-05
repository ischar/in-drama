package ischar.indrama.domain.search.dto;

import ischar.indrama.domain.search.entity.FilmingLocationInfo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import java.util.List;

@AllArgsConstructor
@Getter
@Builder
public class SearchResultDto {
    private List<FilmingLocationInfo> locationInfos;
//    private List<Location> locations;
}
