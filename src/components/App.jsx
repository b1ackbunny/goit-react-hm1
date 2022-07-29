import React from 'react';

import Container from './Container/Container';

import { Profile } from './Profile/Profile';
import user from '../components/data/user.json'

import { StatisticsList } from './Statistics/StatisticsList';
import statistics from '../components/data/statistics.json'

import { FriendList } from './FriendList/FriendList';
import friends from '../components/data/friends.json'


import { TransactionsHistory } from './TransactionsHistory/TransactionsHistory';
import transactions from '../components/data/transactions.json'

export  function App() {
  return (
    <React.StrictMode>
      <Container>
      <Profile 
      imgUrl={user.avatar}
      name={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
      /> 
      <StatisticsList 
    title="Upload stats"
    stats={statistics} /> 
      <FriendList
      friends={friends} 
      />
      <TransactionsHistory 
      items={transactions}
      />
      </Container>
    </React.StrictMode>
  );
}
