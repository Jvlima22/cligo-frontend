import React, { forwardRef, Fragment, LegacyRef } from "react";
import { View, TextInput, Text, TextInputProps, TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome, Octicons} from '@expo/vector-icons'
import { themes } from "../../../global/themes";
import { StyleSheet } from "react-native";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,
    IconColor?: 'gray' | 'white' 
}

export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput> | null) => {
    const { IconLeft, IconRight, IconLeftName, IconRightName, title, onIconLeftPress, onIconRightPress, IconColor = 'gray', ...rest } = Props;

    const calculatedSizeWidth = () => {
        if (IconLeft && IconRight) {
            return '80%';
        } else if (IconLeft || IconRight) {
            return '90%';
        } else {
            return '100%';
        }
    };

    const calculatedSizePaddingLeft = () => {
        if (IconLeft && IconRight) {
            return 10;
        } else if (IconLeft || IconRight) {
            return 10;
        } else {
            return 20;
        }
    };

    // Define a cor do ícone com base na prop `iconColor`
    const iconColorValue = IconColor === 'white' ? themes.colors.white : themes.colors.gray;

    return (
        <Fragment>
            {title && <Text style={style.titleInput}>{title}</Text>}
            <View style={[style.boxInput, { paddingLeft: calculatedSizePaddingLeft() }]}>
                {IconLeft && IconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                        <IconLeft name={IconLeftName as any} size={20} color={iconColorValue} style={style.Icon} />
                    </TouchableOpacity>
                )}
                <TextInput
                    style={[style.input, { width: calculatedSizeWidth(), backgroundColor: 'white' }]} // Adicionando fundo branco
                    {...rest}
                />
                {IconRight && IconRightName && (
                    <TouchableOpacity onPress={onIconRightPress} style={style.Button}>
                        <IconRight name={IconRightName as any} size={20} color={iconColorValue} style={style.Icon} />
                    </TouchableOpacity>
                )}
            </View>
        </Fragment>
    );
});

export const style = StyleSheet.create({
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderColor: themes.colors.lightGray,
    },
    input: {
        height: '100%',
        width: '90%',
        borderRadius: 20,
    },
    titleInput: {
        marginLeft: 5,
        marginTop: 20
    },
    Icon: {
        width: '100%'
    },
    Button:{
        width: '10%'
    }
})
