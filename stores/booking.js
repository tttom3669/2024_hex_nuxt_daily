// 建立名稱為 useBookingStore 的 store

export const useBookingStore = defineStore('booking', () => {
  const bookingResult = ref({});
  const setBookingResult = (roomInfo, userInfo ) => {
    bookingResult.value = {
      ...roomInfo, // 將被選取的房型以解構的方式合併
      user: {
        ...userInfo, // 將訂房人資料以解構的方式合併
      },
    };
  };
  const getBookingResult = () => {
    return bookingResult.value;
  };
  return {
    getBookingResult,
    setBookingResult,
  };
});
