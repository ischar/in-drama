package ischar.indrama.domain.repository;

import ischar.indrama.domain.entity.DramaFilmingLocation;
import ischar.indrama.domain.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LocationRepository extends JpaRepository<DramaFilmingLocation, Long> {

    @Query(value = "SELECT new ischar.indrama.domain.entity.Location(l.latitude, l.longitude) FROM DramaFilmingLocation l WHERE l.title = :title")
    Optional<List<Location>> findLatitudeAndLongitudeByTitle(@Param(value = "title") String title);
}
