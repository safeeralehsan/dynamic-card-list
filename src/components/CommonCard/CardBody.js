import boltIcon from '../../assets/images/boltIcon.svg'

export default function CardBody({ name, originType, intents }) {

    return (
        <div className="card-body">
            <div className="card-origin-type">
                {originType === 'automated' &&
                    <span className="automated-type">
                        <img src={boltIcon} alt="bolt_icon" className='type-icon' />
                        Automated Origin
                    </span>}
                {originType === 'manual' && <span className="manual-type">Manual Origin</span>}
            </div>

            <div className='card-title'>{name}</div>
            <div className='card-subtitle'>{intents} intents</div>

            <div className='btn-group'>
                <button className='view-button'>View</button>
                <button className='remove-button'>Remove</button>
            </div>
        </div>
    )
}