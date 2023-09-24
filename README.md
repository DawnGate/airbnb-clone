# Introduce

My name is lam, the owner of this project.
contact with me: lam99quyen@gmail.com

This project is like the name: try another version simpler of air bnb

# Tech stacks

Base on Nextjs for implement a server side rendering + client side rendering.

Using graphql and apollo for management server data

For state management: using redux, context.

zod + react hook form for validate form data

components: create my own components

system design base on airbnb information about visual system design

device: support web (mobile, tablet and desktop)

using sass for styling

# Docker

## dev

```
    docker network create my_network
    docker compose -f docker-compose.dev.yml build
    docker compose -f docker-compose.dev.yml up
```

## prod

```
    docker network create my_network
    docker compose -f docker-compose.prod.yml build
    docker compose -f docker-compose.prod.yml up -d
```

## useful commands

```
# Stop all running containers
docker kill $(docker ps -aq) && docker rm $(docker ps -aq)

# Free space
docker system prune -af --volumes
```

# Others
