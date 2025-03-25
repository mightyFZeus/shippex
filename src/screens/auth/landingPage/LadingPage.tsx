import React from 'react'
import Layout from '../../../components/shared/Layout'
import { colors } from '../../../theme/themes'
import HomeView from '../../../components/lib/HomeView'

const LadingPage = () => {
    return (
        <Layout bgColor={colors.primary} >
            <HomeView />
        </Layout >
    )
}

export default LadingPage