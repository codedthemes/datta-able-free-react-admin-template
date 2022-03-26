import services from '../utils/services';

const randomDate = () => {
  const date = new Date();
  const start = new Date(date.getFullYear(), date.getMonth(), 1);
  const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const events = [
  {
    title: 'All Day Event',
    start: randomDate(),
    borderColor: '#04a9f5',
    backgroundColor: '#04a9f5',
    textColor: '#fff'
  },
  {
    title: 'Long Event',
    start: randomDate(),
    end: randomDate(),
    borderColor: '#f44236',
    backgroundColor: '#f44236',
    textColor: '#fff'
  },
  {
    id: 999,
    title: 'Repeating Event',
    start: randomDate(),
    borderColor: '#f4c22b',
    backgroundColor: '#f4c22b',
    textColor: '#fff'
  },
  {
    id: 999,
    title: 'Repeating Event',
    start: randomDate(),
    borderColor: '#3ebfea',
    backgroundColor: '#3ebfea',
    textColor: '#fff'
  },
  {
    title: 'Conference',
    start: randomDate(),
    end: randomDate(),
    borderColor: '#1de9b6',
    backgroundColor: '#1de9b6',
    textColor: '#fff'
  },
  {
    title: 'Meeting',
    start: randomDate(),
    end: randomDate()
  },
  {
    title: 'Lunch',
    start: randomDate(),
    borderColor: '#f44236',
    backgroundColor: '#f44236',
    textColor: '#fff'
  },
  {
    title: 'Happy Hour',
    start: randomDate(),
    borderColor: '#a389d4',
    backgroundColor: '#a389d4',
    textColor: '#fff'
  },
  {
    title: 'Birthday Party',
    start: randomDate()
  },
  {
    title: 'Click for Google',
    url: 'http://google.com/',
    start: randomDate(),
    borderColor: '#a389d4',
    backgroundColor: '#a389d4',
    textColor: '#fff'
  }
];

services.onGet('/api/calendar/events').reply(200, { events });
