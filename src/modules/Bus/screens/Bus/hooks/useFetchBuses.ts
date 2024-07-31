import {useEffect} from 'react';

import {useBusActions} from 'modules/Bus/hooks/useBusActions';

export const useFetchBuses = (): void => {
    const {fetchAllBuses} = useBusActions();
    useEffect(() => {
        fetchAllBuses();
    }, []);
};
