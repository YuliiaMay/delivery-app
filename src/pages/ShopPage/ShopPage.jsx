import { useEffect, useState } from "react";
import { fetchMenu } from "../../operations/foodAPI";
import MenuList from "../../components/Shop/MenuList/MenuList";
import Filter from "../../components/Shop/Filter/Filter";
// import { fetchFeedsList } from "../../operations/foodAPI";

const ShopPage = () => {
    const [menu, setMenu] = useState([]);
    // const [filtredMenu, setFilteredMenu] = useState([]);
    const [tags, setTags] = useState([]);
    const [choosenCategory, setChoosenCategory] = useState(null);

    useEffect(() => {
        async function getMenu() {
            try {
                const data = await fetchMenu();
                setMenu(data);

                
                const uniqueTags = data
                    .flatMap(item => item.tags)
                    .filter((tag, index, array) => array.indexOf(tag) === index)
                    .sort((a, b) => a.localeCompare(b));   

                setTags(uniqueTags);

                return data;
            } catch (error) {
                console.log(error.message);
            }
        }

        getMenu();
    }, []);

    // useEffect(() => {
    //     try {
    //         const filteredMenu = menu.filter((item) => {
    //             // console.log(item.tags.includes(choosenCategory));
    //             // if (item.tags.includes(choosenCategory)) {
    //             //     return item;
    //             // }
    //             console.log(item.includes(choosenCategory));
                

                
    //         });
    //         return filteredMenu;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, [choosenCategory])

    const handleChooseCategory = ({ target }) => {
        const category = target.value;
        setChoosenCategory(category);
    };


    const filterMenu = () => {
        const filteredMenu = menu.filter((item) => {
            if (item.tags.includes(choosenCategory)) {
                return item;
            }
        })
        return filteredMenu;
    }


    return ( 
        <>
            <Filter tags={tags} onClick={handleChooseCategory} />
            {
                choosenCategory
                    ? <MenuList menu={filterMenu()} />
                    : <MenuList menu={menu} />
            }
        </>
    );
}

export default ShopPage;