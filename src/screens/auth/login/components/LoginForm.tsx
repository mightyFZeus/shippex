import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Input from '../../../../components/shared/Input';
import { globalStyles, height } from '../../../../styles/globalStyles';
import Button from '../../../../components/shared/Button';
import { useLogin } from '../hooks/useLogin';
import { EMAIL, PASSWORD } from '../../../../constants/constants';

const LoginForm = () => {
    const { Controller, control, errors, onSubmit, isValid } = useLogin();
    return (
        <View style={[globalStyles.mt4, { height: height / 1.5 }]}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Username / Email"
                        error={!!errors[EMAIL]}
                        errorText={errors[EMAIL]?.message}
                        keyboardType="email-address"
                    />
                )}
                name={EMAIL}
            />
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Password"
                        error={!!errors[PASSWORD]}
                        errorText={errors[PASSWORD]?.message}
                        style={[globalStyles.mt15]}
                    />
                )}
                name={PASSWORD}
            />
            {/* <Input placeholder='URL' /> */}
            {/* <Input style={[globalStyles.mt15]} placeholder='Password' /> */}

            <Button
                onPress={onSubmit}
                style={[globalStyles.bottom3, globalStyles.absolute]}
                variant={isValid ? 'primary' : 'disabled'}
                disabled={!isValid}>
                Login
            </Button>
        </View>
    );
};

export default LoginForm;
