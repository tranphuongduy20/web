const coursesDataList = [
  {
    id: 0,
    category: 'Development',
    courses: [
      {
        id: 1,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        courseGoal: 'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
        numberOfStudents: 1397164,
        numberOfRating: 1332,
        stars: 4.7,
        price: 0,
        language: 'English',
        isBestSeller: false
      },
      {
        id: 2,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg?secure=jgK3VPCU6Ku_v4hE0FfvWw%3D%3D%2C1636733121',
        title: 'The Complete 2022 Web Development Bootcamp',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 3,
        courseImage: 'https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg',
        title: 'An Entire MBA in 1 Course:Award Winning Business School Prof',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 4,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Web Developer Bootcamp 2021',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 5,
        courseImage: 'https://img-c.udemycdn.com/course/240x135/2109522_e6e2_8.jpg',
        title: 'React - The Complete Guide (incl Hooks, React Router, Redux',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 6,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/3599282_f040_2.jpg?secure=iyN3mH4a3CZrc7ir1dMWLA%3D%3D%2C1636708223',
        title: 'The Complete JavaScript Course 2021: From Zero to Expert!',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 7,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 8,
        courseImage: 'https://img-c.udemycdn.com/course/240x135/1623098_9971_12.jpg',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      }
    ]
  },
  {
    id: 1,
    category: 'Business',
    courses: [
      {
        id: 1,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 2,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 3,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 4,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 5,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 6,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 7,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 8,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      }
    ]
  },
  {
    id: 2,
    category: 'Design',
    courses: [
      {
        id: 1,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 2,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 3,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 4,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 5,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 6,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 7,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 8,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      }
    ]
  },
  {
    id: 3,
    category: 'Marketing',
    courses: [
      {
        id: 1,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 2,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 3,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 4,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 5,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 6,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 7,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 8,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      }
    ]
  },
  {
    id: 4,
    category: 'Photography & Video',
    courses: [
      {
        id: 1,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 2,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 3,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 4,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 5,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 6,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 7,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 8,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      }
    ]
  },
  {
    id: 5,
    category: 'Photography & Software',
    courses: [
      {
        id: 1,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 2,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 3,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 4,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 5,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 6,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 7,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      },
      {
        id: 8,
        courseImage: 'https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg?secure=xQM5V_lfo1M5BERYnZ-KVA%3D%3D%2C1636672911',
        title: 'The Complete SQL Bootcamp 2022: Go from  Zero to Hero',
        instructor: 'Jose Portilla',
        numberOfRating: 133447,
        stars: 4.7,
        price: 455,
        isBestSeller: true
      }
    ]
  }
]

export default coursesDataList