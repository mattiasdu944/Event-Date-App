import { useAuth } from "../../hooks";
import { useRouter } from "next/router";
import { ButtonFollow } from "../eventos";
import { useEffect, useState } from "react";
import useFollows from "../../hooks/useFollows";

import { BiMap } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { Avatar, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text, WrapItem} from "@chakra-ui/react";


export const Perfil = ({ perfil }) => {
    const router = useRouter();
    const { user } = useAuth();
    const [ addFollow, deleteFollow ] = useFollows();
    const [isFollower, setIsFollower] = useState(false)

    const verifyFollower = ( data ) => {
        if ( data.email === user.email ) {
            setIsFollower(true)
            return data.id
        } 
    }

    useEffect(() => {
        setIsFollower(false)
        perfil.seguidores.filter( verifyFollower )
    }, [router.query])
    

    const handleFollow = async () => {
        const followData = perfil.seguidores.filter(verifyFollower);

        if( !isFollower ){
            console.log('Agregando')
            await addFollow({
                seguido: perfil.id,
                seguidor: user.id
            });
            setIsFollower(true)
            return;
        }
        await deleteFollow(followData[0].id)
        setIsFollower(false)
    }
    

    return (
        <>
            <Box display='flex' flexDirection='column' >
                <Box display={{ md: 'flex' }} alignItems='center' justifyContent='center' gap='3rem' mb='3rem'>
                    <Box display='flex' alignItems='center' mb={5} justifyContent='center'>
                        <WrapItem rounded='full'>
                            <Avatar size={{ base: 'xl', md: '2xl' }} name={perfil.name} src={perfil.image} />
                        </WrapItem>
                    </Box>

                    <Box textAlign={{ base: 'center', md: 'start' }}>
                        <Text textStyle='h2' fontWeight={700} mb='.5rem'>
                            {perfil.name}
                        </Text>
                        <Text color='gray.300' mb='.5rem'>
                            {perfil.email}
                        </Text>
                        {perfil.descripcion &&
                            <Accordion allowToggle my={2}>
                                <AccordionItem>
                                    <Text>
                                        <AccordionButton px='0' textAlign='center' justifyContent={{base:'center', md:'space-between'}}>
                                            <Box color='gray.300'  px='0'>
                                                Descripcion
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </Text>
                                    <AccordionPanel pb={4} px='0'>
                                        <Text color='gray.300' textAlign='justify' fontSize='.9rem'>
                                            {perfil.descripcion ? perfil.descripcion : 'No hay descripcion de este perfil'}
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        }

                        <Box display='flex' justifyContent={{ base: 'center', md: 'start' }} gap={7} mb={3} color='gray.300'>
                            <Text display='flex' alignItems='center' gap={1}>
                                <BiMap />
                                {perfil.ciudad}
                            </Text>
                            <Text display='flex' alignItems='center' gap={1}>
                                {perfil.telefono && <><BsTelephone /> {perfil.telefono}</>}
                            </Text>
                        </Box>


                        {
                            perfil.id != user.id
                            ?
                                isFollower 
                                ? <ButtonFollow title='Dejar de seguir' funcion={handleFollow}/>
                                : <ButtonFollow title='Seguir' funcion={handleFollow}/>
                            : <ButtonFollow title='Editar Perfil' funcion={handleFollow}/>
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}
