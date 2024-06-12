import { getDistance1, getDistance2 } from "../../utils/commFun.js"

// 아래는 행후, 몽고DB로 바꿀것임 (꼭 잊지말고)
const Store = [
    {
      name: '꽃감이',
      role: 'user',
      email: 'flowergam@gmail.com',
      password: '0618',
      availablity: 1,
    },
    {
      name: '강진주',
      role: 'driver',
      email: 'kangjinjoo@gmail.com',
      password: '0326',
      availablity: 1,
      position: {
        latitude: 17.38,
        longitude: 78.48,
      },
    },
    {
      name: '유리하나',
      role: 'driver',
      email: 'YuRiHaNa@gmail.com',
      password: '1822',
      availablity: 1,
      position: {
        latitude: 37.5665,
        longitude: 126.978,
      },
    },
  ];
  
  export const User = {
    find: async (params) => {
      if (!params) return Store;
    },
    create: async (user) => {
      Store.push(user);
      return user;
    },
    findOne: async (condition) => {
      const keys = Object.keys(condition);
      const found = Store.find((u) => keys.every((k) => condition[k] === u[k]));
      return found || {};
    },
    available: async (email, { latitude, longitude }) => {
      const driver = Store.find((s) => s.email === emaill);
      driver.availablity = 1;
      driver.position.latitude = latitude;
      driver.position.longitude = longitude;
      return driver;
    },
    unavailable: async (email) => {
      const driver = Store.find((s) => s.email === email);
      driver.availablity = 0;
      return driver;
    },
    getDriver: async({latitude : lat, longitude : lon}) => {
      const drivers = Store.filter(
        (s) => s.availablity == 1 && s.role == "driver"
      )

      return drivers.find((driver) => {
        const {
          position: {latitude, longitude}
        } = driver;
        console.log(
          `택시 기사의 위도값 : ${latitude}, 경도값 : ${longitude}`
        )
        const dist1 = getDistance1(latitude, longitude, lat, lon);
        console.log(`택시기사와 나와의 거리 : ${dist1}`);
        if (dist1 <= 5) return true
      })
    }
  };
  