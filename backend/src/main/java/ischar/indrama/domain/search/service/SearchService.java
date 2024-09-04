package ischar.indrama.domain.search.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import ischar.indrama.domain.search.dto.SearchResultDto;
import ischar.indrama.domain.search.entity.FilmingLocationInfo;
import ischar.indrama.domain.search.exception.LocationNotFoundException;
import ischar.indrama.domain.search.repository.LocationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RequiredArgsConstructor
@Service
public class SearchService {

    private final LocationRepository locationRepository;

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    @Transactional(readOnly = true)
    public SearchResultDto getLocations(String dramaName) {
        List<FilmingLocationInfo> locationInfos = locationRepository.findLatitudeAndLongitudeByTitle(dramaName).orElseThrow(() -> new LocationNotFoundException("촬영지를 찾을 수 없습니다."));
        return new SearchResultDto(locationInfos);
    }
}
