import {PayloadAction, createEntityAdapter, createSlice} from '@reduxjs/toolkit';

import {fetchAllBuses, fetchBusTickets} from 'modules/Bus/redux/asyncActions';

import {Bus, Ticket} from '../core/types';

type BusState = {
    bus: Bus[];
    isBusLoading: boolean;
    isTicketLoading: boolean;
    tickets: Ticket[];
    selectedBus: Bus | null;
};

const defaultState: BusState = {
    bus: [],
    isBusLoading: false,
    isTicketLoading: false,
    tickets: [],
    selectedBus: null,
};

const busAdapter = createEntityAdapter<Bus>();
const {selectAll: selectAllBuses} = busAdapter.getSelectors();

const ticketsAdapter = createEntityAdapter<Ticket, string>({
    selectId: (ticket) => ticket.seatId,
});
const {selectAll: selectAllTickets} = ticketsAdapter.getSelectors();

export const busReducer = createSlice({
    name: 'busModule',
    initialState: {
        ...defaultState,
        bus: busAdapter.getInitialState(defaultState.bus),
        tickets: ticketsAdapter.getInitialState(defaultState.tickets),
    },
    reducers: {
        selectBus: (state, {payload}: PayloadAction<Bus | null>) => {
            state.selectedBus = payload;
        },
    },
    extraReducers: (builder) => {
        //fetch buses
        builder.addCase(fetchAllBuses.pending, (state) => {
            state.isBusLoading = true;
        });
        builder.addCase(fetchAllBuses.fulfilled, (state, {payload}) => {
            busAdapter.addMany(state.bus, payload.results);
            state.isBusLoading = false;
        });
        builder.addCase(fetchAllBuses.rejected, (state) => {
            state.isBusLoading = false;
        });
        //fetch tickets
        builder.addCase(fetchBusTickets.pending, (state) => {
            state.isTicketLoading = true;
        });
        builder.addCase(fetchBusTickets.fulfilled, (state, {payload}) => {
            ticketsAdapter.setAll(state.tickets, payload);
            state.isTicketLoading = false;
        });
        builder.addCase(fetchBusTickets.rejected, (state) => {
            state.isTicketLoading = false;
        });
    },
});

const {selectBus} = busReducer.actions;

export {fetchAllBuses, selectAllBuses, selectAllTickets, fetchBusTickets, selectBus};

export default busReducer.reducer;
