const storeCommon = {
  setStorageSync(key, value) {
    uni.setStorageSync(key, value);
  },

  getStorageSync(key) {
    const value = uni.getStorageSync(key);
    if (value) {
      console.log(value);
    }
    return value;
  }
}


export default storeCommon