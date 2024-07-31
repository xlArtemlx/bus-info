import {createAsyncThunk} from '@reduxjs/toolkit';

import {AppState} from 'store/index';

import {BusResponse} from 'modules/Bus/core/api/types';
import {Bus, Ticket} from 'modules/Bus/core/types';
import * as requests from 'modules/Bus/core/api/requests';

export const fetchAllBuses = createAsyncThunk<BusResponse<Bus>, void, {state: AppState}>(
    'bus/fetchAllBuses',
    async (_params, thunkAPI) => {
        try {
            const {data: buses} = await requests.fetchBuses();

            return buses;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const fetchBusTickets = createAsyncThunk<Ticket[], void, {state: AppState}>(
    'bus/fetchBusTickets',
    async (_params, thunkAPI) => {
        try {
            const tickets = await requests.fetchBusTickets();

            return tickets.seats;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);
