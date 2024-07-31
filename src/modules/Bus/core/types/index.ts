export type Bus = {
    id: string;
    pickUp: string;
    delivery: string;
    ex: string;
    speed: string;
};

export type Ticket = {
    seatId: string;
    number: string;
    isBooked: boolean;
};
