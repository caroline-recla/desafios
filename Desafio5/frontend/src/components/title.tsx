import { Text, ITextProps } from 'native-base';
import { ReactNode } from 'react';

interface TitleProps extends ITextProps{
    children:ReactNode
}

export function Title({ children, ...rest } : TitleProps) {
    return (
        <Text
            fontSize="3xl"
            fontWeight="bold"
            color="white"
            textAlign="center"
            mt={5}
            {...rest}
            >
            {children}
        </Text>
    )
}