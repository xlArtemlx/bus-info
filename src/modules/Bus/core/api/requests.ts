import {AxiosPromise, AxiosResponse} from 'axios';

import {Bus} from '../types';

import data from './data.json';
import tickets from './tickets.json';
import {BusResponse} from './types';

//import restApi from 'services/api';

export const fetchBuses = (): AxiosPromise<BusResponse<Bus>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve({data} as AxiosResponse<BusResponse<Bus>>);
            // eslint-disable-next-line no-magic-numbers
        }, 1000);
    });
    // return restApi.get('/buses', {
    //     params,
    // });
};

export const fetchBusTickets = (): any => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(tickets as any);
            // eslint-disable-next-line no-magic-numbers
        }, 1000);
    });
    // return restApi.get(`/buses/${busId}/tickets`);
};
