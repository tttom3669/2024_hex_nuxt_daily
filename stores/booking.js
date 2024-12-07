export const useBookingStore = defineStore('booking', () => {
  const bookingResult = ref(null);
  const setResult = (result) => {
    bookingResult.value = result;
  };
  const getResult = ()=>{
    return bookingResult.value;
  }
  return {
    setResult,
    getResult
  };
});
