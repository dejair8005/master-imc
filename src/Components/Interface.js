import React from 'react'
import { Text, TextInput } from 'react-native'

import Button from './Button';


export default props => {
        return (
            <>   
                <TextInput
                    placeholder="Digite sua altura ex: 1.80"
                    value={altura}
                />
                <Text>{altura}</Text>
                <TextInput
                    placeholder="Digite seu peso ex: 63.0"
                />
                <Button/>
            </>
        )
}