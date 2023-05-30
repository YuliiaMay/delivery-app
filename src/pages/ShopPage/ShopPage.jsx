import { useEffect, useState } from "react";
import { fetchMenu } from "../../operations/foodAPI";
import MenuList from "../../components/Shop/MenuList/MenuList";
import Filter from "../../components/Shop/Filter/Filter";
// import { fetchFeedsList } from "../../operations/foodAPI";

const ShopPage = () => {
    const [menu, setMenu] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        async function getMenu() {
            try {
                const data = await fetchMenu();
                setMenu(data);

                getTags();

                return data;
            } catch (error) {
                console.log(error.message);
            }
        }

        getMenu();
    }, []);

    const getTags = () => {
        console.log("work");
    };

    return ( 
        <>
            {/* <Filter menu={menu} /> */}
            <MenuList menu={menu} />
        </>
    );
}

export default ShopPage;