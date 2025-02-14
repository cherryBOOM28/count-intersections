const rooms = [
    {
      id: 1,
      name: "Люкс с видом на океан",
      bedrooms: 2,
      price: 150,
      view: "ocean",
      bookings: [
        { startDate: "2025-02-20", endDate: "2025-02-25" },
        { startDate: "2025-03-01", endDate: "2025-03-05" },
      ],
    },
    {
      id: 2,
      name: "Уютный номер в горах",
      bedrooms: 1,
      price: 100,
      view: "mountains",
      bookings: [
        { startDate: "2025-02-18", endDate: "2025-02-22" },
      ],
    },
    {
      id: 3,
      name: "Городская студия",
      bedrooms: 1,
      price: 80,
      view: "city",
      bookings: [],
    },
  ];
  
  export default rooms;
  