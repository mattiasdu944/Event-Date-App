import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Link from "next/link";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Button, ButtonGroup, Divider, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text, useToast,} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

export const FormLogin = () => {
  const { signInWithCredentials, signInWithGoogle } = useAuth();
  
  const [show, setShow] = useState(false);
  const [login, setlogin] = useState({email: "",password: ""});
  
  const toast = useToast();
  const Toast = (title, description, status) => {
    toast({
      title,
      description,
      status: "error",
      position: "top-right",
      status,
      isClosable: true,
      duration: 3000,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.email.trim() === "" || login.password.trim() === "") {
      Toast("Datos Erroneos", "Datos ingresados de manera incorrecta", "error");
      return;
    }

    if (login.password.trim().length < 8) {
      Toast("Contraseña debil", "Ingrese minimo 8 caracteres", "error");
      return;
    }

    try {
      signInWithCredentials('',login.email, login.password,'login')
    } catch (error) {
      console.log(error)
    }
    


  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl mb={3}>
          <FormLabel>Correo Electronico</FormLabel>

          <Input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            name="email"
            borderColor="whiteAlpha.300"
            focusBorderColor="orange.500"
            _hover={{ focusBorderColor: "orange.200" }}
            value={login.email}
            onChange={(e) => setlogin({ ...login, email: e.target.value })}
          />
        </FormControl>

        <FormLabel>Contraseña</FormLabel>
        <InputGroup size="md" mb={3}>
          <FormControl>
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              borderColor="whiteAlpha.300"
              focusBorderColor="orange.500"
              _hover={{ outline: "orange.200" }}
              value={login.password}
              onChange={(e) => setlogin({ ...login, password: e.target.value })}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="md"
                backgroundColor="transparent"
                _hover={{ backgroundColor: "transparent" }}
                _active={{ backgroundColor: "transparent" }}
                onClick={() => setShow(!show)}
              >
                {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </Button>
            </InputRightElement>
          </FormControl>
        </InputGroup>

        <ButtonGroup display="grid" gap={3}>
          <Button
            backgroundColor="orange.500"
            type="submit"
            _hover={{ backgroundColor: "orange.200" }}
            _active={{ backgroundColor: "orange.500" }}
          >
            Inicar Sesion
          </Button>
          <Button
            backgroundColor="transparent"
            _hover={{ backgroundColor: "transparent" }}
            _active={{ backgroundColor: "transparent" }}
            
          >
            <Link href='/auth/signup'>
              No tienes una cuenta? Registrate
            </Link>
          </Button>
          <Flex alignItems="center">
            <Divider
              m={0}
              orientation="horizontal"
              backgroundColor="whiteAlpha.300"
              borderColor="whiteAlpha.100"
            />
            <Text color="whiteAlpha.300"> o </Text>
            <Divider
              m={0}
              orientation="horizontal"
              backgroundColor="whiteAlpha.300"
              borderColor="whiteAlpha.100"
            />
          </Flex>
          <Button
            gap={3}
            color="black"
            alignItems="center"
            backgroundColor="white.500"
            _hover={{ backgroundColor: "white.500" }}
            _active={{ backgroundColor: "orange.500", color: "white.200" }}
            onClick={signInWithGoogle}
          >
            <FcGoogle/>
            Iniciar con Google
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};
