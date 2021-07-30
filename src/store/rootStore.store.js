import {makeAutoObservable} from "mobx";
import {createContext} from 'react'
import {getCurrentNotifications, getNewNotifications} from "../api/getNotifications";

class RootStore {
  loading = false;
  data = [];
  badgeCount = 0;

  constructor() {
    makeAutoObservable(this)
  }

  getCurrentNotifications = () => {
    this.loading = true;
    getCurrentNotifications().then(data => {
      this.loading = false
      this.data = data
      this.badgeCount = data.length
      console.log(this.badgeCount)
    })
  }

  grabNewNotification = async () => {
    this.loading = true;
    await getNewNotifications().then(data => {
      if(!data){
        return;
      }
      this.loading = false;
      this.data = ([...this.data, data]);
      this.badgeCount++;
    })
  };
}


export const RootStoreContext = createContext(new RootStore())
