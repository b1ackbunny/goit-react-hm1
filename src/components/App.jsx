import React from 'react';

import Container from './Container/Container';

import { Profile } from './Profile/Profile';
import user from '../user.json'

import { StatisticsList } from './Statistics/StatisticsList';
import statistics from '../statistics.json'

import { FriendListItem } from './FriendList/FriendListItem';
import friends from '../friends.json'


import { TransactionsHistory } from './TransactionsHistory/TransactionsHistory';
import transactions from '../transactions.json'

export  function App() {
  return (
    <React.StrictMode>
      <Container>
      <Profile 
      imgUrl={user.avatar}
      name={user.username}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      /> 
      <StatisticsList 
    title="Upload stats"
    stats={statistics} /> 
      <FriendListItem 
      friends={friends} 
      />
      <TransactionsHistory 
      items={transactions}
      />
      </Container>
    </React.StrictMode>
  );
}
