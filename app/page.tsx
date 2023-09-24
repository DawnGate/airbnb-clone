import Button from '@/components/Button'
import Text from '@/components/Text'

function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>

      <Button variant="primary">
        <p>Hello</p>
      </Button>

      <Text fontSize="xl" fontWeight="semibold" letterSpacing="wide">
        Hello What I expected not for this
      </Text>
    </div>
  )
}

export default Page
