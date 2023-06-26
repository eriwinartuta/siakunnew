// define Thousand separator and Decimal separator
export default function ribuan(number) {

    const thouSep = ".";
    const decSep = ",";
    // format to money
    const toMoney = (num) => { return (Math.round(num * 100) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace(/[,.]/g, function (m) { return m === ',' ? thouSep:decSep; })};
    
    return toMoney(number);
    
    }