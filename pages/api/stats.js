// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fake_clients, fake_stats, salesByCountries, depositList, withdrawList, employeeList } from "../../helpers/dashbordStats";

export default function handler(req, res) {
  console.log(fake_stats);
  const {method} = req;
  switch(method){
    case 'GET':
      try{
        res.status(200).json({result: true, stats: fake_stats, clients: fake_clients, salesByCountries, depositList, withdrawList, employeeList})
      }catch(error){
        res.status(400).json({result: false})
      }
    default:
      res.status(400).json({result:false});
  }
}
