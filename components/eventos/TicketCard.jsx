import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import { IoTicketOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { formatMoney } from '../../utils/helpers';

export const TicketCard = ({ticket}) => {

    const {precio, descripcion} = ticket;

    return (
        <CardTicket >
            <Box>
                <IoTicketOutline color='#FE6148'/>
            </Box>
            <Box>
                <Text>{descripcion}: {formatMoney(precio) }</Text>
            </Box>

        </CardTicket>
    )
}

const CardTicket = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    border-radius: .75rem;
    gap: 1rem;
    background-color: #00000030;
    margin-bottom: 1rem;

`