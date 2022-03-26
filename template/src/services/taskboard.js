import services from '../utils/services';

let taskboard = {
  id: 'main',
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '20/70',
      style: { width: 280 },
      cards: [
        {
          id: 'plan1',
          title: 'Buy milk',
          label: '15 mins',
          description: '2 Gallons of milk at the Deli store'
        },
        {
          id: 'plan2',
          title: 'Dispose Garbage',
          label: '10 mins',
          description: 'Sort out recyclable and waste as needed'
        },
        {
          id: 'plan3',
          title: 'Write Blog',
          label: '30 mins',
          description: 'Can AI make memes?'
        },
        {
          id: 'plan4',
          title: 'Pay Rent',
          label: '5 mins',
          description: 'Transfer to bank account'
        }
      ]
    },
    {
      id: 'lane2',
      title: 'Work In Progress',
      label: '10/20',
      style: { width: 280 },
      cards: [
        {
          id: 'wip1',
          title: 'Clean House',
          label: '30 mins',
          description: 'Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses'
        },
        {
          id: 'wip2',
          title: 'Practice Meditation',
          label: '15 mins',
          description: 'Use Headspace app'
        },
        {
          id: 'wip3',
          title: 'Maintain Daily Journal',
          label: '15 mins',
          description: 'Use Spreadsheet for now'
        }
      ]
    },
    {
      id: 'main-blocked',
      title: 'Blocked',
      label: '12/35',
      style: { width: 280 },
      cards: [
        {
          id: 'block1',
          title: 'IP Address',
          label: 'now',
          description: '196.1.1.0'
        }
      ]
    },
    {
      id: 'main-completed',
      title: 'Completed',
      style: { width: 280 },
      label: '2/5',
      cards: [
        {
          id: 'completed1',
          title: 'Practice Meditation',
          label: '15 mins',
          description: 'Use Headspace app'
        },
        {
          id: 'completed2',
          title: 'Maintain Daily Journal',
          label: '15 mins',
          description: 'Use Spreadsheet for now'
        },
        {
          id: 'completed3',
          title: 'Go Trekking',
          label: '300 mins',
          description: 'Completed 10km on cycle'
        },
        {
          id: 'completed4',
          title: 'Go Jogging',
          label: '300 mins',
          description: 'Completed 10km on cycle'
        },
        {
          id: 'completed5',
          title: 'Go Cycling',
          label: '300 mins',
          description: 'Completed 10km on cycle'
        }
      ]
    }
  ]
};

services.onGet('/api/taskboard').reply(200, { taskboard });
