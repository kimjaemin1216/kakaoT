// 아래는 행후, 몽고DB로 바꿀것임 (꼭 잊지말고)
const Store = [
    {
      name: '꽃감이',
      role: 'user',
      email: 'flowergam@gmail.com',
      password: '0618',
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
      driver.available = 1;
      driver.position.latitude = latitude;
      driver.position.longitude = longitude;
      return driver;
    },
  };
  