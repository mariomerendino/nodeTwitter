export default {
  genAuthToken() {
    return (Math.random() + 1).toString(32).substring(2);
  },
};
