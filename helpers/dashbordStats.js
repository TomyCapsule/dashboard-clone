
const fake_stats = [
    {
      name: "Sales",
      value: 250000,
      icon: '/sales.png'
    },
    {
      name:'Customers',
      value: 12500,
      icon: "/target.png"
    },
    {
      name:"Products",
      value: 1540,
      icon: "/product.png"
    },
    {
      name:"Revenue",
      value:88000,
      icon: "/revenue.png"
    }
  ]
  
  const fake_clients = [
    {
      name: "Zipcar",
      stacks: "Vue JS, React & HTML",
      value:24895,
      icon: "/logo-zipcar.png",
      progress:20,
      color:'blue'
    },
    {
      name:"Bitbank",
      stacks: "Sketch, Figma & XD",
      value:8650,
      icon: "/logo-bitbank.png",
      progress:40,
      color:'yellow'
    },
    {
      name:"Aviato",
      stacks: "HTML & Angular",
      value:1245,
      icon:"/logo-aviato.png",
      progress:80,
      color:'purple'
    }
  ]
  
  const salesByCountries = [
    {
      name:'US',
      total:8656000,
      value:894000,
      trend: true,
      diff:25.8
    },
    {
      name:"UK",
      total:2415000,
      value:645000,
      trend: true,
      diff: 6.2
    },
    {
      name:"India",
      total:865000,
      value:148000,
      trend: false,
      diff: 12.4
    },
    {
      name:"Japan",
      total:745000,
      value:86000,
      trend: true,
      diff: 11.9
    },
    {
      name:"Korea",
      total:45000,
      value:42000,
      trend: false,
      diff: 16.2
    }
  ]

const depositList = [
    {
        name:"Gumroad Account",
        caption: 'Sell UI Kit',
        logo:'/gumroad.png',
        value: 4650
    },
    {
        name:"Mastercard",
        caption: 'Wallet deposit',
        logo:'/mastercard.png',
        value: 92705
    },
    {
        name:"Stripe Account",
        caption: 'iOS application',
        logo:'/stripe.png',
        value: 957
    },
    {
        name:"American Bank",
        caption: 'Bank Transfer',
        logo:'/americanbank.png',
        value: 6837
    },
    {
        name:"Bank Account",
        caption: 'Wallet deposit',
        logo:'/bankaccount.png',
        value: 446
    }
]

const withdrawList = [
    {
        name:"Google Adsense",
        caption:'Paypal deposit',
        logo:'/google.png',
        value:-145
    },
    {
        name:"Github Enterprise",
        caption:'Security & Compliance',
        logo:'/github.png',
        value:-1870
    },
    {
        name:"Upgrade Slack Plan",
        caption:'Debit card deposit',
        logo:'/slack.png',
        value:-450
    },
    {
        name:"Digital Ocean",
        caption:'Cloud hosting',
        logo:'/digitalocean.png',
        value:-540
    },
    {
        name:"AWS Account",
        caption:'Choosing a cloud platform',
        logo:'/aws.png',
        value:-21
    },
]

const employeeList = [
  {
    name:"Sally Quinn",
    role:'Human Resources Assistant',
    mail:'eebsworth2m@sbwire.com',
    date:'09/27/2018',
    salary:19586.23,
    age:27,
    status:"Current"
  },
  {
    name:"Margaret Bowers",
    role:'Nuclear Power Engineer',
    mail:'kocrevy0@thetimes.co.uk',
    date:'09/23/2016',
    salary:23896.35,
    age:61,
    status:"Professional"
  },
  {
    name:"Minnie Roy",
    role:'Environmental Specialist',
    mail:'ediehn6@163.com',
    date:'10/15/2017',
    salary:18991.67,
    age:59,
    status:"Rejected"
  },
  {
    name:"Ralph Leonard",
    role:'Sales Representative',
    mail:'dfalloona@ifeng.com',
    date:'06/12/2018',
    salary:19252.12,
    age:30,
    status:"Resigned"
  },
  {
    name:"Annie Martin",
    role:'Operator',
    mail:'sganderton2@tuttocitta.it',
    date:'03/24/2018',
    salary:13076.28,
    age:66,
    status:"Applied"
  },
  {
    name:"Adeline Day",
    role:'Senior Cost Accountant',
    mail:'hnisius4@gnu.org',
    date:'08/25/2017',
    salary:10909.52,
    age:33,
    status:"Professional"
  },
  {
    name:"Lora Jackson",
    role:'Geologist',
    mail:'ghoneywood5@narod.ru',
    date:'06/01/2017',
    salary:17803.80,
    age:61,
    status:"Current"
  },
  {
    name:"Rodney Sharp",
    role:'Cost Accountant',
    mail:'dcrossman3@google.co.jp',
    date:'12/03/2017',
    salary:12336.17,
    age:22,
    status:"Professional"
  },

]

export {fake_clients, fake_stats, salesByCountries, withdrawList, depositList, employeeList};