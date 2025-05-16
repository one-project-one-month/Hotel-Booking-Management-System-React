interface User {
    userName: string,
    email: string,
    phoneNo: string,
    userPoint: number,
    coupons: number,
    profileImg: string| undefined,
    totalAmount: number,
    totalBooking: number,
}

export const user: User = {
    userName: "Aye Aye",
    email: "ayeaye@gmail.com",
    phoneNo: "09234567890",
    userPoint: 1200,
    coupons: 5,
    profileImg: undefined,
    totalAmount: 3400,
    totalBooking: 32,
}