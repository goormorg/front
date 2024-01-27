import { atom } from "jotai";

const formAtom = atom({
  name: "",
  email: "",
  password: "",
  birth: "",
  gender: "",
  phoneNumber: "",
  weight: 0,
  height: 0,
  fat: 0,
  skeletalMuscle: 0,
  target: "",
});

export default formAtom;
