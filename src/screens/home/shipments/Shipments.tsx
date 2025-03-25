import React from 'react'
import Layout from '../../../components/shared/Layout'
import { colors } from '../../../theme/themes'
import ShipmentsHeader from './components/ShipmentsHeader'
import ShipmentsActions from './components/ShipmentsActions'
import ShipmentsSection from './components/ShipmentsSection'

const Shipments = () => {
    return (
        <Layout bgColor={colors.white}>
            <ShipmentsHeader />
            <ShipmentsActions />
            <ShipmentsSection />

        </Layout>
    )
}

export default Shipments