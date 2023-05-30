import {FiterSection, FiterContainer, TagsList, TagsItem, Tag} from "./Filter.styled";


const Filter = ({ tags }) => {
    return ( 
        <FiterSection>
            <FiterContainer>
                <TagsList>
                    {
                        tags.map(tag => 
                            <TagsItem>
                                <Tag>{tag}</Tag>
                            </TagsItem>
                        )
                    }

                </TagsList>
            </FiterContainer>
        </FiterSection>
    );
}

export default Filter;