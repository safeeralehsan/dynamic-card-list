import CardBody from './CardBody'
import CardFooter from './CardFooter'


export default function CommonCard({ name, originType, intents, dateUpdated }) {
    return (
        <div className="common-card">
            <CardBody
                name={name}
                originType={originType}
                intents={intents}
            />
            <CardFooter
                dateUpdated={dateUpdated}
            />
        </div>
    )
}