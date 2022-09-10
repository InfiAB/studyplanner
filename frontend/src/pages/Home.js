import { useEffect } from "react"
import { usePlansContext } from "../hooks/usePlansContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import PlanDetails from "../components/PlanDetails"
import PlanForm from "../components/PlanForm"

const Home = () => {
  const { plans, dispatch } = usePlansContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchPlans = async () => {
      const response = await fetch('/api/plans', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_PLANS', payload: json})
      }
    }
    
    if(user){
      fetchPlans()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      <div className="plans">
        {plans && plans.map(plan => (
          <PlanDetails plan={plan} key={plan._id} />
        ))}
      </div>
      <PlanForm />
    </div>
  )
}

export default Home