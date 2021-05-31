import {useState} from 'react';
import { type } from 'os';

const useGlobalState = () => {
    const [state, setState] = useState({themeMode: 'dark'})

    const actions = (action) => {
        const {type, payload} = action
        switch (type) {
            case 'setState':
                return setState(payload)
            default:
                return state
        }
    }

    return {state, actions}
}

export default useGlobalState