import LevelOne from "./components/LevelOne/LevelOne.vue";
import Home from "./components/Home.vue";

export default [
  {
    path: "/",
    component: Home
  },
  {
    path: "/level/1",
    component: LevelOne,
    level: 1,
    isFinished: false
  }
];
