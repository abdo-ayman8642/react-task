export const fake_data = [
  {
    id: 1,
    start_date: "23/09/2018",
    status: 1,
    price: 43.5,
  },
  {
    id: 2,
    start_date: "12/04/2020",
    status: 2,
    price: 78.0,
  },
  {
    id: 3,
    start_date: "17/07/2019",
    status: 3,
    price: 15.7,
  },
  {
    id: 4,
    start_date: "08/02/2022",
    status: 1,
    price: 91.2,
  },
  {
    id: 5,
    start_date: "30/11/2019",
    status: 3,
    price: 7.8,
  },
  {
    id: 6,
    start_date: "19/05/2020",
    status: 2,
    price: 62.4,
  },
  {
    id: 7,
    start_date: "14/12/2018",
    status: 1,
    price: 33.9,
  },
  {
    id: 8,
    start_date: "25/08/2021",
    status: 2,
    price: 24.1,
  },
  {
    id: 9,
    start_date: "06/03/2019",
    status: 3,
    price: 54.6,
  },
  {
    id: 10,
    start_date: "03/11/2020",
    status: 2,
    price: 89.2,
  },
  {
    id: 11,
    start_date: "20/01/2018",
    status: 1,
    price: 14.3,
  },
  {
    id: 12,
    start_date: "18/06/2019",
    status: 3,
    price: 37.2,
  },
  {
    id: 13,
    start_date: "29/03/2022",
    status: 2,
    price: 68.5,
  },
  {
    id: 14,
    start_date: "07/08/2019",
    status: 3,
    price: 22.9,
  },
  {
    id: 15,
    start_date: "22/10/2021",
    status: 2,
    price: 49.7,
  },
  {
    id: 16,
    start_date: "09/12/2018",
    status: 1,
    price: 76.4,
  },
  {
    id: 17,
    start_date: "26/05/2018",
    status: 1,
    price: 11.1,
  },
  {
    id: 18,
    start_date: "05/04/2021",
    status: 2,
    price: 81.3,
  },
  {
    id: 19,
    start_date: "28/07/2020",
    status: 2,
    price: 8.6,
  },
  {
    id: 20,
    start_date: "02/02/2019",
    status: 3,
    price: 28.7,
  },
  {
    id: 21,
    start_date: "01/01/2020",
    status: 2,
    price: 67.9,
  },
  {
    id: 22,
    start_date: "15/11/2021",
    status: 2,
    price: 44.8,
  },
  {
    id: 23,
    start_date: "10/09/2019",
    status: 3,
    price: 17.6,
  },
  {
    id: 24,
    start_date: "04/07/2018",
    status: 1,
    price: 59.3,
  },
  {
    id: 25,
    start_date: "21/03/2020",
    status: 2,
    price: 41.0,
  },
  {
    id: 26,
    start_date: "31/08/2018",
    status: 1,
    price: 6.4,
  },
  {
    id: 27,
    start_date: "16/06/2018",
    status: 1,
    price: 95.2,
  },
];
export const formatDate = (inputDate) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const dateParts = inputDate.split("/");
  const formattedDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
  return formattedDate.toLocaleDateString("en-US", options);
};
