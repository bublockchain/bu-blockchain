import { useState } from 'react';

const useContactForm = () => {
    const [values, setValues] = useState({
        email: '',
        subject: '',
        message: '',
        name: '',
    });

    const handleChange = (e: any) => {
        setValues(prevState => {
            return {
                ...prevState,
                [e.target.id]: e.target.value,
            };
        });
    };

    return { values, handleChange };
};

export default useContactForm;
