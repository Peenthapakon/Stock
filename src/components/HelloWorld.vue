<template>
  <div class="hello">
    <button @click="calculatePorfolio" class="btn btn-primary">Click</button>
    
    <table class="table ">
          <thead class="table-light">
            <th>DATE</th>
            <th>Valueport portfolio </th>
            <th>profit</th>
            <th>result</th>
          </thead>
          <tbody>
            <tr v-for="(items,i) in portfolioByday" :key="i">
                  <td>{{items.date}}</td>
                  <td>{{items.Mt}}</td>
                  <td>{{items.Mt-initial_wealth}}</td>
                  <td v-if="items.Mt > initial_wealth">

                          <p class="text-success">
                            you get profit
                            </p> 
                  </td>
                  <td v-else>
                    <p class="text-danger">
you get loss
                    </p>
                     
                  </td>
            </tr>
          </tbody>
        </table>  
   
  </div>
</template>

<script>
import axios from "axios";
    let listDate = [
        "5/5/2021",
        "6/5/2021",
        "7/5/2021",
        "10/5/2021",
        "11/5/2021",
        "12/5/2021",
        "13/5/2021",
        "14/5/2021",
        "17/5/2021",
        "18/5/2021",
        "19/5/2021",
        "20/5/2021",
        "21/5/2021",
        "24/5/2021",
        "25/5/2021",
        "27/5/2021",
        "28/5/2021",
        "31/5/2021",
        "1/6/2021",
        "2/6/2021",
        "4/6/2021",
        "7/6/2021",
        "8/6/2021",
        "9/6/2021",
        "10/6/2021",
        "11/6/2021",
        "14/6/2021",
        "15/6/2021",
        "16/6/2021",
        "17/6/2021",
        "18/6/2021",
        "21/6/2021",
        "22/6/2021",
        "23/6/2021",
        "24/6/2021",
        "25/6/2021",
        "28/6/2021",
        "29/6/2021",
        "30/6/2021",
        "1/7/2021",
        "2/7/2021",
        "5/7/2021",
        "6/7/2021",
        "7/7/2021",
        "8/7/2021",
        "9/7/2021",
        "12/7/2021",
        "13/7/2021",
        "14/7/2021",
        "15/7/2021",
        "16/7/2021",
        "19/7/2021",
        "20/7/2021",
        "21/7/2021",
        "22/7/2021",
        "23/7/2021",
        "27/7/2021",
        "29/7/2021",
        "30/7/2021",
        "2/8/2021",
        "3/8/2021",
        "4/8/2021",
        "5/8/2021",
        "6/8/2021",
        "9/8/2021",
        "10/8/2021",
        "11/8/2021",
        "13/8/2021",
        "16/8/2021",
        "17/8/2021",
        "18/8/2021",
        "19/8/2021",
        "20/8/2021",
        "23/8/2021",
        "24/8/2021",
        "25/8/2021",
        "26/8/2021",
        "27/8/2021",
        "30/8/2021",
        "31/8/2021",
        "1/9/2021",
        "2/9/2021",
        "3/9/2021",
        "6/9/2021",
        "7/9/2021",
        "8/9/2021",
        "9/9/2021",
        "10/9/2021",
        "13/9/2021",
        "14/9/2021",
        "15/9/2021",
        "16/9/2021",
        "17/9/2021",
        "20/9/2021",
        "21/9/2021",
        "22/9/2021",
        "23/9/2021",
        "27/9/2021",
        "28/9/2021",
        "29/9/2021",
        "30/9/2021",
        "1/10/2021",
        "4/10/2021"
      ];
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      Data: [],
      DataClean: [],
      mapData:new Map(),
      five_company:[],
      portfolio:new Map(),
      portfolioByday:[],
      initial_wealth:50000
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/blog", {})
      .then((response) => {
        this.Data = (response.data)
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
      // console.log(this.Data)
    
  },

  // computed: {
  //   uniqueDate() {
  //     var uniqueDate = [];
  //     //var data = []
  //     for (var i = 0; i < this.Data.length; i++) {
  //       if (uniqueDate.indexOf(this.Data[i].Date) === -1) {
  //         uniqueDate.push(this.Data[i].Date);
  //       }
  //     }
  //     return uniqueDate;
  //   },
  // },
  methods: {
   saveData() {
    //  for (let i = 0; i < this.Data.length; i++) {
    //       console.log(this.Data[i].Date)
    //  }
    for (let i = 0; i < listDate.length; i++) {
                            //key          //value
         this.mapData.set(listDate[i],this.Data.filter((key) =>{
              if (key.Date === listDate[i]){
                  return true;
              }
         }))
         
    }
    
    },

    fliterDate(){
      this.saveData()
      this.DataClean =(this.mapData)
      // loop select five_company
      for (let i of this.DataClean) {
          for (let j of i[1]) {
            if (j.Date.includes('/9/2021')) {
              if (j.Name.includes('ADVANC') || j.Name.includes('AOT') || j.Name.includes('BBL') ||j.Name.includes('BDMS') || j.Name.includes('BEM') ) {
                    this.five_company.push(j)
              }
            }
          }
      }
    console.log(this.DataClean)
    },
    calculatePorfolio(){
    this.fliterDate()
    
    let cal = []
     let weightPortfolio = [0.2,0.5,0.1,0.1,0.1]
     let Number_Stock = []
    let Price_Stock = [{ //S(i)
      name:'ADVANC',
      Close:186.0
    },
    {
      name:'AOT',
      Close:62.5
    },
    {
      name:'BBL',
      Close:113.5
    },
    {
      name:'BDMS',
      Close:23.2
    },
    {
      name:'BEM',
      Close:8.45
    }
    ,]

    for (let i = 0; i < Price_Stock.length; i++) {
          Number_Stock.push({
            name:Price_Stock[i].name,
            xi:(weightPortfolio[i]*this.initial_wealth)/Price_Stock[i].Close
          })
    }
    
      console.log(Number_Stock)
      let c = 0
      for (let i = 0; i < this.five_company.length; i++) {
            // cal Xi = wi x vo /si
              cal.push({
              date:this.five_company[i].Date,
              name:this.five_company[i].Name,
              valueofport:(Number_Stock[c].xi)*(this.five_company[i].Close)
            })
            c+=1
               if (c==5) {  
                  c=0
            } 
      }
      console.log(cal)
      //  let sumValue = []
   
      for (let i = 0; i < cal.length; i++) {

          this.portfolio.set(cal[i].date,cal.filter((data)=>{
            if (data.date==cal[i].date) {
               return true
            }
          }))
      }
      console.log(this.portfolio)
      this.setM = this.portfolio
      for (let k of  this.setM) {
                        console.log({date:k[0],Mt:[k[1][0].valueofport,k[1][1].valueofport,k[1][2].valueofport,k[1][3].valueofport,k[1][4].valueofport].reduce((a,b)=>a+b)})

            this.portfolioByday.push({date:k[0],Mt:[k[1][0].valueofport,k[1][1].valueofport,k[1][2].valueofport,k[1][3].valueofport,k[1][4].valueofport].reduce((a,b)=>a+b)})
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
