import {useEffect, useState} from 'react';

import {getLocation} from 'services/location';

type Location = {
    latitude: number;
    longitude: number;
};

const useCurrentLocation = (): Location => {
    const [location, setLocation] = useState({latitude: 10, longitude: 10});
    useEffect(() => {
        getLocation(setLocation);
    }, []);

    return location;
};

export default useCurrentLocation;
