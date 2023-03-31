import moment from 'moment';
import 'moment/locale/ko';

export const formatDate = (date: Date, format: string): string => {
  return moment(date).format(format);
};

export const formatTime = (date: Date): string => {
  const hours = moment(date).format('h');
  const minutes = moment(date).format('mm');
  const amPm = moment(date).format('A');

  let formattedTime = '';
  if (hours === '12' && minutes === '00') {
    formattedTime = `${amPm} 12시`;
  } else if (minutes === '00') {
    formattedTime = `${amPm} ${hours}시`;
  } else {
    formattedTime = `${amPm} ${hours}시 ${minutes}분`;
  }
  return formattedTime.replace(/^0/, ''); // 첫 번째 0을 제거합니다.
};
