import { BugButton } from "app/providers/ErrorBoundary"
import { Counter } from "entities/Counter"

const IndexPage = () => {
    return (
        <div>
            <BugButton />
            <Counter />
        </div>
    )
}

export default IndexPage