import { useState } from 'react'
import { usePlansContext } from '../hooks/usePlansContext'
import { useAuthContext } from '../hooks/useAuthContext'

const PlanForm = () => {
  const { dispatch } = usePlansContext()
  const { user } = useAuthContext()

  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [maxstudents, setMaxstudents] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!user) {
      setError('You must be logged in')
      return
    }
    const plan = {title, subject, start, end, maxstudents}
    
    const response = await fetch('/api/plans/', {
      method: 'POST',
      body: JSON.stringify(plan),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      console.log(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setSubject('')
      setStart('')
      setEnd('')
      setMaxstudents('')
      console.log("this is response okay")
      dispatch({type: 'CREATE_PLANS', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Study Plan</h3>

      <label>Study Plan Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Subject:</label>
      <input 
        type="text" 
        onChange={(e) => setSubject(e.target.value)} 
        value={subject}
      />

      <label>Start time of Plan:</label>
      <input 
        type="datetime-local" 
        onChange={(e) => setStart(e.target.value)} 
        value={start} 
      />

      <label>End time of Plan:</label>
      <input 
        type="datetime-local" 
        onChange={(e) => setEnd(e.target.value)} 
        value={end} 
      />

      <label>Max number of students to be allowed:</label>
      <input 
        type="number" 
        onChange={(e) => setMaxstudents(e.target.value)} 
        value={maxstudents} 
      />

      <button>Add Plan</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default PlanForm