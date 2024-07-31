import {useEffect} from 'react';

import {useBusActions} from 'modules/Bus/hooks/useBusActions';

export const useFetchBusTickets = (): void => {
    const {fetchBusTickets} = useBusActions();

    useEffect(() => {
        fetchBusTickets();
    }, []);
};
