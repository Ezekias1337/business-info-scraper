import { createLazyFileRoute } from '@tanstack/react-router'

const Index = (): JSX.Element => (
  <div className="p-2">
    <h3>Welcome Home!</h3>
  </div>
)

export const Route = createLazyFileRoute('/' as never)({
  component: Index
})
