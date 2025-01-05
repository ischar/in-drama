package ischar.indrama.domain.search.repository;

import ischar.indrama.domain.search.entity.DramaFilmingLocation;
import ischar.indrama.domain.search.entity.FilmingLocationInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SearchRepository extends JpaRepository<DramaFilmingLocation, Long> {

    @Query(value = "SELECT DISTINCT l.title FROM DramaFilmingLocation l")
    Optional<List<String>> findAllTitles();

    @Query(value = "SELECT new ischar.indrama.domain.search.entity.FilmingLocationInfo(l.latitude, l.longitude, l.placeName, l.placeType, l.businessHours, l.breakTime, l.closedDays, l.location) FROM DramaFilmingLocation l WHERE l.title = :title")
    Optional<List<FilmingLocationInfo>> findLatitudeAndLongitudeByTitle(@Param(value = "title") String title);
}
