import { useEffect } from "react"
import Axios from 'axios'
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate()

    Axios.defaults.withCredentials = true
    useEffect(() => {
        Axios.get('https://backend-password-reset-ybz2.onrender.com/auth/verify')
        // Axios.get('http://localhost:3000/auth/verify')
        .then(res => {
            if(res.data.status) {
                console.log(res)
            } else {
                navigate('/')
            }
        })
    })
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard