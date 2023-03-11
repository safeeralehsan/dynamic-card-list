import boltIcon from '../../assets/images/boltIcon.svg'


export default function CommonCard({ id, name, originType, intents, dateUpdated }) {
    return (
        <div className="common-card">
            <div className="card-body">
                <div className="card-header">
                    {originType === 'automated' &&
                        <span className="automated-type">
                            <img src={boltIcon} alt="bolt_icon" />
                            Automated Origin
                        </span>}
                    {originType === 'manual' && <span className="manual-type">Manual Origin</span>}
                </div>

                <div className='card-title'>{name}</div>
                <div className='card-subtitle'>{intents} intents</div>

            </div>
            <p>{dateUpdated}</p>
        </div>
    )
}