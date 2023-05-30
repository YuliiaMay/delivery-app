import { useEffect, useState } from "react";
import { fetchMenu } from "../../operations/foodAPI";
import MenuList from "../../components/Shop/MenuList/MenuList";
import Filter from "../../components/Shop/Filter/Filter";
// import { fetchFeedsList } from "../../operations/foodAPI";

const ShopPage = () => {
    const [menu, setMenu] = useState([]);
    const [filtredMenu, setFilteredMenu] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        async function getMenu() {
            try {
                const data = await fetchMenu();
                setMenu(data);

                
                const uniqueTags = data
                .flatMap(item => item.tags)
                .filter((tag, index, array) => array.indexOf(tag) === index);
                // .sort((a, b) => a.localeCompare(b));   
                setTags(uniqueTags);

                return data;
            } catch (error) {
                console.log(error.message);
            }
        }

        getMenu();
    }, []);

    const handleChooseCategory = ({ target }) => {
        const chooseCategory = target.value;
        return chooseCategory;
    };

    const handleFilter = (chooseCategory) => {
        console.log(chooseCategory);
    };



    return ( 
        <>
            <Filter tags={tags} onClick={handleChooseCategory} />
            <MenuList menu={menu} onChange={handleFilter} />
        </>
    );
}

export default ShopPage;