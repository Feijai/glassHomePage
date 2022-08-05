export interface HeaderSelectProps {
    sel: string;
    setSel: React.Dispatch<React.SetStateAction<string>>;
}

export interface dataProps {
    id: number
    pic: string;
    header: string;
    phone: string;
    time: string;
    location: string;
    address: string;
    src: string
}

export interface LocationParams {
    pathname: string;
    state: dataProps;
    search: string;
    hash: string;
    key: string;
}



