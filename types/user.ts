export type userInfoDT = {
    address: {
        primary: addressDT,
        secondary: addressDT,
    }
}

export type addressDT = {
    title: string,
    phoneNumber: string,
    address: string,
}