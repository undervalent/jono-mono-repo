import { atom, selector } from "recoil";

export const tipPercentage = atom<number | null>({
  key: "tipPercentage",
  default: null,
});

export const totalBill = atom<number | null>({
  key: "totalBill",
  default: null,
});
export const numberOfPeople = atom<number | null>({
  key: "numberOfPeople",
  default: 1,
});

export const tipTotals = selector({
  key: "tipTotals",
  get: ({ get }) => {
    const peopleOrig = get(numberOfPeople);
    const total = get(totalBill);
    const percentageVal = get(tipPercentage);
    const percentage = percentageVal ? percentageVal / 100 : 0;
    const people = peopleOrig || 1;

    const fullTip = total && percentage ? total * percentage : 0;
    const tipPerPerson = people
      ? parseFloat(`${fullTip / people}`).toFixed(2)
      : 0;
    const totalPerPerson =
      total && people
        ? parseFloat(`${(total + fullTip) / people}`).toFixed(2)
        : 0;

    return {
      tipPerPerson,
      totalPerPerson,
    };
  },
});
