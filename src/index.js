import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.findName()}
        date={faker.date.past(1)}
        avatar={faker.image.avatar()}
        content={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.findName()}
        date={faker.date.past(1)}
        avatar={faker.image.avatar()}
        content={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.findName()}
        date={faker.date.past(1)}
        avatar={faker.image.avatar()}
        content={faker.lorem.sentence()}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
