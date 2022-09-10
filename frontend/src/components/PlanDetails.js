import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const PlanDetails = ({ plan }) => {

  return (
    <div className="plan-details">
      <h4>{plan.title}</h4>
      <p><strong>{plan.subject}</strong></p>
      <p><strong>Starts at: </strong>{plan.start}</p>
      <p><strong>Ends at: </strong>{plan.end}</p>
      <p><strong>Max students allowed: </strong>{plan.maxstudents}</p>
      <p>{formatDistanceToNow(new Date(plan.createdAt), { addSuffix: true })}</p>
    </div>
  )
}

export default PlanDetails