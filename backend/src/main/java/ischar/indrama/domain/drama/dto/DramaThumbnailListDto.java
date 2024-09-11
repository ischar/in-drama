package ischar.indrama.domain.drama.dto;

import ischar.indrama.domain.drama.entity.DramaThumbnail;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class DramaThumbnailListDto {

    private List<DramaThumbnail> dramaThumbnailList;
}
