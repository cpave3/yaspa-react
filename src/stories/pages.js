import React from 'react';

import { storiesOf } from '@storybook/react';
import Join from '../pages/Join';
import Host from '../pages/Host';
import HostTopic from '../pages/HostTopic';
import HostResults from '../pages/HostResults';

export default () => {
  const stories = storiesOf('Pages', module);

  stories.add('Join', () => <Join />);
  stories.add('Host', () => <Host />);
  stories.add('Host Topic w/ Users', () => {
    const users = [
      {
        name: 'John Doe',
        confirmed: false,
      },
      {
        name: 'Jane Doe',
        confirmed: true,
      },
    ];
    return <HostTopic users={users} />;
  });
  stories.add('Host Results', () => {
    const votes = [
      { user: 'John Doe', score: 5 },
      { user: 'Jane Doe', score: 5 },
      { user: 'Tom Doe', score: 13 },
      { user: 'Don Doe', score: 3 },
      { user: 'Mondo', score: 13 },
    ];
    return <HostResults votes={votes} />;
  });
};
