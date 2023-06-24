import { stays } from "../utils/stays";

export const eventfilter = (value) => {
  const result = stays?.filter((item) => {
    const select = value.toLowerCase();
    const { city, country, maxGuests } = item;
    console.log(select.length);
    return (
      city.toLowerCase().includes(select) ||
      country.toLowerCase().includes(select) ||
      maxGuests == select
    );
  });
  return result;
};
