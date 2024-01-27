export interface BusDetail {
  bus_id?: number;
  name: string;
  number?: string;
  gps_id?: number | null;
  vehicle_type?: string;
  bus_logo?: string | '';
  schedule_id?: number;
  discount?: number;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  route_distance?: number;
  route_time: string;
  total_seat_number?: number;
  booked_seat_number: number;
  remaining_seat_number?: number;
  route_time_in_minute?: number;
  toLocation?: string;
  fromLocation?: string;
  onClick?: () => void;
  btnText?: string;
  boarding_sub_stations?: any[];
  drop_sub_stations?: any[];
  amenities: [
    {
      id: number;
      name: string;
    },
  ];
  image_galleries?: [];
  seat_config?: any;
  seat_book_hold?: any;
  children?: any;
}

export interface LoginPayload {
  email: string;
  password: string;
}
export interface RegisterPayload {
  email: string;
  password: string;
  phone: string;
}
