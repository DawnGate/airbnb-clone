FROM node:18-alpine

ENV NODE_ENV development

WORKDIR /next-app

COPY package.json yarn.lock* package-lock.json* ./

RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [-f package-lock.json ]; then npm ci; \
    else echo "Warning: Lockfile not found. It is recommeded to commit lockfiles to version control" && yarn install; \
    fi

COPY . .

CMD \
    if [ -f yarn.lock ]; then yarn dev; \
    elif [ -f package-lock.json ]; then npm run dev; \
    else yarn dev; \
    fi
