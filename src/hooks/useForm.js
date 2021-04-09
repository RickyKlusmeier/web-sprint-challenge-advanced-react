// write your custom hook here to control your checkout form
import { useState, useEffect } from 'react';
import axios from 'axios';

const initialValue = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: ''
};

const useForm = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue)

    const handleChanges = (evt) => {
        setValues({...values, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        showSuccessMessage(true)
    }

    return [showSuccessMessage, values, handleChanges, handleSubmit]
}
export default useForm