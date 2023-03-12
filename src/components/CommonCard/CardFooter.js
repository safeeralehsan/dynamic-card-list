import { convertMillisecondsToDateString } from "../../utils/helpers"

export default function CardFooter({ dateUpdated }) {
    const dateUpdatedString = convertMillisecondsToDateString(dateUpdated);

    return (
        <div className="card-footer">
            Last Updated: {dateUpdatedString}
        </div>
    )
}