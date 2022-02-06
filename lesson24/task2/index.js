export function studentsBirthDays(students) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const copiedStud = [...students];
  copiedStud.sort(function (a, b) {
    new Date(a.birthDate) - new Date(b.birthDate);
  });

  console.log(copiedStud);
  const sortedStud = {};
}

const students = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/1999' },
  { name: 'Lili', birthDate: '04/01/2002' },
  { name: 'Mark', birthDate: '06/05/2001' },
];
