package ischar.indrama.domain.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import ischar.indrama.domain.dto.SearchResultDto;
import ischar.indrama.domain.entity.Location;
import ischar.indrama.domain.exception.LocationNotFoundException;
import ischar.indrama.domain.repository.LocationRepository;
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
        List<Location> locations = locationRepository.findLatitudeAndLongitudeByTitle(dramaName).orElseThrow(() -> new LocationNotFoundException("촬영지를 찾을 수 없습니다."));
        return new SearchResultDto(locations);
    }
}
