import { useState, useEffect } from "react";
import Banner from "../../components/home/Banner";
import Deals from "./deals/Deals";
import SearchDeals from "./deals/SearchDeals";

const Home = () => {
    useEffect(() => {
        if (window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-999196271/JAQlCI33rdQcEO-MutwD'
            });
        }
    }, []);
    const [searchText, setSearchText] = useState();

    const handleSearch = (value) => {
        setSearchText(value);
    }
    return (
        <div>
            <Banner handleSearch={handleSearch} />
            {
                searchText?.length > 0 ? <SearchDeals searchText={searchText} /> : <Deals />
            }
        </div>
    );
};

export default Home;