import { createLazyFileRoute } from '@tanstack/react-router'

const About = (): JSX.Element => (
  <div className="p-2">
    <h3>Hello from About</h3>
  </div>
)

export const Route = createLazyFileRoute('/about' as never)({
  component: About
})
