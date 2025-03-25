import React from 'react'
import Layout from '../../../components/shared/Layout'
import GlobalView from '../../../components/shared/GlobalView'
import LoginHeader from './components/LoginHeader'
import { globalStyles } from '../../../styles/globalStyles'
import LoginForm from './components/LoginForm'
import { colors } from '../../../theme/themes'

const Login = () => {
    return (
        <Layout bgColor={colors.white}>
            <GlobalView style={[globalStyles.py2,]}>
                <LoginHeader />
                <LoginForm />
            </GlobalView>
        </Layout>
    )
}

export default Login