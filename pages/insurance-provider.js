
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/state';

const InsuranceProvider = () => {
    const global = useContext(GlobalContext);
    useEffect(()=> {
        global.updateActiveMenuLink('insurance_provider');
    }, []);
    return (
        <div>
            Insurance Provider
        </div>
    );
}
export default InsuranceProvider;