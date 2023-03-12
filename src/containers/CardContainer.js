import { useState, useEffect } from "react"
import CommonCard from "../components/CommonCard/CommonCard"
import { sampleData } from "../data/sampleData"

export default function CardContainer() {
    const [cardDataList, setCardDataList] = useState([]);
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        const isSearchInputEmpty = searchInput === '' ? true : false;

        if (isSearchInputEmpty) {
            setCardDataList(prev => [...sampleData]);
        } else {
            const searchRegEx = new RegExp(`${searchInput}`, 'i')
            const fitleredCardDataList = sampleData.filter((data) => searchRegEx.test(data.name));
            setCardDataList(prev => [...fitleredCardDataList]);
        }
    }, [searchInput])

    useEffect(() => {
        setCardDataList(prev => [...sampleData])
    }, []);

    return (
        <>
            <div className="search-bar">
                <input
                    className="search-input"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)} />
            </div>
            <div className="card-container">
                <div className="card-list">
                    {
                        cardDataList.map((data) => {
                            return (
                                <CommonCard
                                    key={data.id}
                                    name={data.name}
                                    originType={data.originType}
                                    intents={data.intents}
                                    dateUpdated={data.dateUpdated}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}