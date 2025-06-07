export type GuestType = "adults" | "children"

export interface GuestCount {
  adults: number
  children: number
}

export interface CheckInOut{
  id: string,
  check_in: string,
  check_out: string,
  status: string,
  extra_charge: 0,
  created_at: string,
  updated_at: string,
  deleted_at: string
}

export interface Booking {
  id:string,
  user_id: string,
  room_id: string,
  check_in: string,
  check_out:string,
  guests: number,
  deposit_amount: number,
  total_amount: number,
  status:  "pending" | "approved",
  created_at: string,
  updated_at: string,
  deleted_at: string| null,
  checkinout_id:string,
  CheckInOut: CheckInOut
}