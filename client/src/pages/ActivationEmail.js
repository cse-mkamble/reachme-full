import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { showErrMsg, showSuccessMsg } from '../utils/notification/Notification'
import { useSelector, useDispatch } from 'react-redux'
import { activationEmail } from '../redux/actions/authAction'
import axios from 'axios'

const ActivationEmail = () => {
    const { activation_token } = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        //     if (activation_token) {
        //         const activationEmail = async () => {
        //             try {
        //                 const res = await axios.post('/api/activation', { activation_token })
        //                 setSuccess(res.data.msg)
        //                 localStorage.setItem("firstLogin", true)
        //             } catch (err) {
        //                 err.response.data.msg && setErr(err.response.data.msg)
        //             }
        //         }
        //         activationEmail()
        //     }
        // }, [activation_token])

        if (activation_token) {
            dispatch(activationEmail(activation_token))
        }
    }, [])

    // useEffect(() => {
    //     if(auth.token) history.push("/")
    // }, [auth.token, history])


    return (
        <div className="active_page">
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            {activation_token && showSuccessMsg(activation_token)}
        </div>
    )
}

export default ActivationEmail