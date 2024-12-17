import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

export const formatDate = (d: string, format: string) => {
  return dayjs(d).format(format)
}

export const formatDateShort = (d: string) => {
  return formatDate(d, "DD/MM/YYYY")
}

export const formatDateMedium = (d: string) => {
  return formatDate(d, "DD/MM/YYYY HH:mm")
}

export const formatDateFull = (d: string) => {
  return formatDate(d, "DD/MM/YYYY HH:mm:ss")
}

export const convertNumberToCurrency = (text: string | number) => {
  if (!text) return ""
  const newCurrency = text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return newCurrency
}

export const convertNonAccentVietnamese = (str: string) => {
  str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A")
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
  str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E")
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
  str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I")
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i")
  str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O")
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
  str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U")
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
  str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y")
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
  str = str.replace(/Đ/g, "D")
  str = str.replace(/đ/g, "d")
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "") // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, "") // Â, Ê, Ă, Ơ, Ư
  return str
}

export const numberParser = (value: any) => {
  return value?.toString()?.replace(/[-’/`~!#*$@_%+=.,^&(){}[\]|;:"'<>?\\]/g, "")
}

export const numberFormatter = (value: any, key?: string) => {
  const chart = key || ","
  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, chart)
}

export const formatCurrency = (value: any, fixed: number = 2) => {
  return parseFloatNumber(value, fixed)
    .toString()
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
}

export const filterOption = (input: any, option: any) => {
  return (option?.children ?? "")?.toLowerCase().includes(input?.toLowerCase())
}

export const filterSort = (optionA: any, optionB: any) => {
  return (optionA?.children ?? "").toLowerCase().localeCompare((optionB?.children ?? "").toLowerCase())
}

export const parseFloatNumber = (value: any, fixed: number = 2) => {
  if (value) {
    return parseFloat(value?.toString()?.replace(/[-&/\\#,+()$~%'":*?<>{}]/g, "")).toFixed(fixed)
  }
  return 0
}

export const getCookie = (name: string): string => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || "";
  return "";
}