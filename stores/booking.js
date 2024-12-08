export const useBookingStore = defineStore('booking', () => {
  const roomInfo = ref({});
  const bookingInfo = ref({});
  const orderInfo = ref({});

  const setRoomInfo = (info) => {
    roomInfo.value = info;
  };
  const getRoomInfo = () => {
    return roomInfo.value;
  };
  const setBookingInfo = (info) => {
    bookingInfo.value = info;
  };
  const getBookingInfo = () => {
    return bookingInfo.value;
  };
  const setOrderInfo = (info) => {
    orderInfo.value = info;
  };
  const getOrderInfo = () => {
    return orderInfo.value;
  };

  return {
    setRoomInfo,
    setBookingInfo,
    getRoomInfo,
    getBookingInfo,
    setOrderInfo,
    getOrderInfo,
  };
});
