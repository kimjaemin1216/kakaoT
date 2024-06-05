import { User } from "../user/user.model.js";

export async function create(req, res, next){
    const {email, latitude, longitude } = req.body;
    console.log(`승객 ${email}의 위치${latitude},${longitude}로 주변 택시를 겁색해보자`);

    const founds = await User.getDriver({latitude, longitude});
    console.log(JSON.stringify(founds));
}