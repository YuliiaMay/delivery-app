// import { useEffect, useState } from "react";
import MenuList from "../../components/Shop/MenuList/MenuList";
// import { fetchFeedsList } from "../../operations/foodAPI";

const ShopPage = () => {

    // const [feeds, setFeeds] = useState([]);
    // useEffect(() => {
    //     async function getFeeds() {
    //         try {
    //             const data = await fetchFeedsList();
    //             console.log(data);
    //             setFeeds(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     } 

    //     getFeeds();
    // }, [])

    return ( 
        <>
            <MenuList />
        </>
    );
}

export default ShopPage;