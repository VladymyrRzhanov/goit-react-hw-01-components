import Container from "../Container/Container";
import Profile from "../Profile/Profile";
import user from "../Profile/user.json";
import Statistics from "../Statistics/Statistics";
import statisticalData from "../Statistics/statistical-data.json";
import FriendList from "../FriendList/FriendList";
import friends from "../FriendList/friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from '../TransactionHistory/transactions.json';


const App = () => (
  <>
    <Container title="Task 1 - Social Network Profile">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
    <Container title="Task 2 - Statistics Section">
      <Statistics
        title="Upload stats"
        stats={statisticalData}
      />
      <Statistics
        stats={statisticalData}
      />
    </Container>
    <Container title="Task 3 - Friends List">
      <FriendList friends={friends}
      />
    </Container>
    <Container title="Task 4 - Transaction History">
      <TransactionHistory
        items={transactions}
      />
    </Container>
  </>
);

export default App;