import services from '../utils/services';

let cardTodo = [
  {
    note: 'Lorem Ipsum Dolor Sit Amet',
    complete: false
  },
  {
    note: 'Dolorem dolore est ipsam',
    complete: true
  },
  {
    note: 'Voluptatem eligendi optio',
    complete: false
  },
  {
    note: 'Eum et est occaecati',
    complete: false
  },
  {
    note: 'Nesciunt quas odio',
    complete: false
  },
  {
    note: 'Magnam facilis autem',
    complete: false
  }
];

let basicTodo = [
  {
    note: 'Lorem Ipsum Dolor Sit Amet',
    complete: false
  },
  {
    note: "Industry's standard dummy text ever since the 1500s",
    complete: true
  },
  {
    note: 'The point of using Lorem Ipsum is that it has a more-or-less',
    complete: false
  },
  {
    note: 'Contrary to popular belief',
    complete: false
  },
  {
    note: 'There are many variations of passages of Lorem Ipsum',
    complete: false
  },
  {
    note: 'Sed ut perspiciatis unde omnis iste natus',
    complete: false
  },
  {
    note: 'must explain to you how all this mistaken idea',
    complete: false
  }
];

let modalTodo = [
  {
    note: 'Lorem Ipsum Dolor Sit Amet',
    complete: false
  },
  {
    note: 'Contrary to popular belief',
    complete: true
  },
  {
    note: 'Lorem Ipsum Dolor Sit Amet',
    complete: false
  },
  {
    note: 'Sed ut perspiciatis unde omnis iste natus',
    complete: false
  }
];

services.onGet('/api/todo/card').reply(200, { cardTodo });
services.onGet('/api/todo/basic').reply(200, { basicTodo });
services.onGet('/api/todo/modal').reply(200, { modalTodo });

services.onPost('/api/todo/card/add').reply((config) => {
  try {
    const { note } = JSON.parse(config.data);

    const newNote = {
      note: note,
      complete: false
    };

    cardTodo = [...cardTodo, newNote];

    return [200, { cardTodo }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onPost('/api/todo/card/complete').reply((config) => {
  try {
    const { key } = JSON.parse(config.data);

    cardTodo = cardTodo.filter((todo, index) => {
      if (index === parseInt(key)) {
        todo.complete = !todo.complete;
        return todo;
      }
      return todo;
    });

    return [200, { cardTodo }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onPost('/api/todo/basic/add').reply((config) => {
  try {
    const { note } = JSON.parse(config.data);

    const newNote = {
      note: note,
      complete: false
    };

    basicTodo = [...basicTodo, newNote];

    return [200, { basicTodo }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onPost('/api/todo/basic/complete').reply((config) => {
  try {
    const { key, complete } = JSON.parse(config.data);

    basicTodo = basicTodo.filter((todo, index) => {
      if (index === parseInt(key)) {
        todo.complete = complete;
        return todo;
      }
      return todo;
    });

    return [200, { basicTodo }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onPost('/api/todo/basic/delete').reply((config) => {
  try {
    const { key } = JSON.parse(config.data);

    basicTodo = basicTodo.filter((item, index) => index !== parseInt(key));

    return [200, { basicTodo }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onPost('/api/todo/modal/add').reply((config) => {
  try {
    const { note } = JSON.parse(config.data);

    const newNote = {
      note: note,
      complete: false
    };

    modalTodo = [...modalTodo, newNote];

    return [200, { modalTodo }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onPost('/api/todo/modal/complete').reply((config) => {
  try {
    const { key, complete } = JSON.parse(config.data);

    modalTodo = modalTodo.filter((todo, index) => {
      if (index === parseInt(key)) {
        todo.complete = complete;
        return todo;
      }
      return todo;
    });

    return [200, { modalTodo }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

services.onPost('/api/todo/modal/delete').reply((config) => {
  try {
    const { key } = JSON.parse(config.data);

    modalTodo = modalTodo.filter((item, index) => index !== parseInt(key));

    return [200, { modalTodo }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});
