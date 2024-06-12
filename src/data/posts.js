export const posts = [
  {
    id: 1,
    title: 'Cara membuat website',
    des: 'oke kali ini gue akan memberi tutorial membuat website dari nol',
    time: '10 juni 2024'
  }, 
  {
    id: 2,
    title: 'Cara uploud project ke github',
    des: 'Kali ini gue akan memberikan tutorial cara uploud project yg kita punya di github',
    time: '10 juni 2024'
  },
    {
    id: 3,
    title: 'Tutorial makan',
    des: 'Kali ini gue akan memberikan tutorial cara makan yang baik dan benar',
    time: '10 juni 2024'
  }
  ];
  
  export function getAllpost() {
    return posts;
  }