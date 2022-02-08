import GA from './GoogleAnalytics'
// import Plausible from './Plausible'
// import SimpleAnalytics from './SimpleAnalytics'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
    return (
        <>
            {/* <Plausible />
            <SimpleAnalytics /> */}
            <GA />
        </>
    )
}

export default Analytics
