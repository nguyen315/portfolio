import ProjectItem from '@components/project-item'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

const Projects = () => {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Heading as="h4" size="lg" mb={6}>
          Noteworthy Projects
        </Heading>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={3}>
        <ProjectItem
          title="Money Keeper"
          description="A school project, we build an React Native app to help user manage income & outcome"
          github="https://github.com/nguyen315/MoneyKeeper"
          techs={['React Native', 'MySQL']}
        />
      </SimpleGrid>
    </>
  )
}

export default Projects
