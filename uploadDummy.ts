import { collection, addDoc } from 'firebase/firestore';

import dummyData from './dummyData';
import { db } from '@/api/index.ts';

const uploadDummyData = async () => {
  const scheduleCollection = collection(db, 'schedules');

  try {
    for (const data of dummyData) {
      await addDoc(scheduleCollection, data);
    }
    // console.log('Dummy data uploaded successfully');
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

uploadDummyData();
