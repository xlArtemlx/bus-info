import {Ticket} from 'modules/Bus/core/types';

export const getSeparatedSeatsByColums = (tickets: Ticket[]): {firstColumn: Ticket[]; secondColumn: Ticket[]} => {
    if (!tickets.length) {
        return {firstColumn: [], secondColumn: []};
    }

    const firstColumn: Ticket[] = [];
    const secondColumn: Ticket[] = [];
    const set1 = new Set();
    const set2 = new Set();

    tickets.forEach((item: Ticket) => {
        if (!set1.has(item.number)) {
            firstColumn.push(item);
            set1.add(item.number);
        } else if (!set2.has(item.number)) {
            secondColumn.push(item);
            set2.add(item.number);
        }
    });

    return {firstColumn, secondColumn};
};
