export const convertSalaryRange = (value) => {
  switch (value) {
    case '-1':
      return 'Chưa làm khảo sát';
    case '0':
      return 'Dưới 5 triệu';
    case '1':
      return 'Từ 5 đến 15 triệu';
    case '2':
      return 'Từ 15 đến 30 triệu';
    case '3':
      return 'Từ 30 đến 50 triệu';
    case '4':
      return 'Trên 50 triệu';
  }
}