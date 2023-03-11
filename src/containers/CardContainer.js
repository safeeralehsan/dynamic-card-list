import CommonCard from "../components/CommonCard/CommonCard"
import { sampleData } from "../data/sampleData"

export default function CardContainer() {
    return (
        <div className="card-container">
            {
                sampleData.map((data) => {
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
    )
}