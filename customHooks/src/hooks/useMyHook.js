import {useState,useEffect} from 'react';

function useMyHook(count) {
    console.log('useMyHook is executed');
    const [localCount, setLocalCount] = useState(100);
    useEffect(() => {
        console.log('useEffect is executed');
        setLocalCount(count);
    },[count])

    console.log('useMyHook return is executed');
    return localCount;
}

export default useMyHook;