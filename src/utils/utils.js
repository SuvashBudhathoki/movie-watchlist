
//creating new date for default and formatting as 2019-09-19
const newDate = () => {
    const dateObj = new Date();
    const month = ((dateObj.getUTCMonth() + 1) < 10 ? '0' : '') + (dateObj.getUTCMonth() + 1); //months from 1-12
    const day = (dateObj.getUTCDate() < 10 ? '0' : '') + dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    return year + "-" + month + "-" + day;
}



export { newDate }