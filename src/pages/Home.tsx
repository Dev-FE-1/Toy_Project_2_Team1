import { Provider } from 'react-redux';

import DaySchedule from '@/components/schedule/DaySchedule';
import { store } from '@/store/store';

const HomePage = () => (
  <>
    <div>HomePage</div>
    <Provider store={store}>
      <DaySchedule />
    </Provider>
  </>
);

export default HomePage;
