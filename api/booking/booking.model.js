const Store = [
    {
        id: "1234",
        driver: "1234",
        user: "1234",
        status: "booked",
    }
]

export const Booking = {
    create: async(user) => {
        if (Object.keys(user).length === 0) {
            console.log("내 주변에 택시가 없어 부킹 할 수 없어요");
            return Promise.reject({
                message: "내 주변에 택시가 없어 부킹 할 수 없어요",
            });
        }
        else {
            return Store.push(user);
        }
    }
}