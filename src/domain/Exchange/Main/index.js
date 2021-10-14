import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"

const Exchange = () => {
  const [Data, setData] = useState([])
  const [isRefresh, setRefresh] = useState(false)

  useEffect(() => {
    axios.get('http://api.currencylayer.com/live?access_key=21c01a57d90c8967e6f72065bb32dad2')
    .then(function (response) {
      if(response.data.quotes){
        setData(response.data.quotes)
        setRefresh(false)
      }else{
        setData([])
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  }, [isRefresh])

  
  let dataArr = []
  Object.keys(Data).map(function(exc){
    let choiceExc = "USDCAD USDIDR USDJPY USDCHF USDEUR USDUSD";
    let checkExc = choiceExc.includes(exc); 

    if(checkExc === true){
      let obj = {
        name: exc,
        value: Data[exc]
      };
      dataArr.push(obj)
    } 
  })

  const fnRefresh = () => {
    setRefresh(true)
  };

  return (
    // <span>halo</span>
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          <Th></Th>
          <Th>WE BUY</Th>
          <Th>EXCHANGE RATE</Th>
          <Th>WE SELL</Th>
          <Th style={{color: 'blue'}}><a onClick={() => fnRefresh()}>Refresh</a></Th>
        </Tr>
      </Thead>
      <Tbody>
        
          {dataArr.map((exchange) => (
            <Tr>
              <Td>{exchange.name.substring(3)}</Td>
              <Td>{exchange.value + (5 / 100 * exchange.value)}</Td>
              <Td>{exchange.value}</Td>
              <Td>{exchange.value - (5 / 100 * exchange.value)}</Td>
            </Tr>
          ))}

      </Tbody>
    </Table>
  )
}

export default Exchange
