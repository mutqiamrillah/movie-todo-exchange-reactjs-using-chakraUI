import React from "react";
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getMovie } from "action/movie"
import { VStack, Text, Box, Image, Wrap, WrapItem, Center, Badge } from "@chakra-ui/react"
import { Link } from "react-router-dom"


function Movie({ movieList }) {
  const [Movies, setMovie] = useState(movieList)
  console.log('Movie asd',Movies)

  useEffect(() => {
    setMovie(movieList)
  }, [movieList])


  return (
    <>
      <Text 
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        marginBottom="5"
        fontSize="5xl"
        fontWeight="extrabold"
        p="20px"
        textAlign="center"
        >
          PILIH FILM FAVORIT KAMU
        </Text>
      <Wrap spacing="30px" justify="center">
        {Movies.map((mov) => (
          <WrapItem>
            <Box w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={mov.Poster} alt="" />
              
              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    {mov.Type} 
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {mov.Year}
                  </Box>
                </Box>
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {mov.Title}
                </Box>
              </Box>
            </Box>
          </WrapItem>
        ))}
        {/* <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem> */}
      </Wrap>
    </>
  )
}

const HomeMain = () => {
  const movieList = useSelector((state) => state.movie)
  console.log('movieList ',movieList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovie())
  }, [dispatch])

  return <Movie movieList={movieList} />
}

export default HomeMain
