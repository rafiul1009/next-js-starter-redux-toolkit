import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import { timezone } from '../config/config';

export function getDate(timestamp) {
  var timestamp = Date.now(); // This would be the timestamp you want to format
  // console.log(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp));
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp);
}

export function postedDate(timestamp) {
  var timestamp = Date.now(); // This would be the timestamp you want to format
  // console.log(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp));
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'name', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp);
}


export function languageBasedFormatedDate(date, format, language, isUnix = false) {
  return isUnix ? <Moment unix tz={timezone} locale={language} format={format}>{date}</Moment> : <Moment tz={timezone} locale={language} format={format}>{date}</Moment>
  //return moment(date).tz('Asia/Dhaka').locale(language).format(format).toString();
}

export function formatedDate(date, format) {
  return moment(date).tz(timezone).format(format).toString();
}

export function formatedUtcToLoacalDate(date, format) {
  return moment.utc(date).local().format(format).toString();
}

export function dateDiffernce(toDate) {
  return Math.abs(moment.utc(toDate).local() - new Date()) || 0;
}

export function dateIsAfter(toDate) {
  return toDate ? moment.utc(toDate).local() < new Date() ? true : false : false;
}

export function getAge(fromdate) {
  var todate = new Date();

  var age = [], fromdate = new Date(fromdate),
    y = [todate.getFullYear(), fromdate.getFullYear()],
    ydiff = y[0] - y[1],
    m = [todate.getMonth(), fromdate.getMonth()],
    mdiff = m[0] - m[1],
    d = [todate.getDate(), fromdate.getDate()],
    ddiff = d[0] - d[1];

  if (mdiff < 0 || (mdiff === 0 && ddiff < 0)) --ydiff;
  if (mdiff < 0) mdiff += 12;
  if (ddiff < 0) {
    fromdate.setMonth(m[1] + 1, 0);
    ddiff = fromdate.getDate() - d[1] + d[0];
    --mdiff;
  }
  if (ydiff > 0) age.push(ydiff + ' year' + (ydiff > 1 ? 's, ' : ' '));
  if (mdiff > 0) age.push(mdiff + ' month' + (mdiff > 1 ? 's, ' : ''));
  if (ddiff > 0) age.push(ddiff + ' day' + (ddiff > 1 ? 's' : ''));
  if (age.length > 1) age.splice(age.length - 1, 0, '');
  return age.join('');
}

