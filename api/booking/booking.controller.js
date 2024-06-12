import { User } from "../user/user.model.js";
import { Booking } from "./booking.model.js";

function responseWithResult(res, statusCode){
    statusCode = statusCode || 200;
    return function (entity){
        res.status(statusCode).join(entity);
    }
}
function handleError(res, statusCode){
    statusCode = statusCode || 500;
    return function (err) {
        res.status(statusCode).send(err);
    }
}
export async function create(req, res, next){
    const {email, latitude, longitude } = req.body;
    console.log(`승객 ${email}의 위치${latitude},${longitude}로 주변 택시를 겁색해보자`);

    const found = await User.getDriver({latitude, longitude});
    console.log(JSON.stringify(found));

    Booking.create(
        !found
        ? {}
        : {
            id: Data.now(),
            driver: found.email,
            user: email,
            status: "booked"
        },
    )
        .then((booking) => {
            console.log(`booking:${booking}`);
            const kimjaemin = Object.assign({}, booking, {
                messge: "Booking Successfull",
            });
            console.log(`booking:${JSON.stringify(tmp)}`);
            return tmp;
        })
        .then(responseWithResult(res, 201))
        .catch(handleError(res));
}