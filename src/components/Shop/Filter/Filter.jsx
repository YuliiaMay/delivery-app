import { nanoid } from "nanoid";
import { FiterSection, FiterContainer, TagsList, TagsItem, Tag } from "./Filter.styled";


const Filter = ({ tags, onClick }) => {
    return ( 
        <FiterSection>
            <FiterContainer>
                <TagsList>
                    {
                        tags.map(tag => 
                            <TagsItem key={nanoid()}>
                                <Tag
                                    type="button"
                                    value={tag}
                                    onClick={onClick}>
                                    {tag}
                                </Tag>
                            </TagsItem>
                        )
                    }
                </TagsList>
            </FiterContainer>
        </FiterSection>
    );
}

export default Filter;