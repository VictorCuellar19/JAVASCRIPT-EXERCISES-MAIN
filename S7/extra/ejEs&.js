const list = [
    {
      id: 1,
      isActive: true,
      age: 22,
      name: 'Bob'
    },
    {
      id: 2,
      isActive: false,
      age: 56,
      name: 'Tim'
    },
    {
      id: 3,
      isActive: true,
      age: 17,
      name: 'Clark'
    },
    {
      id: 4,
      isActive: true,
      age: 9,
      name: 'Roxy'
    },
    {
      id: 5,
      isActive: false,
      age: 71,
      name: 'Jim'
    }
  ];
  

  const filteredList = list.filter(item => item.isActive);
  

  const newList = filteredList.map(item => {
    return {
      age: item.age,
      name: item.name
    };
  });
  
  
  const totalAges = list.reduce((total, item) => total + item.age, 0);
  
  console.log(filteredList);
  console.log(newList);
  console.log(totalAges);

  