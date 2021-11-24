import { atom } from 'recoil'

export const tasks = atom({
  key: 'taskState',
  // default: [],
  default: [
    { id: 1, title: 'React', done: true },
    { id: 2, title: 'Vue', done: false },
    { id: 3, title: 'Javascript', done: false },
    { id: 4, title: 'Es6', done: true },
    { id: 5, title: 'Typescript', done: false },
    { id: 6, title: 'React native', done: false },
    { id: 7, title: 'Flutter', done: true },
    { id: 8, title: 'Css', done: false },
    { id: 9, title: 'Java', done: false },
  ],
})
