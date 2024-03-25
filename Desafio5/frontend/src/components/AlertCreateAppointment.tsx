import React, { useState } from "react";
import {
  Alert,
  Text,
  VStack,
  HStack,
  IconButton,
  CloseIcon,
} from "native-base";

interface AlertCreateAppointment {
  message: string;
}

const AlertCreateAppointment: React.FC<AlertCreateAppointment> = ({
  message,
}) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <VStack space={3} w="100%" maxW="400">
      {show && (
        <Alert status="sucess">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} justifyContent="space-between">
              <HStack space={2} flexShrink={1}>
                <Alert.Icon mt="1" />
                <Text fontSize="md" color="green">
                  {message}
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                _focus={{ borderWidth: 0 }}
                icon={<CloseIcon size="3" />}
                _icon={{ color: "coolGray.600" }}
                onPress={handleClose}
              />
            </HStack>
          </VStack>
        </Alert>
      )}
    </VStack>
  );
};

export default AlertCreateAppointment;
