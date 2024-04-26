const numberWithCommas = (n: number) =>
    n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default numberWithCommas;
