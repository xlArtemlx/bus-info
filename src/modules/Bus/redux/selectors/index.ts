//import {createSelector} from 'reselect';

import {AppState} from 'store/index';

import {Bus, Ticket} from 'modules/Bus/core/types';

import {selectAllBuses, selectAllTickets} from '..';

export const getBuses = (state: AppState): Bus[] => selectAllBuses(state.busReducer.bus);
export const getIsBusesLoading = (state: AppState): boolean => state.busReducer.isBusLoading;
export const getIsTicketsLoading = (state: AppState): boolean => state.busReducer.isTicketLoading;
export const getTickets = (state: AppState): Ticket[] => selectAllTickets(state.busReducer.tickets);
export const getSelectedBus = (state: AppState): Bus | null => state.busReducer.selectedBus;
