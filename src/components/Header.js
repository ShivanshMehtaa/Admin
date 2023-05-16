import React from 'react'
import {
    Drawer, 
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
 } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from "react-icons/bi"

const Header = () => {

const{isOpen, onOpen, onClose} = useDisclosure()


  return (
    <>
        <Button 
            zIndex={'overlay'}
            pos={"fixed"}
            top={"4"}
            left={"4"}
            colorScheme={"purple"}
            padding={"0"}
            w={"10"}
            h={"10"}
            borderRadius={"full"}
            onClick={onOpen}
        >
            <BiMenuAltLeft size={"20"}/>
        </Button>

        <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
            <DrawerOverlay/>
            <DrawerContent>
                {/* <div>pfnsodsnfno</div> */}
                <DrawerCloseButton/>
                <DrawerHeader>SuperAdmin</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={"flex-start"}>
                        <Button onclick={onClose} variant={"ghost"} colorScheme={"purple"}>
                            <Link to="/">Dashboard</Link>
                        </Button>
                        <Button onclick={onClose} variant={"ghost"} colorScheme={"purple"}>
                            <Link to="/employees">All Employees</Link>
                        </Button>
                        <Button onclick={onClose} variant={"ghost"} colorScheme={"purple"}>
                            <Link to="/users">All Users</Link>
                        </Button>
                        <Button onclick={onClose} variant={"ghost"} colorScheme={"purple"}>
                            <Link to="/applicants">All Applicants</Link>
                        </Button>
                        <Button onclick={onClose} variant={"ghost"} colorScheme={"purple"}>
                            <Link to="/jobs">All Jobs</Link>
                        </Button>
                        <Button onclick={onClose} variant={"ghost"} colorScheme={"purple"}>
                            <Link to="/addjob">Add Jobs</Link>
                        </Button>
                    </VStack>
                    
                    <HStack pos={"absolute"} bottom={"10"} left={'0'} p={"8"} w={"full"} justifyContent={"space-between"} >
                        <Button onclick={onClose} colorScheme={"purple"} >
                            <Link to="/login">Log Out</Link>
                        </Button>
                    </HStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header
