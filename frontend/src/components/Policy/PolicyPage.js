import Policy from "./Policy"
import { gql, useQuery } from "@apollo/client"

const GET_PAGE = gql`
    query NewQuery {
        pages(where: {id: 15844}) {
            edges {
                node {
                content
                title
                }
            }
        }
    }
`

const PolicyPage = () => {
    
    const { loading, error, data } = useQuery(GET_PAGE)

    return <Policy data={data?.pages.edges[0]} loading={loading} error={error} />
}

export default PolicyPage