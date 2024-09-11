package ischar.indrama.domain.drama.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class DramaThumbnail {

    private String name;
    private String ThumbnailPath;
}
