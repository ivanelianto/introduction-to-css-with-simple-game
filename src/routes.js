import Home from "@/components/Home.vue";
import LevelOne from "@/components/Level/One/LevelOne.vue";
import LevelTwo from "@/components/Level/Two/LevelTwo.vue";

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
  },
  {
    path: "/level/2",
    component: LevelTwo,
    level: 2,
    isFinished: false
  }
];
