import {useDispatch} from 'react-redux';

import {AppDispatch} from 'store/index';

import {fetchAllBuses, fetchBusTickets, selectBus} from '../redux';
import {Bus} from '../core/types';

type PeopleActions = {
    fetchAllBuses: () => void;
    fetchBusTickets: () => void;
    selectBus: (bus: Bus | null) => void;
};

export const useBusActions = (): PeopleActions => {
    const dispatch = useDispatch<AppDispatch>();

    return {
        fetchAllBuses: () => dispatch(fetchAllBuses()),
        fetchBusTickets: () => dispatch(fetchBusTickets()),
        selectBus: (bus: Bus | null) => dispatch(selectBus(bus)),
    };
};
